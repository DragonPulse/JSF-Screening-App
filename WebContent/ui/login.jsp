<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/login.css" />

<link	href="<%=request.getContextPath()%>/css/jquery-ui-1.8.20.custom.css"	rel="stylesheet" type="text/css" />

<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-1.7.1.min.js"></script>

<script	src="<%=request.getContextPath()%>/scripts/jquery/jquery-ui.min.js"></script>
	
<script	src="<%=request.getContextPath()%>/scripts/jquery/block-ui.js"></script>
	
<title>Ness Screening</title>




<script type="text/javascript">



	var error = "${model.error}";
		$(function(){
	
			if(error.length==0){
				$('#message').hide();
			}else{
				$('#message').show();
				}

			});
	</script>
</head>
<body>



	<div class="login_bg">
		<table width="100%" border="0" cellspacing="0" cellpadding="0"
			style="height: 100%">
			<tr>
				<td valign="middle">
					<div class="login_messages">
						<div class="error" id="message">${model.error}</div>
					</div>
					<div class="login_shadow-trans11" style="height: 250px;">
						<table border="0" cellspacing="0" cellpadding="0"
							class="login_table" align="center">
							<tr>
								<td><img
									src="<%=request.getContextPath()%>/images/spacer.gif" />
								</td>
								<td
									style="height: 30px; vertical-align: middle; padding-left: 20px;"
									valign="middle"></td>
							</tr>
							<tr>
								<td class="login_logo_box">
									<div style="width: 100px; margin: 0 auto;">
										<p>
											<img src="<%=request.getContextPath()%>/images/ness-logo-icon.png" height="90%" width="90%"/>
										</p>
										<div style="text-align: right; font-weight: bold">
										<p style="font-size: 11px;">Version 1.0
										<a
											href="reset_password.html"><br />Forgot Password?</a> 
										</div>
									</div></td>
								<td id="signIn">
									<form method="post" action="authenticateUser.html" name="loginwindow">
										<p style="font-size: 11px;">	User Name:</p>
										<input type="text" id="userName" name="userName" />
										<p style="font-size: 11px;">Password:</p>
										<input type="password" id="password" name="password" />
										<br /><p style="font-size: 11px;"> <input type="submit" value=" Login " /> <br /></p>
									</form></td>
							</tr>
							<tr>
								<td colspan="2"><div id="login_best_view">
										<div class="footer_left">
											<a href="#" class="whitetext tooltip">Optimized for 1024
												x 768, IE 7+ <span style="width: 330px;"> <b>Resolutions:</b>
													<br /> 1024 x 768 and higher <br /> <b>Full Feature
														Compatibile Browsers:</b> <br /> IE 7+ <br /> <b>Minimum
														Feature Compatibile Browsers:</b> <br /> IE 6+ <br /> <small>(Suggest
														upgrade to higher versions or use of full feature
														compatible browsers)</small><br /> </span> </a>
										</div>
										<div class="footer_right">
											<div id="login_copyright">Copyright 2013, .,</div>
										</div>
									</div>
								</td>
							</tr>
						</table>
					</div></td>
			</tr>
		</table>
	</div>

</body>
</html>
