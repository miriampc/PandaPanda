window.addEventListener('load',function(){
  var container=document.getElementById('imagenes-panda');
  var docFragment=document.createDocumentFragment();

  figures.allFigures.forEach(function(e,id){
    var figure=document.createElement('figure');
    var image=document.createElement('img');
    var span=document.createElement('span');

    figure.setAttribute("class","js-figure");
    image.setAttribute("alt",e.alt);
    image.src=e.url+id+".jpg";
    span.setAttribute("class", 'js-close');

    span.appendChild(document.createTextNode("X"));
    figure.appendChild(span);
    figure.appendChild(image);
    docFragment.appendChild(figure);
    container.appendChild(docFragment);

    span.onclick=function(){
      figure.style.display="none";
    }
    document.getElementById('restaura').addEventListener("click",function(){
      figure.style.display="inline-block";
    });
  });

  document.getElementById('origen').addEventListener("click",function(){
    document.getElementsByClassName('uno')[0].classList.toggle("js-show");
  });

  document.getElementById('extincion').addEventListener("click",function(){
    document.getElementsByClassName('dos')[0].classList.toggle("js-show");
  });

});
