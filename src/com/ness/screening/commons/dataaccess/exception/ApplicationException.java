package com.ness.screening.commons.dataaccess.exception;





public class ApplicationException extends Exception {

	/** Serial Version UID Constant. */
	private static final long serialVersionUID = 821954420440172448L;
	private Status status = Status.FAIL;
	private String extraMsg;
	/** logger. */
	

	public ApplicationException(Status Status, String message) {
		this(message);
		this.status = Status;
		this.extraMsg=message;
	}

	public ApplicationException(Status Status) {
		this(Status.getText());
		this.status = Status;
	}

	/**
	 * Constructor application exception.
	 */
	public ApplicationException() {
		super();
	}

	/**
	 * Constructor application exception.
	 * 
	 * @param message
	 *            the message
	 */
	public ApplicationException(String message) {
		super(message);
		this.extraMsg=message;
	}

	/**
	 * Constructor application exception.
	 * 
	 * @param cause
	 *            the cause
	 */
	public ApplicationException(Throwable cause) {
		super(cause);
		this.extraMsg=cause.getMessage();
	}

	/**
	 * Constructor application exception.
	 * 
	 * @param message
	 *            the message
	 * @param cause
	 *            the cause
	 */
	public ApplicationException(String message, Throwable cause) {
		super(message, cause);
		this.extraMsg=message;
	}

	/**
	 * Gets the logger.
	 * 
	 * @return the logger
	 */
	
	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}
	
	@Override
	public String getMessage() {
		return this.extraMsg;
	}

}
