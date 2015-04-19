//script

//instagram
      
      
$(function() {
  
  var apiurl = "https://api.instagram.com/v1/tags/gameofthrones/media/recent?access_token=265471706.94a0860.524c1ad8ed7a4c19b43574ef7803ceb3&callback=?"
  var access_token = location.hash.split('=')[1];
  var html = ""
  
          $.ajax({
                  type: "GET",
                  dataType: "json",
                  cache: false,
                  url: apiurl,
                  success: parseData
          });
                          
          
          function parseData(json){
                  console.log(json);
                  
                  $.each(json.data,function(i,data){
                          html += '<img src="' + data.images.low_resolution.url + '">'
                  });
                  
                  console.log(html);
                  $("#results").append(html);
                  
          }
          
          
          
         
});
      
      
      
      