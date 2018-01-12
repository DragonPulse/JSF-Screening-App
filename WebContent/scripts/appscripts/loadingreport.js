
$(function() {

	//to clear earlier form action
	$('#leftnavform').attr("action", "");

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

	//to display message with class
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

	//funciton on next

	//declaration for onload 
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
		$('#wizard').smartWizard({
			transitionEffect : 'slideleft',
			onLeaveStep : leaveAStepCallback,
			onFinish : onFinishCallback,
			enableFinishButton : true
		});

		$("#fromDate").datepicker();
		$("#fromDate").datepicker('setDate', new Date());

		$("#toDate").datepicker();

	};

	function leaveAStepCallback(obj) {
		var step_num = obj.attr('rel');
		return validateSteps(step_num);
	}

	//declaration for hideLoading
	var hideLoading = function() {

		jQuery("#lui_user-bills-grid").hide();
		jQuery("#load_user-bills-grid").hide();

	};
	var clearFormFields = function() {

	};
	onLoad();
	//on click of next button		 

	//on click of clear button

	//For Loading Grid Group Search Results

	jQuery("#user-bills-grid").jqGrid(
			{
				datatype : "json",
				rowNum :20,

				rowList : [ 5, 10, 15, 20 ],
				colNames : [ 'Bill Number', 'Bill Date', 'Customer Name',
						'Bill Amount' ],
				colModel : [

				{
					name : 'billNo',
					index : 'billNo',
					align : "Left",
					width : 200,
					align : 'center'

				}, {
					name : 'billDate',
					index : 'billDate',
					width : 200,
					align : 'center',
					sorttype : 'date',
					formatter : 'date',
					formatoptions : {
						newformat : 'd/m/Y'
					},
					datefmt : 'd-M-Y'
				}, {
					name : 'customerName',
					index : 'customerName',
					width : 200,
					align : 'center'
				}, {
					name : 'billAmount',
					index : 'billAmount',
					width : 200,
					align : 'center'
				} ],
				pager : "#user-bills-grid-pager",
				height : 'auto',
				loadonce : true,
				gridview : true,
				viewrecords : true,
				sortorder : "asc",
				multiselect : true,
				scroll : false,
				caption : "Search Results:",
				search : true,
				width : '80%',
				hidegrid : false,
				loadComplete : function() {
					hideLoading();
				},
				loadError : function() {
					hideLoading();
				},
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

	jQuery("#user-bills-grid").jqGrid('filterToolbar', {
		stringResult : true,
		searchOnEnter : false
	});

	jQuery("#user-bills-grid").jqGrid('navGrid', '#user-bills-grid', {});

	$('#searchBtn').click(
			function() {
				var fromDate = $("#fromDate").val();
				var toDate = $("#toDate").val();
				if (fromDate == "" || toDate == "") {
					showMessage("Enter FromDate and ToDate for Search");
				} else {
					var selectBillNos = getBillIds();
					var url = "getAllBillsByDate.html?fromDate=" + fromDate
							+ "&toDate=" + toDate;
					$("#user-bills-grid").jqGrid('setGridParam', {
						url : url,
						datatype : 'json',
						page : 1
					}).trigger("reloadGrid");

				}
			});

	jQuery("#detail-bills-grid").jqGrid(
			{
				datatype : "json",
				height : 'auto',
				rowNum : 30,
				rowList : [ 10, 20, 30 ],
				colNames : [ '', 'Bill No', 'Bill Date', 'Client', 'To Place',
						'Item Name', 'Item Quantity', 'Loading Quantity',
						'Total' ],
				colModel : [ {
					name : 'idBillItem',
					index : 'idBillItem',
					width : 60,
					sorttype : "int",
					hidden : true
				}, {
					name : 'billNo',
					index : 'billNo',
					width : 60,
					sorttype : "int"
				}, {
					name : 'billDate',
					index : 'billDate',
					width : 90,
					sorttype : "date",
					formatter : "date"
				}, {
					name : 'customerName',
					index : 'customerName',
					width : 100,
					editable : false
				}, {
					name : 'toPlace',
					index : 'toPlace',
					width : 100,
					editable : false
				}, {
					name : 'itemName',
					index : 'itemName',
					width : 100,
					editable : false
				}, {
					name : 'itemQuantity',
					index : 'itemQuantity',
					width : 100,
					editable : false
				}, {
					name : 'loadingQty',
					index : 'loadingQty',
					width : 80,
					align : "right",
					sorttype : "int",
					editable : true,
					editrules : {
						required : true,
						number : true
					}
				}, {
					name : 'totalAmount',
					index : 'totalAmount',
					width : 80,
					align : "right",
					sorttype : "float"
				} ],
				pager : "#detail-bills-grid-pager",
				viewrecords : true,
				sortname : 'billNo',
				grouping : true,
				loadonce : true,
				gridview : true,
				viewrecords : true,
				groupingView : {
					groupField : [ 'billNo' ]
				},
				caption : "Items Details with Bill Number:",
				jsonReader : {
					root : "rows",
					page : "page",
					total : "total",
					records : "records",
					repeatitems : false,
					cell : "cell",
					id : "idBillItem"
				}
			});

	jQuery("#detail-bills-grid").navGrid('#detail-bills-grid-pager', {
		edit : true,
		add : false,
		del : false,
		search : false
	}, { // edit options 
		url : 'editItemForLoading.html',
		closeAfterEdit : true,
		afterSubmit : function(response, postdata) {
			return GetResponseData(response);
		},
		afterComplete : processAddEdit,
		reloadAfterSubmit : true
	// afterComplete:processAddEdit            
	}, { // add
		url : 'addItem.html',
		closeAfterAdd : false,
		afterSubmit : function(response, postdata) {
			return GetResponseData(response);
		},
		//afterComplete:processAddEdit,          
		reloadAfterSubmit : true
	})

	//for print grid
	jQuery("#print-bills-grid").jqGrid(
			{
				datatype : "json",
				height : 'auto',
				rowNum : 30,
				rowList : [ 10, 20, 30 ],
				colNames : [ '', 'Bill No', 'Bill Date', 'Client', 'To Place',
						'Item Name', 'Item Quantity', 'Loading Quantity',
						'Total' ],
				colModel : [ {
					name : 'idBillItem',
					index : 'idBillItem',
					width : 60,
					sorttype : "int",
					hidden : true
				}, {
					name : 'billNo',
					index : 'billNo',
					width : 60,
					sorttype : "int"
				}, {
					name : 'billDate',
					index : 'billDate',
					width : 90,
					sorttype : "date",
					formatter : "date"
				}, {
					name : 'customerName',
					index : 'customerName',
					width : 100,
					editable : false
				}, {
					name : 'toPlace',
					index : 'toPlace',
					width : 100,
					editable : false
				}, {
					name : 'itemName',
					index : 'itemName',
					width : 100,
					editable : false
				}, {
					name : 'itemQuantity',
					index : 'itemQuantity',
					width : 100,
					editable : false
				}, {
					name : 'loadingQty',
					index : 'loadingQty',
					width : 80,
					align : "right",
					sorttype : "int",
					editable : true,
					editrules : {
						required : true,
						number : true
					}
				}, {
					name : 'totalAmount',
					index : 'totalAmount',
					width : 80,
					align : "right",
					sorttype : "float"
				} ],

				viewrecords : true,
				sortname : 'billNo',
				grouping : true,
				loadonce : true,
				gridview : true,
				viewrecords : true,
				groupingView : {
					groupField : [ 'billNo' ]
				},
				caption : "Items List",
				jsonReader : {
					root : "rows",
					page : "page",
					total : "total",
					records : "records",
					repeatitems : false,
					cell : "cell",
					id : "idBillItem"
				}
			});

});

function processAddEdit(response, postdata) {

}

function GetResponseData(resp) {
	var json = resp.responseText;
	var result = eval("(" + json + ")");
	return [ result.success, result.message, result.msgNo ];
}

function getBillIds() {
	var memberGrid = $("#user-bills-grid");
	var selectedRowIds = memberGrid.jqGrid('getGridParam', 'selarrrow');
	var names = [];
	if (selectedRowIds != null && selectedRowIds.length > 0) {
		for ( var i = 0, il = selectedRowIds.length; i < il; i++) {
			var name = memberGrid
					.jqGrid('getCell', selectedRowIds[i], 'billNo');
			names.push(name);
		}
	}
	return names;
}

function onFinishCallback() {
	if (validateAllSteps()) {
		$('#wizard').smartWizard('showMessage', 'Finish Clicked');
		$("#printDiv").print();
		$.get("saveLoaded.html", function(data) {
			showMessage(data.message);
		});
		$('form').submit();
	}

}

function validateAllSteps() {
	var isStepValid = true;

	if (validateStep1() == false) {
		isStepValid = false;
		$('#wizard').smartWizard('setError', {
			stepnum : 1,
			iserror : true
		});

	} else {
		$('#wizard').smartWizard('setError', {
			stepnum : 1,
			iserror : false
		});
		//          alert("call Server and load subtable");
		callServerForDetails();

	}

	if (!isStepValid) {
		$('#wizard').smartWizard('showMessage',
				'Please correct the errors the steps and continue');
	}

	return isStepValid;
}

function validateSteps(step) {
	var isStepValid = true;
	// validate step 1
	if (step == 1) {
		if (validateStep1() == false) {
			isStepValid = false;
			$('#wizard').smartWizard(
					'showMessage',
					'Please select few Bills from the Result in step' + step
							+ ' and click next.');
			$('#wizard').smartWizard('setError', {
				stepnum : step,
				iserror : true
			});
		} else {
			$('#wizard').smartWizard('setError', {
				stepnum : step,
				iserror : false
			});
			//alert("Call Server to show sub table")
			callServerForDetails();
		}
	}
	// validate step3
	if (step == 3) {
		if (validateStep3() == false) {
			isStepValid = false;
			$('#wizard').smartWizard(
					'showMessage',
					'Please Enter Mandatory Fields in step' + step
							+ ' and click next.');
			$('#wizard').smartWizard('setError', {
				stepnum : step,
				iserror : true
			});
		} else {
			$('#wizard').smartWizard('setError', {
				stepnum : step,
				iserror : false
			});
			submitStep3();
		}
	}

	return isStepValid;
}

function validateStep1() {
	var isValid = true;
	// Validate Username
	var selectedBills = getBillIds();
	if (selectedBills == 0) {
		isValid = false;
	}
	return isValid;
}

function validateStep3() {
	var isValid = true;
	//validate email  email
	var fromPlace = $('#fromPlace').val();
	var toPlace = $('#toPlace').val();
	var vehicleNo = $('#vehicleNo').val();
	if (fromPlace.length == 0 || toPlace.length == 0 || vehicleNo.length == 0) {
		isValid = false;
	}
	return isValid;
}

// Email Validation
function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(
			/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(emailAddress);
}

function callServerForDetails() {
	var selectBillNos = getBillIds();
	var url = "getItemsForSelectedBill.html?selectedBills=" + selectBillNos;
	$("#detail-bills-grid").jqGrid('setGridParam', {
		url : url,
		datatype : 'json',
		page : 1
	}).trigger("reloadGrid");
}

function submitStep3() {
	var url = "setVehicleDetails.html?vehicleNo=" + $("#vehicleNo").val()
			+ "&fromPlace=" + $("#fromPlace").val() + "&toPlace="
			+ $("#toPlace").val();
	$.get(url, function(data) {
		$("#vehicleNoLbl").text(data.vehicleNo);
		$("#fromPlaceLbl").text(data.fromPlace);
		$("#toPlaceLbl").text(data.toPlace);
	});

	var url = "getEditedLoadedReports.html";
	$("#print-bills-grid").jqGrid('setGridParam', {
		url : url,
		datatype : 'json',
		page : 1
	}).trigger("reloadGrid");
}

function showMessage(message) {
	$.growl({
		message : message,
		timeout : 3
	});
	$('#message').html(message);
	$('#message').show();
	$('#message').delay(3000).fadeOut();
};
