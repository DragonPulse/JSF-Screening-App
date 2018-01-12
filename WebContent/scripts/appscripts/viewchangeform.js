$(function() {
	
	function deleteRow(changeFormId)  {
        var table = document.getElementById(changeFormId).tBodies[0];
        var rowCount = table.rows.length;

        for(var i=1; i<rowCount; i++) {
           // var row = table.rows[i];
            var status = row.cells[5].getElementsByTagName('input')[0];
            if(null!=status && status == Approve) {
                table.deleteRow(i);
                rowCount--;
                i--;
             }
        }
}
	
	//Report Loading
	var handleAjaxError=function (jqXHR, textStatus, errorThrown) {
		alert(jqXHR);
		alert(textStatus);
		alert(errorThrown);
	    // do something
	}

	$("#message").hide();
	
});
