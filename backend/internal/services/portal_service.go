package services

import (
	"strings"

	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/domains"
	"csgit.sit.kmutt.ac.th/interv/interv-platform/internal/repositories"
)

type IPortalService interface {
	GetPortalById(id uint) (portal *domains.Portal, err error)
	GetPortalByName(companyName string) (portal *domains.Portal, err error)
	Create(companyName string) (portal *domains.Portal, err error)
	Delete(id uint) (err error)
}

type portalService struct {
	portalRepository repositories.IPortalRepository
}

func NewPortalService(portalRepository repositories.IPortalRepository) IPortalService {
	return &portalService{
		portalRepository: portalRepository,
	}
}

func (p *portalService) GetPortalById(id uint) (portal *domains.Portal, err error) {
	portal, err = p.portalRepository.FindById(id)
	if err != nil {
		return nil, err
	}
	return portal, nil
}

func (p *portalService) GetPortalByName(companyName string) (portal *domains.Portal, err error) {
	portal, err = p.portalRepository.FindByTitle(companyName)
	if err != nil {
		return nil, err
	}
	return portal, nil
}

func (p *portalService) Create(companyName string) (portal *domains.Portal, err error) {

	if _, err := p.portalRepository.FindByTitle(strings.TrimSpace(companyName)); err == nil {
		return nil, ErrorWorkspaceExists
	}

	return p.portalRepository.Create(domains.Portal{
		CompanyName: companyName,
	})
}

func (p *portalService) Delete(id uint) (err error) {
	return p.portalRepository.DeleteById(id)
}

