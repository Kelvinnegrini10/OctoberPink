$(document).ready(function () {
    // Animação de digitação
    (function ($) {
        $.fn.writeText = function (content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function () {
                if (current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 80);
        };
    })(jQuery);

    document.getElementById('share-facebook').addEventListener('click', function() {
        window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
    });
    
    document.getElementById('share-twitter').addEventListener('click', function() {
        window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href));
    });
    

    // Texto de entrada para animação de digitação
    $("#holder").writeText("WEB DESIGNER + FRONT-END DEVELOPER");

    // Inicializar o Swiper
    const swiper = new Swiper(".swiper-container", {
        direction: "vertical",
        effect: "fade",
        speed: 1000,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        mousewheel: {
            invert: false,
        },
    });

    // Atualizar barras de progresso
    function updateProgressBars() {
        const progressBars = $('.progress-bar .progress');
        progressBars.each(function() {
            const width = $(this).attr('data-percent');
            $(this).css('width', width);
        });
    }

    // Inicializa as barras de progresso ao carregar
    $(window).on('load', function() {
        updateProgressBars();
    });
});