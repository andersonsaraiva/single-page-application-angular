app.directive("openHover", function () {
    return function (scope, element, attrs) {
        if ($("#navbar").width() > 1007) {
            element.hover(function () {
                $(this).addClass('open');
            }, function () {
                $(this).removeClass('open');
            });
        }
    };
});

app.directive("scrollToTopButton", function () {
    return function (scope, element, attrs) {
        $(element).addClass('scrollToTop');

        $(window).on("scroll", function () {
            if (this.pageYOffset > 300) {
                $(element).fadeIn();
            }
            if (this.pageYOffset <= 0) {
                $(element).fadeOut();
            }
        });

        element.on("click", function () {
            $('html, body').animate({
                scrollTop: 0
            }, 800);

            scope.$apply();
        });
    };
});