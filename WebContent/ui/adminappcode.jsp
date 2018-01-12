<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="msgContent" value="${model.message.message}" />
<c:set var="msgClass" value="${model.message.messageClass}" />

<script	src="<%=request.getContextPath()%>/scripts/appscripts/appcode.js">
	
</script>
<script type="text/javascript">
	var currentUser = "${currentUser}";
	var msgClass = "${msgClass}";
	var msgContent = "${msgContent}";
	$(document).ready(function() {

	$('#leftnavform').attr("action", "");		
	
	//to display message
		var showMessage=function(message){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		if(msgContent.length>0){
			showMessage(msgContent);
		}

		
		
		

	});
</script>

</head>
<body>
	<div>
	<div class="${model.message.messageClass}" id="message" >${model.message.message}</div>
	<div>
		<h3 class="searchTitle">Admin Console :: App Code</h3>
	</div>
	<br>
	<div>
		<!-- Table to show All Bill from respective user -->
		<div id="appCodesDiv">
			<table id="appCode-grid"></table>
			<div id="appCode-grid-pager"></div>
		</div>

	</div>


	</div>

</body>