	var url;
	var id;
	var j=1;
	
$(document).ready(function () {
	$('div[data-loader]').each(function() {
		url=$(this).attr("data-loader");
		id=$(this).attr("id");
    		var tmp_j = j++;
    		 $.get(url, function(data){
			 //$('#'+tmp_j).html(data);
 			$('#'+tmp_j).append(data);  //!!!! NEW
			 //$(data).insertAfter($('#'+tmp_j)); //WAS

			 });
	});
});
//this is new---- to delele
$("div:contains('Информация')").сlick(function() {
   $("#2").toggle();
   $("#3").toggle();
});
$("div:contains('Арбитражные дела')").сlick(function() {
   $("#1").toggle();
   $("#3").toggle();
});
//------------------------------
//
