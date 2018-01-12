package com.ness.screening.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Restrictions;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.dao.impl.BaseDaoImpl;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.constants.TechScreenConstants;
import com.ness.screening.dao.RequirementDao;
import com.ness.screening.entity.JobRequirements;
import com.ness.screening.entity.Vendor;


@Transactional
public class RequirementDaoImpl extends BaseDaoImpl implements RequirementDao{

	@Override
	public void save(JobRequirements jobReq) throws DataOperationException {
		// TODO Auto-generated method stub
		saveUpdateObject(jobReq);
		
	}

	@Override
	public void update(JobRequirements jobReq) throws DataOperationException {
		// TODO Auto-generated method stub
		merge(jobReq);	
	}

	@Override
	public List<JobRequirements> getAllJobReq() throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(JobRequirements.class);
		criteria.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
		return (List<JobRequirements>)criteria.list();
	}

	@Override
	public JobRequirements getJobRequirementById(Integer idJobReq) throws DataOperationException {
		// TODO Auto-generated method stub
		Criteria criteria = getCurrentSession().createCriteria(JobRequirements.class);
		criteria.add(Restrictions.idEq(idJobReq));
		return (JobRequirements) criteria.uniqueResult();
	}

	
	@Override
	public void deleteJobRequirements(JobRequirements jobReq) throws DataOperationException {
		// TODO Auto-generated method stub
		
	}

	

}
