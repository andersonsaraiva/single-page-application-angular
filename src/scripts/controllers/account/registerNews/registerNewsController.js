app.controller('registerNewsController', ['$scope', '$state', '$stateParams', 'modalService', 'messageService', '$timeout',
    function ($scope, $state, $stateParams, modalService, messageService, $timeout) {
        var registerNews = this;

        registerNews.Noticias = [];
        registerNews.search = {};
        registerNews.search.Titulo = "";

        for (var index = 1; index <= 10; index++) {
            registerNews.Noticias.push({
                ID: index,
                Titulo: "Titulo " + index,
                Texto: "Texto " + index,
                FileImagem: null,
                Carousel: true,
                Vigencia: new Date(),
                Grupo: {ID: index}
            });
        }

        if ($state.is("app.account.registerNews")) {

            registerNews.new = function (item) {
                $state.go("app.account.registerNews.details", {
                    ID: null
                });
            };

            registerNews.details = function (item) {
                $state.go("app.account.registerNews.details", {
                    ID: item.ID
                });
            };

            registerNews.delete = function (item) {
                messageService.confirm("Você realmente deseja deletar a Notícia?", function (result) {
                    if (result) {

                        _.remove(registerNews.Noticias, function (noticia) {
                            return noticia.ID == item.ID;
                        });

                        $timeout(function () {
                            messageService.toasterRemoved();
                        }, 100);
                    }
                });
            };

        } else if ($state.is("app.account.registerNews.details")) {
            registerNews.grupos = [];

            registerNews.noticiaModel = _.find(registerNews.Noticias, function (noticia) {
                return noticia.ID == $stateParams.ID;
            });

            for (var index = 1; index <= 10; index++) {
                registerNews.grupos.push({
                    ID: index,
                    Nome: "Grupo " + index
                });                
            }

            registerNews.cancel = function () {
                registerNews.noticiaModel = {};
                $state.go("app.account.registerNews", null, {
                    reload: true
                });
            };

            registerNews.save = function (formUsuario) {
                if (formUsuario.$valid) {

                    if ($stateParams.ID) {
                        messageService.confirm("Você realmente deseja atualizar a Notícia?", function (result) {
                            if (result) {

                                registerNews.noticiaModel = {};

                                $timeout(function () {
                                    messageService.toasterEdited();
                                }, 100);

                                registerNews.cancel();
                            }
                        });
                    } else {                   

                        registerNews.noticiaModel = {};

                        $timeout(function () {
                            messageService.toasterCreated();
                        }, 100);

                        $state.go("app.account.registerNews");
                    }
                }
            };
        }
    }
]);