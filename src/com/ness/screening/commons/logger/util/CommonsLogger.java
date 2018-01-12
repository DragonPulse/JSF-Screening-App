package com.ness.screening.commons.logger.util;

import java.text.MessageFormat;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Component;

/**
 * The Class CommonsLogger.
 */
@Component
public class CommonsLogger implements Logger {

	/* (non-Javadoc)
	 * @see com.bcbsmn.commons.logger.util.Logger#isLogLevel(com.bcbsmn.commons.logger.util.LogLevel, java.lang.Class)
	 */
	public boolean isLogLevel( LogLevel logLevel,  Class<?> clazz) {

		boolean result = false;

		switch (logLevel) {

		case DEBUG:
			result = getLogger(clazz).isDebugEnabled();

		case ERROR:
			result = getLogger(clazz).isErrorEnabled();

		case FATAL:
			result = getLogger(clazz).isFatalEnabled();

		case INFO:
			result = getLogger(clazz).isInfoEnabled();

		case TRACE:
			result = getLogger(clazz).isTraceEnabled();

		case WARN:
			result = getLogger(clazz).isWarnEnabled();

		default:
			result = false;
		}
		return result;
	}

	/* (non-Javadoc)
	 * @see com.bcbsmn.commons.logger.util.Logger#log(com.bcbsmn.commons.logger.util.LogLevel, java.lang.Class, java.lang.Throwable, java.lang.String, java.lang.Object[])
	 */
	public void log( LogLevel logLevel,  Class<?> clazz,
			 Throwable throwable,  String pattern,
			 Object... arguments)  {

		switch (logLevel) {

		case DEBUG:
			debug(clazz, throwable, pattern, arguments);
			break;

		case ERROR:
			error(clazz, throwable, pattern, arguments);
			break;

		case FATAL:
			fatal(clazz, throwable, pattern, arguments);
			break;

		case INFO:
			info(clazz, throwable, pattern, arguments);
			break;

		case TRACE:
			trace(clazz, throwable, pattern, arguments);
			break;

		case WARN:
			warn(clazz, throwable, pattern, arguments);
			break;
		}
	}

	/**
	 * Debug.
	 *
	 * @param clazz the clazz
	 * @param throwable the throwable
	 * @param pattern the pattern
	 * @param arguments the arguments
	 * @ 
	 */
	private void debug( Class<?> clazz,  Throwable throwable,
			 String pattern,  Object... arguments)  {

		if (throwable != null) {
			getLogger(clazz).debug(format(pattern, arguments), throwable);
			
		} else {
			getLogger(clazz).debug(format(pattern, arguments));
		}
	}

	/**
	 * Error.
	 *
	 * @param clazz the clazz
	 * @param throwable the throwable
	 * @param pattern the pattern
	 * @param arguments the arguments
	 * @ 
	 */
	private void error( Class<?> clazz,  Throwable throwable,
			 String pattern,  Object... arguments)  {

		if (throwable != null) {
			getLogger(clazz).error(format(pattern, arguments), throwable);
			
		} else {
			getLogger(clazz).error(format(pattern, arguments));
		}
	}

	/**
	 * Fatal.
	 *
	 * @param clazz the clazz
	 * @param throwable the throwable
	 * @param pattern the pattern
	 * @param arguments the arguments
	 * @ 
	 */
	private void fatal( Class<?> clazz,  Throwable throwable,
			 String pattern,  Object... arguments)  {

		if (throwable != null) {
			getLogger(clazz).fatal(format(pattern, arguments), throwable);
			
		} else {
			getLogger(clazz).fatal(format(pattern, arguments));
		}
	}

	/**
	 * Info.
	 *
	 * @param clazz the clazz
	 * @param throwable the throwable
	 * @param pattern the pattern
	 * @param arguments the arguments
	 * @ 
	 */
	private void info( Class<?> clazz,  Throwable throwable,
			 String pattern,  Object... arguments)  {

		if (throwable != null) {
			getLogger(clazz).info(format(pattern, arguments), throwable);
			
		} else {
			getLogger(clazz).info(format(pattern, arguments));
		}
	}

	/**
	 * Trace.
	 *
	 * @param clazz the clazz
	 * @param throwable the throwable
	 * @param pattern the pattern
	 * @param arguments the arguments
	 * @ 
	 */
	private void trace( Class<?> clazz,  Throwable throwable,
			 String pattern,  Object... arguments)  {

		if (throwable != null) {
			getLogger(clazz).trace(format(pattern, arguments), throwable);
			
		} else {
			getLogger(clazz).trace(format(pattern, arguments));
		}
	}

	/**
	 * Warn.
	 *
	 * @param clazz the clazz
	 * @param throwable the throwable
	 * @param pattern the pattern
	 * @param arguments the arguments
	 * @ 
	 */
	private void warn( Class<?> clazz,  Throwable throwable,
			 String pattern,  Object... arguments)  {

		if (throwable != null) {
			getLogger(clazz).warn(format(pattern, arguments), throwable);
			
		} else {
			getLogger(clazz).warn(format(pattern, arguments));
		}
	}

	/**
	 * Format.
	 *
	 * @param pattern the pattern
	 * @param arguments the arguments
	 * @return the string
	 */
	private String format( String pattern,  Object... arguments) {

		return MessageFormat.format(pattern, arguments);
	}

	/**
	 * Gets the logger.
	 *
	 * @param clazz the clazz
	 * @return the logger
	 */
	private Log getLogger( Class<?> clazz) {

		return LogFactory.getLog(clazz);
	}
}
