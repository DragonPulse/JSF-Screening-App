
package com.ness.screening.commons.dataaccess.exception;





/**
 * The Class DataIntegrityException.
 */
public class DataIntegrityException extends ApplicationException {

	/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 3472574795387089529L;

	
	/**
	 * Constructor data operation exception.
	 */
	public DataIntegrityException() {
		super();
	}

	/**
	 * Instantiates a new data integrity exception.
	 * 
	 * @param status
	 *            the status
	 */
	public DataIntegrityException(Status status) {
		super(status);
	}

	/**
	 * Constructor data operation exception.
	 * 
	 * @param message
	 *            the message
	 */
	public DataIntegrityException(String message) {
		super(message);
	}

	/**
	 * Constructor data operation exception.
	 * 
	 * @param message
	 *            the message
	 * @param cause
	 *            the cause
	 */
	public DataIntegrityException(String message, Throwable cause) {
		super(message, cause);
	}

	/**
	 * Constructor data operation exception.
	 * 
	 * @param cause
	 *            the cause
	 */
	public DataIntegrityException(Throwable cause) {
		super(cause);
		if (!(cause instanceof ApplicationException)) {
		}
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see jcdecaux.sitespec.exceptions.ApplicationException#getLogger()
	 */
	
}
