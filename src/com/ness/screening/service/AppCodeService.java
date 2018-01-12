package com.ness.screening.service;

import java.util.List;

import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.entity.AppCode;



public interface AppCodeService {

	public List<AppCode> getAllAppCodes(List<String> codeType) throws Exception;
	
	public List<AppCode> getAllAppCodes() throws Exception;
	
	public void saveAppCode(AppCode appCode) throws DataOperationException, Exception;

	public void deleteAppCode(AppCode appCode) throws DataOperationException, Exception;
	
	public AppCode findByAppCodeId(Integer id) throws Exception;

	void updateAppCode(AppCode appCode) throws DataOperationException,Exception;
	
	
	void deleteAppCode(Integer idAppCode) throws DataOperationException,Exception;
	
	public List<String> getAllAppCodes(String category) throws Exception;
}







