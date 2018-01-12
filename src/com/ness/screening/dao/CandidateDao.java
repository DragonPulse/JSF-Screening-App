package com.ness.screening.dao;

import java.util.List;

import com.ness.screening.commons.dataaccess.dao.BaseDao;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.DocumentsDetails;



public interface CandidateDao extends BaseDao{
	
	public void save(Candidate candidate) throws DataOperationException;
	public void update(Candidate candidate) throws DataOperationException;
	public List<Candidate> getAllCandidates() throws DataOperationException;
	public Candidate getCandidate(Integer idCandidate) throws DataOperationException;
	public Candidate getCandidateByName(String firstName,String lastName) throws DataOperationException;
	public void deleteCandidate(Candidate candidate) throws DataOperationException;
	
	public List<Candidate> getAllMyCandidates(Integer userID)throws DataOperationException;
	
	public void  saveDocumentsOfCandidate(DocumentsDetails docsList) throws DataOperationException;
	
	public List<DocumentsDetails> getDocumentsOfCandidate(Integer candidateId) throws DataOperationException;
	
	public Candidate getCandidateById(Integer candidateId) throws DataOperationException;
}
