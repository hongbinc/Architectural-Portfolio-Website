//==== Beginning animation =======
$(document).ready(function () {
   
    var div = $("#wel");
    var pi = $("#pic1");
    div.css("animation", "changeopacity 3s")
    
    function next() {
        var pi = $("#pic1"); 
        div.remove();
        pi.css("opacity", 1); //set Opacity of img to 1
    }
    setTimeout(next, 3000); // After 3s remove "welcome"
    
});
