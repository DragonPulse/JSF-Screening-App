package com.ness.screening.commons.dataaccess.exception;




public class DataOperationException extends ApplicationException {

	/** Serial Version UID Constant. */
	private static final long serialVersionUID = 648568296767228413L;

	
	
	public DataOperationException(Status status) {
		super(status);
	}

	/**
	 * Constructor data operation exception.
	 */
	public DataOperationException() {
		super();
	}

	/**
	 * Constructor data operation exception.
	 * 
	 * @param message
	 *            the message
	 */
	public DataOperationException(String message) {
		super(message);
	}

	/**
	 * Constructor data operation exception.
	 * 
	 * @param cause
	 *            the cause
	 */
	public DataOperationException(Throwable cause) {
		super(cause);
		
	}

	/**
	 * Constructor data operation exception.
	 * 
	 * @param message
	 *            the message
	 * @param cause
	 *            the cause
	 */
	public DataOperationException(String message, Throwable cause) {
		super(message, cause);
		
	}

}
