package com.ness.screening.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.dao.impl.BaseDaoImpl;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.constants.TechScreenConstants;
import com.ness.screening.dao.CandidateDao;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.DocumentsDetails;


@Transactional
public class CandidateDaoImpl extends BaseDaoImpl implements CandidateDao{

	@Override
	public void save(Candidate candidate) throws DataOperationException {
		// TODO Auto-generated method stub
		saveUpdateObject(candidate);
	}

	@Override
	public void update(Candidate candidate) throws DataOperationException {
		// TODO Auto-generated method stub
		saveUpdateObject(candidate);
	}

	@Override
	public List<Candidate> getAllCandidates() throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(Candidate.class);
		return (List<Candidate>)criteria.list();
	}

	@Override
	public Candidate getCandidate(Integer idCandidate) throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(Candidate.class);
		criteria.add(Restrictions.idEq(idCandidate));
		return (Candidate) criteria.uniqueResult();
	}

	@Override
	public Candidate getCandidateByName(String firstName, String lastName)
			throws DataOperationException {
		Criteria criteria = getCurrentSession().createCriteria(Candidate.class);
		criteria.add(Restrictions.ilike(TechScreenConstants.COLUMN_USER_FIRST_NAME, firstName));
		criteria.add(Restrictions.ilike(TechScreenConstants.COLUMN_USER_LAST_NAME,lastName));
		return (Candidate)criteria.uniqueResult();
	}

	

	@Override
	public void deleteCandidate(Candidate candidate) throws DataOperationException {
		// TODO Auto-generated method stub
		deleteObject(candidate);
	}


	@Override
	public List<Candidate> getAllMyCandidates(Integer userId)
			throws DataOperationException {
		// TODO Auto-generated method stub
		try{
			Criteria criteria = getCurrentSession().createCriteria(Candidate.class);
			criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
			criteria.add(Restrictions.eq("candidateHandeledBy.userId", userId));
			return (List<Candidate>)criteria.list();
		}catch(HibernateException he){
			he.printStackTrace();
		}
		return new ArrayList<Candidate>();
	}

	@Override
	public void saveDocumentsOfCandidate(DocumentsDetails documentsDetails)
			throws DataOperationException {
		saveUpdateObject(documentsDetails);
		
	}

	@Override
	public List<DocumentsDetails> getDocumentsOfCandidate(Integer candidateId)
			throws DataOperationException {
		// TODO Auto-generated method stub
		try{
			Criteria criteria = getCurrentSession().createCriteria(DocumentsDetails.class);
			criteria.add(Restrictions.eq("candidate.candidateId", candidateId));
			return (List<DocumentsDetails>)criteria.list();
		}catch(HibernateException ex){
			ex.printStackTrace();
		}
		return new ArrayList<DocumentsDetails>();
		
	}

	@Override
	public Candidate getCandidateById(Integer candidateId)
			throws DataOperationException {
		// TODO Auto-generated method stub
		return null;
	}
		
	
	

}
