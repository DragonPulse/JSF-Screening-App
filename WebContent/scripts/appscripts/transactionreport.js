$(function() {

	// to clear earlier form action
	$('#leftnavform').attr("action", "");

	// to display message
	var showMessage = function(message) {
		$.growl({
			message : message,
			timeout : 3
		});
		$('#message').html(message);
		$('#message').show();
		$('#message').delay(3000).fadeOut();
	};

	// to display message with class
	var showMessageWithClass = function(message, classname) {
		$.growl({
			message : message,
			timeout : 3
		});
		$('#message').html(message);
		$('#message').addClass(classname);
		$('#message').show();
		$('#message').delay(3000).fadeOut();
	};

	// funciton on next

	// declaration for onload
	var onLoad = function() {
		$("#accordion").accordion();
		$('#message').hide();
		$("#billingH3").hide();
		$("#billingAccDiv").hide();
		$("#appCodesH3").hide();
		$("#appCodesAccDiv").hide();
		$("#custH3").hide();
		$("#custAccDiv").hide();
		$("#reportsH3").show();
		$("#reportsAccDiv").show();
		$("#customersH3").hide();
		$("#customersAccDiv").hide();
		$("#staffsH3").hide();
		$("#staffAccDiv").hide();
		$("#customersH3").hide();
		$("#customersAccDiv").hide();
		$("#staffsH3").hide();
		$("#staffAccDiv").hide();

		$("#fromDate").datepicker();
		$("#fromDate").datepicker('setDate', new Date());

		$("#toDate").datepicker();

	};

	// declaration for hideLoading
	var hideLoading = function() {
		jQuery("#lui_transaction-report-grid").hide();
		jQuery("#load_transaction-report-grid").hide();

	};
	var clearFormFields = function() {

	};
	onLoad();

	// for print grid
	jQuery("#transaction-report-grid").jqGrid(
			{
				datatype : "json",
				height : 'auto',
				width : '100%',
				rowNum : 30,
				rowList : [ 10, 20, 30 ],
				colNames : [ 'Bill No', 'Bill Date', 'Client', 'From Palace',
						'To Place', 'Total Amount' ],
				colModel : [ {
					name : 'billNo',
					index : 'billNo',
					width : 100,
					sorttype : "int"
				}, {
					name : 'billDate',
					index : 'billDate',
					width : 120,
					sorttype : "date",
					formatter : "date"
				}, {
					name : 'customerName',
					index : 'customerName',
					width : 100,
					editable : false
				}, {
					name : 'fromPlace',
					index : 'fromPlace',
					width : 100,
					editable : false
				}, {
					name : 'toPlace',
					index : 'toPlace',
					width : 100,
					editable : false
				}, {
					name : 'totalBillAmount',
					index : 'totalBillAmount',
					width : 180,
					align : "right",
					sorttype : "int"
				} ],

				viewrecords : true,
				sortname : 'billNo',
				loadOnce : false,
				gridview : true,
				viewrecords : true,
				caption : "Transaction Report from " + $("#fromDate").val()
						+ " till " + $("#toDate").val(),
				jsonReader : {
					root : "rows",
					page : "page",
					total : "total",
					records : "records",
					repeatitems : false,
					cell : "cell",
					id : "billNo"
				}
			});

	$('#searchBtn').click(
			function() {
				var fromDate = $("#fromDate").val();
				var toDate = $("#toDate").val();
				if (fromDate == "" || toDate == "") {
					showMessage("Enter FromDate and ToDate for Search");
				} else {
					$("#toDateLbl").text($("#toDate").val());
					$("#fromDateLbl").text($("#fromDate").val());
					var url = "getBillByDateForReport.html?fromDate="
							+ fromDate + "&toDate=" + toDate;

					$("#transaction-report-grid").jqGrid('setGridParam', {
						url : url,
						datatype : 'json',
						page : 1
					}).trigger("reloadGrid");

				}
			});

	$('#printBtn').click(function() {
		$("#printDiv").print();
	});

});

function showMessage(message) {
	$.growl({
		message : message,
		timeout : 3
	});
	$('#message').html(message);
	$('#message').show();
	$('#message').delay(3000).fadeOut();
};
