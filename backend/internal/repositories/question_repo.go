package repositories

import (
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"gorm.io/gorm"
)

type IQuestionRepository interface {
	Create(question domains.Question) (*domains.Question, error)
	GetById(id uint) (*domains.Question, error)
	GetByPortalId(id uint) ([]domains.Question, error)
	Update(question domains.Question) error
	DeleteById(id uint) error
}

type questionRepository struct {
	DB gorm.DB
}

func NewQuestionRepository(db gorm.DB) IQuestionRepository {
	return &questionRepository{
		DB: db,
	}
}

func (q questionRepository) Create(question domains.Question) (*domains.Question, error) {
	if err := q.DB.Create(&question).Error; err != nil { // Do we need .Clauses(clause.Returning{}) here???
		return nil, err
	}

	return &question, nil
}

func (q questionRepository) GetById(id uint) (*domains.Question, error) {
	question := domains.Question{}
	if err := q.DB.First(&question, "id = ?", id).Error; err != nil {
		return nil, err
	}

	return &question, nil
}

func (q questionRepository) GetByPortalId(id uint) ([]domains.Question, error) {
	var question []domains.Question
	if err := q.DB.Find(&question, "portal_id = ?", id).Error; err != nil {
		return nil, err
	}

	return question, nil
}

func (q questionRepository) Update(question domains.Question) error {
	if err := q.DB.Updates(&question).Error; err != nil {
		return err
	}

	return nil
}

func (q questionRepository) DeleteById(id uint) error {
	if err := q.DB.Delete(&domains.Question{}, "id = ?", id).Error; err != nil {
		return err
	}

	return nil
}
