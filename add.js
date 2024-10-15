//declaration variable des variables
var plusBtns = Array.from (document.querySelectorAll(".fa-plus-circle"));
var minusbtns = array.from(document.querySelectorAll(".fa-minus-circle"));
var deletebtns = array.from(document.querySelectorAll(".fa-trash-alt"));
var cards= array.from(document.querySelectorAll(".card"));
var favs = arry.from(document.querySelectorAll(".fa-heart"));

// funtvtion plus
for ( let plus of plusbtns) {
plus.addeventlistener("click", function () {
    plus.nextelementsibling.innerHTML++;
});
}

//function delete
// for (let i in deletsBtns)