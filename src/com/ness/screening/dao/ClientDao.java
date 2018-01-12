package com.ness.screening.dao;

import java.util.List;

import com.ness.screening.commons.dataaccess.dao.BaseDao;
import com.ness.screening.commons.dataaccess.exception.DataOperationException;
import com.ness.screening.entity.Client;
import com.ness.screening.entity.Vendor;



public interface ClientDao extends BaseDao{
	
	public void save(Client client) throws DataOperationException;
	public void update(Client client) throws DataOperationException;
	public List<Client> getAllClients() throws DataOperationException;
	public Vendor getClient(Integer idClient) throws DataOperationException;
	public Vendor getClientByName(String clientName) throws DataOperationException;
	public void deleteClient(Client client) throws DataOperationException;
	public List<String> getClientNames() throws DataOperationException;
	
}
