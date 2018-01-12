<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="msgContent" value="${model.message.message}" />
<c:set var="msgClass" value="${model.message.messageClass}" />

<script	src="<%=request.getContextPath()%>/scripts/appscripts/customers.js">
	
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

		$("#accordion").accordion();
		$("#appCodesH3").hide();
		$("#appCodesAccDiv").hide();
		$("#custH3").hide();
		$("#custAccDiv").hide();
		$("#reportsH3").hide();
		$("#reportsAccDiv").hide();
		
		

	});
	
	 function imageFormatter(cellvalue, options, rowObject) {	
			if(cellvalue == true){
				return '<img src="<%=request.getContextPath()%>/images/approve.png" />';
			}
			if(cellvalue == false){
				return '<img src="<%=request.getContextPath()%>/images/delete.png" />';
			}
	}; 
</script>

</head>
<body>
	<div>
	<div class="${model.message.messageClass}" id="message" >${model.message.message}</div>
	<div>
		<br>
		<p align="left">
			<a href="<%=request.getContextPath()%>/showCustomer.html" ><img src="<%=request.getContextPath() %>/images/add.png" />Add Customer</a>
		</p>	
		
	
	</div>
	
		<!-- Table to show All Bill from respective user -->
		<div id="allCustomersDiv">
			<table id="all-customers-grid"></table>
			<div id="all-customers-grid-pager"></div>
		</div>



	</div>

<div id="editConfirm" title="Warning...." style="display:none;cursor: default">
	     <h3>Would you like to Edit?.</h3> 
	     <input type="hidden" id="selectedId" value="" />
        <input type="button" id="editYes" value="Yes"  class="ui-state-default ui-corner-all"  /> 
        <input type="button" id="editNo" value="No"  class="ui-state-default ui-corner-all"  /> 
</div> 

</body>