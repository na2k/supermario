
$(function(){

  var x = $("#level").offset().left;
  var y = $("#level").offset().top;
  var y_mario = $("#mario").offset().top;
  $( "body" ).on("keydown",function( event ) {
    if(event.which == 39){
      // console.log("droite");
      // if(x >= 0){
      //   x = 0;
      // }
      // else{
        x-=10;
      // }
      newPosition();
    }
    if(event.which == 37){
      // console.log("gauche");
      if(x >= 265){
        x = 265;
      }
      else{
        x+=10;
      }
      newPosition();
    }
    if(event.which == 38){
      // console.log("haut");
       $("#mario").animate({"top": "-=200px"}, "fast");
       $("#mario").animate({"top": "+=200px"}, "fast");
    }

    if(event.which == 40){
      // console.log("bas");
    }
    function newPosition(){
      $("#level").offset({left: x});
    }
  });
});

function initPosition(){
    var lvl = document.getElementById("level");
    var pos = lvl.offsetLeft;
    pos = 265;
}

function choixLevel(choix1, choix2){
  initPosition();
  document.getElementById("level").src="img/mario-"+choix1+"-"+choix2+".gif";
  document.getElementById("game").style.visibility="visible";
  document.getElementById("menu").style.visibility="hidden";
}

function retourMenu(){
  document.getElementById("game").style.visibility="hidden";
  document.getElementById("menu").style.visibility="visible";
}
