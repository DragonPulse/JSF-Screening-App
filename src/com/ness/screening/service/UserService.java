package com.ness.screening.service;

import java.util.List;

import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.User;

public interface UserService {

	public void save(User user) throws DataOperationException;
	public void update(User user) throws DataOperationException;
	public List<User> getAllUsers() throws DataOperationException;
	public User getUser(String userName,String password) throws DataOperationException;
	public User getUser(Integer idUser) throws DataOperationException;
	public void deleteUser(Integer idApUser) throws DataOperationException,Exception;
	
	public List<Candidate> getAllMyCandidates(Integer userID)throws DataOperationException,Exception;
}
