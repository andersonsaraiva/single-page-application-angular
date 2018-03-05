app.controller('siteController', ['$scope', '$state', 'utilsService',
    function ($scope, $state, utilsService) {
        var site = this;

        site.myInterval = 5000;
        site.noWrapSlides = false;
        site.active = 0;
        site.slides = [];
        site.aniversariantes = [];
        site.noticias = [];

        utilsService.getCarousel().then(function (response){
            site.slides = response.data;
        });

        utilsService.getBirthdays().then(function (response){
            site.aniversariantes = response.data;
        });

        utilsService.getNews().then(function (response){
            site.noticias = response.data;
        });

        site.verTodasNoticias = function(){
            $state.go("app.site.news");
        };

        var _linkBox = function (nome, nome2) {
            $(".link" + nome).click(function () {
                $('html, body').animate({
                    scrollTop: $("#" + nome2).offset().top - 120
                }, 1000);
            });
        }

        _linkBox("Aniversariantes", "telaAniversariantes");
        _linkBox("Organograma", "telaOrganograma");
        _linkBox("Noticias", "telaNoticias");
    }
]);