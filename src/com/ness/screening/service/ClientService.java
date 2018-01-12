package com.ness.screening.service;

import java.util.List;

import com.ness.screening.commons.dataaccess.exception.ApplicationException;
import com.ness.screening.entity.Client;

public interface ClientService {

	public void save(Client client) throws ApplicationException;
	public void update(Client client) throws ApplicationException;
	public List<Client> getAllClients() throws ApplicationException;
	public Client getClient(Integer idClient) throws ApplicationException;
	public Client getClientByName(String clientName) throws ApplicationException;
	public void deleteClient(Client client) throws ApplicationException;
}
