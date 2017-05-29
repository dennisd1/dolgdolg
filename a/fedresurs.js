var Crawler = require("crawler");
var fs = require('fs'); //!!! added


var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($("title").text());
        }
        done();
    }
});


// Queue URLs with custom callbacks & parameters
c.queue([{
    uri: 'https://bankrot.fedresurs.ru/TradeList.aspx', 
    jQuery: true,

    // The global callback won't be called
    callback: function (error, res, done) {
        if(error){
            console.log(error);
        }else{
	
	//finding dates
		var $ = res.$;
         	$("td:contains(29.05.2017)").each(function (){
		  		console.log("date=", $(this).text());
				hrefdebtor = $(this).nextAll().eq(1).children("a").attr('href');
				console.log(hrefline);
				var string = ""+hrefdebtor;
				//var regex = /.{32}$/g;
				//var substr = hrefdebtor.match(regex);
                                if(
				var last32 = string.slice(-32);
				console.log("ID=",last32);
  		});

            //console.log('Grabbed', res.body.length, 'bytes');
             //console.log('Grabbed', res.$("body").text());
            //console.log('Grabbed', res.$(".StaticText").text());
            //fs.appendFileSync('cardcardcard.html', res.$("body").html());
             //bodytext = res.$("body").text();
             //var regex = /\d{13}/g;
             //var substr = bodytext.match(regex);
             //console.log("OGRN=",substr[0]);
        }
        done();
    }
}]);
