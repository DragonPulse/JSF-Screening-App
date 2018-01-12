$(function() {
	
	$('#date_jit').datetimepicker();
	
	$('#date_dit').datepicker();
	
	$('#saveBtn').click(function(event){
		sendData();
	});
	
	$('#cancelBtn').click(function(event){
		$('#detailedDescModal').dialog("close");
	});

	
	function validateform(){  
		var name=document.myform.name.value;
		var date=document.myform.date.value;
		
		
		if (name==null || name==""){  
			  alert("Requested By can't be blank");  
			  return false;  
		}else if(date==null || date==""){
			alert("Date cant be null");
			return false;
		}
		
	}
	
	function sendData() {
		// event.preventDefault();
		if (validateDetailDescription()) {
			
			var existingValue = $('#fullDetailDescription').val();
			if(existingValue != ''){
				var newValue = existingValue+','+$('#detailedDesc').val();
				$('#fullDetailDescription').val(newValue);
			} else {
				$('#fullDetailDescription').val($('#detailedDesc').val());
			}
			
			
			
			var formData = $(this).serialize();
			var fullPath = $("#attchId").val();
			var filename = '';
			if (fullPath) {
				var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath
						.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
				filename = fullPath.substring(startIndex);
				if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
					filename = filename.substring(1);
				}
			}

			$.ajax({
				type : "POST",
				url : "saveDetailDescription.do",
				data : {
					"desc" : $('#detailedDesc').val(),
					"attachLink" : filename,
					"emailId" : $('#emailAddress').val(),
					"jiraId" : $('#jiraId').val(),
					"attachId" : file_data,
					"cgFmId" : $('#cgFmId').val()
				},

				success : function(response) {
					var serverURL = 'getDetailDescription.do?cgFmId='
							+ $('#cgFmId').val();
					$("#descList").jqGrid('setGridParam', {
						url : serverURL,
						datatype : 'json',
						page : 1
					}).trigger("reloadGrid");
					$("#dialog").remove();
				},
				error : function(e) {
					alert('Error: ' + e.message);
				}
			});

			var file_data = $("#attchId").prop("files")[0];
			var cgFmId = $('#cgFmId').val();
			uploadFile(file_data, cgFmId);
			
			$('#detailedDescModal').dialog("close");
		}
	}
	
	function validateDetailDescription(){
		var result = true;
		if($('#detailedDesc').val() == '' || $('#attchId').val() == '' || $('#emailAddress').val() == '' || $('#jiraId').val() == '') {
			$("#mandatoryErrorMessage").text('** Please enter mandatory fields. **');
			result = false;
		} else {
			$("#mandatoryErrorMessage").text('');
		}
		
		return result;
	}
	
	function uploadFile(file_data,cgFmId){
        var formdata = new FormData();
        formdata.append("cgFmId", cgFmId);
        formdata.append("fileData", file_data);

        var xhr = new XMLHttpRequest();       

        xhr.open("POST","uploadFile.do", true);

        xhr.send(formdata);

        xhr.onload = function(e) {

            if (this.status == 200) {
              //file upload failed
            } else {
            	//file upload failed
            	alert('file upload failed.')
            }

        };        
	}

	var dialog11;
	$('#openDescModal').click(function(event) {
		event.preventDefault();
		dialog11 = $("#detailedDescModal").dialog({
			width : 650,
			height : 500,
			modal : true,

			close : function(event, ui) {
				$("#dialog").remove();
			}
		});
	}); // close click

	var onLoad = function() {
		$('#message').hide();
		$('#fileUpload').hide();
		$('#fileChkbx').prop('checked', false);
	};

	$('#fileChkbx').click(function() {
		$("#fileUpload").toggle(this.checked);

	});

	onLoad();

	// Report Loading
	var handleAjaxError = function(jqXHR, textStatus, errorThrown) {
		alert(jqXHR);
		alert(textStatus);
		alert(errorThrown);
	}

	// Date time picker
	$('#depDateTime').datetimepicker({
		mask : '19/39/9999 29:59',
		format : 'm/d/Y H:i',
		step : '30'
	});

	$("#message").hide();

	// Smart Wizard
	$('#wizard').smartWizard({
		onFinish : onFinishCallback
	});

	function onFinishCallback(objs, context) {
		$('form').attr("action", "submitchangeform.do");
		$('form').attr("method", "validateform");
		$('form').submit();
	}

	// Jqgrid for Table to display detailed description
	jQuery("#descList").jqGrid(
			{
				url : 'getDetailDescription.do?cgFmId=' + $('#cgFmId').val(),
				datatype : "json",
				colNames : [ 'Sl No', 'Description', 'Attachments', 'Email Id',
						'Jira Ticket', '' ],
				colModel : [ {
					name : 'slno',
					index : 'slno',
					width : 45
				}, {
					name : 'desc',
					index : 'desc',
					width : 425,
					align : "left"
				}, {
					name : 'attachLink',
					index : 'attachLink',
					width : 100
				}, {
					name : 'emailId',
					index : 'emailId',
					width : 150,
					align : "center"
				}, {
					name : 'jiraId',
					index : 'jiraId',
					width : 150,
					align : "center"
				}, {
					name : 'delete',
					search : false,
					index : 'userId',
					width : 50,
					sortable : false,
					formatter : deleteLink
				}, ],
				rowNum : 10,
				rowList : [ 10, 20, 30 ],
				pager : '#descListPager',
				sortname : 'id',
				viewrecords : true,
				sortorder : "desc",
				width : '150%',
				caption : "Detailed Description"
			});
	jQuery("#descList").jqGrid('navGrid', '#descListPager', {
		edit : false,
		add : false,
		del : false
	});
	
	function deleteLink(cellvalue, options, rowdata) {
		var rowSlNo = rowdata.slno;
		return "<div class='ui-icon ui-icon-closethick'  onclick='deleteRecord(" +rowSlNo +");'/>";
	}
	
});
