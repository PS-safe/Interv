package repositories

import (
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"gorm.io/gorm"
)

type codingInterviewRepository struct {
	DB gorm.DB
}

func NewCodingInterviewRepository(db gorm.DB) ICodingInterviewRepository {
	return &codingInterviewRepository{
		DB: db,
	}
}

// TODO: Add lobbyId to filter coding question by lobby
func (c *codingInterviewRepository) GetCodingQuestionList() ([]domains.CodingQuestionResponse, error) {
	var codingQuestions []domains.CodingQuestion

	if err := c.DB.Find(&codingQuestions).Error; err != nil {
		return nil, err
	}

	var codingQuestionResponses []domains.CodingQuestionResponse
	for _, codingQuestion := range codingQuestions {
		codingQuestionResponses = append(codingQuestionResponses, domains.CodingQuestionResponse{
			Id:          codingQuestion.Id,
			Title:       codingQuestion.Title,
			Description: codingQuestion.Description,
			TestCase:    codingQuestion.TestCases,
		})
	}

	return codingQuestionResponses, nil
}

func (c *codingInterviewRepository) GetCodingQuestionByID(id int) (domains.CodingQuestion, error) {
	var codingQuestion domains.CodingQuestion

	if err := c.DB.First(&codingQuestion, "id = ?", id).Error; err != nil {
		return domains.CodingQuestion{}, err
	}
	return codingQuestion, nil
}

func (c *codingInterviewRepository) GetCodingQuestionTestcaseByID(questionId int) (domains.CodingQuestionTestCase, error) {
	var codingQuestionTestCase domains.CodingQuestionTestCase

	if err := c.DB.First(&codingQuestionTestCase, "question_id = ?", questionId).Error; err != nil {
		return domains.CodingQuestionTestCase{}, err
	}
	return codingQuestionTestCase, nil
}

func (c *codingInterviewRepository) SaveCodingQuestion(question domains.CodingQuestion) (domains.CodingQuestion, error) {
	if err := c.DB.Create(&question).Error; err != nil {
		return domains.CodingQuestion{}, err
	}
	return question, nil
}
