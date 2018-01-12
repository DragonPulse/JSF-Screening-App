package com.ness.screening.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.dao.AppCodeDao;
import com.ness.screening.dao.CandidateDao;
import com.ness.screening.entity.AppCode;
import com.ness.screening.service.AppCodeService;
import com.ness.screening.util.DaoRegistry;

@Transactional
public class AppCodeServiceImpl  implements AppCodeService{

	@Autowired
	private AppCodeDao appCodeDao;
	
	@Override
	public List<AppCode> getAllAppCodes(List<String> codeTypes) throws Exception {
		// TODO Auto-generated method stub
		return appCodeDao.findAllAppCodes(codeTypes);
	}

	@Override
	public List<AppCode> getAllAppCodes() throws Exception {
		// TODO Auto-generated method stub
		return appCodeDao.findAllAppCodes(new ArrayList<String>());
	}

	@Override
	public void updateAppCode(AppCode appCodeVO) throws DataOperationException,Exception {
		AppCode existingAppCode=appCodeDao.findByAppCodeId(appCodeVO.getIdAppcode());
		if(existingAppCode!=null){
			existingAppCode.setCategory(appCodeVO.getCategory());
			existingAppCode.setDescription(appCodeVO.getDescription());
			existingAppCode.setName(appCodeVO.getName());
			existingAppCode.setShortCode(appCodeVO.getShortCode());
			existingAppCode.setStatus(appCodeVO.getStatus());
			appCodeDao.saveAppCode(existingAppCode);
		}		
	}

	@Override
	public void deleteAppCode(AppCode appCode) throws DataOperationException,
			Exception {
		appCodeDao.deleteAppCode(appCode);
		
	}

	@Override
	public AppCode findByAppCodeId(Integer id) throws Exception {
		// TODO Auto-generated method stub
		return appCodeDao.findByAppCodeId(id);
	}

	@Override
	public void saveAppCode(AppCode appCode) throws DataOperationException,
			Exception {
		appCodeDao.saveAppCode(appCode);
		
	}

	

	@Override
	public void deleteAppCode(Integer idAppCode) throws DataOperationException,
			Exception {
		AppCode appCodeToDelete = appCodeDao.findByAppCodeId(idAppCode);
		appCodeDao.deleteAppCode(appCodeToDelete);
		
	}

	public AppCodeDao getAppCodeDao() {
		return appCodeDao;
	}

	public void setAppCodeDao(AppCodeDao appCodeDao) {
		this.appCodeDao = appCodeDao;
	}

	@Override
	public List<String> getAllAppCodes(String category) throws Exception {
		// TODO Auto-generated method stub
		return appCodeDao.getAllAppCodes(category);
	}
	
	

}
