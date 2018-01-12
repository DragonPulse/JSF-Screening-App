

	$(function() {	
		
			
		//VAlidate the Edit Flag and display the update/save button
		if(editFlag==true || editFlag=='true'){
			$('#updateBtn').show();
			$('#updateHeader').show();
			$('#saveBtn').hide();
			$('#addHeader').hide();
		}else{
			$('#updateBtn').hide();
			$('#updateHeader').hide();
			$('#saveBtn').show();
			$('#addHeader').show();
		}
		
		//Validate to check if candidate details is entered at first
		function validateVendDetail(){
			var result = true;
			if($('#vendorCompTxt').val() == '' || $('#vendFirstNameTxt').val() == '' || $('#vendLastNameTxt').val() == '' || $('#vendContactTxt').val() == '' ||$('#vendEmailTxt').val() == '') {
				showMessageWithClass("Please Enter All Mandatory Fields ","info");
				return false;
				
			} else {
				$("#mandatoryErrorMessage").text('');
			}
			
			var emailValid=validateEmail($('#vendContactTxt').val());
			if(emailValid==false){
				showMessageWithClass("Email Address not Valid","info");
				return false;
			}
			
			
			return result;
		}
		
		
		
		
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
				$("#leftnavform").attr("action", "saveVendor.html");
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
				$("#leftnavform").attr("action", "updateVendor.html");
				$("#leftnavform").attr("method", "POST");
				$("#leftnavform").submit();
			}
			
		});
		
		//FOr Cancel Button click
		$("#cancelBtn").click(function(){			
			$("#leftnavform").attr("action", "viewAllVendors.html");
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
			var vendCompName = $("#vendorCompTxt").val().length;
			var vendFirstName = $("#vendFirstNameTxt").val().length;
			var vendLastName = $("#vendLastNameTxt").val().length;
			var vendContactNum = $("#vendContactTxt").val().length;
			var vendEmail = $("#vendEmailTxt").val().length;
			if(vendCompName==0 || vendFirstName==0 ||  vendLastName==0 || vendContactNum==0 || vendEmail==0){
				return false;
			}
			return true;
		}
		
		//declaration for onload 
		var onLoad = function(){
			$("#accordion").accordion();
			$('#message').hide();
			//To display
			$("#candidatesH3").hide();
			$("#candidatesAccDiv").hide();
		
			$("#vendorsH3").show();
			$("#vendorsAccDiv").show();
			
			
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
			
			$('#vendContactTxt').mask("(999) 999-9999"); 
			
			
		};	
		
		//declaration for hideLoading
		var hideLoading = function () {   		 
    		jQuery("#lui_docs-items-grid").hide();
    		jQuery("#load_docs-items-grid").hide();
	 	};
	 	
	 	var clearFormFields = function(){
		 };		 
		 
		 onLoad();	
		
		
	
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
