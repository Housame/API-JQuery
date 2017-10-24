$(document).ready(function(){
    var apiurl,myresult,mainresult;
    var api_lang = "se";
    apiurl = "http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&lang=se&appid=1dfa4023aa371ecde2fdfcaceee0a0d3";
    
        $('#search').keyup(function(){
            if(event.keyCode == 13){
            api_lang =  $( "#lang" ).val();
            var x = $('#search').val();
            console.log(x);
            $("#results").html(x);
            apiurl = "http://api.openweathermap.org/data/2.5/weather?q="+x+"&lang="+api_lang+"&units=metric&appid=1dfa4023aa371ecde2fdfcaceee0a0d3";
            console.log(apiurl);
            $.getJSON(apiurl,function(json) {
                console.log(json);
                $.each(json.weather,function(i,myresult)   {
                     $("#results").append('<p> vädret: '+myresult.description + '.</p><p><img src="'+myresult.icon+'"/></p>');
                });

                     $("#results").append('<p> Temperatur: '+json.main.temp + ' celcius.</p><p>Minimum temp: '+json.main.temp_min+' celsius.</p><p>Maximum temp: '+json.main.temp_max+' celsius.</p>');

            });
        }
        });
});