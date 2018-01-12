$(function() {	
	$('#message').hide();

	function pimg(){ 
        this.xOffset = 180; 
        this.yOffset = 250; 
        $("a.pimg").hover(function (e){ 
        	this.img_title = this.title; 
            this.title = ""; 
            var name=this.id;
            var img_src = $(this).attr('img_src'); 
            var desc = (this.img_title != "") ? "<h3>" + this.img_title + "</h3>" : ""; 
            var image = (img_src) ? img_src : this.src; 
            
            $("#previewLogoDiv").append("<div id='pimg'><img  src='" + image + "' alt='Image preview' style='width:150px' />" + desc + "<br><p><strong>"+name+"</div>"); 
            //$("#pimg").css("top", (e.pageY - xOffset) + "px").css("left", (e.pageX + yOffset) + "px"); 
            $("#pimg").fadeIn(700); 
        }, function (){ 
            this.title = this.img_title; 
            $("#pimg").remove(); 
        }); 
            $("a.pimg").mousemove(function (e){ 
                   // $("#pimg").css("top", (e.pageY - xOffset) + "px").css("left", (e.pageX + yOffset) + "px"); 
        });

	};
	pimg();
	
	$("input[name*='group1']").click(function() {
		  //alert(this.id);
		 $("#logo").remove(); 
		var nextSibling = this.nextElementSibling;
		var logoName=(nextSibling.id);
		showMessage("Selected Logo : "+logoName);
		var name=nextSibling.id;
        var img_src = $(nextSibling).attr('img_src'); 
        var desc = (nextSibling.img_title != "") ? "<h3>" + nextSibling.img_title + "</h3>" : ""; 
        var image = (img_src) ? img_src : nextSibling.src; 
        $("#selectedLogo").append("<div id='logo'><img  src='" + image + "' alt='Image preview' style='width:150px' />" + desc + "<br><p><strong>"+name+"</div>"); 
    });
	
	//to display message
	var showMessage=function(message){			
		$.growl({message: message, timeout:3});  	
		$('#message').html(message);
		$('#message').show();
		$('#message').delay(3000).fadeOut();				
	};
	
	$("#executeBtn").click(function(){
			//alert(contextPath);
			var image = contextPath+"/images/ajax-loader.gif";
			$.blockUI({ message: "<img src='"+image+"' /> <br><h4>Will Open Channel. Please Wait</h4> "});
			setTimeout($.unblockUI, 4000); 
	});

});

