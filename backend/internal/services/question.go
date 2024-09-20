package services

import (
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/repositories"
)

type IQuestionService interface {
	CreateQuestion(question domains.Question) (*domains.Question, error)
	GetQuestionById(id uint) (*domains.Question, error)
	GetQuestionByPortalId(id uint) ([]domains.Question, error)
	UpdateQuestion(question domains.Question) (*domains.Question, error)
	DeleteQuestionById(id uint) error
}

type questionService struct {
	questionRepo repositories.IQuestionRepository
}

func NewQuestionService(questionRepo repositories.IQuestionRepository) IQuestionService {
	return &questionService{
		questionRepo: questionRepo,
	}
}

func (q questionService) CreateQuestion(question domains.Question) (*domains.Question, error) {
	response, err := q.questionRepo.Create(question)
	if err != nil {
		return nil, err
	}

	return response, nil
}

func (q questionService) GetQuestionById(id uint) (*domains.Question, error) {
	question, err := q.questionRepo.GetById(id)
	if err != nil {
		return nil, err
	}

	return question, nil
}

func (q questionService) GetQuestionByPortalId(id uint) ([]domains.Question, error) {
	question, err := q.questionRepo.GetByPortalId(id)
	if err != nil {
		return nil, err
	}

	return question, nil
}

func (q questionService) UpdateQuestion(question domains.Question) (*domains.Question, error) {
	err := q.questionRepo.Update(question)
	if err != nil {
		return nil, err
	}

	response, err := q.questionRepo.GetById(question.ID)
	if err != nil {
		return nil, err
	}

	return response, nil
}

func (q questionService) DeleteQuestionById(id uint) error {
	err := q.questionRepo.DeleteById(id)
	if err != nil {
		return err
	}

	return nil
}
