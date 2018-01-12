package com.ness.screening.dao;

import java.util.List;

import com.ness.screening.commons.dataaccess.dao.BaseDao;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.entity.JobRequirements;
import com.ness.screening.entity.Vendor;



public interface RequirementDao extends BaseDao{
	public void save(JobRequirements jobReq) throws DataOperationException;
	public void update(JobRequirements jobReq) throws DataOperationException;
	public List<JobRequirements> getAllJobReq() throws DataOperationException;
	public JobRequirements getJobRequirementById(Integer idReq) throws DataOperationException;
	public void deleteJobRequirements(JobRequirements jobReq) throws DataOperationException;
	
}
