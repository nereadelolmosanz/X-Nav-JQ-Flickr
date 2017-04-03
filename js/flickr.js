jQuery(document).ready(function(){
  $("#getJSONP").click(function(){
    console.log("click");

    var src = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(src,{
      tags: "fuenlabrada",
      tagmode: "any",
      format: "json"
    }).done(function(data){
      console.log("get jsonp");
      var picList = "<ul>";
      for (var i=0; i<data.items.length; i++){
        picList += "<li><h4>" + data.items[i].title + "</h4>";
        picList += "<p><img src='" + data.items[i].media.m + "'></p></li>";
      }
      picList += "</ul>";
      $('#photos').html(picList);
    });
  });
});
