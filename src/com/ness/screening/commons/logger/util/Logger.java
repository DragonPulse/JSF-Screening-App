package com.ness.screening.commons.logger.util;


// TODO: Auto-generated Javadoc
/**
 * The Interface Logger.
 */
public interface Logger {

    /**
     * Checks if is log level.
     *
     * @param logLevel the log level
     * @param clazz the clazz
     * @return true, if is log level
     */
    boolean isLogLevel(LogLevel logLevel, Class<?> clazz);

    /**
     * Log.
     *
     * @param logLevel the log level
     * @param clazz the clazz
     * @param throwable the throwable
     * @param pattern the pattern
     * @param arguments the arguments
     * @throws CommonException 
     */
    void log(LogLevel logLevel, Class<?> clazz, Throwable throwable,
    		String pattern, Object... arguments);
}
