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
	src="<%=request.getContextPath()%>/scripts/appscripts/transactionreport.js">
	
</script>
<script type="text/javascript">
	var currentUser = "${currentUser}";
	var msgClass = "${msgClass}";
	var msgContent = "${msgContent}";
	$(document).ready(function() {

		$('#leftnavform').attr("action", "");

		var custNameOptions, custNameSugg, cityNameOptions, cityNameSugg;
		jQuery(function() {
			custNameOptions = {
				serviceUrl : 'getAllCustomerNames.html'
			};
			custNameSugg = $('#custNameTxt').autocomplete(custNameOptions);

			cityNameOptions = {
				serviceUrl : 'getAllCities.html'
			};
			cityNameSugg = $('#fromPlace').autocomplete(cityNameOptions);

			cityNameSugg = $('#toPlace').autocomplete(cityNameOptions);

		});

		//to display message
		var showMessage = function(message) {
			$.growl({
				message : message,
				timeout : 3
			});
			$('#message').html(message);
			$('#message').show();
			$('#message').delay(3000).fadeOut();
		};

		if (msgContent.length > 0) {
			showMessage(msgContent);
		}

	});
</script>

</head>
<body>
	<div>
		<div class="info" id="message">${model.message.message}</div>

	</div>
	<br>
	<h3 class="searchTitle">Reports :: Balance Item Report</h3>
	<br>


	<div>

		<fieldset style="border: 0">
			<p align="center">
				<label class="label">From Date:*</label><input id="fromDate"
					value="" /> <label class="label">To Date:*</label><input
					id="toDate" value="" />
				<button id="searchBtn" name="searchBtn" type="button"
					class="ui-state-default ui-corner-all">Search</button>
			</p>
		</fieldset>
	</div>

	<div id="printDiv"
		style="border: 1px solid; border-radius: 25px; -moz-border-radius: 25px;">
		<h1 align="center"><u>Ness Screening</u></h1>
		<h2 align="center">Transaction Report</h2>
		<p align="center">
			<label class="label">From Date:*</label><b><label
				id="fromDateLbl"></label>
			</b><br> <label class="label">To Date:*</label><b><label
				id="toDateLbl"></label>
			</b><br>
		</p>
		<!-- Table to show All Bill from respective user -->
		<div id="balanceitemDiv" align="center">
			<table id="transaction-report-grid"></table>
			<div id="transaction-report-grid-pager"></div>
			<!-- <p align="center">Total Amount: <label id="totalAmountLbl" class="label"></label></p> -->
		</div>
		

	</div>
	<p align="center">
		<button id="printBtn" name="printBtn" type="button"
			class="ui-state-default ui-corner-all">Print</button>
	</p>




	</div>

</body>