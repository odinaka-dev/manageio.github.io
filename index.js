Element = document.querySelector("#demo");
// for(var i=0; i<Element.length; i++){
//     Element[i].addEventlistener("click", function slideDown(){
//         Element.style.maxHeight="100px";
//     })
// }

function slideUp(){
    Element.style.maxHeight = "0px";
    Element.style.transition = "all .5s"
}

function slideDown(){
    Element.style.maxHeight = "100px";
    Element.style.transition = "all .5s";
}

