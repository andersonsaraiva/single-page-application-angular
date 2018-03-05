app.controller('registerUserController', ['$scope', '$state', '$stateParams', 'modalService', '$uibModal', 'messageService', '$timeout', 'Upload', 'userService', '$filter',
    function ($scope, $state, $stateParams, modalService, $uibModal, messageService, $timeout, Upload, userService, $filter) {
        var registerUser = this;

        registerUser.filtroUsuario = {};
        registerUser.filtroUsuario.Termo = "";
        registerUser.usuariosFiltrados = [];

        registerUser.paginacao = {};
        registerUser.paginacao.paginaCorrente = 1;
        registerUser.numeroPorPagina = 5;
        registerUser.maximoPorPagina = 5;

        $scope.$watch('registerUser.filtroUsuario.Termo', function (termo) {
            registerUser.filtroUsuario.executarFiltros({
                Termo: termo
            });
        });

        $scope.$watch('registerUser.paginacao.paginaCorrente + registerUser.numeroPorPagina', function () {
            _atualizaPaginacao();
        });

        $scope.$watchCollection('registerUser.usuariosFiltrados', function () {
            _atualizaPaginacao();
        });

        $scope.$watchCollection('registerUser.usuarios', function (usuarios) {
            registerUser.usuariosFiltrados = usuarios;
        });

        registerUser.filtroUsuario.porTermo = function (usuarios, termo) {
            if (termo != undefined && termo.length > 0) {
                return $filter('propsFilter')(usuarios, {
                    'Nome': termo
                });
            }
            return usuarios;
        };

        registerUser.filtroUsuario.executarFiltros = function (filtro) {
            registerUser.usuariosFiltrados = registerUser.usuarios;

            registerUser.usuariosFiltrados = $filter('propsOrderBy')(
                registerUser.filtroUsuario.porTermo(
                    registerUser.usuarios,
                    filtro != undefined && filtro['Termo'] != undefined ? filtro['Termo'] : $scope.filtroUsuario.Termo), {
                    Nome: 'asc'
                });
        };

        var _atualizaPaginacao = function () {
            var inicio = ((registerUser.paginacao.paginaCorrente - 1) * registerUser.numeroPorPagina);
            var fim = inicio + registerUser.numeroPorPagina;

            if (registerUser.usuariosFiltrados) {
                registerUser.usuariosVisualizacao = registerUser.usuariosFiltrados.slice(inicio, fim);
            }
        };

        userService.getUsers().then(function (response) {
            registerUser.usuarios = response.data;
        });

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

                        _.remove(registerUser.usuarios, function (item) {
                            return item.ID == user.ID;
                        });

                        $timeout(function () {
                            messageService.toasterRemoved();
                        }, 100);
                    }
                });
            };

        } else if ($state.is("app.account.registerUser.details")) {

            registerUser.usuarioModel = _.find(registerUser.usuarios, function (user) {
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