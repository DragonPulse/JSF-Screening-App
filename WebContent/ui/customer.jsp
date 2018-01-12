<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="billVO" value="${model.billVO}" />
<c:set var="editFlag" value="${model.customerVO.editFlag}" />


<script
	src="<%=request.getContextPath()%>/scripts/appscripts/customer.js">
	
</script>
<script type="text/javascript">
	var currentUser = "${currentUser}";
	var editFlag = "${editFlag}";
	$(document).ready(function() {
	
		if (editFlag == 'false') {
			$("#editDiv").hide();
		}
		

	});
</script>

</head>
<body>
	<div style="overflow: auto">
		<div class="${model.message.messageClass}" id="message">${model.message.message}</div>
		<p align="left">
			<a href="<%=request.getContextPath()%>/viewMaintainence.html"
				class="label"><img
				src="<%=request.getContextPath()%>/images/view-list.png" />View
				Customers</a>
		</p>
		<div id="printPanel" class="panel">
			<h3 class="searchTitle">Add Customer Details</h3>
			<br>
			<div>
				<table width="100%" align="center">
					<tr>
						<td><label class="label">Title:*</label>
						<td><select id="titleTxt" name="titleTxt"><option></option>
								<option label="Mr.">Mr.</option>
								<option label="Mrs.">Mrs.</option>
						</select>
						</td>

					</tr>
					<tr>
						<td><label class="label">First Name:*</label>
						<td><input id="firstNameTxt" name="firstNameTxt" type="text"
							size="20" value="${model.customerVO.firstName}"></td>
						<td><label class="label">Middle Name:</label>
						<td><input id="middleNameTxt" name="middleNameTxt" size="10"
							type="text" value="${model.customerVO.middleName}"></td>
						<td><label class="label">Last Name:*</label>
						<td><input id="lastNameTxt" name="lastNameTxt" size="20"
							type="text" value="${model.customerVO.lastName}"></td>

					</tr>
					<tr>
						<td><label class="label">Gender:*</label>
						</td>
						<td><select id="genderTxt" name="genderTxt"><option></option>
								<option label="Male">Male</option>
								<option label="FeMale">FeMale</option>
						</select>
						</td>
					</tr>

					<tr>
						<td><label class="label">E-Mail:</label>
						<td><input id="emailTxt" name="emailTxt" type="text"
							value="${model.customerVO.email}"></td>
						<td><label class="label">Mobile No:*</label>
						<td><input id="mobileNoTxt" name="mobileNoTxt" type="text"
							value="${model.customerVO.mobileNumber}"></td>
						<td><label class="label">Alternate No:</label>
						<td><input id="alternateNoTxt" name="alternateNoTxt"
							type="text" value="${model.customerVO.alternateContactNumber}">
						</td>
					</tr>

					<tr>
						<td><label class="label">Permanent Address:</label>
						<td><textarea id="perAddressTxt" name="perAddressTxt"
								rows="3">${model.customerVO.permanentAddress} </textarea></td>
						<td><label class="label">Current Address:</label>
						<td><textarea id="currAddressTxt" name="currAddressTxt"
								rows="3">${model.customerVO.currentAddress} </textarea></td>

					</tr>
				</table>
					<input type="hidden"  id="personId"  name="personId" value="${model.customerVO.idApPerson}"/>
				<hr>
				<br>
				<div id="saveDiv">
					<p align="center">
						<button id="saveBtn" name="saveBtn" type="button"
							class="ui-state-default ui-corner-all">Save</button>
						<button id="cancelBtn" name="cancelBtn" type="button"
							class="ui-state-default ui-corner-all">Cancel</button>
					</p>
					<div id="editDiv" style="display:none">
						<p align="center">
							<button id="editSaveBtn" name="editSaveBtn" type="button"
								class="ui-state-default ui-corner-all">Save</button>
							<button id="cancelBtn" name="cancelBtn" type="button"
								class="ui-state-default ui-corner-all">Cancel</button>
						</p>

					</div>

				</div>

			</div>


		</div>
</body>