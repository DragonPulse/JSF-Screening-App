<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="msgContent" value="${model.message.message}" />
<c:set var="msgClass" value="${model.message.messageClass}" />

<script
	src="<%=request.getContextPath()%>/scripts/appscripts/jobreqs.js">
	
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
		<div class="${model.message.messageClass}" id="message">${model.message.message}</div>
		<div>
			<br>
			<p align="left">
				<a href="<%=request.getContextPath()%>/addJobReq.html"><img
					src="<%=request.getContextPath()%>/images/add.png" />Add Requirements</a>
			</p>


		</div>

		<!-- Table to show All Candidates from respective user -->
		<div id="allrequirementsDiv">
			<table id="all-requirements-grid"></table>
			<div id="all-requirements-grid-pager"></div>
		</div>



	</div>

	<div id="editConfirm" title="Warning...."
		style="display: none; cursor: default">
		<h3>Would you like to Edit?.</h3>
		<input type="hidden" id="selectedId" value="" /> <input type="button"
			id="editYes" value="Yes" class="ui-state-default ui-corner-all" />
		<input type="button" id="editNo" value="No"
			class="ui-state-default ui-corner-all" />
	</div>

</body>
<!-- Botostrap Modal -->
	<div class="modal fade" id="requirementDetailModal"  role="dialog"
		aria-labelledby="requirementDetailModal" style="width: 50%;">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="exampleModalLabel">Requirements Details::</h4>
				</div>
				<div class="modal-body">
					<div>
						<table width="50%" align="center">
							<tr>
								<td><label class="label">Vendor Company Name:</label>
								<td><input id="requirementCompTxt" name="requirementCompTxt"
									type="text" size="50" value=""></td>

							</tr>
							<tr>
								<td><label class="label">Contact Person First Name:</label>
								<td><input id="vendFirstNameTxt" name="vendFirstNameTxt"
									type="text" size="50" value=""></td>
								<td><label class="label">Contact Person Last Name:</label>
								<td><input id="vendLastNameTxt" name="vendLastNameTxt"
									type="text" size="50" value=""></td>
							</tr>
							<tr>
								<td><label class="label">Contact No:</label>
								<td><input id="vendContactTxt" name="vendContactTxt"
									type="text" size="10" value="" placeholder="Eg. 123-456-7890"></td>


								<td><label class="label">Emil Id:</label>
								<td><input id="vendEmailTxt" name="vendEmailTxt"
									type="text" size="10" value=""></td>
							</tr>

							<tr>
								<td><label class="label">Created By:</label>
								<td><input id="vendCreatedByTxt" name="vendCreatedByTxt"
									type="text" size="10" value=""></td>


								<td><label class="label">Created Date:</label>
								<td><input id="vendCreatedDtTxt" name="vendCreatedDtTxt"
									type="text" size="10" value=""></td>
							</tr>
							<tr>
								<td><label class="label">Updated By:</label>
								<td><input id="vendUpdatedByTxt" name="vendUpdatedByTxt"
									type="text" size="10" value=""></td>


								<td><label class="label">Updated Date:</label>
								<td><input id="vendUpdatedDtTxt" name="vendUpdatedDtTxt"
									type="text" size="10" value=""></td>
							</tr>


						</table>



					</div>
					<br />
					
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

				</div>
			</div>
		</div>
	</div>