package com.ness.screening.commons.logger.aspect;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import com.ness.screening.commons.logger.util.LogLevel;

/**
 * The Interface Loggable.
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Loggable {
    
    /**
     * Value.
     *
     * @return the log level
     */
    LogLevel value();
}
