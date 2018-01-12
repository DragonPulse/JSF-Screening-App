package com.ness.screening.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.dao.RequirementDao;
import com.ness.screening.entity.JobRequirements;
import com.ness.screening.entity.Vendor;
import com.ness.screening.service.RequirementService;

@Transactional
public class RequirementServiceImpl implements RequirementService{
	@Autowired
	private RequirementDao requirementDao;

	@Override
	public void save(JobRequirements jobReq) throws ApplicationException {
		// TODO Auto-generated method stub
		try{
			requirementDao.save(jobReq);
		}catch(DataOperationException e){
			throw new ApplicationException(e);
		}
	}

	@Override
	public void update(JobRequirements jobReq) throws ApplicationException {
		// TODO Auto-generated method stub
		requirementDao.update(jobReq);
	}

	@Override
	public List<JobRequirements> getAllJobReq() throws ApplicationException {
		// TODO Auto-generated method stub
		return requirementDao.getAllJobReq();
	}

	@Override
	public JobRequirements getJobRequirementById(Integer idJobReq) throws ApplicationException {
		// TODO Auto-generated method stub
		return requirementDao.getJobRequirementById(idJobReq);
	}

	
	@Override
	public void deleteJobRequirements(JobRequirements jobReq) throws ApplicationException {
		// TODO Auto-generated method stub
		requirementDao.deleteJobRequirements(jobReq);
	}

	public RequirementDao getRequirementDao() {
		return requirementDao;
	}

	public void setRequirementDao(RequirementDao requirementDao) {
		this.requirementDao = requirementDao;
	}

	

	
	
	
	

}
