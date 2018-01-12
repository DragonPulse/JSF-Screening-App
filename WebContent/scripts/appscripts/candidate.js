

	$(function() {	
	
		
		//Load Doc type intitally
		$.ajax({
			url : 'getDocTypeList.html',
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
					$('#docType').html(options);
					//showMessage("Documents Type Loaded");
					//myApp.hidePleaseWait();
				}
			}
		});
		
		
		//Save Button of Modal
		$('#saveDialogBtn').click(function(event){
			sendData();
		});
		
		//Cancel Button of Modal
		$('#cancelDialogBtn').click(function(event){
			$('#uploadResumeModal').dialog("close");
		});
		
		
		//function for reloading the grid
		//Reload the Grid
		function reloadDocGrid(serverURL){
			$("#docs-items-grid").jqGrid('setGridParam', {
				url : serverURL,
				datatype : 'json',
				page : 1
			}).trigger("reloadGrid");
		}
		
		
		
		//upload Button of Modal
		$('#uploadDocBtn').click(function(event){
			if (validateDetailDescription()) {
				var result=uploadDocument();
				if(result){
					$('#uploadResumeModal').dialog("close");
					//Reload the Grid
					var serverURL="getAllDocsOfCandidate.html?candEmailId="+$("#candEmailTxt").val();
					reloadDocGrid(serverURL);
					
				}
				$('#docs-items-grid').trigger( 'reloadGrid' );
			}
		});
		
		//On Selection of Vendor Load Vendor DEtials
		$("#candVendorContNameTxt").change(function() {
			var vendorName = $("#candVendorContNameTxt").val();
			//myApp.showPleaseWait();
			//ajaxindicatorstart("Please Wait..");
			$.ajax({
				url : 'getVendorDetails.html?selectedVendor=' + vendorName,
				method : 'get',
				ContentType : 'json',
				success : function(response) {
					var options = '';
					if (response != null) {
						$("#candVendorTxt").val(response.vendorContactFirstName +" "+response.vendorContactLastName);
						$("#candVendorContNumTxt").val(response.vendorContactNum);
						$("#candVendorEmailTxt").val(response.vendorEmailId);
					}
				},
				failure : function() {
					alert(failure);
				},
				error: function(xhr, status, text) {
					showMessage("Something went wrong. Please contact Admin Team");
			    }
			});
		});
		
		
		//Fucntion to upload the  document
		
		function uploadDocument(){
			var file_data = $("#attchId").prop("files")[0];
			var candEmailId = $('#candEmailTxt').val();
			uploadFile(file_data, candEmailId);
			return true;
		}
		
		
		function validateDetailDescription(){
			var result = true;
			if($('#docDesc').val() == '' || $('#docType').val() == '' || $('#attchId').val() == '') {
				$("#mandatoryErrorMessage").text('** Please enter mandatory fields. **');
				result = false;
			} else {
				$("#mandatoryErrorMessage").text('');
			}
			
			return result;
		}
		
		function uploadFile(file_data,candEmailId){
	        var formdata = new FormData();
	        		
	        formdata.append("candEmailId", candEmailId);
	        formdata.append("fileData", file_data);
	        formdata.append("desc", $('#docDesc').val());
	        formdata.append("docType",$('#docType').val());
	        formdata.append("candEmailId",$('#candEmailTxt').val());
	        
	        var xhr = new XMLHttpRequest();       

	        xhr.open("POST","uploadFile.html", false);

	        xhr.send(formdata);

	        xhr.onload = function(e) {

	            if (this.status == 200) {
	              //file upload failed
	            	return false
	            } else {
	            	//file upload failed
	            	alert('file upload failed.')
	            	return false;
	            }

	        };  
	        return true;
		}
		
		//Validate to check if candidate details is entered at first
		function validateCandDetail(){
			var result = true;
			if($('#candFirstNameTxt').val() == '' || $('#candLastNameTxt').val() == '' || $('#candContactTxt').val() == '' || $('#candEmailTxt').val() == '') {
				showMessageWithClass("Please Enter All Mandatory Fields before uploading the Documents","info");
				return false;
				
			} else {
				$("#mandatoryErrorMessage").text('');
			}
			
			var emailValid=validateEmail($('#candEmailTxt').val());
			if(emailValid==false){
				showMessageWithClass("Email Address not Valid","info");
				return false;
			}
			
			
			return result;
		}
		
		//Function to open the modal
		var dialog11;
		$('#openUploadResumeModal').click(function(event) {
			if(validateCandDetail()){
				event.preventDefault();
				dialog11 = $("#uploadResumeModal").dialog({
					width : 650,
					height : 500,
					modal : true,

					close : function(event, ui) {
						$("#dialog").remove();
					}
				});
			}
			
		}); // close click
		
		
		//to clear earlier form action
		$('#leftnavform').attr("action", "");			
		
		//to display message
		var showMessageWithClass=function(message,classname){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').addClass(classname);
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		var showMessage=function(message){			
			$.growl({message: message, timeout:3});  	
			$('#message').html(message);
			$('#message').addClass("info");
			$('#message').show();
			$('#message').delay(3000).fadeOut();				
		};
		
		//onclick of save
		$("#saveBtn").click(function(){			
			var mandatoryFilled = validateMandatory();
			//alert(mandatoryFilled);
			if(mandatoryFilled==false){
				showMessageWithClass("Please Enter All Mandatory Fields","info");
				
			}else{
				$("#leftnavform").attr("action", "saveCandidate.html");
				$("#leftnavform").attr("method", "POST");
				$("#leftnavform").submit();
			}
			
		});
		
		//onlick of update
		$("#updateBtn").click(function(){			
			var mandatoryFilled = validateMandatory();
			//alert(mandatoryFilled);
			if(mandatoryFilled==false){
				showMessageWithClass("Please Enter All Mandatory Fields","info");
				
			}else{
				$("#leftnavform").attr("action", "updateCandidate.html");
				$("#leftnavform").attr("method", "POST");
				$("#leftnavform").submit();
			}
			
		});
		//FOr Cancel Button click
		$("#cancelBtn").click(function(){			
			$("#leftnavform").attr("action", "viewMyCandidates.html");
			$("#leftnavform").attr("method", "POST");
			$("#leftnavform").submit();
			});
		
		
		
		//validate item table
		var validateItems=function(){
			var recordsCount = jQuery("#docs-items-grid").jqGrid('getGridParam', 'records');
			return recordsCount;
		}
		
		//validate item table
		var validateMandatory=function(){			
			var candFirstName = $("#candFirstNameTxt").val().length;
			var candLastName = $("#candLastNameTxt").val().length;
			var candContact = $("#candContactTxt").val().length;
			var candEmail = $("#candEmailTxt").val().length;
			if(candFirstName==0 && candLastName==0 &&  candContact==0 && candEmail==0 ){
				return false;
			}
			return true;
		}
		
		//declaration for onload 
		var onLoad = function(){
			$("#accordion").accordion();
			$('#message').hide();
			//To display
			$("#candidatesH3").show();
			$("#candidatesAccDiv").show();
		
			$("#vendorsH3").hide();
			$("#vendorsAccDiv").hide();
			
			
			$("#appCodesH3").hide();
			$("#appCodesAccDiv").hide();
			$("#custH3").hide();
			$("#custAccDiv").hide();
			$("#reportsH3").hide();
			$("#reportsAccDiv").hide();
			$("#customersH3").hide();
			$("#customersAccDiv").hide();
			$("#staffsH3").hide();
			$("#staffAccDiv").hide();
			$("#customersH3").hide();
			$("#customersAccDiv").hide();
			$("#staffsH3").hide();
			$("#staffAccDiv").hide();
			
			$('#candContactTxt').mask("(999) 999-9999"); 
			
			$("#docType").select2({
				placeholder : "Select a Document Type",
				allowClear : true
			});
			
			//Load Env intitally
			$.ajax({
				url : 'getAllVendorsList.html',
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
						$('#candVendorContNameTxt').html(options);
						//showMessage("Vendors List Loaded");
					}
				}
			});
			//load Emploment type
			$.ajax({
				url : 'getAllEmploymentType.html',
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
						$('#candEmpTxt').html(options);
						//showMessage("Vendors List Loaded");
					}
				}
			});
			
			//load Rates from appCOde
			$.ajax({
				url : 'getAllJoiningTime.html',
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
						$('#candJoinTimeTxt').html(options);
						//showMessage("Vendors List Loaded");
					}
				}
			});
			
			
			$("#candJoinTimeTxt").select2();
			$("#candEmpTxt").select2();
			$("#candVendorContNameTxt").select2();
			
		};	
		
		//declaration for hideLoading
		var hideLoading = function () {   		 
    		jQuery("#lui_docs-items-grid").hide();
    		jQuery("#load_docs-items-grid").hide();
	 	};
	 	
	 	var clearFormFields = function(){
		 };		 
		 
		 onLoad();	
		 //on click of next button		 
		
		 
		 
		 //on click of clear button
		
	
		
     	//For Loading Grid Group Search Results
		var url; 
		if(editFlag==true || editFlag=='true'){
			 url="getAllDocsOfCandidateById.html?selectedCandidateId="+candidateId;
		}else{
			
		}
		jQuery("#docs-items-grid").jqGrid({
					datatype : "json",
					rowNum : 5,
					url:url,					
					colNames : [ 'Document Name','Document Type', 'Uploaded By','Uploaded Date'],
					colModel : [					           
					 {
						name : 'docName',
						index : 'docName',
						align : "Left",
						width : 250	,
						editable:true,
						editrules:{number:true}
					},  {
						name : 'docType',
						index : 'docType',
						width : 250,
						align : 'center'
						
					}, {
						index : 'docUploadedBy',
						width : 250
					
					}, {
						name : 'docUploadDate',
						index : 'docUploadDate',
						width : 250,
						align : 'center'	
					}],
					pager : "#docs-items-grid-pager",
					height : '120px',
					gridview : true,
					viewrecords : true,
					sortorder : "asc",
					scroll : false,
					caption : "Documents of Candidates",
					search : false,
					width:'auto',
					hidegrid: false,
					//footerrow : true,

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
						cell : "cell"
					}
				});
		
		jQuery("#docs-items-grid")
		.navGrid('#docs-items-grid-pager',{edit:false,add:false,del:false,search:false},
	      { // edit options 
            url: 'editItem.html',
            closeAfterEdit: true
           // afterComplete:processAddEdit            
        },
        { // add
            url: 'addItem.html',
            closeAfterAdd: false,
            afterSubmit : function(response, postdata) {
            	return GetResponseData(response); 
            } ,
            //afterComplete:processAddEdit,          
            reloadAfterSubmit:true 
        })
	
        
      //VAlidate the Edit Flag and display the update/save button
		if(editFlag==true || editFlag=='true'){
			$('#updateBtn').show();
			$('#updateHeader').show();
			$('#saveBtn').hide();
			$('#addHeader').hide();
			var url="getAllDocsOfCandidateById.html?selectedCandidateId="+candidateId
			$("#docs-items-grid").jqGrid('setGridParam', {
				url : url,
				datatype : 'json',
				page : 1
			}).trigger("reloadGrid");
			
			
		}else{
			$('#updateBtn').hide();
			$('#updateHeader').hide();
			$('#saveBtn').show();
			$('#addHeader').show();
		}
		
		
	});
	
	function validateEmail(email) { 
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}

	
	function GetResponseData (resp) {
        var json=resp.responseText;  //format is {errno:(int),errmsg:"",query:""}
        var result=eval("("+json+")");
        return [result.success,result.message,result.msgNo];
    }
