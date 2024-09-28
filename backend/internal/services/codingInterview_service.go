package services

import (
	"strings"
	"time"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/repositories"
)

type codingInterviewService struct {
	codeCompilationRepository repositories.ICompilationRepository
	codingInterviewRepository repositories.ICodingInterviewRepository
}

func NewCodingInterviewService(codeCompilationRepository repositories.ICompilationRepository, codingInterviewRepository repositories.ICodingInterviewRepository) ICodingInterviewService {

	return &codingInterviewService{
		codeCompilationRepository: codeCompilationRepository,
		codingInterviewRepository: codingInterviewRepository,
	}
}

// TODO: Add lobbyId to filter coding question by lobby
func (s *codingInterviewService) GetCodingInterviewQuestions() ([]domains.CodingQuestionResponse, error) {
	questions, err := s.codingInterviewRepository.GetCodingQuestionList()
	if err != nil {
		return []domains.CodingQuestionResponse{}, ErrorGetCodingInterviewQuestions
	}
	return questions, nil
}

func (s *codingInterviewService) GenerateCompileToken(req domains.CompilationRequest) (string, error) {
	token, err := s.codeCompilationRepository.GenerateCompileToken(req, "")
	if err != nil {
		return "", ErrorGetCompileToken
	}
	return token.Token, nil
}

func (s *codingInterviewService) GetCompileResult(req domains.CompilationRequest) ([]domains.CompilationResultResponse, error) {
	var compileResult []domains.CompilationResultResponse
	testCases, err := s.codingInterviewRepository.GetCodingQuestionTestcaseByQuestionID(int(req.QuestionID))
	if err != nil {
		return []domains.CompilationResultResponse{}, ErrorGetCodingInterviewTestcase
	}
	for _, testCase := range testCases {
		input := strings.TrimRight(testCase.Input, "\n")
		output := testCase.Output
		token, err := s.codeCompilationRepository.GenerateCompileToken(req, input)
		if err != nil {
			return []domains.CompilationResultResponse{}, ErrorGetCompileToken
		}
		var result domains.CompilationCompileResult
		startTime := time.Now()
		for time.Since(startTime) < 20*time.Second {
			res, err := s.codeCompilationRepository.GetCompileResult(token.Token)
			if err != nil {
				return []domains.CompilationResultResponse{}, ErrorGetCompileResult
			}

			if res.Status.Description == "Accepted" {
				result = res
			}

			if res.Status.Description != "Processing" && res.Status.Description != "In Queue" {
				break
			}

			time.Sleep(500 * time.Millisecond)
		}
		if strings.TrimRight(result.Stdout, "\n") == strings.TrimRight(output, "\n") {
			compileResult = append(compileResult, domains.CompilationResultResponse{
				TestcaseId:    int(testCase.ID),
				IsPassed:      true,
				CompileResult: result,
			})
		} else {
			compileResult = append(compileResult, domains.CompilationResultResponse{
				TestcaseId:    int(testCase.ID),
				IsPassed:      false,
				CompileResult: result,
			})
		}
	}
	return compileResult, nil
}

func (s *codingInterviewService) CreateCodingQuestion(req domains.CodingQuestion) (domains.CreateCodingQuestionResponse, error) {
	_, err := s.codingInterviewRepository.SaveCodingQuestion(req)
	if err != nil {
		return domains.CreateCodingQuestionResponse{}, ErrorCreateCodingQuestion
	}
	return domains.CreateCodingQuestionResponse{
		Status:  "success",
		Message: "Coding question created successfully",
	}, nil
}

func (*codingInterviewService) SaveCodingSnapshot(code string) (string, error) {
	panic("unimplemented")
}
