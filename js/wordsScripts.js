$(document).ready(function(){
    var bigHugeThesaurus_apiKey = "17c9962c502adf4660a0a935baff01dd";
    
    var bigHugeThesaurus_apiUrl_beginning = 'http://words.bighugelabs.com/api/2/';
    var bigHugeThesaurus_apiUrl_ending = '/json';
    var complete_bigHugeThesaurus_apiUrl = '';

    var flickr_apiUrl_apiKey = "23f772bf9bde20512e36b8a9e8871a91";
    var flickr_apiUrl_beginning = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=";
    var flickr_apiUrl_ending = '&safe_search=1&content_type=1&per_page=10&format=json&nojsoncallback=1';
    var complete_flickr_apiUrl = '';
    
    var searchWord = "";
    selected_size = 500;
 
    // $.getJSON(complete_flickr_apiUrl,function(json) {
    //     $.each(json.photos.photo,function(i,myresult)   {
    //         apiurl_size = flickr_apiUrl_beginning+flickr_apiUrl_apiKey+"&photo_id="+myresult.id+"&format=json&nojsoncallback=1";
    //         $.getJSON(apiurl_size,function(size){
    //         $.each(size.sizes.size,function(i,myresult_size){
    //             console.log(myresult)
    //             if(myresult_size.width==selected_size){
    //                 $("#results").append('<p>'+myresult.title + '</p></p><p><a href="'+myresult_size.url+'" target="_blank"><img src="'+myresult_size.source+'"/></a></p>');
    //                 }
    //             })
    //         })
    //     });
    // });

   //-------------------------------------------B H T----------------------------------
   function searchApis(searchWord){
    complete_bigHugeThesaurus_apiUrl = bigHugeThesaurus_apiUrl_beginning +bigHugeThesaurus_apiKey+'/'+ searchWord + bigHugeThesaurus_apiUrl_ending;
    $.getJSON(complete_bigHugeThesaurus_apiUrl, ( bigHugeThesaurusResponse)=>{
            $.each(bigHugeThesaurusResponse,(i,result)=>{
                $.each(result,(typeOfWord,wordArray)=>{
                    $.each(wordArray,(index,word)=>{
                         
                        $('#big-huge-thesaurus-results').append('<span>'+word+'</span><br/>');
                    });
                    
                });
            })
    });
    complete_flickr_apiUrl = flickr_apiUrl_beginning+flickr_apiUrl_apiKey+'&tags=' +searchWord +flickr_apiUrl_ending;
    console.log(complete_flickr_apiUrl);
    $.getJSON(complete_flickr_apiUrl,function(json) {
        $.each(json.photos.photo,function(i,myresult)   {
            apiurl_size = "https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key="+flickr_apiUrl_apiKey+"&photo_id="+myresult.id+"&format=json&nojsoncallback=1";
            $.getJSON(apiurl_size,function(size){

            $.each(size.sizes.size,function(i,myresult_size){
                console.log(myresult_size)

                if(myresult_size.width==selected_size){
                     
                    $("#results").append('<p><b>'+myresult.title + '</b></p></p><p><a href="'+myresult_size.url+'" target="_blank"><img src="'+myresult_size.source+'"/></a></p>');
                    }
                })
            })
        });
    });
    // complete_flickr_apiUrl = flickr_apiUrl_beginning +flickr_apiUrl_apiKey+'/'+ '&tags=' +searchWord + flickr_apiUrl_ending;
    // $.getJSON(complete_flickr_apiUrl, ( flickrResponse)=>{
    //         $.each(flickrResponse.photos.photo,(i,myresult)=>{
    //            console.log(myresult)
    //            if(myresult.width==selected_size){
    //                $("#results").append('<p>'+flickrResponse.title + '</p></p><p><a href="'+myresult.url+'" target="_blank"><img src="'+myresult_size.source+'"/></a></p>');
    //                }

    //            })
    //         })
}
$("#search").keyup(function(){
    if(event.keyCode == 13){
        $('#results').html('');        
        $('#big-huge-thesaurus-results').html('');
        var searchInput = $("#search").val();
        console.log(searchInput);
        searchApis(searchInput)
    }
})
$("#big-huge-thesaurus-results").on('click','span',(event)=>{
    $('#results').html('');  
    $('#big-huge-thesaurus-results').html('');
    searchWord = event.target.innerHTML;
    console.log(searchWord);
    searchApis(searchWord);
})

})