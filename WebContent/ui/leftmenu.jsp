<head>
<script type="text/javascript">

	$(function() {
		$( "#adminleftmenu" ).accordion();
		$( "#adminleftmenu" ).accordion({active: ${model.headerBean.activeIndex} });
		
		
	});
	</script>
</head>
<body>
	<div id="adminleftmenu">
		<h3 id="candidatesH3">
			<a href="#">Candidates</a>
		</h3>
		<div id="candidatesAccDiv" class="uib-accordion-group uib-accordion-selected">
			<a href="<%=request.getContextPath()%>/viewMyCandidates.html"
				class="${model.headerBean.subLinks[0]}">View Candidates</a>
			<a href="<%=request.getContextPath()%>/addCandidate.html"
				class="${model.headerBean.subLinks[1]}">Add/Edit Candidate</a>
		</div>

		<!-- Vendors Div -->
		<h3 id="vendorsH3">
			<a href="#">Vendors</a>
		</h3>
		<div id="vendorsAccDiv" class="uib-accordion-group uib-accordion-selected">
			<a href="<%=request.getContextPath()%>/viewAllVendors.html"
				class="${model.headerBean.subLinks[2]}">View Vendors</a>
			<a href="<%=request.getContextPath()%>/addVendor.html"
				class="${model.headerBean.subLinks[3]}">Add/Edit Vendor</a>
		</div>
		
		<!-- Job Req Div -->
		<h3 id="jobReqH3">
			<a href="#">Job Requirement</a>
		</h3>
		<div id="jobReqAccDiv" class="uib-accordion-group uib-accordion-selected">
			<a href="<%=request.getContextPath()%>/viewAllJobReq.html"
				class="${model.headerBean.subLinks[4]}">View Job Requirements</a>
			<a href="<%=request.getContextPath()%>/addJobReq.html"
				class="${model.headerBean.subLinks[5]}">Add/Edit Job Req</a>
		</div>
		
		
			<h3 id="appCodesH3">
				<a href="#">App Codes</a>
			</h3>
			<div id="appCodesAccDiv" class="uib-accordion-group uib-accordion-selected" >
				<a href="#" class="${model.headerBean.subLinks[4]}">View AppCodes</a> 
			
			</div>
	
		
		
		<h3 id="reportsH3">
			<a href="#">Reports</a>
		</h3>
			<div class="uib-accordion-group uib-accordion-selected" id="reportsAccDiv">
			<a href="<%=request.getContextPath()%>/viewReports.html"  id="loadingReportLink" class="${model.headerBean.subLinks[6]}">Loading Reports</a> 
			<a href="<%=request.getContextPath()%>/viewBalanceItemReport.html" id="balanceItemReportLink" class="${model.headerBean.subLinks[7]}">Balance Item Report </a>
			<a href="<%=request.getContextPath()%>/viewTransactionReport.html"     id="transactionReportLink" class="${model.headerBean.subLinks[12]}">Transaction Report </a>
		</div>
		
		
		<h3 id="staffsH3">
			<a href="#">Users</a>
		</h3>
			<div class="uib-accordion-group uib-accordion-selected" id="staffAccDiv">
			<a href="<%=request.getContextPath()%>/viewUsers.html" class="${model.headerBean.subLinks[10]}">View Users</a> 
			<a href="<%=request.getContextPath()%>/showUser.html" class="${model.headerBean.subLinks[11]}">Add User</a>
		</div>
	

	</div>
</body>