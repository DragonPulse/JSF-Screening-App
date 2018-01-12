

	$(function() {		
		
		
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
			if(mandatoryFilled==false){
				showMessageWithClass("Please Enter All Mandatory Fields","info");
				
			}else{
				$("#leftnavform").attr("action", "saveUser.html");
				$("#leftnavform").attr("method", "POST");
				$("#leftnavform").submit();
			}
			
		});
		
		//onclick of editSave
		$("#editSaveBtn").click(function(){			
			var mandatoryFilled = validateMandatory();
			if(mandatoryFilled==false){
				showMessageWithClass("Please Enter All Mandatory Fields","info");
				
			}else{
				$("#leftnavform").attr("action", "saveUser.html?id="+$("#personId").val());
				$("#leftnavform").attr("method", "POST");
				$("#leftnavform").submit();
			}
			
		});
		
		//FOr Cancel Button click
		$("#cancelBtn").click(function(){
			$("#leftnavform").attr("action", "viewUsers.html");
			$("#leftnavform").attr("method", "POST");
			$("#leftnavform").submit();
			});
		
	
	
		
	
		
		//validate item table
		var validateMandatory=function(){			
			var title =$("#titleTxt option:selected").text();	
			var role =$("roleTxt option:selected").text();
			var gender = $("#genderTxt option:selected").text();	
			var firstName = $("#firstNameTxt").val();
			var lastName = $("#lastNameTxt").val();
			var mobileNo = $("#mobileNoTxt").val();
			if($.trim(title).length == 0 && $.trim(gender).length == 0 && $.trim(firstName).length==0 && $.trim(lastName).length==0 && $.trim(mobileNo).length==0){
				return false;
			}
			if($.trim(role).length==0){
				$.trim(role).length==0
			}
			var userName,password;
			
			if($("#appAccessTxt").prop("checked")){
				userName = $("#userNameTxt").val();
				password = $("#passwordTxt").val();
				if($.trim(userName).length == 0 ){ 
					return false;
				}
				if($.trim(password).length == 0){
					return false;
				}
	
			}
			return true;
		};
		
		//declaration for onload 
		var onLoad = function(){
			
			$('#mobileNoTxt').mask("99999-99999"); 
			$("#accordion").accordion();
			$('#message').hide();
			$("#billingH3").hide();
			$("#billingAccDiv").hide();
			$("#appCodesH3").hide();
			$("#appCodesAccDiv").hide();
			$("#custH3").hide();
			$("#custAccDiv").hide();
			$("#reportsH3").hide();
			$("#reportsAccDiv").hide();
			$("#customersH3").show();
			$("#customersAccDiv").show();
			$('#customersAccDiv').addClass("ui-accordion-group-selected");
			$("#staffsH3").show();
			$("#staffAccDiv").show();
			
		};	
		
		//declaration for hideLoading
		var hideLoading = function () {   		 
    		jQuery("#lui_bill-items-grid").hide();
    		jQuery("#load_bill-items-grid").hide();
	 	};
	 	
	 	var clearFormFields = function(){
		 };		 
		 
		 onLoad();	
		
	
	});
	
	
	
	function GetResponseData (resp) {
        var json=resp.responseText;  //format is {errno:(int),errmsg:"",query:""}
        var result=eval("("+json+")");
        return [result.success,result.message,result.msgNo];
    }
