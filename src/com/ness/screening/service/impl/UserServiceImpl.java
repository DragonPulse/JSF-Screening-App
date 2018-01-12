package com.ness.screening.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.dao.UserDao;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.User;
import com.ness.screening.service.UserService;
import com.ness.screening.util.DaoRegistry;

@Transactional
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDao userDao;

	@Override
	public void save(User user) throws DataOperationException {
		// TODO Auto-generated method stub
		userDao.save(user);
	}

	@Override
	public void update(User user) throws DataOperationException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<User> getAllUsers() throws DataOperationException {
		// TODO Auto-generated method stub
		return userDao.getAllUsers();
	}

	@Override
	public User getUser(String userName, String password)
			throws DataOperationException {
		// TODO Auto-generated method stub
		return userDao.getUser(userName, password);
	}

	@Override
	public User getUser(Integer idUser) throws DataOperationException {
		// TODO Auto-generated method stub
		return userDao.getUser(idUser);
	}

	@Override
	public void deleteUser(Integer idApUser) throws DataOperationException,
			Exception {
		User user = userDao.getUser(idApUser);
		userDao.deleteUser(user);
		
	}

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

	@Override
	public List<Candidate> getAllMyCandidates(Integer userID)
			throws DataOperationException, Exception {
		// TODO Auto-generated method stub
		return userDao.getAllMyCandidates(userID);
	}

	
	
	
	

}
