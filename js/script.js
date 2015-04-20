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
                              html += '<div class="insta-user">' + data.user.username + '</div>',
                              html += '<img class="insta-pic" src="' + data.images.low_resolution.url + '">',
                              //html += '<ul class="list-inline"><li><div class="insta-user">' + data.user.username + '</div></li><li><div class="insta-comment">' + data.caption.text + '</div></li></ul>'
                              html += '<div class="insta-comment"><strong>' + data.user.username + '</strong><small>' + data.caption.text + '</small></div>'
                      });
                      
                      console.log(html);
                      $("#results").append(html);
                      
              }
              
              
              
             
});
      
      
      
      