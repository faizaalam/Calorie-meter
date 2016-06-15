$(document).ready(function() {
    $('#fullpage').fullpage({
        scrollBar: true,
        afterRender: function(){
              new WOW().init();
        }
    });
});
