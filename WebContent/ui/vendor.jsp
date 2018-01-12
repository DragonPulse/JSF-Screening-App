<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<head>
<script type="text/javascript">
var contextPath = '<%=request.getContextPath()%>';
</script>
<c:set var="userRole" value="${model.userVO.role}" />
<c:set var="currentUser" value="${model.userVO}" />
<c:set var="vendorVO" value="${model.vendorVO}" />
<c:set var="editFlag" value="${model.editFlag}" />

<script type="text/javascript">
	var currentUser = "${currentUser}";
	var editFlag = "${editFlag}";
</script>
<script
	src="<%=request.getContextPath()%>/scripts/appscripts/vendor.js">
	
</script>


</head>
<body>
	<div style="overflow: auto">
		<div class="${model.message.messageClass}" id="message">${model.message.message}</div>

		<p align="left">
			<a href="<%=request.getContextPath()%>/viewAllVendors.html"
				class="label"><img
				src="<%=request.getContextPath() %>/images/view-list.png" />View All Vendors</a>
		</p>


		<div id="printPanel" class="panel">
			<h1 align="center" id="addHeader">Addition of Vendor</h1>
			<h1 align="center" id="updateHeader">Update Vendor</h1>
			<h3 class="searchTitle">Vendor Details</h3>
			<br>
			<div>
				<table width="100%" align="center">
				
					<tr>
										
						<td><label class="label">Vendor Company Name:*</label>
						<td><input id="vendorCompTxt" name="vendorCompTxt"
							type="text" size="50" value="${model.vendorVO.vendorName}"></td>
						
					</tr>
					<tr>
						<td><label class="label">Contact Person First Name:*</label>
						<td><input id="vendFirstNameTxt" name="vendFirstNameTxt"
							type="text" size="50" value="${model.vendorVO.vendorContactFirstName}"></td>
						<td><label class="label">Contact Person Last Name:*</label>
						<td><input id="vendLastNameTxt" name="vendLastNameTxt"
							type="text" size="50" value="${model.vendorVO.vendorContactLastName}"></td>
					</tr>
					<tr>
						<td><label class="label">Contact No:*</label>
						<td><input id="vendContactTxt" name="vendContactTxt"
							type="text" size="10" value="${model.vendorVO.vendorContactNum}" placeholder="Eg. 123-456-7890"></td>
						
						
						<td><label class="label">Email Id:*</label>
						<td><input id="vendEmailTxt" name="vendEmailTxt"
							type="text" size="10" value="${model.vendorVO.vendorEmailId}" ></td>
					</tr>

					
				</table>
				<input id="vendorIdTxt" name="vendorIdTxt"
							type="hidden" size="50" value="${model.vendorVO.vendorId}" >
				

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

</body>