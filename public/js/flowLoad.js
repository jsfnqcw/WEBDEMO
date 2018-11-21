var cols = 0;

$(function (){
  width = $(".head").width();
  console.log(width);
  if(width <1280){
    $(".flowLoad").css('width',960);
    cols = 3;
    $("#col4").css('display', 'none');
    $("#col5").css('display', 'none');
  }else if(width <1600){
    $(".flowLoad").css('width',1280);
    cols = 4;
    $("#col5").css('display', 'none');
  }else{
    $(".flowLoad").css('width',1600);
    cols = 5;
  }
})
