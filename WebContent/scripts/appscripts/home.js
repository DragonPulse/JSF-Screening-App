$(function() {

	//Date Range
	$('#dataRange').daterangepicker(null, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
        alert(start.toISOString());
        
      });
	
	
	//Load the Job Names based on Env
	$("#envName").change(function() {
		var envValues = $("#envName").val();
		myApp.showPleaseWait();
		$.ajax({
			url : 'getUniqueJobNames.do?selectedEnv=' + envValues,
			method : 'get',
			ContentType : 'json',
			success : function(response) {
				var options = '';
				if (response != null) {
					$(response).each(function(index, value) {
						options = options + '<option>' + value + '</option>';
					});
					
					$('#jobName').html(options);
					showMessage("Job Names List Loaded");
					myApp.hidePleaseWait();
				}
			},
			failure : function() {
				alert(failure);
			}
		});
	});

	/*//Fucntion to get trigegr on geenrate click
	$('#generateBtn').on(
			'click',
			function() {
				$('#results').hide();
				myApp.showPleaseWait();
				var mandatory = validateMandatory();
				if (mandatory) {
					var selectedEnv = $("#envName").val();
					var selectedJob = $("#jobName").val();
					$.ajax({
						type : 'POST',
						url : 'generateOutput.do?selectedEnv=' + selectedEnv
								+ '&jobName=' + selectedJob,
						dataType : 'json',
						success : function(json) {
							if (json.isSuccess) {
								//$('#results').show();
								$('#jobNameResult').html(
										"<span><b>" + selectedJob
												+ "</b></span>");
								$('#totRecords').html(
										"<span><b>" + json.totalRecordsRead
												+ "</b></span>");
								$('#totRunTime').html(
										"<span><b>" + json.totalTimeTaken
												+ " secs</b></span>");
								$('#avgRecordsPerRun').html(
										"<span><b>" + json.avgRecordsPerRun
												+ "</b></span>");
								$('#avgTimePerRun').html(
										"<span><b>" + json.avgTimePerRun
												+ " secs</b></span>");
								$('#avgTimePerRecord').html(
										"<span><b>" + json.avgTimePerRecord
												+ " secs</b></span>");

								reloadGraph();
								myApp.hidePleaseWait();
							} else {
								showMessage("SomeThing Went Wrong .");
								myApp.hidePleaseWait();
							}

						}
					});
					return false;
				} else {
					myApp.hidePleaseWait();
					showMessage("Please check for required fields .");
					return false;
				}

			});*/

	//Mandatory fields for Registratoion
	var validateMandatory = function() {
		var selectedEnv = $("#envName").val();
		var selectedJob = $("#jobName").val();
		if (selectedEnv.length == 0 && selectedJob.length == 0) {
			return false;
		}

		return true;
	}

	// to display message
	var showMessage = function(message) {
		$.growl({
			message : message,
			timeout : 5
		});
		$('#message').html(message);
		$('#message').show();
		$('#message').delay(9000).fadeOut();
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
		$('#message').delay(9000).fadeOut();
	};

	//to display message
	var showMessage = function(message) {
		$.growl({
			message : message,
			timeout : 3
		});
		$('#message').html(message);
		$('#message').addClass("info");
		$('#message').show();
		$('#message').delay(9000).fadeOut();
	};

	// declaration for onload
	var onLoad = function() {
		$('#message').hide();
		$('#searchResultsPanel').hide();
		$('#targetDiv').hide();
		
		$("#envName").select2({
			placeholder : "Select a Environment",
			allowClear : true
		});
		$("#jobName").select2({
			placeholder : "Select a Job",
			allowClear : true
		});

		myApp.showPleaseWait();

		$.ajax({
			url : 'getEnvList.do',
			method : 'get',
			ContentType : 'json',
			success : function(response) {
				var options = '';
				if (response != null) {
					$(response).each(function(index, value) {
						options = options + '<option>' + value + '</option>';
					});
					options = options
							+ '<option selected="selected"></option>';
					$('#envName').html(options);
					showMessage("Env List Loaded");
					myApp.hidePleaseWait();
				}
			}
		});

	};

	var reloadGraph = function() {
		$("#target").html("");
		$('#source').tableBarChart('#target', '', true);
		$("#source").hide();
	};

	var myApp;
	myApp = myApp
			|| (function() {
				var pleaseWaitDiv = $('<div class="modal hide" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false"><div class="modal-header"><h1>Processing...</h1></div><div class="modal-body"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div></div>');
				return {
					showPleaseWait : function() {
						pleaseWaitDiv.modal();
					},
					hidePleaseWait : function() {
						pleaseWaitDiv.modal('hide');
					},

				};
			})();

	onLoad();
	//Grid Loading

	jQuery("#batch-grid").jqGrid(
			{
				datatype : "json",
				rowNum : 5,
				rowList : [ 5, 10, 15, 20,80 ],
				colNames : [ '', 'Batch Job Name', 'Total Records', 'Tl Run Time',
						'Avg.Records/Run', 'Avg.Time/Run','Avg.Time/Record'],
				colModel : [
						{
							name : 'jobName',
							width : 15,
							search : false,
							fixed : true,
							align : 'center',
							sortable : false,
							formatter : function(cellValue, option) {
								return '<input type="radio" name="'
										+ cellValue + '"  />';
							}
						}, {
							name : 'jobName',
							index : 'jobName',
							align : "Left",
							width : 250,
							align : 'center'
						}, {
							name : 'totalRecordsRead',
							index : 'totalRecordsRead',
							align : 'center',
							sorttype : 'float',
							formatter : 'number'
						}, {
							name : 'totalTimeTaken',
							index : 'totalTimeTaken',
							align : 'center',
							align : 'center',
							sorttype : 'float',
							formatter : 'number'
							
						}, {
							name : 'avgRecordsPerRun',
							index : 'avgRecordsPerRun',
							
							align : 'center',
							sorttype : 'float',
							formatter : 'number'
							
						},{
							name : 'avgTimePerRun',
							index : 'avgTimePerRun',
							
							align : 'center',
							sorttype : 'float',
							formatter : 'number'
						},{
							name : 'avgTimePerRecord',
							index : 'avgTimePerRecord',
							
							align : 'center',
							sorttype : 'float',
							formatter : 'number'
						} ],
				pager : "#batch-grid-pager",
				height : '140px',
				loadonce : true,
				gridview : true,
				viewrecords : true,
				sortorder : "asc",
				scroll : false,
				caption : "Batch Job Timings Results",
				search : true,
				width : '50%',
				hidegrid : false,
				loadComplete : function() {
					hideLoading();
				},
				loadError : function() {
					hideLoading();
				},
				beforeSelectRow : function(rowid, e) {
					var radio = $(e.target).closest('tr').find(
							'input[type="radio"]');
					radio.attr('checked', 'checked');
					
					return true; // allow row selection
				},
				onSelectRow : function(id, status) {
					var rowData = jQuery(this).getRowData(id);
					$('#targetDiv').show();
					//alert(rowData.jobName);
					showGraph(rowData);
												
				},
							
				jsonReader : {
					root : "rows",
					page : "page",
					total : "total",
					records : "records",
					repeatitems : false,
					cell : "cell"

				}
			});
	jQuery("#batch-grid").jqGrid('filterToolbar', {
		stringResult : true,
		searchOnEnter : false
	});
	
	//declaration for hideLoading
	var hideLoading = function () {
		jQuery("#lui_batch-grid").hide();
		jQuery("#load_batch-grid").hide();
		
		
 	};	
 	
 	//Fucntion to get trigegr on reset click
 	
 	$('#resetBtn').on(
			'click',
			function() {
				onLoad();

			});
 	//Fucntion to get trigegr on geenrate click
	$('#generateBtn').on(
			'click',
			function() {
				var mandatory = validateMandatory();
				if (mandatory) {
					$('#searchResultsPanel').show();
					$('#targetDiv').hide();
					var selectedEnv = $("#envName").val();
					var selectedJob = $("#jobName").val();
					var selectedDateRange = $("#dateRange").val();
					alert($("#dateRange").val());
					/*var serverURL="generateOutput.do?selectedEnv="+selectedEnv+"&jobName="+ selectedJob+"&dateRange="+selectedDateRange;
					$("#batch-grid").jqGrid('setGridParam', {url:serverURL,datatype:'json',page:1}).trigger("reloadGrid");
					return false;*/
				} else {
				
					showMessage("Please check for required fields .");
					return false;
				}

			});
	var showGraph=function(rowData){
		//alert(rowData.jobName);
		
		$('#selectedJob').html(
				"<span><b>" + rowData.jobName
						+ "</b></span>");
		$('#jobNameResult').html(
				"<span><b>" + rowData.jobName
						+ "</b></span>");
	/*	$('#totRecords').html(
				"<span><b>" + rowData.totalRecordsRead
						+ "</b></span>");*/
	/*	$('#totRunTime').html(
				"<span><b>" + rowData.totalTimeTaken
						+ " secs</b></span>");*/
		$('#avgRecordsPerRun').html(
				"<span><b>" + rowData.avgRecordsPerRun
						+ "</b></span>");
		$('#avgTimePerRun').html(
				"<span><b>" + rowData.avgTimePerRun
						+ " secs</b></span>");
		$('#avgTimePerRecord').html(
				"<span><b>" + rowData.avgTimePerRecord
						+ " secs</b></span>");
		reloadGraph();

	};

});
