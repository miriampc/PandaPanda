window.addEventListener('load',function(){
  var container=document.getElementById('imagenes-panda');
  var docFragment=document.createDocumentFragment();

  figures.allFigures.forEach(function(e,id){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var span=document.createElement('span');

    figure.setAttribute("class","js-figure");
    image.setAttribute("alt",e.alt);
    image.src=e.url+(id)+".jpg";
    span.setAttribute("class", 'js-close');

    figure.appendChild(image);
    span.appendChild(document.createTextNode("X"));
    docFragment.appendChild(figure);
    container.appendChild(docFragment);
  });

  document.getElementById('origen').addEventListener("click",function(){
    document.getElementsByClassName('uno')[0].classList.toggle("js-show");
  });

  document.getElementById('extincion').addEventListener("click",function(){
    document.getElementsByClassName('dos')[0].classList.toggle("js-show");
  });

  document.getElementById('restaura').addEventListener("click",function(){
    var figure=document.getElementsByClassName('js-figure');
    for (var i = 0; i < figure.length; i++) {
      figure[i].style.display="inline-block";
    }
  });
});
