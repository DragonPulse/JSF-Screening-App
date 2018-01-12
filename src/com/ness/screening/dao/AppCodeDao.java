package com.ness.screening.dao;

import java.util.List;

import com.ness.screening.commons.dataaccess.dao.BaseDao;
import com.ness.screening.entity.AppCode;


public interface AppCodeDao extends BaseDao {
	
	public List<AppCode> findAllAppCodes(List<String> codeTypes) throws Exception;
	
	public AppCode findByAppCodeId(Integer Id) throws Exception;

	public void saveAppCode(AppCode appCode) throws Exception;
	
	public void deleteAppCode(AppCode appCode) throws Exception;
	
	public List<String> getAllAppCodes(String category) throws Exception;

}
