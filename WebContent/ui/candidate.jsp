<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="candidateVO" value="${model.candidateVO}" />
<c:set var="editFlag" value="${model.editFlag}" />


<script
	src="<%=request.getContextPath()%>/scripts/appscripts/candidate.js">
	
</script>
<script type="text/javascript">
	var currentUser = "${currentUser}";
	var editFlag = "${editFlag}";
	var candidateEmail = "${candidateVO.candidateEmail}";
	var candidateId = "${candidateVO.candidateId}";
	
</script>

</head>
<body>
	<div style="overflow: auto">
		<div class="${model.message.messageClass}" id="message">${model.message.message}</div>

		<p align="left">
			<a href="<%=request.getContextPath()%>/viewMyCandidates.html"
				class="label"><img
				src="<%=request.getContextPath() %>/images/view-list.png" />View My
				Candidate</a>
		</p>


		<div id="printPanel" class="panel">
			<h1 align="center" id="addHeader">Addition of Candidate</h1>
			<h1 align="center" id="updateHeader">Update Candidate</h1>
			<h3 class="searchTitle">Candidate Details</h3>
			<br>
			<div>
				<table width="100%" align="center">
					<tr>
						<td><label class="label">First Name:*</label>
						<td><input id="candFirstNameTxt" name="candFirstNameTxt"
							type="text" size="50" value="${model.candidateVO.candidateFirstName}"></td>
						<td><label class="label">Last Name:*</label>
						<td><input id="candLastNameTxt" name="candLastNameTxt"
							type="text" size="50" value="${model.candidateVO.candidateLastName}"></td>
					</tr>
					<tr>
						<td><label class="label">Contact No:*</label>
						<td><input id="candContactTxt" name="candContactTxt"
							type="text" size="10" value="${model.candidateVO.candidatePhoneNumber}" placeholder="Eg. 123-456-7890"></td>
						<td><label class="label">Handled by:</label>
						<td><input id="candHandledByTxt" name="candHandledByTxt"
							type="text" value="${model.candidateVO.candidateHandeledBy.userFirstName}"></td>
					</tr>
					<tr >
						<td><label class="label">Candidate Email Id:*</label>
						<td><input id="candEmailTxt" name="candEmailTxt" type="text"
							value="${model.candidateVO.candidateEmail}" ></td>
							
						<td><label class="label">Joining Time:</label>
						<td ><select class="form-control" id="candJoinTimeTxt"
							name="candJoinTimeTxt">
										</select>
					</tr>
					
					<tr >
						<td><label class="label">Rate per Hour/Annual:</label>
						<td ><input id="candRateTxt" name="candRateTxt" type="text"
							value="${model.candidateVO.candidateEmail}" ></td>
							
						<td><label class="label">Employment Type:</label>
						<td ><select class="form-control" id="candEmpTxt"
							name="candEmpTxt">
										</select>
						</td>
					
					</tr>
					<hr/>
					
					<tr>

						<td><label class="label">Vendor Name:</label>
						<td><select class="form-control" id="candVendorContNameTxt"
							name="candVendorContNameTxt">
						</select>
						<td><label class="label">Vendor Contact Person:</label>
						<td><input id="candVendorTxt" name="candVendorTxt"
							type="text" value="${model.candidateVO.vendor.vendorContactFirstName}  ${model.candidateVO.vendor.vendorContactLastName}" disabled="disabled"></td>



						</td>
					</tr>
					<tr>
						<td><label class="label">Vendor Contact No:</label>
						<td><input id="candVendorContNumTxt"
							name="candVendorContNumTxt" type="text" value="${model.candidateVO.vendor.vendorContactNum}" disabled="disabled"></td>
						
						<td><label class="label">Vendor Email Id:</label>
						<td><input id="candVendorEmailTxt"
							name="candVendorContEmailTxt" type="text" value="${model.candidateVO.vendor.vendorEmailId}" disabled="disabled"></td>	
							
						
					</tr>
				</table>
				<div>
					<br>
					<p align="left">
						<a id="openUploadResumeModal" href="#"><img
							src="<%=request.getContextPath() %>/images/add.png" />Click here
							to add documents</a>
					</p>
				</div>


				<!-- Table to show All Items from respective douments -->
				<div>
					<p>
					<div>
						<table id="docs-items-grid"></table>
						<div id="docs-items-grid-pager"></div>
					</div>
					</p>
				</div>
				<br>

			<input id="candidateIdTxt" name="candidateIdTxt"
							type="hidden" size="50" value="${model.candidateVO.candidateId}" >
				
			</div>

		</div>
		<div>
			<p align="center">
				<button id="saveBtn" name="saveBtn" type="button"
					class="btn  btn-success">Save</button>
				<button id="updateBtn" name="updateBtn" type="button"
					class="btn  btn-success">Update</button>
				<button id="cancelBtn" name="cancelBtn" type="button"
					class="btn  btn-failure">Cancel</button>

			</p>

		</div>

	</div>

	<!-- Modal -->
	<div class="easy-modal-animated" id="uploadResumeModal"
		name="uploadResumeModal" style="display: none"
		title="Detailed Description..">
		<div id="mandatoryErrorMessage" style="color: #FF0000"></div>
		<div>
			<label><b>Document Desription:*</b></label>
			<textarea id="docDesc" name="" docDesc"" title=""
				docDesc""
										style="padding: 10; width: 500px; resize: none;"
				cols="25"></textarea>
		</div>
		<br />
		<div>
			<label><b>Attachments:*</b></label> <input type="file" id="attchId" />

		</div>
		<br />
		<div>
			<label><b>Document Type:*</b></label>
			<select id="docType" name="docType"
								 title="docType" style="padding: 10; padding-right: 25; width: 200px">
			</select> 
		</div>
		<br />
		
		<br />
		<div id="saveDiv">
			<p align="center">
				<button id="uploadDocBtn" name="uploadDocBtn" type="button"
					class="btn  btn-success">Upload</button>

				<button id="cancelDialogBtn" name="cancelDialogBtn" type="button"
					class="btn  btn-failure">Cancel</button>
			</p>
		</div>
	</div>

</body>