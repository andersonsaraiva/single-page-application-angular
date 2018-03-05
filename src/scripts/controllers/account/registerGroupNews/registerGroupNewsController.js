app.controller('registerGroupNewsController', ['$scope', '$state', '$stateParams', 'modalService', '$uibModal', 'messageService', '$timeout',
    function ($scope, $state, $stateParams, modalService, $uibModal, messageService, $timeout) {
        var registerUser = this;

        registerUser.Usuarios = [];
        registerUser.search = {};
        registerUser.search.Nome = "";

        for (var index = 1; index <= 10; index++) {
            registerUser.Usuarios.push({
                ID: index,
                Nome: "Usuário " + index,
                Email: "usuario" + index + "@i4pro.com.br",
                Cargo: "Cargo " + index
            });
        }

        if ($state.is("app.account.registerUser")) {

            registerUser.new = function (user) {
                $state.go("app.account.registerUser.details", {
                    ID: null
                });
            };

            registerUser.details = function (user) {
                $state.go("app.account.registerUser.details", {
                    ID: user.ID
                });
            };

            registerUser.delete = function (user) {
                messageService.confirm("Você realmente deseja deletar o Usuário?", function (result) {
                    if (result) {

                        _.remove(registerUser.Usuarios, function (item) {
                            return item.ID == user.ID;
                        });

                        $timeout(function () {
                            messageService.toasterRemoved();
                        }, 100);
                    }
                });
            };

        } else if ($state.is("app.account.registerUser.details")) {

            registerUser.usuarioModel = _.find(registerUser.Usuarios, function (user) {
                return user.ID == $stateParams.ID;
            });

            registerUser.cancel = function () {
                registerUser.usuarioModel = {};
                $state.go("app.account.registerUser", null, {
                    reload: true
                });
            };

            registerUser.save = function (formUsuario) {
                if (formUsuario.$valid) {

                    if ($stateParams.ID) {
                        messageService.confirm("Você realmente deseja atualizar o Usuário?", function (result) {
                            if (result) {

                                registerUser.usuarioModel = {};

                                $timeout(function () {
                                    messageService.toasterEdited();
                                }, 100);

                                registerUser.cancel();
                            }
                        });
                    } else {                   

                        registerUser.usuarioModel = {};

                        $timeout(function () {
                            messageService.toasterCreated();
                        }, 100);

                        $state.go("app.account.registerUser");
                    }
                }
            };

        }
    }
]);