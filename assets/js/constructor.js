var directory="assets/images/panda";
var allFigures=[{url:directory, alt:"panda jugueton"}, {url:directory, alt:"panda tierno"},
                {url:directory, alt:"panda cariñoso"},{url:directory, alt:"panda amigo"}];


function WorkSection(figure){
    this.allFigures=figure;
    this.addImages=function(){
      this.figures.push({
        url:url,
        alt:alt
      })
    };
}

var figures=new WorkSection(allFigures);
