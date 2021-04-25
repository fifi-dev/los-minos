$(document).ready(function () {

    $("#bgMusic").click(function () {
        if ($(this).prop("checked") == true) {
            alert("La musique va se lanncer.");
            $("#myMusic")[0].play();
        } else if ($(this).prop("checked") == false) {
            alert("La musique de fond va se mettre en pause");
            $("#myMusic")[0].pause();
        }
    });

    $("#fullScreen").click(function () {
        document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen ? document.documentElement.requestFullScreen ? document.documentElement.requestFullScreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullScreen && document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen()
    });

    $("#readMode").on('click', function () {
        // Suppression des classes si elles existent

        $(".panel").removeClass("block");
        $("#header").removeClass("none");
        $(".Container").removeClass("none");

        // ajout des classes si elles existent

        $(".panel").addClass("none");
        $("#header").addClass("block");
        $(".Container").addClass("block");


    });
    
    $(".openPanel").on('click', function () {
        // Suppression des classes si elles existent

        $(".panel").removeClass("none");

        // ajout des classes si elles existent
        $("#header").addClass("none");


    });
    
    

    $("#listenMode").on('click', function () {
        // Suppression des classes si elles existent

        $(".panel").removeClass("block");
        $("#header").removeClass("none");
        $(".Container").removeClass("none");

        // ajout des classes si elles existent

        $(".panel").addClass("none");
        $("#header").addClass("block");
        $(".Container").addClass("block");


    });

    $("#watchMode").on('click', function () {
        // Suppression des classes si elles existent

        $(".panel").removeClass("block");
        $("#header").removeClass("none");
        $(".Container").removeClass("none");

        // ajout des classes si elles existent

        $(".panel").addClass("none");
        $("#header").addClass("block");
        $(".Container").addClass("block");


    });

    $.fn.BeerSlider = function (options) {
        options = options || {};
        return this.each(function () {
            new BeerSlider(this, options);
        });
    };
    $(".beer-slider").each(function (index, el) {
        $(el).BeerSlider({
            start: $(el).data("start")
        })
    });

});
