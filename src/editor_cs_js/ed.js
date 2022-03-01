window.addEventListener("load", function () {
    var editor = theWYSIWYG.document;
    editor.designMode = "on";
    btnBold.addEventListener("click", function () {
        editor.execCommand("Bold")
    }, false);
    btnItelic.addEventListener("click", function () {
        editor.execCommand("italic", false, null)
    }, false);
    btnUnderline.addEventListener("click", function () {
        editor.execCommand("Underline", false, null)
    }, false);
    fontSize.addEventListener("click", function (event) {
        editor.execCommand("FontSize", false, event.target.value);
    }, false);
    fontChanger.addEventListener("change", function (event) {
        editor.execCommand("FontName", false, event.target.value);
    }, false);
    fontcolor.addEventListener("change", function (event) {
        editor.execCommand("ForeColor", false, event.target.value);
    }, false);
    hilightcolor.addEventListener("change", function () {
        editor.execCommand("BackColor", false, event.target.value);
    }, false);


}, false);

var font = document.querySelectorAll("select#fontChanger > option");
for (var i = 0; i < font.length; i++) {
    font[i].style.fontFamily = font[i].value;
}