
jQuery(function ($) {
    $(".copy-btn").click(function (event) {
        event.preventDefault();
        CopyToClipboard("This is a testing text when you have a link so you put it here", true, "Value copied");
    });

    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('.nav-ul a').each(function() {
      if (this.href === path) {
        $(this).addClass('active-page');
      }
    });

    $('.bar').on('click' , function(event){
        event.preventDefault();
        $('.mobile-nav-area').toggleClass('nav-active');
        $('.nav-overlay').delay(100).fadeIn();
    });
    $('.cross').on('click' , function(event){
        event.preventDefault();
        $('.mobile-nav-area').removeClass('nav-active');
        $('.nav-overlay').delay(100).fadeOut();
    });
    $('.nav-overlay').on('click' , function(event){
        event.preventDefault();
        $('.mobile-nav-area').removeClass('nav-active');
        $(this).delay(100).fadeOut();
    });


});

function CopyToClipboard(value, showNotification, notificationText) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(value).select();
    document.execCommand("copy");
    $temp.remove();

    if (typeof showNotification === 'undefined') {
        showNotification = true;
    }
    if (typeof notificationText === 'undefined') {
        notificationText = "Copied to clipboard";
    }

    var notificationTag = $("div.copy-notification");
    if (showNotification && notificationTag.length == 0) {
        notificationTag = $("<div/>", { "class": "copy-notification", text: notificationText });
        $("body").append(notificationTag);

        notificationTag.fadeIn("slow", function () {
            setTimeout(function () {
                notificationTag.fadeOut("slow", function () {
                    notificationTag.remove();
                });
            }, 1000);
        });
    }
}