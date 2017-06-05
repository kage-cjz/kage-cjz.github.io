//ª∂”≠ΩÁ√Ê
console.clear();
var boms = document.getElementsByClassName("bom");
var booms = document.getElementsByClassName("booms");
setTimeout(function () {
    for (var i = 0; i < boms.length; i++) {
        boms[i].className += " hide";
    }
}, 2000);
setTimeout(function () {
    booms[0].className += " visible";
}, 2500);

window.scrollReveal = new scrollReveal({reset: true});

//º¸≈Ã∞¥º¸
var keyArr = document.getElementsByClassName("key");
var keyPad = document.getElementById("key-pad")

for (var i = 0; i < keyArr.length; i++) {
    keyArr[i].index = i;
    keyArr[i].onclick = function() {
        var keyValue = keyArr[this.index].children[0].innerHTML;
        keyPad.innerHTML+= keyValue;
    }
}