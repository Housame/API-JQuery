$(document).ready(function(){
    var apiurl,myresult,apiurl_size,selected_size;
    apiurl = "http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&APPID=1dfa4023aa371ecde2fdfcaceee0a0d3";
    selected_size = 640;
    

        $('#weatherBtn').click(function(){
          var x = $('#weatherLocation').val();
          console.log(x);
            $("#results").html(x);
            apiurl = "http://api.openweathermap.org/data/2.5/weather?q=London&appid=1dfa4023aa371ecde2fdfcaceee0a0d3";
            console.log(apiurl);
            $.getJSON(apiurl,function(json) {
                console.log(json);
                $.each(json.weather,function(i,myresult)   {
                    apiurl_size = "http://api.openweathermap.org/data/2.5/we?q="+x+"&APPID=1dfa4023aa371ecde2fdfcaceee0a0d3";
                    console.log(apiurl_size);
                    // $.getJSON(apiurl_size,function(size){
                    // $.each(size.sizes.size,function(i,myresult_size){
                    //     console.log(myresult)
                    //     if(myresult_size.width==selected_size){
                    //         $("#results").append('<p>'+myresult.title + '</p></p><p><a href="'+myresult_size.url+'" target="_blank"><img src="'+myresult_size.source+'"/></a></p>');
                    //         }
                    //     })
                    // })
                });
            });
        });
});