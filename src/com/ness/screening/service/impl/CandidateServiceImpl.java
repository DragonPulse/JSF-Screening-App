package com.ness.screening.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.dao.CandidateDao;
import com.ness.screening.dao.UserDao;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.DocumentsDetails;
import com.ness.screening.entity.User;
import com.ness.screening.service.CandidateService;
import com.ness.screening.service.UserService;
import com.ness.screening.util.DaoRegistry;

@Transactional
public class CandidateServiceImpl implements CandidateService{
	@Autowired
	private CandidateDao candidateDao;

	@Override
	public void save(Candidate candidate) throws ApplicationException {
		// TODO Auto-generated method stub
		try{
			/*if(candidate.getDocuments()!=null && candidate.getDocuments().size()>0){
				for (DocumentsDetails document : candidate.getDocuments()) {
					candidateDao.saveDocumentsOfCandidate(document);
				}
			}*/
			candidateDao.save(candidate);
		}catch(Exception e){
			throw new ApplicationException(e);
		}
	}

	@Override
	public void update(Candidate candidate) throws ApplicationException {
		// TODO Auto-generated method stub
		candidateDao.update(candidate);
	}

	@Override
	public List<Candidate> getAllCandidates() throws ApplicationException {
		// TODO Auto-generated method stub
		return candidateDao.getAllCandidates();
	}

	@Override
	public Candidate getCandidate(Integer idCandidate)
			throws ApplicationException {
		return candidateDao.getCandidate(idCandidate);
	}

	@Override
	public void deleteCandidate(Integer idCandidate)
			throws ApplicationException, Exception {
		
	}

	@Override
	public List<Candidate> getAllMyCandidates(Integer userID)
			throws ApplicationException, Exception {
		// TODO Auto-generated method stub
		return candidateDao.getAllMyCandidates(userID);
	}

	public CandidateDao getCandidateDao() {
		return candidateDao;
	}

	public void setCandidateDao(CandidateDao candidateDao) {
		this.candidateDao = candidateDao;
	}

	@Override
	public List<DocumentsDetails> getDocumentsOfCandidate(Integer candidateId)
			throws ApplicationException {
		// TODO Auto-generated method stub
		return candidateDao.getDocumentsOfCandidate(candidateId);
	}

	@Override
	public Candidate getCandidateById(Integer candidateId)
			throws ApplicationException {
		// TODO Auto-generated method stub
		return candidateDao.getCandidateById(candidateId);
	}

	
	
	
	

}
