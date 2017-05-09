 function geturl(geturl)  {
  
    if (geturl==="t-list") {
    console.log("EXTERNAL T_LIST FOUND!!!");
    }
    if (geturl==="t-session") {
    console.log("SESSION FOUND!!!");
     $(document).ready(function(){
        console.log('document on ready inside of api THIS DOES NOT WORK');
      });
     //$("#post_1.main-avatar").find("img.avatar").css("width"," 100px");
$("#post_1").find("img.avatar").css("height"," 100px");
$( "p:contains('?')").each(function( index ) {
  $(this).html("<h1>"+$(this).text()+"</h1>");
$(this).parents(".topic-body").prev(".topic-avatar").css( "display", "none" );
});

//$( "p:contains('Подписаться')").html('<div class="ui blue button tosubcribe">'+$(this).text()+'</div>'); //Не работает
$( "p:contains('Подписаться')").html('<div class="tosubcribe">'+'</div>'); 


//--------------------------------------------------REAL STAFF
$('span.btn-group.notification-options>button.widget-button').removeClass().addClass("ui blue button trackingbutton");
$('span.btn-group.notification-options:last').insertAfter('.tosubcribe');


$('.trackingbutton').on('click',function() {
console.log('tracking button clicked');
//console.log($('.dropdown-menu').find('li:last').);
$('.dropdown-menu').find('li:last').css('display','none'); //not workign
});
//--------------------------------------------------REAL STAFF

$('.tosubcribe').click(function() {
//$('span.btn-group.notification-options>button.widget-button').trigger('click'); //notworking
 //$('span.btn-group.notification-options:last').insertAfter('.tosubcribe'); //WORKING

//$('span.btn-group.notification-options>button.widget-button').addClass('d-hover'); //   12
//$('.widget-button.d-hover').trigger('click');//  13 not working
//$('.widget-button.d-hover').css('color','red');//  14 
//$('.notification-options.tracking').click();  //15
//console.log('I am clicked');
});

$('span.btn-group.notification-options>button.widget-button').click(function() {
//$('.regular').parent('a').hide();  //hiding TRACKING option //notworking
//console.log('I am clicked');
});
    }
}
