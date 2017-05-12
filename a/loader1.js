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
function clickfunction(){

	$('.b-submenu-item:contains("Реестры")').html("Исполнительные производства");
	
	$('.b-submenu-item:contains("Арбитражные дела")').click(function() {
	//$(".b-submenu-item").click(function() {
	   console.log("Арбитражные дела CLICKED");
	   $("#1").hide();
	   $("#2").show();
	   $("#3").hide();
	});
	
	$('.b-submenu-item:contains("Информация")').click(function() {
	//$(".b-submenu-item").click(function() {
	   console.log("Информация CLICKED");
	   $("#1").show();
	   $("#2").hide();
	   $("#3").hide();
	});
	
	$('.b-submenu-item:contains("Исполнительные производства")').click(function() {
	//$(".b-submenu-item").click(function() {
	   console.log("ИСПОЛНИТЕЛЬНЫЕ CLICKED");
	   $("#1").hide();
	   $("#2").hide();
	   $("#3").show();
	});
}
//------------------------------
//
