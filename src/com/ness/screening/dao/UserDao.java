package com.ness.screening.dao;

import java.util.List;

import com.ness.screening.commons.dataaccess.dao.BaseDao;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.entity.Candidate;
import com.ness.screening.entity.User;



public interface UserDao extends BaseDao{
	
	public void save(User user) throws DataOperationException;
	public void update(User user) throws DataOperationException;
	public List<User> getAllUsers() throws DataOperationException;
	public List<User> getAllCandidates() throws DataOperationException;
	public User getUser(String userName,String password) throws DataOperationException;
	public User getUser(Integer idUser) throws DataOperationException;
	public User getUserByName(String firstName,String lastName) throws DataOperationException;
	public void deleteUser(User user) throws DataOperationException;
	
	public List<Candidate> getAllMyCandidates(Integer userID)throws DataOperationException;
}
