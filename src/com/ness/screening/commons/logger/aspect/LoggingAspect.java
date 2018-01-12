package com.ness.screening.commons.logger.aspect;


import javax.annotation.Resource;

import org.apache.commons.lang.ArrayUtils;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.stereotype.Component;

import com.ness.screening.commons.logger.util.LogLevel;
import com.ness.screening.commons.logger.util.Logger;

/**
 * The Class LoggingAspect.
 */
@Aspect
@Component
public class LoggingAspect {

	/** The BEFOR e_ string. */
	private static String BEFORE_STRING = "[ entering :: {0} :: ]";
	
	/** The BEFOR e_ wit h_ param s_ string. */
	private static String BEFORE_WITH_PARAMS_STRING = "[ entering :: {0} :: with params {1} ]";

	/** The AFTE r_ throwing. */
	private static String AFTER_THROWING = "[ exception thrown :: {0} :: exception message {1} with params {2} ]";

	/** The AFTE r_ returning. */
	private static String AFTER_RETURNING = "[ leaving :: {0} :: returning {1} ]";

	/** The AFTE r_ returnin g_ void. */
	private static String AFTER_RETURNING_VOID = "[ leaving :: {0} :: ]";

	/** The logger. */
	@Resource
	private Logger logger;

	/**
	 * Before.
	 *
	 * @param joinPoint the join point
	 * @param loggable the loggable
	 * @ 
	 */
	@Before(value = "@annotation(trace)", argNames = "joinPoint, trace")
	public void before(JoinPoint joinPoint, Loggable loggable) {

		Class<? extends Object> clazz = joinPoint.getTarget().getClass();
		String name = joinPoint.getSignature().getName();
		
		if (ArrayUtils.isEmpty(joinPoint.getArgs())) {
			logger.log(loggable.value(), clazz, null, BEFORE_STRING, name,
				constructArgumentsString(clazz, joinPoint.getArgs()));
		} else {
			logger.log(loggable.value(), clazz, null, BEFORE_WITH_PARAMS_STRING, name,
					constructArgumentsString(clazz, joinPoint.getArgs()));			
		}
	}

	/**
	 * After throwing.
	 *
	 * @param joinPoint the join point
	 * @param throwable the throwable
	 * @throws CommonException 
	 * @ 
	 */
	@AfterThrowing(value = "@annotation(com.ness.screening.commons.logger.aspect.Loggable)",
			throwing = "throwable", argNames = "joinPoint, throwable")
	public void afterThrowing(JoinPoint joinPoint, Throwable throwable)  {

		Class<? extends Object> clazz = joinPoint.getTarget().getClass();
		String name = joinPoint.getSignature().getName();
		logger.log(LogLevel.ERROR, clazz, throwable, AFTER_THROWING, name,
				throwable.getMessage(), constructArgumentsString(clazz,	joinPoint.getArgs()));
	}

	/**
	 * After returning.
	 *
	 * @param joinPoint the join point
	 * @param loggable the loggable
	 * @param returnValue the return value
	 * @ 
	 */
	@AfterReturning(value = "@annotation(trace)", returning = "returnValue",
			argNames = "joinPoint, trace, returnValue")
	public void afterReturning(JoinPoint joinPoint, Loggable loggable,
			Object returnValue)  {

		Class<? extends Object> clazz = joinPoint.getTarget().getClass();
		String name = joinPoint.getSignature().getName();

		if (joinPoint.getSignature() instanceof MethodSignature) {
			MethodSignature signature = (MethodSignature) joinPoint
					.getSignature();
			Class<?> returnType = signature.getReturnType();
			if (returnType.getName().compareTo("void") == 0) {
				logger.log(loggable.value(), clazz, null, AFTER_RETURNING_VOID,
						name, constructArgumentsString(clazz, returnValue));

				return;
			}
		}

		logger.log(loggable.value(), clazz, null, AFTER_RETURNING, name,
				constructArgumentsString(clazz, returnValue));
	}

	/**
	 * Construct arguments string.
	 *
	 * @param clazz the clazz
	 * @param arguments the arguments
	 * @return the string
	 */
	private String constructArgumentsString(Class<?> clazz, Object... arguments) {

		StringBuffer buffer = new StringBuffer();
		for (Object object : arguments) {

			buffer.append(object);
		}
		
		return buffer.toString();
	}
}
