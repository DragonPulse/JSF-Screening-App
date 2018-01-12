<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="msgContent" value="${model.message.message}" />
<c:set var="msgClass" value="${model.message.messageClass}" />

<script	src="<%=request.getContextPath()%>/scripts/appscripts/mycandidates.js">
	
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
			<a href="<%=request.getContextPath()%>/addCandidate.html" ><img src="<%=request.getContextPath() %>/images/add.png" />Add Candidate</a>
		</p>	
		
	
	</div>
	
		<!-- Table to show All Candidates from respective user -->
		<div id="allcandidatesDiv">
			<table id="all-candidates-grid"></table>
			<div id="all-candidates-grid-pager"></div>
		</div>



	</div>

<div id="editConfirm" title="Warning...." style="display:none;cursor: default">
	     <h3>Would you like to Edit?.</h3> 
	     <input type="hidden" id="selectedId" value="" />
        <input type="button" id="editYes" value="Yes"  class="ui-state-default ui-corner-all"  /> 
        <input type="button" id="editNo" value="No"  class="ui-state-default ui-corner-all"  /> 
</div> 

<!-- Botostrap Modal -->
	<div class="modal fade" id="candidateDetailModal" tabindex="-1" role="dialog"
		aria-labelledby="candidateDetailModal" style="width: 50%;">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h4 class="modal-title" id="exampleModalLabel">Candidate Details::</h4>
				</div>
				<div class="modal-body">
					<div>
						<table width="100%" align="center">
					<tr>
						<td><label class="label">First Name:*</label>
						<td><input id="candFirstNameTxt" name="candFirstNameTxt"
							type="text" size="50" value=""></td>
						<td><label class="label">Last Name:*</label>
						<td><input id="candLastNameTxt" name="candLastNameTxt"
							type="text" size="50" value=""></td>
					</tr>
					<tr>
						<td><label class="label">Contact No:*</label>
						<td><input id="candContactTxt" name="candContactTxt"
							type="text" size="10" value="" placeholder="Eg. 123-456-7890"></td>
						<td><label class="label">Handled by:</label>
						<td><input id="candHandledByTxt" name="candHandledByTxt"
							type="text" value=""></td>
					</tr>

					<tr>

						<td><label class="label">Vendor Name:</label>
						<td><input id="candVendorContNameTxt" name="candVendorContNameTxt"
							type="text" value="" disabled="disabled">
						</select>
						<td><label class="label">Vendor Contact Person:</label>
						<td><input id="candVendorContactNameTxt" name="candVendorContactNameTxt"
							type="text" value="" disabled="disabled"></td>



						</td>
					</tr>
					<tr>
						<td><label class="label">Vendor Contact No:</label>
						<td><input id="candVendorContNumTxt"
							name="candVendorContNumTxt" type="text" value="" disabled="disabled"></td>
						<td><label class="label">Candidate Email Id:*</label>
						<td><input id="candEmailTxt" name="candEmailTxt" type="text"
							value=""></td>
					</tr>
				</table>



					</div>
					<br />
					<hr>
					<!-- Table to show All Candidates from respective user -->
					<div id="viewDocsListDiv">
						<table id="cand-doc-list-grid"></table>
						<div id="cand-doc-list-grid-pager"></div>
					</div>
					
					
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>

				</div>
			</div>
		</div>
	</div>
</body>