
var new_da;
var a_from="",a_to="",a_date=0;
function page(f,t,ddd,aa)
{	var f1=f;
$("#br").hide();
$("#br1").hide();
	 $("#u_details").hide();
	 $("#seatInfoHeading").hide();
	 $("#trip").hide();
	 $("#seatInfoHeading").hide();
	 $("#2d").hide();
	 $("#detailsss").show();
	 $("#tr_click").click(function(){
    	 
    	 $("#trip").slideToggle("slow");
    	 $("#detailsss").slideToggle("slow");
    	 a_date=ddd;
    	 a_from=f;
    	 a_to=t;
    	 callls();
    	 
      });
	var pairs;
	var d=new Array();
	
		from=f1;
		to=t;
		date=ddd;
		d=date.split("-");
		
		if(d.length>=2){date1=d[1]+"/"+d[2]+"/"+d[0];}
		else{date1=ddd;}
		//alert(date1);
		document.getElementById("from").innerHTML=from;
		document.getElementById("to").innerHTML=to;
		document.getElementById("date").innerHTML=date1.split("/")[1]+"/"+date1.split("/")[0]+"/"+date1.split("/")[2];
		if(date1=="null")
			{
		
			window.location.replace("Admin.do");
			
			}
		journey=date1;
		document.getElementById("journeyDate").setAttribute("value", date1);
		
		new_da=date1;
		 $("#u_details").hide();
		 $("#bus21").hide();
		 $("#hiding").hide();
		
		 //alert("data:"+new_da);
		 $("#load").show();
		
		 $("#details").hide();
		  $("#seatInfoHeading").hide();
		  $("#passes").show();
		  $("#passes1").hide();
		 $("#passanger").hide();
		 
		
	ajaxFunction2(from,to,date1,aa);// step 111111111
	// calling("book");
	
}

function mod_date(op,op1) {
	 $("#u_details").hide();
	 $("#bus21").hide();
	 $("#hiding").hide();
	$("#space").hide();

	 $("#load").show();
	
	 $("#details").hide();
	  $("#seatInfoHeading").hide();
	  $("#passes").show();
	  $("#passes1").hide();
	 $("#passanger").hide();
	   document.getElementById("bus21").style.border="0px solid #000000";
	
	 document.getElementById("passanger").innerHTML="<br><br><center><p>Please Select Your Favourite Seats...</p></center>"
	document.getElementById("table").innerHTML="<b>PLEASE WAIT....</b>";
	document.getElementById("bus").innerHTML="<center><br><br><blink>Please choose your bus<br><br></blink></center>";
	document.getElementById("bus_outer").innerHTML="";
	var ds=new Date();
	var d1 = new Date(new_da);
	
	if(op==1){
		if(d1.getDate()<=ds.getDate() && d1.getMonth()<=ds.getMonth()){ document.getElementById("lt").disabled =true; d1.setDate(d1.getDate()+1);document.getElementById("lt").style.color='black';
		document.getElementById("lt").style.backgroundColor="#2B697E";}
		else{ document.getElementById("lt").disabled = false;document.getElementById("lt").style.color='white';}
	 d1.setDate(d1.getDate()-1);
	 
	}
	else
		{

		d1.setDate(d1.getDate()+1);
		
	document.getElementById("lt").style.backgroundColor="#3e96b4";
	document.getElementById("lt").style.color='white';
		document.getElementById("lt").disabled = false;
		}
	  dd=d1.getDate();
	 mm=d1.getMonth();
	 yyyy=d1.getFullYear();
	 
	new_da=(mm+1)+'/'+dd+'/'+yyyy;
	document.getElementById("journeyDate").setAttribute("value", new_da);
	
	document.getElementById("date").innerHTML=new_da.split("/")[1]+"/"+new_da.split("/")[0]+"/"+new_da.split("/")[2];
	document.getElementById("date1").value=new_da;
var bb;
 if(op1!=1){
	 bb=1;
 }
 else
	 {
	 bb=0;
	 }
	ajaxFunction2(from,to,new_da,bb,op1);
} 





var journeyDate,serviceNumber;serviceNumber=new Array();
var source;source=new Array();
var destination;destination=new Array();
var busType;busType=new Array();
var date;date=new Array();

var departureTime=new Array();
var arrivalTime=new Array();
var fare=new Array();
var sourceId=new Array();
var destinationId=new Array();
var routeId=new Array();

function getXMLObject() 
{
	var xmlHttp = false;
	try {
	     	xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  // For Old Microsoft Browsers
	   	}
	catch (e) 
	{
	     try {
	       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  // For Microsoft IE 6.0+
	     }
	     catch (e2) {
	       xmlHttp = false;   // No Browser accepts the XMLHTTP Object then false
	     }
	}
	   if (!xmlHttp && typeof XMLHttpRequest != 'undefined') 
	   {
	     xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
	   }
	   return xmlHttp; 
}


var xmlhttp = new getXMLObject();	
var my=0,check=0;

function ajaxFunction2(from,to,date,vv,op1)
{
	
check=vv;

	  if(xmlhttp) {
		//  alert("2   "+vv);
			  var name=document.getElementById("u_name").value;//'user@limousine.com';
			  //alert("name:"+name);
			  var sourceId=from;
			  var destinationId=to;
			  journeyDate=date;
			 // var busId=1;
			 //alert(journeyDate);
			  if(vv==0){
			   url="../../../WebClient";
			  }else
				  {
				   url="WebClient";
				  }
		     xmlhttp.open("POST",url,true);
		     xmlhttp.onreadystatechange=handle;
		     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			    //alert("name: "+name);
			    dataType: "json";
			    xmlhttp.send('action=Booking/searchBus&userName='+name+'&sourceName='+sourceId+'&destinationName='+destinationId+'&journeyDate='+journeyDate+"&User=2");
			    
			   
			  }
		  
	}
function handle() 
{
	if (xmlhttp.readyState == 4) {//alert("status"+xmlhttp.status);
	     if(xmlhttp.status == 200) {
	    	 var output=xmlhttp.responseText;
	    	 var o1=output.split('//');
	    	 var ex=o1[1];
	    	 var js=o1[0];
	    	 document.getElementById("execuseme").value=js;
	    	 //alert("ex:"+js+" json"+ex);
	    	 				var jsondata=eval("("+ex+")");
	    	 				var rssentries=jsondata.busInfo;
	    	 				serviceNumber=new Array();
	    	 		    	 source=new Array();
	    	 		    	destination=new Array();
	    	 		    	 busType=new Array();
	    	 		    	 date=new Array();

	    	 		    	  departureTime=new Array();
	    	 		    	  arrivalTime=new Array();
	    	 		    	  fare=new Array();
	    	 		    	  sourceId=new Array();
	    	 		    	  destinationId=new Array();
	    	 		    	 routeId=new Array();
	    	 				for (var i=0; i<rssentries.length; i++)
	    	 				{
	    	 				 serviceNumber[i]=rssentries[i].serviceNumber;
	    	 				 
	    	 				 busType[i]=rssentries[i].busType;
	    	 				 date1[i]=rssentries[i].date;
	    	 				 departureTime[i]=rssentries[i].departureTime;
	    	 				 arrivalTime[i]=rssentries[i].arrivalTime;
	    	 				 fare[i]=rssentries[i].fare;
	    	 				 sourceId[i]=rssentries[i].sourceName;
	    	 				 destinationId[i]=rssentries[i].destinationName;
	    	 				 routeId[i]=rssentries[i].routeId;
	    	 				}
	    	 				//alert("jj: "+check);
	    	 				if(rssentries.length!=0)
	    	 					{
	    	 					
		    	 					$("#load").show();
		    	 					$('#servicehead').show();
		    	 					//document.getElementById("rightsideinfo").innerHTML="<blink>Please wait!, your request is processing....</blink>";
		    	 					document.getElementById("table").innerHTML="<p>Please wait some moments....";
		    	 					//alert("Service no: "+serviceNumber+"src: "+sourceId+"destination: "+destinationId+"busType:"+busType+"date:"+journeyDate+"departureTime"+departureTime+"arrivalTime:"+arrivalTime+"fare"+fare+"route:"+routeId+"check"+check);
	    	 						avail(serviceNumber,sourceId,destinationId,busType,journeyDate,departureTime,arrivalTime,fare,routeId,check);
	    	 						//document.getElementById("rightsideinfo").innerHTML="<blink>Please choose your bus....</blink>";
	    	 					}
	    	 				else
	    	 					{
	    	 					 	$("#load").hide();
	    	 					 	$('#servicehead').hide();
	    	 					 	document.getElementById("rightsideinfo").innerHTML="<blink>Sorry, booking not yet opened.....</blink>";
	    	 						document.getElementById("table").innerHTML="<center><h4 style='color:red'>Sorry Booking not yet opened for selected date...</h4></center>";
	    	 						date123(journeyDate);
	    	 					}
	     }
	}
	
}


var dd,mm,yyyy,new_da;
function date123(ddddd)
{
	
	new_da=ddddd;
}


function avail(serviceNumber,source,destination,busType,da,departureTime,arrivalTime,fare,routeId,check)
{
	
	bus_Id=routeId;
	var serv=0;
	src_name=source;
	dest_name=destination;
	
	start2(serv,serviceNumber,source,destination,busType,da,departureTime,arrivalTime,fare,routeId,check);	
}




var serviceNumbe1;
var source1=4;
var destination1;
var busType2;
var date1;
var departureTime1;
var arrivalTime1;
var fare1;
var k=0;
var src;
var sourceId1;
var destinationId1;
var routeId1;
var check1;

// step 333333333333

function start2(serv,serviceNumber,source,destination,busType,date,departureTime,arrivalTime,fare,routeId,check) {
	
var j=serv;


if(serv==0){
	start1(serviceNumber,source,destination,busType,date,departureTime,arrivalTime,fare);
	serviceNumber1=serviceNumber;
	source1=source;
	destination1=destination;
	busType2=busType;
	
	date1=date;
	departureTime1=departureTime;
	arrivalTime1=arrivalTime;
	fare1=fare;
	check1=check;
	routeId1=routeId;
}
else if(serv>=1){	

	document.getElementById("passanger").innerHTML="<ceter>please select your favourite seat</center>";
			servicenumber=serviceNumber1[j-1];
			source=source1[j-1];
			destination=destination1[j-1];
			busType=busType2[j-1];
			
			busType1=busType;
			///alert("bussss"+busType1)
			date=date1;
			departureTime=departureTime1[j-1];
			arrivalTime=arrivalTime1[j-1];
			fare2=fare1[j-1];
			
			routeId=routeId1[j-1];
			//new imageLoader(cImageSrc, 'startAnimation()');
			$("#bus").hide();
			$("#2d").show();
			$("#br").hide();
			$("#br1").hide();
	//alert("busTypebusType="+busType);
        ajaxFunction1(servicenumber,source,destination,busType,date,departureTime,arrivalTime,fare2,routeId,check1);
       
}

}



    function start1(serviceNumber,source,destination,busType,date,departureTime,arrivalTime,fare) {
    	
        // get the reference for the body
    	$("#load").hide();
    	document.getElementById("table").innerHTML="";
    	var depat=new Array();
    	for( var uu=0;uu<departureTime.length;uu++)
    		{
    			var sp=departureTime[uu].split(' ');
    			var ree=sp[0].split(':');
    			var dep=ree[0]+":"+ree[1]+" "+sp[1];
    			depat[uu]=dep;
    		}
    	var arraiv=new Array();
    	for( var uu1=0;uu1<departureTime.length;uu1++)
    		{
    			var sp1=arrivalTime[uu1].split(' ');
    			var ree1=sp1[0].split(':');
    			var dep1=ree1[0]+":"+ree1[1]+" "+sp1[1];
    			arraiv[uu1]=dep1;
    		}
        var body = document.getElementById("table");
        var k=serviceNumber.length;
        
        // creates a <table> element and a <tbody> element
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");


        // creating all cells
        for (var j = 0; j < k; j++) {
            // creates a table row
            var row = document.createElement("tr");
            
            for (var i = 0; i < 5; i++) {
            	
            	if(i>-1){
            		if(i==0)
            		{
            		
            			var cell = document.createElement("td");
        		   		radioInput = document.createElement('input');
                		radioInput.setAttribute('type', 'radio');
                		radioInput.setAttribute('name', 'name');
                		radioInput.setAttribute("id", "rad");
                		
                		radioInput.setAttribute("onclick", "start2("+(j+1)+")");
                		cell.appendChild(radioInput);
        		   		var cellText = document.createTextNode(serviceNumber[j]);
            		
            		}
               if(i==1)
            	   {
            	  
            	   var cell = document.createElement("td");
      		   		var cellText = document.createTextNode(busType[j]); 		
            		   		
            		   
            	   }
               else if(i==2)
        	   {
            	   var cell = document.createElement("td");
     		   		var cellText = document.createTextNode(depat[j]);
       		   	   		   
        	   }
               else if(i==3)
        	   {
            	   var cell = document.createElement("td");
 		   			var cellText = document.createTextNode(arraiv[j]);   	
      		   		             
        	   }
               else if(i==4)
        	   {
            	   var cell = document.createElement("td");
		   			var cellText = document.createTextNode(fare[j]);  	   		   
        	   }
              
               
               cell.appendChild(cellText);
            	}
               row.appendChild(cell);
	cell.setAttribute("width","160");
	cell.setAttribute("height","30");
	cell.setAttribute("margin-left", "3px");
	cell.setAttribute("cellspaceing", "0");
	
            }


            // add the row to the end of the table body
            tblBody.appendChild(row);
        }


        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "0");
        tbl.setAttribute("cellspacing", "0");
        tbl.setAttribute("width", "800");
       // tbl.setAttribute("id", "b_table");
    }
  
    
	function ajaxFunction1(serviceNumber,source,destination,busType,date,departureTime,arrivalTime,fare,busId,check) {
		//alert("busType="+busType); 
//alert("pgm here...."+check);
	 ajaxFunctions3(source,destination,date,busId,fare,check,busType);

}
	

	
	function getXMLObject() {
		var xmlHttp = false;
		try {
		     xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  // For Old Microsoft Browsers
		   }
		catch (e) {
		     try {
		       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  // For Microsoft IE 6.0+
		     }
		     catch (e2) {
		       xmlHttp = false;   // No Browser accepts the XMLHTTP Object then false
		     }
		   }
		   if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
		     xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
		   }
		   return xmlHttp; 
	}
	var xmlhttp = new getXMLObject();	
	var my=0,src,dest,dat,rid,far;
	var busTypes;
	function ajaxFunctions3(sourceId,destinationId,date,routeId,fare,checkv,busType)
	{
		//alert("000");
	busTypes=busType;
		var isSleeper=false;
		 var splitData=busType.split(" ");
		 for(var s=0;s<splitData.length;s++)
		 {
			 if(splitData[s]=="Sleeper")
			 {
				 isSleeper=true;
			 }
		 }
		 //alert("splitData="+splitData+" busTypesbusTypes="+busTypes);
		src=sourceId;
		dest=destinationId;
		dat=date;
		rid=routeId;
		far=fare;
		 var url;
		 check=checkv;
	
		  if(xmlhttp) {
				  if(checkv==1)
					  {
					  if(isSleeper==true)
					  {
					  	url="staticdata/html/user/UserBookSeats_Sleeper.html";
					  }else
						  {
						  	url="staticdata/html/user/UserBookSeats.html";
						  }
					  
					  }
				  else{
					  if(isSleeper==true)
					  {
					  	url="../../html/user/UserBookSeats_Sleeper.html";
					  }else
						  {
						  url="../../html/user/UserBookSeats.html";
						  }
				 
				  }
			     xmlhttp.open("GET",url,true);
			     xmlhttp.onreadystatechange=handle1;
			     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    //alert("name: "+name);
				   // dataType: "json";
				    xmlhttp.send();
				    
				   
				  }
			  
		}
	function handle1() 
	{
		if (xmlhttp.readyState == 4) {
		     if(xmlhttp.status == 200) {
		    	//alert("result"+busTypes);
		    	 document.getElementById("bus").innerHTML=xmlhttp.responseText;
		    	 
		    	 		ajaxFunction11(src,dest,rid,far,check,busTypes);
		    	 	
		     }
		}
		
	}

	function ajaxFunction11(sourceId,destinationId,routeId,fare,check,busType) {
		//alert("src"+sourceId+"dest:"+destinationId+"rut: "+routeId+"fare: "+fare);
		document.getElementById("routeId").setAttribute("value", routeId);
	//alert(check);
		ajaxFunction(sourceId,destinationId,dat,routeId,fare,check,busType);
		
		}
	
	 var a_seats=new Array();
	 var b_seats;
	 var b_seats_l;
	 var blck_seats;
	 var routeId;
	 var board_time=new Array();
	 var time_am;
	 var time_pm;
	 var seat_name ,row, col;
	 var seat_dyn;
	 var data,booked_seats=0,available_seats=0;
	function getXMLObject() {
		var xmlHttp = false;
		try {
		     xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  // For Old Microsoft Browsers
		   }
		catch (e) {
		     try {
		       xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  // For Microsoft IE 6.0+
		     }
		     catch (e2) {
		       xmlHttp = false;   // No Browser accepts the XMLHTTP Object then false
		     }
		   }
		   if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
		     xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
		   }
		   return xmlHttp; 
	}
	var xmlhttp = new getXMLObject();	
	var my=0;
	var popup_data;
	
	function ajaxFunction(sourceId1,destinationId1,journeyDate1,busId1,fare1,check,busType)
	{//alert("yaya="+busType);
		var fare=fare1;
		popup_data=new Array();
		var splitData=busType.split(" ");
		var isSleeper=false;
		for(var s=0;s<splitData.length;s++)
			{
				if(splitData[s]=="Sleeper")
					{
						isSleeper=true;
					}
			}//alert("isSleeper="+isSleeper);
		  if(xmlhttp) {
				  var u_name=document.getElementById("u_name").value;//'admin';
				// alert("ok");
				  var sourceId=sourceId1;
				  var destinationId=destinationId1;
				  var journeyDate=journeyDate1;
				  var board_time1;
				  var busId=busId1;
				  var time=new Array();
				  b_seats=new Array();
				  b_seats_l=new Array();
				  blck_seats=new Array();
				  
				//alert("oooooooo")
				  var url;
				  if(check==0)
					  {
				  url="../../../WebClient";//check
				  
					  }
				  else
					  {
					  url="WebClient";
					  }
			    xmlhttp.open("POST",url,true); //gettime will be the servlet name
		 my= xmlhttp.onreadystatechange  = function()
		 {
			 

			   if (xmlhttp.readyState == 4) {
			     if(xmlhttp.status == 200) {
			    	 				var jsondata=eval("("+xmlhttp.responseText+")");
			    	 				board_time1=new Array();
			    	 				var rssentries=jsondata.adminBusLayoutCTO.adminSeatLayoutCTO;//json data
			    	 				row=jsondata.adminBusLayoutCTO.totalRow;
					    	 		 var r=row;
					    	 		 row=row+1;
			    	 				 col=jsondata.adminBusLayoutCTO.totalColumn;
			    	 				var route=jsondata.adminBusLayoutCTO.routeId;
			    	 				var board=jsondata.adminBusLayoutCTO.boardingPointsCTO;
			    	 				var avail_seats=new Array();
			    	 				var booked_seats1=new Array();
			    	 				var booked_seats_l=new Array();
			    	 				var boarding=new Array();
			    	 				var boarding1=new Array();
			    	 				seat_dyn=new Array();
			    	 				time_am=new Array();
			    	 				time_pm=new Array();
			    	 				seat_name=new Array();
			    	 				var ti="";
			    	 				
			    	 				popup_data=jsondata.adminBusLayoutCTO.adminSeatLayoutCTO;
			    	 				if(rssentries.length>0){
			    	 				//loop for booked seats & for ladies check
			    	 				for(var j=0;j<board.length;j++)
			    	 					{
			    	 						boarding1[j]=board[j].boardingPlace;
			    	 						board_time1[j]=board[j].boardingTime;
			    	 					}
			    	 				
			    	 				for(var z=0;z<board_time1.length;z++)
			    	 					{
			    	 						 time=board_time1[z].split(":");
			    	 						
			    	 						 if(time[0]<12)
			    	 							 {
			    	 							 	//alert(time[0]+"am");
			    	 							 	var nm=board_time1[z]+" am";
			    	 							 	time_am.push(nm);
			    	 							 }
			    	 						 else
			    	 							 {
			    	 							 //alert(time[0]+"pm");
			    	 							 var t=(time[0]-12);
			    	 							 
			    	 							  ti=t+":"+time[1]+":"+time[2]+" pm";
			    	 							
			    	 							// var nz=ti+;
			    	 							time_pm.push(ti);
			    	 							
			    	 							 }
			    	 						 
			    	 					}//alert("tt: "+time_pm);
			    	 				
			    	 				board_time1=time_am+time_pm;
			    	 				var boerd=board_time1.split(",");
			    	 				
			    	 				boarding[0]="------------select------------";
			    	 				for(var ii=1;ii<=boerd.length;ii++)
			    	 					{
			    	 					 boarding[ii]=boarding1[ii-1]+" "+boerd[ii-1];
			    	 					}
			    	 				//popup_data=rssentries.adminSeatLayoutCTO;
			    	 				for (var i=1; i<=rssentries.length; i++)
			    	 				{
			    	 		
			    	 					var b_seat=rssentries[i-1].seatStatus;
			    	 					var b_ladies=rssentries[i-1].isLadies;
			    	 					var b_gents=rssentries[i-1].isGents;
			    	 					
			    	 					 seat_name[i-1]=rssentries[i-1].seatName;
			    	 					//if(b_ladies)
			    	 					//alert("ladies: "+b_ladies);
			    	 					if(b_seat=='BOOKED')
			    	 					{
			    	 						booked_seats1[i-1]=(i);
			    	 						if(b_ladies){//alert(i); 
			    	 						booked_seats_l[i-1]=(i);}  //
			    	 						booked_seats=booked_seats+1;
			    	 					}
			    	 					else if(b_seat=='BLOCKED')
			    	 					{
			    	 						if(b_ladies){//alert(i);
			    	 						booked_seats_l[i-1]=(i);}	//
			    	 						avail_seats[i-1]=(i);
			    	 						available_seats=available_seats+1;
			    	 					}
			    	 					else if(b_seat=='TENTATIVE')
			    	 						{
			    	 						booked_seats1[i-1]=(i);
			    	 						if(b_ladies){//alert(i); 
			    	 						booked_seats_l[i-1]=(i);}  //
			    	 						booked_seats=booked_seats+1;
			    	 						}
			    	 					else
			    	 						{
			    	 						if(b_ladies){//alert(i); 
				    	 						booked_seats_l[i-1]=(i);} 
			    	 						}
			    	 					
			    	 				}
			    	 				
			    	  //Available seats:
			    	 				for(var m1=0;m1<avail_seats.length;m1++)
			    	 				{
			    	 					if(avail_seats[m1]!=null){ blck_seats.push(avail_seats[m1]); }
			    	 				}
			    	 // Booked seats:
			    	 				for(var m2=0;m2<booked_seats1.length;m2++)
			    	 				{
			    	 					if(booked_seats1[m2]!=null){ b_seats.push(booked_seats1[m2]); }
			    	 				}
			    	 // ladies seats:
			    	 				for(var m3=0;m3<booked_seats_l.length;m3++)
			    	 				{
			    	 					if(booked_seats_l[m3]!=null)b_seats_l.push(booked_seats_l[m3]);
			    	 				}
			    	 			
			    	 				//alert("booked seats"+b_seats+"blocked seats:"+blck_seats+" ladies: "+b_seats_l);
			    	 				
			    	 			  // return b_seats;
			    	 				var u=0,c=0;
			    	 				var r1,r2,r3,r4,m1=0,m2=0,m3=0,m4=0;
			    	 				r1=new Array();
			    	 				r2=new Array();
			    	 				r3=new Array();
			    	 				r4=new Array();
			    	 				 c=col;

			    	 			for(var o=0;o<c;o++)
			    	 				{
			    	 				for(var p=0;p<r;p++)
			    	 					{
			    	 						if(p==0)
			    	 						{
			    	 						r1[m1]=""+seat_name[u];
			    	 						m1++;
			    	 						}
			    	 						else if(p==1)
			    	 						{
			    	 						r2[m2]=seat_name[u];
			    	 						m2++;
			    	 						}
			    	 					else if(p==2)
			    	 					{
			    	 						r3[m3]=seat_name[u];
			    	 						m3++;
			    	 					}else
			    	 					{r4[m4]=seat_name[u];m4++;}	    	 						
			    	 					u++;
			    	 					
			    	 					}
			    	 				}
			    	 				seat_dyn=r1;

			    	 				route=route+"/"+seat_name+"/"+row+"/"+col;
			    	 				if(b_seats.length!=0)
			    	 					{
			    	 						if(b_seats_l.length!=0)
			    	 						{
			    	 							if(blck_seats.length!=0)
			    	 								{
			    	 								//start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check,popup_data);
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 								}
			    	 							else
			    	 								{blck_seats[0]=0;
			    	 								//start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check,popup_data);
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 								}
			    	 						}
			    	 						else
			    	 						{
			    	 							b_seats_l[0]=0;
			    	 							if(blck_seats.length!=0)
			    	 							{
			    	 								//start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check,popup_data);
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 							}
			    	 							else
			    	 							{blck_seats[0]=0;
			    	 								//start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check,popup_data);
			    	 							
			    	 							if(isSleeper==true)
		    	 								{
			    	 								start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 								}else
		    	 									{
		    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 									}
			    	 							}
			    	 						}
			    	 					}
			    	 				else
			    	 				{
			    	 					b_seats[0]=0;
			    	 					if(b_seats_l.length!=0)
			    	 					{
			    	 						if(blck_seats.length!=0)
	    	 								{//alert("boarding4 "+boarding);
	    	 								//start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check,popup_data);
			    	 							if(isSleeper==true)
		    	 								{
			    	 								start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 								}else
		    	 									{
		    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 									}
	    	 								}
	    	 							else
	    	 								{blck_seats[0]=0;//alert("boarding3 "+boarding);
	    	 								//start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check,popup_data);
	    	 								if(isSleeper==true)
	    	 								{
	    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
	    	 								}else
	    	 									{
	    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
	    	 									}
	    	 								}
			    	 					}
			    	 					else{
			    	 							b_seats_l[0]=0;
			    	 							if(blck_seats.length!=0)
			    	 							{//alert("boarding2 "+boarding);
			    	 								//start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check,popup_data);
			    	 								if(isSleeper==true)
			    	 								{
			    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 								}else
			    	 									{
			    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
			    	 									}
			    	 							}
			    	 							else
			    	 							{blck_seats[0]=0;//alert("boarding1 "+boarding);
			    	 								//start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check,popup_data);
			    	 							if(isSleeper==true)
		    	 								{
		    	 									start_sleeper(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 								}else
		    	 									{
		    	 										start(b_seats,b_seats_l,blck_seats,fare,boarding,route,check);
		    	 									}
			    	 							}
			    	 					}
			    	 				}
			    	 			
				  }
				  else
					  {
					  	alert("Sorry!, Booking time expired.");
					  	window.location.replace("Admin.do");
					  }
			     	}
			     else {
			        alert("Sorry could not connect to server. Please try again");
			    		}
			   }
			 
		}
		 		var exe=document.getElementById("execuseme").value;
			    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			    dataType: "json";
			    xmlhttp.send('action=Booking/getAdminBusLayout&userName='+u_name+'&sourceName='+sourceId+'&destinationName='+destinationId+'&journeyDate='+journeyDate+'&routeId='+busId+'&execuseme='+exe);
			  }

	}

	var lady,img_avail,img_book,img_block,img_ladies,select_seat,ladie;
	var lady,img_avail,img_book,img_block,img_ladies,select_seat,img_avail_ver,sleeper_seats,select_seat_ver,img_block_ver;
	//sleeper
	var booked_seatsss_,ladies_,blck_,fare_,board_,route_,check_,popup_;
    function start_sleeper(booked_seatsss,ladies,blck,fare,board,route,check)
    {
    	booked_seatsss_=booked_seatsss;
    	ladies_=ladies;
    	blck_=blck;
    	fare_=fare;
    	board_=board;
    	route_=route;
    	check_=check;
    	//alert("comes");
    	//alert(booked_seatsss+" "+ladies+" "+blck+" "+fare+" "+board+" "+route+" "+check);
    	$("#br").show();
    	$("#br1").show();
    	//alert(booked_seatsss+" "+ladies+" "+blck+" "+fare+" "+board+" "+route+" "+check);
    	agent_blocked=new Array();
    	book_seats=new Array();
    	document.getElementById("passanger").innerHTML="<br/><br/><center><p><blink>Please Select Your Favourite Seats...</blink></p></center>";
    	var alot=0;
    	document.getElementById("bus_outer").innerHTML="";
    //	alert("blocked seats:"+blck);
    	$("#bus21").show();
    	$("#bus").show();
    	$("#bus_outer").show();
    	var last_booked=false;
    	var last_blocked=false;
    	$("#2d").hide();
    	$("#details").show();
    	$("#u_details").hide();
    	$("#seatInfoHeading").show();
    	//$("#3d").show();
    	//var bus_type="semi-sleeper";
    	ik=0;
    	var r_s=route.split("/");
    	var s_Name="";
    	 b_route=r_s[0];
 	    s_Name=r_s[1];
 	    var rows=r_s[2];
 	    var col=r_s[3];
 	   // alert("befores");
 	   
 	 
    	if(check==0)
    	{
    		img_avail=CONTEXT_ROOT+"/images/bus/sleeper/available.gif";
    		img_book=CONTEXT_ROOT+"/images/bus/sleeper/booked.gif";
    		img_block=CONTEXT_ROOT+"/images/bus/sleeper/blocked.gif";
    		img_ladies=CONTEXT_ROOT+"/images/bus/woman.jpg";
    		select_seat=CONTEXT_ROOT+"/images/bus/sleeper/selected.gif";
    		img_avail_ver=CONTEXT_ROOT+"/images/bus/sleeper/available1.gif";
    		select_seat_ver=CONTEXT_ROOT+"/images/bus/sleeper/selected1.gif";
			img_book_ver=CONTEXT_ROOT+"/images/bus/sleeper/booked1.gif";
			img_block_ver=CONTEXT_ROOT+"/images/bus/sleeper/blocked1.gif";
    	}
		else
			{
		    	img_avail=CONTEXT_ROOT+"/images/bus/sleeper/available.gif";
				img_book=CONTEXT_ROOT+"/images/bus/sleeper/booked.gif";
				img_block=CONTEXT_ROOT+"/images/bus/sleeper/blocked.gif";
				img_ladies=CONTEXT_ROOT+"/images/bus/woman.jpg";
				select_seat=CONTEXT_ROOT+"/images/bus/sleeper/selected.gif";
				img_avail_ver=CONTEXT_ROOT+"/images/bus/sleeper/available1.gif";
				select_seat_ver=CONTEXT_ROOT+"/images/bus/sleeper/selected1.gif";
				img_book_ver=CONTEXT_ROOT+"/images/bus/sleeper/booked1.gif";
				img_block_ver=CONTEXT_ROOT+"/images/bus/sleeper/blocked1.gif";
		    }
    	b_fare=fare;
    	lady=ladies;
    	var l_sleeper=new Array();
      	var l_blk=new Array();
    	var l_slee=0;
    	if(k==0)
    	{
	    			if(booked_seatsss.length>0 &&booked_seatsss[0]!=0)
	    			{
	    				alr_booked=new Array();
	    					for(var m=0;m<booked_seatsss.length;m++){ 
	    						alr_booked[m]=booked_seatsss[m];
	    					if(booked_seatsss[m]==16 || booked_seatsss[m]==32)
    						{
	    						l_sleeper[l_slee]=booked_seatsss[m];
    						}
    					l_slee=l_slee+1;
	    					}
	    			}
	    			else
	    			{
	    				alr_booked=new Array();
	    			}
	    			l_slee=0;
	    			if(blck.length>0)
	    			{
	    				for(var m1=0;m1<blck.length;m1++){ agent_blocked[m1]=blck[m1];
	    				if(blck[m1]==16 || blck[m1]==32)
						{
	    					l_blk[l_slee]=blck[m1];
						}
					l_slee=l_slee+1;
	    				
	    				}
	    				
	    				
	    			}else
	    			{ 
	    				agent_blocked[0]=0;
	    			}
	   
		    		inc=1;
		    		var body = document.getElementById("bus_outer");//bus21
		    		var tbl = document.createElement("table");
		    		var tblBody = document.createElement("tbody");
		    		
		    		alot=agent_blocked.length+booked_seatsss.length;
		    		var div=document.createElement("div");

	    			//alert("layout under construction.*.");
	    			rows=rows/2;
	    			//alert(rows);
	    			var cell = document.createElement("td");
					//cell.setAttribute("title","Seat no."+m);
					var row = document.createElement("tr");
					 document.getElementById("avail").src=CONTEXT_ROOT+"/images/bus/sleeper/available.gif";
					 document.getElementById("select").src=CONTEXT_ROOT+"/images/bus/sleeper/selected.gif";
					 document.getElementById("booked").src=CONTEXT_ROOT+"/images/bus/sleeper/booked.gif";
					 document.getElementById("blocked").src=CONTEXT_ROOT+"/images/bus/sleeper/blocked.gif";
					var seat_number=0;
					cell.setAttribute("width","670");
					cell.setAttribute("height","255");
					//cell.setAttribute("id", m);
		    		var m1=1;
		    		//var m_value=m;
		    		
		    		do{
		    			last_booked=false;
		    			last_blocked=false;
		    			var last_seat=0; 		
					    		if(m1!=2)
					    			{
					    				inc=17;
					    				last_seat=31;
					    			}
					    		else
					    			{
					    				inc=1;
					    				last_seat=15;
					    			}
					    		sleeper_seats=s_Name.split(",");
					    		//alert(sleeper_seats);
					    		
					    			row.appendChild(cell);
					    			var sleep_tbl = document.createElement("table");
						    		var sleep_tblBody = document.createElement("tbody");
						    		
						    		var dumy_tbl = document.createElement("table");
						    		var dumy_tblBody = document.createElement("tbody");
						    		var dumy_row = document.createElement("tr");
						    		var dumy_td= document.createElement("td");
						   			for (var i = 1; i <rows; i++) 
						    			{ 
						    				var s_row = document.createElement("tr");
						    				// creates a table row
						    				if(i!=3)
						    				{
						    					m=inc;
						    					for (var j = 1; j <= (col-1); j++) 
						    					{
						    						
						    						var seat_no="";
						    						seat_no=sleeper_seats[m-1];
						    						
						    						var s_cell = document.createElement("td");
						    						s_cell.setAttribute("title","Seat no."+sleeper_seats[m-1]);
						    						
						    						s_row.appendChild(s_cell);
						    						s_cell.setAttribute("width","70");
						    						s_cell.setAttribute("height","30");
						    						s_cell.setAttribute("id", sleeper_seats[m-1]);
						    						if(alr_booked.length>0 || agent_blocked.length>0)
						    						{
							    						for(var booked=0;booked<alot;booked++)
							    						{
							    							//alert(alr_booked[booked]+"=="+last_seat);
							    							if(alr_booked[booked]==(last_seat+1))
						    								{
							    								last_booked=true;
						    								}
							    							if(m==alr_booked[booked])//for admin check==1s_Name.split(",")[0].trim()
							    							{
						    									if(check==1)
						    									{
						    										s_cell.setAttribute("onclick","booked_seat("+m+");");
						    										s_cell.style.backgroundImage="url("+img_book+")";
						    				  					}
						    									else
							    								{
							    									s_cell.setAttribute("onclick","booked_seat("+m+");");
							    									s_cell.style.backgroundImage="url("+img_book+")";
							    								}
							    								s_cell.style.backgroundPosition="3px 5px";
											   			   		s_cell.style.backgroundRepeat="no-repeat";
											   			   		break;
							    							}
							    							else
							    							{
						        			
							    								for(var block=0;block<agent_blocked.length;block++)
							    								{
							    									if(agent_blocked[booked]==(last_seat+1))
								    								{
								    								last_blocked=true;
								    								}
							    									if(m==agent_blocked[block])
							        			   					{
							        			   		   		   
								        		  			   		   	if(check==1)
								        		  			   		   	{
								        		  			   		   		
										        		  			   	    s_cell.style.backgroundImage="url("+img_block+")";
										        		  			        s_cell.setAttribute("onclick","sleeper_blk("+m+");");//+seat_no+
								        		  			   		   	}
								        		  			   		   	else
								        		  			   		   		{
										        		  			   			s_cell.style.backgroundImage="url("+img_block+")";
										        		  			   			s_cell.setAttribute("onclick","sleeper_blk("+m+");");
								        		  			   		   		}
								        		  			   		   	s_cell.style.backgroundRepeat="no-repeat";
								        		  			   		s_cell.style.backgroundPosition="5px 5px";
								        			   					break;
							        			   					}
							    									else
							    									{
								        			   					for(var l=0;l<ladies.length;l++)
								        			   					{
								        			   						if(m==ladies[l])
								        			   							{
								        			   								s_cell.setAttribute("onclick","sleeper_selected("+m+");");
								        			   								s_cell.style.backgroundImage="url("+img_avail+")";
								        			   								s_cell.style.backgroundRepeat="no-repeat";
								        			   								s_cell.style.backgroundPosition="5px 5px";
								        			   								break;
								        			   							}
								        			   						else
								        			   							{//var sea_t=new String(m);//alert("number==="+seat_no);//seat_no
								        			   							s_cell.setAttribute("onclick","sleeper_selected("+m+");");
								    			   								s_cell.style.backgroundImage="url("+img_avail+")";
								    			   								s_cell.style.backgroundRepeat="no-repeat";
								    			   								s_cell.style.backgroundPosition="5px 5px";
								        			   							}
								        			   					}
							    			   					
							    									}
							    								}// for
						    							}// else
						    						}
						        	   }else
											{ 
												s_cell.setAttribute("onclick","sleeper_selected("+m+");");
												//s_cell.setAttribute("s_cellspacing", "10");
												s_cell.style.backgroundImage="url("+img_avail+")";
												s_cell.style.backgroundRepeat="no-repeat";
												
												s_cell.style.backgroundPosition="5px 5px";
												}
							
						                if(i==1 && (j%2)==0)
						                	m = m+1;
						                if(i==1 && (j%2)==1)
						                	m = m+5;
						                if(i==2 && (j%2)==0)
						                	m = m+3;
						                if(i==2 && (j%2)==1)
						                	m = m+3;
						                if(i==4 && (j%2)==0)
						                	m = m+5;
						                if(i==4 && (j%2)==1)
						                	m = m+1;
										
						
						                seat_number=seat_number+1;
						            }inc=inc+1;
						
						    	  }
						    	 else
						    		 {
						    		// var s_row = document.createElement("tr");
						    		 var cellText = "";
						    		 if(m1==1)
						    		 {
						    		 	cellText = document.createTextNode("UPPER");
						    		 }else
						    		 {
						    		 	cellText = document.createTextNode("LOWER");
						    		 }
						    		 var span=document.createElement("span");
						    		 span.style.color="#777769";
						    		 span.style.fontSize="10px";
						    		 span.style.marginLeft="230%";
						    		 span.appendChild(cellText);
						    		 s_row.appendChild(span);
						    		 s_row.setAttribute("height", "15");
						    		 }
						    		 sleep_tblBody.appendChild(s_row);
						        }
						    			m1++;
						    			sleep_tbl.appendChild(sleep_tblBody);
						    			sleep_tbl.style.border="0 px solid red";
						    			var cells = document.createElement("td"); 
						    			for(var ss=0;ss<l_sleeper.length;ss++)
					    				{
					    				if((last_seat+1)==l_sleeper[ss])
					    					{
					    						last_booked=true;
					    					}
					    				}
						    			for(var ss=0;ss<l_blk.length;ss++)
					    				{
					    				if((last_seat+1)==l_blk[ss])
					    					{
					    						last_boocked=true;
					    					}
					    				}
						    			if(last_booked==true)//last_blocked
						    				{
						    				cells.style.backgroundImage="url("+img_book_ver+")";
					    					   cells.setAttribute("onclick","booked_seat("+(last_seat+1)+");");
						    					
						    				}
						    			else if(last_blocked==true)//last_blocked
					    				{
					    					cells.style.backgroundImage="url("+img_block_ver+")";
					    					cells.setAttribute("onclick", "sleeper_blk("+(last_seat+1)+");");
					    				}
						    			else
						    					{
						    				cells.style.backgroundImage="url("+img_avail_ver+")";
					    					cells.setAttribute("onclick", "sleeper_selected("+(last_seat+1)+");");
						    					}
						                cells.style.backgroundRepeat="no-repeat";
						                cells.setAttribute("title", "Seatno."+sleeper_seats[last_seat]);
						               // var cellText = document.createTextNode("   "+sleeper_seats[last_seat]); 
						                //cells.appendChild(cellText);
						                
						                cells.setAttribute("id", sleeper_seats[last_seat]);
						                cells.style.backgroundPosition="3px 20px";
						                cells.setAttribute("width","35");
						                cells.setAttribute("height","30");
						    			var dumy_rows=document.createElement("tr");
						    			dumy_rows.setAttribute("height", "10");
						    			dumy_tbl.style.border="1px solid green";
						    			sleep_tbl.setAttribute("cellspacing", "8");
						    			dumy_td.appendChild(sleep_tbl);
						    			dumy_row.appendChild(dumy_td);
						    			dumy_row.appendChild(cells);
						    			
						    			dumy_tblBody.appendChild(dumy_row);
						    			dumy_tbl.appendChild(dumy_rows);
						    			dumy_tbl.appendChild(dumy_tblBody);
						    			dumy_tbl.setAttribute("cellspacing", "5");
						    			
						             cell.appendChild(dumy_tbl);
						                tblBody.appendChild(row);
						                
		    		}while(m1<3);

    		tbl.setAttribute("cellspacing", "2");		
    		//tbl.style.border="1px solid red";
    			// the same as
    		

        tbl.appendChild(tblBody);
        
 
        body.appendChild(tbl);
 
        document.getElementById("name").value="";
       tbl.setAttribute("border", "0");
       document.getElementById("bus21").style.border="1px solid #000000";
        document.getElementById("passanger").innerHTML="";
        seat_counter=0;
        $("#seatInfoHeading").hide();
        $("#passes1").show();
        $("#passes").hide();
        document.getElementById("fare11").innerHTML="0";
        document.getElementById("board1").innerHTML="";
        c=0;
        	if(book_seats.length>0){
        		book_seats.length=null;
        		board1(board);
        		}
        	else{ board1(board);}
        	ladie=ladies;
        //	alert("ladie"+ladie);
        images(ladies);
       	} 
 
    }
	
    function sleeper_blk(m11) {
        if(book_seats.length>0)
       	{
           	if(book_seats[book_seats.length+1]!=sleeper_seats[m11-1])
           	{
	            	var m1=document.getElementById(sleeper_seats[m11-1]);
	            //	m1.style.backgroundImage="url("+select_seat+")";
	            	
	            	if(m11==16 || m11==32)
           		{
           		
           		m1.style.backgroundImage="url("+select_seat_ver+")";
           		}
           	else
           		{
           		m1.style.backgroundImage="url("+select_seat+")";
           		}
	            	m1.style.backgroundRepeat="no-repeat";
	            	m1.setAttribute("onclick","sleeper_unblk("+m11+");");
	            	book_seats.push(sleeper_seats[m11-1]);
           	}
       	}
       	else
       	{//alert("comes");
       		var m1=document.getElementById(sleeper_seats[m11-1]);
       		
       		if(m11==16 || m11==32)
       		{
       		
       		m1.style.backgroundImage="url("+select_seat_ver+")";
       		}
       	else
       		{
       		m1.style.backgroundImage="url("+select_seat+")";
       		}
           	m1.style.backgroundRepeat="no-repeat";
           	m1.setAttribute("onclick","sleeper_unblk("+m11+");");
           	book_seats.push(sleeper_seats[m11-1]);
       	}
       seat_counter++;
     //  alert(m11);
       addElement(sleeper_seats[m11-1]);
       
	/*}
	else
		{
		alert("More than six seats are not allowed for single time22");
		}*/
             
       }
    
    function sleeper_unblk(m)
    {
   // alert("per="+per);
    	if(per<1)
    		{
    	var	m1=document.getElementById(sleeper_seats[m-1]);
    		
         if(m==16 || m==32)
 		{
        	 
        		m1.style.backgroundImage="url("+img_block_ver+")";
        	
 		}
     	else
     		{
     		m1.style.backgroundImage="url("+img_block+")";
        		}
     	m1.style.backgroundRepeat="no-repeat";
     	m1.setAttribute("onclick","sleeper_blk("+m+");");
    
      for(var i=0;i<book_seats.length;i++)
      {
    	  if(book_seats[i]==sleeper_seats[m-1])
    	  {
    		  book_seats[i]=0;
    		
    	  }
      }
      seat_counter--;
     removeElement(sleeper_seats[m-1]);
    		}
    	
    		per--;
    		
    }
    
    function sleeper_selected(m11) {
             if(book_seats.length>0)
            	{
	            	if(book_seats[book_seats.length+1]!=sleeper_seats[m11-1])
	            	{
		            	var m1=document.getElementById(sleeper_seats[m11-1]);
		            //	m1.style.backgroundImage="url("+select_seat+")";
		            	
		            	if(m11==16 || m11==32)
	            		{
	            		
	            		m1.style.backgroundImage="url("+select_seat_ver+")";
	            		}
	            	else
	            		{
	            		m1.style.backgroundImage="url("+select_seat+")";
	            		}
		            	m1.style.backgroundRepeat="no-repeat";
		            	m1.setAttribute("onclick","sleeper_unvalidateselectedseat("+m11+");");
		            	book_seats.push(sleeper_seats[m11-1]);
	            	}
            	}
            	else
            	{//alert("comes");
            		var m1=document.getElementById(sleeper_seats[m11-1]);
            		
            		if(m11==16 || m11==32)
            		{
            		
            		m1.style.backgroundImage="url("+select_seat_ver+")";
            		}
            	else
            		{
            		m1.style.backgroundImage="url("+select_seat+")";
            		}
                	m1.style.backgroundRepeat="no-repeat";
                	m1.setAttribute("onclick","sleeper_unvalidateselectedseat("+m11+");");
                	book_seats.push(sleeper_seats[m11-1]);
            	}
            seat_counter++;
          //  alert(m11);
            addElement(sleeper_seats[m11-1]);
            
    	/*}
    	else
    		{
    		alert("More than six seats are not allowed for single time22");
    		}*/
                  
            }

    function sleeper_unvalidateselectedseat(m)
    {
   // alert("per="+per);
    	if(per<1)
    		{
    	var	m1=document.getElementById(sleeper_seats[m-1]);
    		
         if(m==16 || m==32)
 		{
        	 
        		m1.style.backgroundImage="url("+img_avail_ver+")";
        	
 		}
     	else
     		{
     		m1.style.backgroundImage="url("+img_avail+")";
        		}
     	m1.style.backgroundRepeat="no-repeat";
     	m1.setAttribute("onclick","sleeper_selected("+m+");");
    
      for(var i=0;i<book_seats.length;i++)
      {
    	  if(book_seats[i]==sleeper_seats[m-1])
    	  {
    		  book_seats[i]=0;
    		
    	  }
      }
      seat_counter--;
     removeElement(sleeper_seats[m-1]);
    		}
    	
    		per--;
    		
    }

    
	var edi;
	 var c=0;
	
	
	 var cou2=0;
	 var img_hand=CONTEXT_ROOT+"/images/bus/hand.gif";
    function start(booked_seatsss,ladies,blck,fare,board,route,check,popup)
    {
    	//alert("starttttttttttttttttttttttttttttttttttttttttt")
    	$("#br").hide();
		$("#br1").hide();
    	$("#space").hide();
    	 booked_seatsss_= booked_seatsss;
    	 ladies_=ladies;
    	 blck_=blck;
    	 fare_=fare;
    	 board_=board;
    	 route_=route;
    	 check_=check;
    	 popup_=popup;
    	c=0;
    	edi=0;

    	agent_blocked=new Array();
    	book_seats=new Array();
    	document.getElementById("passanger").innerHTML="<br/><br/><center><p><blink>Please Select Your Favourite Seats...</blink></p></center>";
    	var alot=0;
    	document.getElementById("bus_outer").innerHTML="";

    	
    	$("#bus21").show();
    	$("#bus").show();
    	$("#2d").hide();
    	$("#details").show();
    	$("#u_details").hide();
    	$("#seatInfoHeading").show();
    	//$("#3d").show();
    	ik=0;
    	var r_s=route.split("/");
    	
    	if(check==0){
    		
    		  img_avail=CONTEXT_ROOT+"/images/bus/available.gif";
			  img_book=CONTEXT_ROOT+"/images/bus/booked.gif";
			  img_block=CONTEXT_ROOT+"/images/bus/blocked.gif";
			  img_ladies=CONTEXT_ROOT+"/images/bus/woman.jpg";
			  select_seat=CONTEXT_ROOT+"/images/bus/selected.gif";
				  
    	}
    	else
    		{
    		img_avail=CONTEXT_ROOT+"/images/bus/available.gif";
			  img_book=CONTEXT_ROOT+"/images/bus/booked.gif";
			  img_block=CONTEXT_ROOT+"/images/bus/blocked.gif";
			  img_ladies=CONTEXT_ROOT+"/images/bus/woman.jpg";
			  select_seat=CONTEXT_ROOT+"/images/bus/selected.gif";
    		}
    	 
    	b_fare=fare;
    	    b_route=r_s[0];
    	    var s_Name=r_s[1];
    	    var rows=r_s[2];
    	    var col=r_s[3];
    	  
    	    
    	    lady=ladies;
    	if(k==0){
    			if(booked_seatsss.length>0 &&booked_seatsss[0]!=0){
    				alr_booked=new Array();
    					for(var m=0;m<booked_seatsss.length;m++){ alr_booked[m]=booked_seatsss[m];}
    			}
    			else
    			{
    				alr_booked=new Array();
    			}
    			if(blck.length>0)
    			{
    				for(var m1=0;m1<blck.length;m1++){ agent_blocked[m1]=blck[m1];}
    			}else
    			{ agent_blocked[0]=0;}
    			inc=1;
    			var body = document.getElementById("bus_outer");
    			var tbl = document.createElement("table");
    			var tblBody = document.createElement("tbody");
    			 alot=agent_blocked.length+booked_seatsss.length;
    			 var div=document.createElement("div");
    			 document.getElementById("avail").src=CONTEXT_ROOT+"/images/bus/available.gif";
    			 document.getElementById("select").src=CONTEXT_ROOT+"/images/bus/selected.gif";
    			 document.getElementById("booked").src=CONTEXT_ROOT+"/images/bus/booked.gif";
    			 document.getElementById("blocked").src=CONTEXT_ROOT+"/images/bus/blocked.gif";
    			// alert("starttttttttttttttttttttttttttttttttttttttttt")
       // creating all cells
    			for (var i = 1; i <rows; i++) 
    			{ 
    				m=inc;
            // creates a table row
    				if(i!=3)
    				{
    					var row = document.createElement("tr"); 
    					
    					for (var j = 1; j <= col; j++) 
    					{
    						var cell = document.createElement("td");
    						cell.setAttribute("title","Seat no."+m);
			   		
    						row.appendChild(cell);
    						cell.setAttribute("width","45");
    						cell.setAttribute("height","35");
    						cell.setAttribute("id", m);
    						if(alr_booked.length>0 || agent_blocked.length>0)
    						{	
    						for(var booked=0;booked<alot;booked++)
    						{
        		   
    							if(m==alr_booked[booked])//for admin check==1
    							{	
    									if(check==1)//working place 
    										{
    									
    										cell.setAttribute("onclick","booked_seat("+m+");");
    	
    				  			   		 	cell.style.backgroundImage="url("+img_book+")";
    										}
    									else
    										{
    										
    										cell.setAttribute("onclick","booked_seat("+check+");");
    				  			   		   	cell.style.backgroundImage="url("+img_book+")";
    										}
    								
			   			   			cell.style.backgroundRepeat="no-repeat";
			   			   			break;
    							}
    							else
    							{
        			
    								for(var block=0;block<agent_blocked.length;block++)
    								{
    									if(m==agent_blocked[block])
        			   					{
        		  			   		   	if(check==1){
       		  			   	cell.style.backgroundImage="url("+img_block+")";
        		  			  cell.setAttribute("onclick","b_selected("+m+");");
        		  		
        		  			   		   	}
        		  			   		   	else
        		  			   		   		{
        		  			   			//alert("booked seat ccc");
        		  			   			cell.style.backgroundImage="url("+img_block+")";
        		  			   		cell.setAttribute("onclick","booked_seat("+check+");");//div_details
        		  			   	
        		  			   		   		}
        		   			   			cell.style.backgroundRepeat="no-repeat";
        			   					
        			   					break;
        			   					}
    									else
    									{
        			   					
        		   			   		//alert("ok");
        			   					for(var l=0;l<ladies.length;l++)
        			   					{
        			   						if(m==ladies[l])
        			   							{
        			   								
        			   								cell.setAttribute("onclick","selected("+m+");");
        			   								cell.style.backgroundImage="url("+img_avail+")";
        			   								cell.style.backgroundRepeat="no-repeat";
        			   								break;
        			   							}
        			   						else
        			   							{
        			   							cell.setAttribute("onclick","selected("+m+");");
    			   								cell.style.backgroundImage="url("+img_avail+")";
    			   								cell.style.backgroundRepeat="no-repeat";
    			   								
        			   							}
        			   					}
    			   					
        			   			}
        			   		}// for
        			   }// else
    						}
        	   }else
					{ //alert("free seats");
						cell.setAttribute("onclick","selected("+m+");");
						//cell.setAttribute("cellspacing", "10");
						cell.style.backgroundImage="url("+img_avail+")";
						cell.style.backgroundRepeat="no-repeat";
						
						}
// set number to bus seats	
                if(i==1 && (j%2)==0)
                	m = m+1;
                if(i==1 && (j%2)==1)
                	m = m+7;
                if(i==2 && (j%2)==0)
                	m = m+3;
                if(i==2 && (j%2)==1)
                	m = m+5;
                if(i==4 && (j%2)==0)
                	m = m+5;
                if(i==4 && (j%2)==1)
                	m = m+3;
				if(i==5 && (j%2)==0)
					m = m+7;
				if(i==5 && (j%2)==1)
					m = m+1;

	
            }inc=inc+1;

    	  }
    	 else
    		 {
    		 var row = document.createElement("tr");
    		 row.setAttribute("height", "20");
    		 }
            // add the row to the end of the table body
            tblBody.appendChild(row);
           
        }

    		tbl.setAttribute("cellspacing", "0");		
        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);
        
        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        document.getElementById("name").value="";
       tbl.setAttribute("border", "0");
        document.getElementById("bus21").style.border="1px solid #000000";
        document.getElementById("passanger").innerHTML="";
        seat_counter=0;
        $("#seatInfoHeading").hide();
        $("#passes1").show();
        $("#passes").hide();
        document.getElementById("fare11").innerHTML="0";
        document.getElementById("board1").innerHTML="";
        cou2=0;
        c=0;
        	if(book_seats.length>0){
        		book_seats.length=null;
        		board1(board);
        		}
        	else{ board1(board);}
        	ladie=ladies;
        	//alert("ladie: "+ladie);
        images(ladies);
       
       	} 
 
    }
    function remove(s_val)
    {
    	
    	document.getElementById(s_val).innerHTML="";
    }
    var cou=0;
   var Name,Mobile,Route,b_Point;
  function calcel_edit()
  {
	  var isSleeper=false;
	  var splitData=busType1.split(" ");
		 for(var s=0;s<splitData.length;s++)
		 {
			 if(splitData[s]=="Sleeper")
			 {
				 isSleeper=true;
			 }
		 }
		 if(isSleeper==false)
			 {
	  start(booked_seatsss_,ladies_,blck_,fare_,board_,route_,check_,popup_);
			 }
		 else
			 {
			 //alert("callinggggg");
			 $("#space").hide();
			 start_sleeper(booked_seatsss_,ladies_,blck_,fare_,board_,route_,check_);
			 }
  }
  var edited=new Array();
    function booked_seat(check) 
    {
    	//alert(busType1);
    	var isSleeper=false;
		 var splitData=busType1.split(" ");
		 for(var s=0;s<splitData.length;s++)
		 {
			 if(splitData[s]=="Sleeper")
			 {
				 isSleeper=true;
			 }
		 }
    	/*var  g_seat=popup_data[(check-1)].layoutPopupCTO.groupSeat;
    	Name=popup_data[(check-1)].layoutPopupCTO.name;
    	var PNR=popup_data[(check-1)].layoutPopupCTO.pnrNo;
    	 Mobile=popup_data[(check-1)].layoutPopupCTO.mobile;
    	var Booked_by=popup_data[(check-1)].layoutPopupCTO.bookedBy;
    	 Route=popup_data[(check-1)].layoutPopupCTO.route;
    	 b_Point=popup_data[(check-1)].layoutPopupCTO.boardingPoint;*/
		 var  g_seat="";
		 var PNR="";
		 var Booked_by="";
		 var ele;
		 var canEdit=false;
    	 c++;
       	if((cou%2)==0){
       		if(isSleeper==false)
       			{
	       		 for(var i=0;i<(popup_data[(check-1)].layoutPopupCTO).length;i++)
				 {
	       			g_seat=popup_data[(check-1)].layoutPopupCTO[i].groupSeat;
	       	    	Name=popup_data[(check-1)].layoutPopupCTO[i].name;
	       	    	PNR=popup_data[(check-1)].layoutPopupCTO[i].pnrNo;
	       	    	Mobile=popup_data[(check-1)].layoutPopupCTO[i].mobile;
	       	    	Booked_by=popup_data[(check-1)].layoutPopupCTO[i].bookedBy;
	       	    	Route=popup_data[(check-1)].layoutPopupCTO[i].route;
	       	    	b_Point=popup_data[(check-1)].layoutPopupCTO[i].boardingPoint;
	       	    	canEdit=popup_data[(check-1)].layoutPopupCTO[i].canEdit;
	       	    	var seatStas=popup_data[(check-1)].layoutPopupCTO[i].seatStatus;
	       			if(i==0)
	       				{
	       				if(canEdit)
	       					{
	       					ele="<b>Route: "+Route+"</b><br/>seatName:"+check+"<br/>Seat Status: "+seatStas+"<br/>Group Seat:"+g_seat+"<br/>Name: "+Name+"<br/>PNR No: "+PNR+"<br/>Mobile No: "+Mobile+"<br/>Booked By: "+Booked_by+"<br/>Boarding Point: "+b_Point+"<br/> <input type='button' value='edit' onclick=edit("+check+")> ";
	       					}
	       				else
	       					{
	       					ele="<b>Route: "+Route+"</b><br/>seatName:"+check+"<br/>Seat Status: "+seatStas+"<br/>Group Seat:"+g_seat+"<br/>Name: "+Name+"<br/>PNR No: "+PNR+"<br/>Mobile No: "+Mobile+"<br/>Booked By: "+Booked_by+"<br/>Boarding Point: "+b_Point+" </form>";
	       					}
	       				}
	       			else
	       				{
		       				if(canEdit)
		   					{
		   					ele=ele+"<br/><b>Route: "+Route+"</b><br/>seatName:"+check+"<br/>Seat Status: "+seatStas+"<br/>Group Seat:"+g_seat+"<br/>Name: "+Name+"<br/>PNR No: "+PNR+"<br/>Mobile No: "+Mobile+"<br/>Booked By: "+Booked_by+"<br/>Boarding Point: "+b_Point+"<br/> <input type='button' value='edit' onclick=edit("+check+")>";
		   					}
		       				else
		   					{
		   					ele=ele+"<br/><b>Route: "+Route+"</b><br/>seatName:"+check+"<br/>Seat Status: "+seatStas+"<br/>Group Seat:"+g_seat+"<br/>Name: "+Name+"<br/>PNR No: "+PNR+"<br/>Mobile No: "+Mobile+"<br/>Booked By: "+Booked_by+"<br/>Boarding Point: "+b_Point+"";
		   					}
	       				
	       				}
				 }
       		 document.getElementById(check).innerHTML="<span id='click'>"+ele+"</span>";
       			}
       		else
       		{
       			var adminPopup=popup_data[(check-1)].layoutPopupCTO;
	       		for(var i=0;i<adminPopup.length;i++)
	   			{
	          			g_seat=adminPopup[i].groupSeat;
	          	    	Name=adminPopup[i].name;
	          	    	PNR=adminPopup[i].pnrNo;
	          	    	Mobile=adminPopup[i].mobile;
	          	    	Booked_by=adminPopup[i].bookedBy;
	          	    	Route=adminPopup[i].route;
	          	    	b_Point=adminPopup[i].boardingPoint;
	          	    	canEdit=adminPopup[i].canEdit;
	          	    	var seatStats=adminPopup[i].seatStatus;
	          			if(i==0)
	          			{
	          				if(canEdit)
		          			{
		          				ele="<b>Route: "+Route+"</b><br/>SeatName:"+sleeper_seats[check-1]+"<br/>Seat Status: "+seatStats+"<br/>Group Seat:"+g_seat+"<br/>Name: "+Name+"<br/>PNR No: "+PNR+"<br/>Mobile No: "+Mobile+"<br/>Booked By: "+Booked_by+"<br/>Route: "+Route+"<br/>Boarding Point: "+b_Point+"<br/> <input type='button' value='edit' onclick=edit("+check+")>";
		          			}
		          			else
		          			{
		          				ele="<b>Route: "+Route+"</b><br/>SeatName:"+sleeper_seats[check-1]+"<br/>Seat Status: "+seatStats+"<br/>Group Seat:"+g_seat+"<br/>Name: "+Name+"<br/>PNR No: "+PNR+"<br/>Mobile No: "+Mobile+"<br/>Booked By: "+Booked_by+"<br/>Boarding Point: "+b_Point;
		          			}
	          			}
	          			else
	          			{
		          			if(canEdit)
	          				{
		          				ele=ele+"<br/><b>Route: "+Route+"</b><br/>SeatName:"+sleeper_seats[check-1]+"<br/>Seat Status: "+seatStats+"<br/>Group Seat:"+g_seat+"<br/>Name: "+Name+"<br/>PNR No: "+PNR+"<br/>Mobile No: "+Mobile+"<br/>Booked By: "+Booked_by+"<br/>Route: "+Route+"<br/>Boarding Point: "+b_Point+"<br/> <input type='button' value='edit' onclick=edit("+check+")>";
	          				}
	          				else
	          				{
	          					ele=ele+"<br/><b>Route: "+Route+"</b><br/>SeatName:"+sleeper_seats[check-1]+"<br/>Seat Status: "+seatStats+"<br/>Group Seat:"+g_seat+"<br/>Name: "+Name+"<br/>PNR No: "+PNR+"<br/>Mobile No: "+Mobile+"<br/>Booked By: "+Booked_by+"<br/>Boarding Point: "+b_Point;
	          				}
	          			}
	   			 }
       			document.getElementById(sleeper_seats[check-1]).innerHTML="<span id='click'>"+ele+"</span>";
       		}
    	cou++;
    	}
    	else
    		{
    		for(var n=0;n<ladie.length;n++)
    			{
    			
    			if(ladie[n]==check )
    				{
    				if(isSleeper==false)
           			{
    				document.getElementById(check).innerHTML="<img src="+img_ladies+" align='ridht'>";
    				break;
    				}
    				else
    					{
    					document.getElementById(sleeper_seats[check-1]).innerHTML="<img src="+img_ladies+" align='ridht'>";
    					break;
    					}
    					}
    				
    			else
    				{
    				if(isSleeper==false)
           			{
    				document.getElementById(check).innerHTML="";
           			}
    				else
    					{
    					document.getElementById(sleeper_seats[check-1]).innerHTML="";
    					}
    				}
    			}
    		
    			cou=0;
    		}
    	cou2++;
    	
    }
    var set=new Array();
    var geder;
    
    var iseditaction="no";
    var edited_seat=new Array();
   
    function edit(check)
    {
    	edited=edited_seat;
    	seat_counter=0;
    	var isSleeper=false;
		 var splitData=busType1.split(" ");
		 for(var s=0;s<splitData.length;s++)
		 {
			 if(splitData[s]=="Sleeper")
			 {
				 isSleeper=true;
			 }
		 }
    	book_seats= new Array();
    	$("#space").show();
    	
    	document.getElementById("passanger").innerHTML="";
    	edi=1;//myksk
    	
    	iseditaction="yes";
    	var g_seat=popup_data[(check-1)].layoutPopupCTO[0].groupSeat;
    	var Name=popup_data[(check-1)].layoutPopupCTO[0].name;
    	var PNR=popup_data[(check-1)].layoutPopupCTO[0].pnrNo;
    	var Mobile=popup_data[(check-1)].layoutPopupCTO[0].mobile;
    	var Booked_by=popup_data[(check-1)].layoutPopupCTO[0].bookedBy;
    	var Route=popup_data[(check-1)].layoutPopupCTO[0].route;
    	var b_Point=popup_data[(check-1)].layoutPopupCTO[0].boardingPoint;
    	set=g_seat.split(',');
    	
    	if(c<=2)
    	{
	    	for(var i=0;i<set.length;i++)
	    		{
	    			edited_seat[i]=set[i];
	    			var zero= selected(set[i],1);
	    		}
    	
	    	if(isSleeper==false)
    		{
		    	for(var n=0;n<ladie.length;n++)
				{
				
				if(ladie[n]==check)
					{
						document.getElementById(check).innerHTML="<img src="+img_ladies+" align='ridht'>";
						break;
					}
				else
					{
						document.getElementById(check).innerHTML="";
					}
				}
    		}
	    	else
    		{
    		
	    		for(var n=0;n<ladie.length;n++)
				{
				if(ladie[n]==check)
					{
						document.getElementById(sleeper_seats[check-1]).innerHTML="<img src="+img_ladies+" align='ridht'>";
						break;
					}
				else
					{
						document.getElementById(sleeper_seats[check-1]).innerHTML="";
					}
				}
	    		assaigdata();
    		}
    	}
    	else
    		{
    		c=0;
    		var len=edited_seat.length;
    		for(var i2=0;i2<len;i2++)
    			{
    			var edit11=edited_seat[i2];
    			var m1=document.getElementById(edit11);
            	m1.style.backgroundImage="url("+img_book+")";
            	m1.style.backgroundRepeat="no-repeat";
            	m1.setAttribute("onclick","booked_seat("+edit11+");");
    			}
    		document.getElementById("passanger").innerHTML="";
    		edited_seat=new Array();
    		for(var i=0;i<set.length;i++)
    		{
    			edited_seat[i]=set[i];
    		}
    	for(var n=0;n<ladie.length;n++)
		{
		if(ladie[n]==check)
			{
			if(isSleeper==false)
    		{
		    	for(var n=0;n<ladie.length;n++)
				{
				document.getElementById(check).innerHTML="<img src="+img_ladies+" align='ridht'>";
				break;
				}
			}
			else
				{
				for(var n=0;n<ladie.length;n++)
				{
				document.getElementById(sleeper_seats[check-1]).innerHTML="<img src="+img_ladies+" align='ridht'>";
				break;
				}
				}
			}
		else
			{
			if(isSleeper==false)
    		{
				document.getElementById(check).innerHTML="";
    		}
			else
				{
				document.getElementById(sleeper_seats[check-1]).innerHTML="";
				}
			}
		}
    		}
    	
    	
    }var ll;//oooooo
    function assaigdata()
    {
    	var isSleeper=false;
 		 var splitData=busType1.split(" ");
 		 for(var s=0;s<splitData.length;s++)
 		 {
 			 if(splitData[s]=="Sleeper")
 			 {
 				 isSleeper=true;
 			 }
 		 }
 		 
    	//alert("Name="+Name+"Mobile="+b_Point+" "+Mobile);
    	document.getElementById("name").value=Name;
    	document.getElementById("phoneno").value=Mobile;//mySelect
    	document.getElementById("mySelect").value=b_Point;
    	for(var i=0;i<set.length;i++)
    		{
    		var val=0;
    //	alert(set[i]+" "+sleeper_seats[set[i]]);
    	for(var j=0;j<sleeper_seats.size;j++)
		 {
		 if(sleeper_seats[j]==set[i])
			 {
			 val=j;
			  break;
			 }
		 }
    	if(isSleeper==false)
		 {
    		 ll=popup_data[(set[i]-1)].isLadies;
		 }
    	else
    		{
    		 ll=popup_data[val].isLadies;
    		}
    	//alert("ll=="+ll);
    		 if(ll==true)
    			 {
    			 if(isSleeper==false)
    				 {
		    		document.getElementById("gender"+set[i]).value="FEMALE";
		    		//document.getElementById("age"+set[i]).value=popup_data[(set[i]-1)].layoutPopupCTO.age;
    				 }
    			 else
    				 {
    				 document.getElementById("gender"+set[i]).value="FEMALE";
 		    		//document.getElementById("age"+sleeper_seats[set[i]]).value=popup_data[(set[i]-1)].layoutPopupCTO.age;
    				 }
    			 }
	    		 else
	    			 {

	    			
		    			 document.getElementById("gender"+set[i]).value="MALE";
		    			 //document.getElementById("age"+set[i]).value=popup_data[(set[i]-1)].layoutPopupCTO.age;
	    				
	    			 }
    		}
    	
    }
 
    function board1(board)
    {
    	//alert("entered in board"+board);
       	var boards= document.getElementById("board1");
        var select = document.createElement("select");
         select.setAttribute("name", "mySelect");
         select.setAttribute("id", "mySelect");
         select.setAttribute("class", "logg");
         select.style.width = "140px";
         select.style.fontSize="10px";
         var option;
         
         for(var o=0;o<board.length;o++){
        	// alert(board[o]);
          option = document.createElement("option");
          option.setAttribute("value", board[o]);
          option.innerHTML = board[o];
         select.appendChild(option);
         }
         select.appendChild(option);
    	boards.appendChild(select);
    }
    
    
    
    
    
    function images(ladies) {
    	//alert("ladiesssssssssss==="+ladies);
    	var isSleeper=false;
    	//alert(busType1);
		 var splitData=busType1.split(" ");
		 for(var s=0;s<splitData.length;s++)
		 {
			 if(splitData[s]=="Sleeper")
			 {
				 isSleeper=true;
			 }
		 }
		 if(isSleeper==false)
			 {
    	for(var l=0;l<ladies.length;l++){
    		
		document.getElementById(ladies[l]).innerHTML="<img src="+img_ladies+" align='ridht'>";
		
		
    	}
			 }else
				 {
				 for(var l=0;l<ladies.length;l++){
			    		
						document.getElementById(sleeper_seats[ladies[l]-1]).innerHTML="<img src="+img_ladies+" align='ridht'>";
						
						
				    	}
				 }
	}
   
    var book_seats= new Array();;
    var alr_booked;
    var agent_blocked;
    var f=0;
    var k=0;
    var b_route;
    var b_fare,size;
    var m=1,inc=1;
    var num,ik=0;
    var ch=0;
    var seat_counter;
    var per=0;
    //sleeper select
    function selected(m,choice) {
    	
    	per=1;
    	//alert("donesssssss");
    	ch=choice;
    	//alert("seat_counter======"+seat_counter);
    	//alert("m="+m+ ' '+seat_counter+"  "+book_seats.length);
    	if(seat_counter<40){
    		
    		var isSleeper=false;
   		 var splitData=busType1.split(" ");
   		 for(var s=0;s<splitData.length;s++)
   		 {
   			 if(splitData[s]=="Sleeper")
   			 {
   				 isSleeper=true;
   			 }
   		 }
   		// alert(isSleeper);
   		// alert("comes");
   		 if(isSleeper==false)
   			 {
            if(book_seats.length>0){
            	
            			if(book_seats[book_seats.length+1]!=m)
            			{
			            	var m1=document.getElementById(m);
			            	m1.style.backgroundImage="url("+select_seat+")";
			            	
			            	m1.style.backgroundRepeat="no-repeat";
			            	m1.setAttribute("onclick","unvalidateselectedseat("+m+");");
			            	book_seats.push(m);
			            	
            			}
            			

            	}
            	else
            	{ 
            		
            		var m1=document.getElementById(m);
                	m1.style.backgroundImage="url("+select_seat+")";
                	m1.style.backgroundRepeat="no-repeat";
                	m1.setAttribute("onclick","unvalidateselectedseat("+m+");");
        
                	book_seats.push(m);
            	}
            
   			 }
   		 else
   			 {
   			 
   			 for(var i=0;i<sleeper_seats.length;i++)
   				 {
   				 if(sleeper_seats[i]==m)
   					 {
   					 m=(i+1);
   					 break;
   					 }
   				 }
   			// alert("m=="+m+"  "+sleeper_seats[m-1]);
   			 
			   	 if(book_seats.length>0)
			   	 {
			             //	alert(book_seats[book_seats.length+1]+"!="+sleeper_seats[m-1]);
			     			if(book_seats[book_seats.length+1]!=sleeper_seats[m-1])
			     			{
					            	var m1=document.getElementById(sleeper_seats[m-1]);
					            	if(sleeper_seats[m-1]=="U16" || sleeper_seats[m-1]=="L16")
					     			{
					     			m1.style.backgroundImage="url("+select_seat_ver+")";
					     			}
					     		else{
					     			m1.style.backgroundImage="url("+select_seat+")";
					     			}
					            	
					            	m1.style.backgroundRepeat="no-repeat";
					            	m1.setAttribute("onclick","sleeper_unvalidateselectedseat("+m+");");
					            	book_seats.push(sleeper_seats[m-1]);
					            	
			     			}
			     			
			
			     	}
			     	else
			     	{ //comes
			     		//alert(book_seats[book_seats.length+1]+"!="+sleeper_seats[m-1]+"   book_seats="+book_seats);
			     		var m1=document.getElementById(sleeper_seats[m-1]);
			     		if(sleeper_seats[m-1]=="U16" || sleeper_seats[m-1]=="L16")
			     			{
			     			m1.style.backgroundImage="url("+select_seat_ver+")";
			     			}
			     		else{
			         	m1.style.backgroundImage="url("+select_seat+")";
			     		}
			         	m1.style.backgroundRepeat="no-repeat";
			         	m1.setAttribute("onclick","sleeper_unvalidateselectedseat("+m+");");
			 
			         	book_seats.push(sleeper_seats[m-1]);
			     	}
			    
   			 }
   		    addElement(m);		
            seat_counter++;
            
            
    	}
    	else
    		{
    		alert("More than six seats are not allowed for single time11111");
    		}
    	/*if(isSleeper==true)
    		{
    		//alert("edited="+edited);
    		
    		}*/
    	return 0;
            // alert("setup finished");    
            }
    function unvalidateselectedseat(m)
    {
    	
    	if(ch>0){
       ch--;
       assaigdata();
    	}
    	else
    		{
    		
            var m1=document.getElementById(m);
        	m1.style.backgroundImage="url("+img_avail+")";
        	m1.style.backgroundRepeat="no-repeat";
        	m1.setAttribute("onclick","selected("+m+");");
       
         for(var i=0;i<book_seats.length;i++)
         {
       	  if(book_seats[i]==m)
       	  {
       		  book_seats[i]=0;
       		
       	  }
         }
         seat_counter--;
         removeElement(m);
    		}
         
    }

    function b_selected(m,choice) {
    	
    	ch=choice;
    	//alert("seat_counter="+seat_counter)
    	if(seat_counter<40){
            if(book_seats.length>0){
            	
            			if(book_seats[book_seats.length+1]!=m){
            	var m1=document.getElementById(m);
            	m1.style.backgroundImage="url("+select_seat+")";
            	
            	m1.style.backgroundRepeat="no-repeat";
            	m1.setAttribute("onclick","b_unvalidateselectedseat("+m+");");
            	book_seats.push(m);
            	
            	}
            			

            	}
            	else
            	{ 

            		var m1=document.getElementById(m);
                	m1.style.backgroundImage="url("+select_seat+")";
                	m1.style.backgroundRepeat="no-repeat";
                	m1.setAttribute("onclick","b_unvalidateselectedseat("+m+");");
               
                	book_seats.push(m);
            	}
            seat_counter++;
            addElement(m,choice);
            
    	}
    	else
    		{
    		alert("More than six seats are not allowed for single time66");
    		}
                  
            }
    	var che;	
    function b_unvalidateselectedseat(m)
    {
    	
    	che=ch;
    	if(ch>0){
       ch--;
       assaigdata();
    	}
    	else
    		{

            var m1=document.getElementById(m);
        	m1.style.backgroundImage="url("+img_block+")";
        	m1.style.backgroundRepeat="no-repeat";
        	m1.setAttribute("onclick","b_selected("+m+");");
       
         for(var i=0;i<book_seats.length;i++)
         {
       	  if(book_seats[i]==m)
       	  {
       		  book_seats[i]=0;
       		
       	  }
         }
         seat_counter--;
         removeElement(m);
    		}
         
    }
            function addElement(m,che)
            {
            	//alert(m);
            	
            	var isSleeper=false;
          		 var splitData=busType1.split(" ");
          		 for(var s=0;s<splitData.length;s++)
          		 {
          			 if(splitData[s]=="Sleeper")
          			 {
          				 isSleeper=true;
          			 }
          		 }
            	
            	document.getElementById("err").innerHTML="";
            	document.getElementById("err1").innerHTML="";
            	 var ni = document.getElementById("passanger");
            	   num = m;
            	  var newdiv = document.createElement('div');
            	  //alert("num===="+num);
            	  if(isSleeper==true)
        		  {
            		  try{
            		  num=sleeper_seats[m-1];
            		  }catch(e)
            		  {
            			//  alert(e)
            		  }
            		  if(num==undefined)
            			  {
            			  num=m;
            			  }
        		  }
            	//  alert("numsssss="+num);
            	  var divIdName = num;
            	 
            	  newdiv.setAttribute('id',num+"/");
            	 
            	  if(num<10){
            		for(var m=0;m<=lady.length;m++){
            			if(num==lady[m]){
            				newdiv.innerHTML = '<div  style="margin-left:3%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable  style="margin-left:11%;"><select class="logg" id="gender'+num+'"style="width:120px;height:24px;font-size: 10px;"><option>--SELECT--</option><option>MALE</option><option selected>FEMALE</option></select><input type="hidden"style="width:28px;height:15px;" onkeypress="return isNumberKey(event)" maxlength="2" value="0" id="age'+num+'"></lable></td></tr></table></div>';
            	  		break;
            			}
            			else if(m==((lady.length-1)))
            				{
            				 if(che>0){
            				 newdiv.innerHTML = '<div  style="margin-left:3%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable style="margin-left:11%;"><select class="logg" id="gender'+num+'"style="font-size: 10px;width:120px;height:24px;"><option>--SELECT--</option><option selected>MALE</option><option >FEMALE</option></select></lable><input type="hidden" style="width:28px;height:15px;" onkeypress="return isNumberKey(event)" value="0" maxlength="2" id="age'+num+'"></td></tr></table></div>';
            				 }
            				 else
            					 {
            					 newdiv.innerHTML = '<div  style="margin-left:3%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable style="margin-left:11%;"><select class="logg" id="gender'+num+'"style="font-size: 10px;width:120px;height:24px;"><option>--SELECT--</option><option >MALE</option><option >FEMALE</option></select></lable><input type="hidden" style="width:28px;height:15px;" onkeypress="return isNumberKey(event)" value="0" maxlength="2" id="age'+num+'"></td></tr></table></div>';
            					 }
            				}
            			else{ continue;}
            		}
            	  }
            	  else
            		  {
            		  for(var m=0;m<=lady.length;m++){
              			if(num==lady[m]){
            		  newdiv.innerHTML = '<div  style="margin-left:2%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable style="margin-left:9%;"><select class="logg" id="gender'+num+'" style="font-size: 10px;width:120px;height:24px;"><option>--SELECT--</option><option >MALE</option><option selected>FEMALE</option></select></lable><input type="hidden" style="width:28px;height:15px;" onkeypress="return isNumberKey(event)" value="" maxlength="2" id="age'+num+'"></td></tr></table></div>';
            		  break;
            			}
            			else if(m==((lady.length-1)))
            				{
            				if(che>0){
            				newdiv.innerHTML = '<div  style="margin-left:2%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable style="margin-left:9%;"><select class="logg" id="gender'+num+'" style="font-size: 10px;width:120px;height:24px;"><option>--SELECT--</option><option selected>MALE</option><option>FEMALE</option></select></lable><input type="hidden" style="width:28px;height:15px;" onkeypress="return isNumberKey(event)" value="0" maxlength="2" id="age'+num+'"></td></tr></table></div>';
            				}
            				else
            					{
            					newdiv.innerHTML = '<div  style="margin-left:2%;"><table border="0"><tr><td width="25%"><span style="font-size:12px;margin-top:2%;">'+num+'</span></td><td><lable style="margin-left:9%;"><select class="logg" id="gender'+num+'" style="font-size: 10px;width:120px;height:24px;"><option>--SELECT--</option><option >MALE</option><option>FEMALE</option></select></lable><input type="hidden" style="width:28px;height:15px;" onkeypress="return isNumberKey(event)" value="0" maxlength="2" id="age'+num+'"></td></tr></table></div>';
            					}
            				}
            			else{ continue;}
            		}
            				
            		  }
            	 
            	  ni.appendChild(newdiv);
            	 
            	  ik++;
            	  //alert("ccccccccc"+ik);
            	  disp(ik);
           // alert("disk finised");
            }
            
            
            function removeElement(m)
            {
            	document.getElementById("err").innerHTML="";
           // alert("remover="+m);
            	 var d = document.getElementById('passanger');
            	 var num=m;
            	  var olddiv = document.getElementById(num+"/");
            	  olddiv.innerHTML='data';
            	  d.removeChild(olddiv);
            	  ik--;
            	  disp(ik);
            
            }
            function disp(gf)
        	{
          //  alert("gf="+gf);
            	document.getElementById("err").innerHTML="";
        		if(gf>0)
        			{
        		
        			$("#hiding").show();
        			 $("#u_details").show();
        			 $("#passanger").show();
        			 $("#passes").hide();
        			 $("#seatInfoHeading").show();
        			 $("#passes1").hide();
        			}
        		else
        			{
        			$("#hiding").hide();
        			$("#passes1").show();
        			 $("#u_details").hide();
        			 $("#passanger").hide();
        			 $("#seatInfoHeading").hide();
        			}
        		 add_fare(fare);
        	//	 alert("before fare");
        	}
            function add_fare(fare) {
            //	alert("begins");
            	var len=book_seats.length;
            	
            	var arr1=new Array();
            
            	if(len>=1)
            	{
            		
            		
            		
            		for(var y=0;y<len;y++)
            		{
            			var dat=book_seats[y];
            			if(dat!=0)
            			{
            			
            			arr1.push(dat);
            			}
            		}
            		if(arr1.length>0){
            			size=arr1.length;
            
            			var fa=(arr1.length)*b_fare;
           // alert("fare="+b_fare);
            			document.getElementById("fare11").value=fa;
            		
            		
            		}
            		else
            			{
            			document.getElementById("fare").innerHTML='0';
            			}
            		
            	}
            	else
            	{
            		alert("sorry no seats booked");
            	}
            	//alert("finished");
        	} 
            
       
        var age1,gender1,name1;
        var arr,len;
        var action;
    
        function seats_list(val)
        {
        	
        	//alert("effect");
        	arr=new Array();
        	var age=new Array();
        	var gender=new Array();
        	var name=new Array();
        	var len=book_seats.length;
        	//alert("1");
        	var boarded;
        	a_from=document.getElementById("from1").value;
        	a_to=document.getElementById("to1").value;
        	a_date=document.getElementById("date1").value;
        	//alert("2");
        	if(len>=1)
        	{
        		
        		 boarded=document.getElementById("mySelect").value;
        		// alert("3=="+book_seats);
        		 var jj=0;
        		for(var y=0;y<len;y++)
        		{
        			
        			var dat=book_seats[y];
        		  // alert("dat= "+dat)
        			if(dat!=0)
        			{
        			
        			
        			var gender1=document.getElementById("gender"+dat).value;
        			
        			gender.push(gender1);
        			age.push(0);
        			
        			arr.push(dat);
        			
        			
        			}
        			 var ik=0;
        			
        		}	
        	//alert("4");
        		if(arr.length>0)
        		{
        			var boarde="";
        			 len=arr.length;
        			var boarded0=boarded.split(":");
        			
        			var boarded10=boarded0[0];
        			var boarded1=boarded10.split(" ");
        			
        			for(var y=0;y<(boarded1.length)-1;y++)
        				{
        				if((boarded1.length)-2==y)
        					{
        						boarde=boarde+boarded1[y];
        					}else
        						{//alert("inddisjf");
        						boarde=boarde+boarded1[y]+" ";
        						}
        				 
        				}
        			
        			document.getElementById("age").setAttribute("value", age);
        			document.getElementById("seatName").setAttribute("value", arr);
        			
        			document.getElementById("bb").setAttribute("value", boarde);
        			document.getElementById("gender").setAttribute("value", gender);
        			document.getElementById("totalSeats").setAttribute("value", len);
        		
        		}
        		else
        			{
        			alert("sorry no seats booked");
        			return (false);
        			}
        	}
        	else
        	{
        		alert("sorry no seats booked");
        		return (false);
        	}
        	
        	//alert("5");
        	var v=0,id,n;
        	id="err";
        	
        	var numbers11 = /^[-+]?[0-9]+$/; 
        	for(var z1=0;z1<arr.length;z1++)
        		{
        
        			
        			if(gender[z1]=='--SELECT--')
        			{
    			
        				//id="passerr"+num;
        				document.getElementById("gender"+arr[z1]).focus();
        				document.getElementById(id).innerHTML="Select Valid Gender on seat:"+arr[z1];
        				document.getElementById("boarederr").innerHTML="";
        				document.getElementById("mailerr").innerHTML="";
        				document.getElementById("mobilerr").innerHTML="";
        				document.getElementById("nameerr").innerHTML="";
        				return (false);
        			}
    		
        			/*if(age[z1]==0 || age[z1]=="" || !age[z1].match(numbers11))
        			{
        				document.getElementById("age"+arr[z1]).focus();
        				
        				document.getElementById(id).innerHTML="Enter Valid Age on seat:"+arr[z1];
        				document.getElementById("boarederr").innerHTML="";
        				document.getElementById("mailerr").innerHTML="";
        				document.getElementById("mobilerr").innerHTML="";
        				document.getElementById("nameerr").innerHTML="";
        				return (false);
        			}
        			else 
        			{
        				//alert(book_seats[y]);
        				//id="passerr"+num;
        				document.getElementById(id).innerHTML="";
        				document.getElementById("boarederr").innerHTML="";
        				document.getElementById("mailerr").innerHTML="";
        				document.getElementById("mobilerr").innerHTML="";
        				document.getElementById("nameerr").innerHTML="";
        			}*/
        	//arr=null;
        		}
        	//var  y=0;
        	//alert("6");
    			var name2=document.getElementById("name").value;
    			//alert(name2+" value :"+name2.length);
    			document.getElementById(id).innerHTML="";
    			var nid=document.getElementById("name");
    			if(name2=="" || name2.length<2)
    				{
    				
    				 	document.getElementById("err1").innerHTML="Enter correct name in below box";
    				 	nid.focus();
    				 	return (false);
    				}
    			else
    				{
    				
    				document.getElementById("err1").innerHTML="";
    				}
    		
        		var mail=document.getElementById("email").value;
        		var mid=document.getElementById("email");
        		//alert("mail"+mail);
        		if(mail!="")
        		{
          		/*if (mail!=null || mail!="")
        	    {*/
        		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        		{
        			document.getElementById("err1").innerHTML="";
        	    }
        	    else {
        	    	document.getElementById("err1").innerHTML="please enter valid email-id";
        	    	mid.value="";
        	    	mid.focus();
        	    return (false);
        	    }
        	   // }
        		/*else if(mail!="")
        		{
        			
        		    document.getElementById("err1").innerHTML="";
        		    mid.focus();
        		    return (false);
        		}*/
        		}
        		var phon=document.getElementById("phoneno").value;
        		var pid=document.getElementById("phoneno");
        		if(phon=="")
        		{
        		    document.getElementById("err1").innerHTML="Please enter Phone Number";
        			pid.focus();
        			return (false);
        		}
        		else if(phon.length>10 || phon.length<10)
        		{
        			
        			document.getElementById("err1").innerHTML="Please enter correct Phone Number";
        			pid.value="";
        			pid.focus();
        			return (false);
        		}
        		else if((phon.length==10) && (phon!=""))
        		{
        		    document.getElementById("err1").innerHTML=" ";
        		}
        		var opt=document.getElementById("mySelect").value;
        		
        	if(opt=='------------select------------')
        		{
        		document.getElementById("err1").innerHTML="Please select boarding place";
        		document.getElementById("mySelect").focus();
        		return (false);
        		}
        	else
        		{
        		document.getElementById("err1").innerHTML="";
        		
        		}
        	/*var con=confirm("Please confirm to book selected ticket.");
        	if(con==false)
        		{
        		return false;
        		}
        	else
        	{*/
        	
        	if(val==1)
        		{
        		$("#globallaodingeffect").show();
        		if(edi==1)
        			{
	        			var actions=document.getElementById("actionedit").value;
	        			document.getElementById("btn").disabled = "disabled";
	        			ticket_rebook(actions);
	        			
        			}
        		else
        			{
        				action=document.getElementById("action").value;
        				document.getElementById('btn').disabled = "disabled";
	        			ticket_book(action);
	        			iseditaction="no";
	        			
        			}
        		}
        	
        	return true;
      /*  }*/	
        }
        var updated_seats,del_seats,new_bookseats,u=0,v=0;
        function valuation()
        {
        	updated_seats=new Array();
        	del_seats=new Array();
        	new_bookseats=new Array();
        	//alert("arr"+arr+" len: "+arr.length+" actual seat:"+edited_seat+" lenth:"+edited_seat.length);
        	for(var i=0;i<edited_seat.length;i++)
        		{
        		for(var j=0;j<arr.length;j++)
        			{
        			if(edited_seat[i]==arr[j])
        				{
        				updated_seats[j]=arr[j];
        				
        			//	break;
        				}
        			else
        				{
        				//alert("arr"+arr[j]);
        				if(updated_seats.length>0)
        					{
        					//alert("arr"+arr[j]+" "+updated_seats);
        					for(var m=0;m<updated_seats.length;m++)
        						{
        						if(updated_seats[m]==arr[j])
        							{
        							new_bookseats[j]=arr[j];
        							}
        						}
        				
        					}
        				else
        					{
        					new_bookseats[j]=arr[j];
        					}
        				/*del_seats[i]=edited_seat[i];*/
        				
        				}
        			}
        		}
        	//alert("update seats:"+updated_seats+" new booked"+new_bookseats);/*+" new seats:"+new_bookseats+" deleted seats:"+del_seats*/
        	
        }
      
       
       
        function isNumberKey(evt)
   	 {
   	    var charCode = (evt.which) ? evt.which : event.keyCode
   	    if (charCode != 46 && charCode > 31 
   	      && (charCode < 48 || charCode > 57))
   	       return false;

   	    return true;
   	 }
        
      
	
	function ticket_book(action)
	{
		//alert("ticket book");
		//alert("action1:"+action);
    var action =document.getElementById("action").value;
    	var userName=document.getElementById("u_name").value;
    	var age=document.getElementById("age").value;
    	var journeyDate=document.getElementById("journeyDate").value;
    	var routeId=document.getElementById("routeId").value;
    	var gender=document.getElementById("gender").value;
    	var seatName=document.getElementById("seatName").value;
    //	alert("action1:"+action+" "+seatName);
    	var totalSeats=document.getElementById("totalSeats").value;
    	var bb=document.getElementById("bb").value;
 
    	var execuseme=document.getElementById("execuseme").value;
    	var name=document.getElementById("name").value;
    	var email=document.getElementById("email").value;
    	var phoneno=document.getElementById("phoneno").value;
    	var nsmsdmal=document.getElementById("nsmsdmal").checked;
    	
		  if(xmlhttp) {
				  
				   url="WebClient";
				//  alert("word");
			     xmlhttp.open("POST",url,true);
			     xmlhttp.onreadystatechange=handle_booking;
			     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    xmlhttp.send("action="+action+"&userName="+userName+"&age="+age+"&routeId="+routeId+"&journeyDate="+journeyDate+"&boardingName="+bb+"&phoneno="+phoneno+"&name="+name+"&seatName="+seatName+"&gender="+gender+"&totalSeats="+totalSeats+"&email="+email+"&nsmsdmal="+nsmsdmal+"&execuseme="+execuseme);//+"&age="+age+"&userId="+userId+"&destinationId="+destinationId+"&busId="+busId+"&boardingId="+boardingId+"fare="+fare
				    
				   
				  }
			  
		}
	function handle_booking() 
	{
		if (xmlhttp.readyState == 4) {//alert("page of ticket booking: "+xmlhttp.status);
		     if(xmlhttp.status == 200) {
		    	//alert(xmlhttp.responseText);
		    	 var json1=eval("("+xmlhttp.responseText+")");
		    	
		    	 if(json1.passengerBookedCTO.length>0)
	     		 {
	    	 admin_print(json1);
	     		 }
	     	 else
	     		 {
	     		 alert("please refresh your browser and try again ");
	     		 }
		    	 
		     
		     }
		}
		
	} 

	function ticket_rebook(action)
	{
		//alert("ticket book:"+action);
		//alert("arr"+arr+" len: "+arr.length+" actual seat:"+edited_seat+" lenth:"+edited_seat.length);
		///alert("action1:"+action);
		//alert("csrdsafsadf");
    	//var action =document.getElementById("action").value;
    	var userName=document.getElementById("u_name").value;//alert("oewk");
    	var age=document.getElementById("age").value;//alert("oasdk");
    	var journeyDate=document.getElementById("journeyDate").value;
    	var routeId=document.getElementById("routeId").value;
    	var gender=document.getElementById("gender").value;
    	var seatName=document.getElementById("seatName").value;
    	var totalSeats=document.getElementById("totalSeats").value;//alert("ok333");
    	var bb=document.getElementById("bb").value;
    	var userId=document.getElementById("userId").value;
    	var destinationId=document.getElementById("destinationId").value;
    	var busId=document.getElementById("busId").value;
    	var boardingId=document.getElementById("boardingId").value;
    	var execuseme=document.getElementById("execuseme").value;
    	var name=document.getElementById("name").value;
    	var email=document.getElementById("email").value;
    	var phoneno=document.getElementById("phoneno").value;
    	var nsmsdmal=document.getElementById("nsmsdmal").checked;
    	var fare=document.getElementById("fare11").value;
    	
    //	alert("ok"+age);
    	//alert("action "+action+" userName:"+userName+" age:"+age+" journeyDate:"+journeyDate+" routeId:"+routeId+" gender:"+gender+" seatName"+seatName+" totalSeats:"+totalSeats);
    	//alert("bb"+bb+" userId:"+userId+" destinationId:"+destinationId+" busId:"+busId+" boardingId:"+boardingId+" execuseme"+execuseme+" name"+name+" email:"+email);
    	//alert(" phoneno"+phoneno+" nsmsdmal:"+nsmsdmal+" fare:"+fare);
      				//alert("action="+action+"&userName="+userName+"&age="+age+"&routeId="+routeId+"&journeyDate="+journeyDate+"&boardingName="+bb+"&phoneno="+phoneno+"&name="+name+"&seatName="+seatName+"&gender="+gender+"&totalSeats="+totalSeats+"&email="+email+"&nsmsdmal="+nsmsdmal+"&oldgroupseat="+edited_seat+"&newgroupseat="+arr+"&execuseme="+execuseme);
		
		  if(xmlhttp) {
				  
				   url="WebClient";
			//	  alert("works");
			     xmlhttp.open("POST",url,true);
			     xmlhttp.onreadystatechange=handle11;
			     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    xmlhttp.send("action="+action+"&userName="+userName+"&age="+age+"&routeId="+routeId+"&journeyDate="+journeyDate+"&boardingName="+bb+"&phoneno="+phoneno+"&name="+name+"&seatName="+seatName+"&gender="+gender+"&totalSeats="+totalSeats+"&email="+email+"&nsmsdmal="+nsmsdmal+"&oldgroupseat="+edited_seat+"&newgroupseat="+arr+"&execuseme="+execuseme);//+"&age="+age+"&userId="+userId+"&destinationId="+destinationId+"&busId="+busId+"&boardingId="+boardingId+"fare="+fare
				    
				   
				  }
			  
		}
	function handle11() 
	{
		if (xmlhttp.readyState == 4) {//alert("page: "+xmlhttp.status);
		     if(xmlhttp.status == 200) {
		     	 var json1=eval("("+xmlhttp.responseText+")");
		     	 if(json1.ticketStatus=="NO")
		     		 {
		     		$("#globallaodingeffect").hide();
		     		 document.getElementById("mm").innerHTML="<div class='offset2'><div class='well span8'><br/><br/><center><h3>Limousine Transit E-tickets</h3><br/><br/><font color='green'>YOUR TICKET HAS BEEN UPDATED SUCCESSFULLY...</font><br/><br/><input type='button' class='btn btn-info' value='close' onClick='javascript: back();' /></div></div><br/><br/><br/>";
		     		 }
		     	 else{
		     		 
		     		admin_print(json1);	 
		     	 }
		    	 
		     		
		     
		     }
		}
		
	} 
	
	function addElement1(bookId,seatName,name,gender)
	{
		
		//alert(bookId+""+seatName+""+name+""+gender);
		 var ni = document.getElementById("pass");
		 for(var j=1;j<=bookId.length;j++){
		  
		  var newdiv = document.createElement('div');
		  newdiv.setAttribute('id',j+"/");
		
			//11  alert("l 1 "+num);
		  newdiv.innerHTML = '<table border="0" width="600" align="center">'+'<tr><td width="125px">'+j+'</td><td width="125px" ><label>&nbsp&nbspLMS '+bookId[j-1]+'</label></td><td width="105px"style="padding-left:30px;">'+seatName[j-1]+'</td><td width="120px" style="padding-right:5px;">'+name[j-1]+'</td><td width="125px">'+gender[j-1]+'</td></tr></table>';
		  
		 
		 
		  ni.appendChild(newdiv);
		 }	 
	}
	
	function printme()
	{
		//alert("printme");
		$("#page1").hide();
		$(".body2").hide();
		$("#left").hide();
		$("#dd1").hide();
		$("#pp1").hide();
		window.print();
		window.history(-1);
		
	}
	
	function show()
	{
		$("#page1").show();
		$("#left").show();
		$(".body2").show();
		$("#dd1").show();
		$("#pp1").show();
		}
	var sss;
	function admin_print(p_data)
	{
		$("#globallaodingeffect").hide();
		sss=p_data;
		  if(xmlhttp) {
				  
				   url="staticdata/html/user/Ticket.html";
				  
			     xmlhttp.open("GET",url,true);
			     xmlhttp.onreadystatechange=handle110;
			     xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    xmlhttp.send();
  
				  }
			  
		}
	function handle110() 
	{
		if (xmlhttp.readyState == 4) {
		     if(xmlhttp.status == 200) {
		    	document.getElementById("mm").innerHTML=xmlhttp.responseText;
		    	splite(sss);
		     }
		}
	}  
	
	
	function splite(dd)
	{
	
		var zzz;
		var bookId=new Array();
		var seatName=new Array();
		var name=new Array();
		var gender=new Array();
		var journey,detail,detail1,time,point,landmark1,address,contact;
		//alert("splte block 1");
		var details=dd;
		var fare=details.totalFare;
		//alert("splte block 2");ticketStatus
		var t_status=details.ticketStatus;
		//alert(t_status+" "+zzz);
		if(t_status=="NO")
			{
			//alert("false111");
			document.getElementById("display").innerHTML="<center><b><span style='color:green'>YOUR TICKET HAS BEEN UPDATED SUCCESSFULLY...</span></b></center>";//<center><b>YOUR TICKET HAS BEEN UPDATED SUCCESSFULLY...</b></center>
			/*$("#pp").hide();*/
			//history.back();<input type="button" class="btn btn-info" value="close" onClick="javascript: back();" />
			document.getElementById("tab").innerHTML='<center><span style="margin-left:\'3%\'"><br/><br/><br/> &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<input type="button" class="btn btn-info" value="close" onClick="javascript: back();" /></center>';
			}
		else if(t_status=="YES")
			{
			var source=details.sourceName;
			var destination=details.destinationName;
			//alert("splte block 3");
			journey=details.dateOfJourney;
			var jj=journey.split(" ");
			
			
			detail=details.passengerBookedCTO;
			//alert("splte block 4");
			detail1=details.boardingPointsCTO;
			for(var i=0;i<detail.length;i++)
				{
				//alert(i);
					bookId[i]=detail[i].bookId;
					seatName[i]=detail[i].seatName;
					name[i]=detail[i].name;
					gender[i]=detail[i].gender;
					
				}
			var time1=detail1.boardingTime;
			var cc=time1.split(':');
			//alert("name : "+name);
			if(cc[0]>12)
				{
				var uu=cc[0]-12;
				time=uu+':'+cc[1]+":"+cc[2]+" pm";
				}
			else
				{
				time=time1+" am";
				}
			point=detail1.boardingPlace;
			//alert(point);
			var sp=" ";
			landmark1=detail1.landMark+sp;
			address=detail1.address;
			contact=detail1.contactNumber;
			//alert(landmark1);
			//alert("bookId:"+bookId+"seat: "+seatName+"name="+name+"gender="+gender+"date:"+journey+"fare: "+fare+"src : "+source+"dest: "+destination+"time: "+time+"board: "+point+"landmark:"+landmark1+"contact: "+contact+"address: "+address);
			var point1=point;
			//alert("block: 5");
			var j1=journey.split(":");
			var j2=j1[0].substring(0,12);
			a_from=source;
			a_to=destination;
			a_date=journey;
			document.getElementById("from").innerHTML=source;
			document.getElementById("to").innerHTML=destination;
			document.getElementById("dateofjourney").innerHTML=j2;
			//alert("block: 6");
			document.getElementById("passcount").innerHTML=detail.length;
			document.getElementById("time").innerHTML=time;
			document.getElementById("fare").innerHTML=fare;
			//alert("block: 7");
			document.getElementById("board").innerHTML=point;
			document.getElementById("landmark").innerHTML=landmark1;
			document.getElementById("address").innerHTML=address;
			//alert("block: 8");
			document.getElementById("contact").innerHTML=contact;
			//alert("block:8a "+point1);
			document.getElementById("board1").innerHTML=point1;
			//alert("block:9");
			 addElement1(bookId,seatName,name,gender);
			
			}
		else if(t_status==zzz)
			{
	//		alert(t_status);
			var source=details.sourceName;
			var destination=details.destinationName;
			//alert("splte block 3");
			journey=details.dateOfJourney;
			detail=details.passengerBookedCTO;
			//alert("splte block 4");
			detail1=details.boardingPointsCTO;
			for(var i=0;i<detail.length;i++)
				{
				//alert(i);
					bookId[i]=detail[i].bookId;
					seatName[i]=detail[i].seatName;
					name[i]=detail[i].name;
					gender[i]=detail[i].gender;
					
				}
			var time1=detail1.boardingTime;
			var cc=time1.split(':');
			//alert("name : "+name);
			if(cc[0]>12)
				{
				var uu=cc[0]-12;
				time=uu+':'+cc[1]+":"+cc[2]+" pm";
				}
			else
				{
				time=time1+" am";
				}
			point=detail1.boardingPlace;
			//alert(point);
			var sp=" ";
			landmark1=detail1.landMark+sp;
			address=detail1.address;
			contact=detail1.contactNumber;
			//alert(landmark1);
			//alert("bookId:"+bookId+"seat: "+seatName+"name="+name+"gender="+gender+"date:"+journey+"fare: "+fare+"src : "+source+"dest: "+destination+"time: "+time+"board: "+point+"landmark:"+landmark1+"contact: "+contact+"address: "+address);
			var point1=point;
			//alert("block: 5");
			var j1=journey.split(":");
			var j2=j1[0].substring(0,12);
			a_from=source;
			a_to=destination;
			a_date=journey;
			document.getElementById("from").innerHTML=source;
			document.getElementById("to").innerHTML=destination;
			document.getElementById("dateofjourney").innerHTML=j2.trim();
			//alert("block: 6");
			document.getElementById("passcount").innerHTML=detail.length;
			document.getElementById("time").innerHTML=time;
			document.getElementById("fare").innerHTML=fare;
			//alert("block: 7");
			document.getElementById("board").innerHTML=point;
			document.getElementById("landmark").innerHTML=landmark1;
			document.getElementById("address").innerHTML=address;
			//alert("block: 8");
			document.getElementById("contact").innerHTML=contact;
			//alert("block:8a "+point1);
			document.getElementById("board1").innerHTML=point1;
			//alert("block:9");
			 addElement1(bookId,seatName,name,gender);
			}
		else
			{
			//alert("here");
			document.getElementById("display").innerHTML="<center><b><span style='color:red'>"+t_status+"</span></b></center>";
			document.getElementById("tab").innerHTML='<center><br/><br/><br/>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" class="btn btn-info" value="close" onClick="javascript: back();" /></center>';
			}
		
		}
	
	function back()
	{
		
		var day=new Date(a_date);
		var d1=day.getDate();
		var m1=(day.getMonth()+1);
		var y1=day.getFullYear();
		var comp=y1+"-"+m1+"-"+d1;
		if(comp.toString()=="NaN-NaN-NaN")
			{
			comp=a_date;
			}
		var r=confirm("Do you want close this window now?");
		if (r==true)
		  {
			window.location.replace("adminbusdetails.do?from="+a_from+"&&to="+a_to+"&&txtEighth="+comp);
		  }
		
	
	}
	function reload()
	{
		window.location.reload();
	}