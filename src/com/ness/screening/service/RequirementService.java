package com.ness.screening.service;

import java.util.List;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.entity.JobRequirements;
import com.ness.screening.entity.Vendor;

public interface RequirementService {

	public void save(JobRequirements jobReq) throws ApplicationException;
	public void update(JobRequirements jobReq) throws ApplicationException;
	public List<JobRequirements> getAllJobReq() throws ApplicationException;
	public JobRequirements getJobRequirementById(Integer idReq) throws ApplicationException;
	public void deleteJobRequirements(JobRequirements jobReq) throws ApplicationException;
}
