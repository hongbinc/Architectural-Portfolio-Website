//==== Beginning animation =======
$(document).ready(function () {
   
    var div = $("#wel");
    var pi = $("#pic1");
    pi.hide();
    div.css("animation", "changeopacity 3s")

    function next() {
        var pi = $("#pic1"); 
        div.remove(); // Remove 'welcome'
        pi.show();    // Show the image after remove 'welcome'
    }
    setTimeout(next, 3000); // After 3s remove "welcome",then run next()
    
});
