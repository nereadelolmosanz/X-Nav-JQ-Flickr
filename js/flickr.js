jQuery(document).ready(function(){
  $("#getJSONP").click(function(e){
    //Para que no se recargue la página
    e.preventDefault();
    var src = "http://api.flickr.com/services/feeds/photos_public.gne?tags=fuenlabrada&tagmode=any&format=json&jsoncallback=?";
    $.getJSON(src,function(data){
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
