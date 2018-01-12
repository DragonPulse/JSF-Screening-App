package com.ness.screening.service;

import java.util.List;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.DocumentsDetails;

public interface CandidateService {

	public void save(Candidate candidate) throws ApplicationException;
	public void update(Candidate candidate) throws ApplicationException;
	public List<Candidate> getAllCandidates() throws ApplicationException;
	public Candidate getCandidate(Integer idCandidate) throws ApplicationException;
	public void deleteCandidate(Integer idCandidate) throws ApplicationException,Exception;
	
	public List<Candidate> getAllMyCandidates(Integer userID)throws ApplicationException,Exception;
	
	public List<DocumentsDetails> getDocumentsOfCandidate(Integer candidateId) throws ApplicationException;
	
	public Candidate getCandidateById(Integer candidateId) throws ApplicationException;
}
