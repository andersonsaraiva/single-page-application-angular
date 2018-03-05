app.run(['$rootScope', '$state', '$stateParams', '$window', function ($rootScope, $state, $stateParams, $window) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]).config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	var app = {
		abstract: true,
		templateUrl: 'views/layout.html',
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load(['toaster']).then(function () {
					return $ocLazyLoad.load({
						serie: true,
						files: [
							'lib/bootbox.js/bootbox.js'
						]
					})
				});
			}]
		}
	};

	var site = {
		abstract: true,
		templateUrl: 'views/site/index.html'
	};

	var account = {
		abstract: true,
		url: '/account',
		templateUrl: 'views/site/account/layout.html'
	};

	var home = {
		url: '/',
		templateUrl: 'views/site/home.html',
		title: 'Home - Fairfax',
		controller: 'siteController',
		controllerAs: 'site',
		data: {
			dateCurrent: new Date().getFullYear()
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load({
					serie: true,
					files: [
						'scripts/services/shared/utilsService.js',
						'scripts/controllers/siteController.js'
					]
				});
			}]
		}
	};

	var news = {
		url: '/news',
		templateUrl: 'views/site/news/index.html',
		title: 'Listagem de Notícias',
		controller: "newsController",
		controllerAs: 'news',
		data: {
			specialClass: 'body-site',
			disabledMenu: true
		},
		ncyBreadcrumb: {
			label: 'Listagem de Notícias',
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load(['ui.select']).then(
					function () {
						return $ocLazyLoad.load({
							serie: true,
							files: [
								'scripts/controllers/news/newsController.js'
							]
						});
					}
				);
			}]
		}
	};

	var newsDetails = {
		url: '/details/:ID',
		templateUrl: 'views/site/news/detail.html',
		title: 'Detalhe do Notícia',
		controller: "newsController",
		controllerAs: 'news',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Detalhe do Notícia',
		},
	};

	var login = {
		url: '/login',
		templateUrl: 'views/site/account/login.html',
		title: 'Login - Fairfax',
		controller: 'loginController',
		controllerAs: 'login',
		data: {
			specialClass: 'body-login',
			dateCurrent: new Date().getFullYear()
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load({
					serie: true,
					files: [
						'scripts/controllers/account/loginController.js'
					]
				});
			}]
		}
	};

	var forgotPassword = {
		url: '/forgotPassword',
		templateUrl: 'views/site/account/forgotPassword.html',
		title: 'Esqueceu a senha - Fairfax',
		controller: 'forgotPasswordController',
		controllerAs: 'forgotPassword',
		data: {
			specialClass: 'body-login',
			dateCurrent: new Date().getFullYear()
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load({
					serie: true,
					files: [
						'scripts/controllers/account/forgotPasswordController.js'
					]
				});
			}]
		}
	};

	var recover = {
		url: '/recover?userId=&token=',
		templateUrl: 'views/site/account/recover.html',
		title: 'Recuperar a senha - Fairfax',
		controller: 'recoverController',
		controllerAs: 'recover',
		data: {
			specialClass: 'body-login',
			dateCurrent: new Date().getFullYear()
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load({
					serie: true,
					files: [
						'scripts/controllers/account/recoverController.js'
					]
				});
			}]
		}
	};

	var homeAccount = {
		url: '/home',
		templateUrl: 'views/site/account/home.html',
		title: 'Minha Conta - Fairfax',
		controller: 'homeAccountController',
		controllerAs: 'homeAccount',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Minha conta',
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load({
					serie: true,
					files: [
						'scripts/controllers/account/homeAccountController.js'
					]
				});
			}]
		}
	};

	var registerUser = {
		url: '/registerUser',
		templateUrl: 'views/site/account/registerUser/index.html',
		title: 'Cadastro de Usuário',
		controller: "registerUserController",
		controllerAs: 'registerUser',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Cadastro de Usuário',
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load(['ui.select', 'ngFileUpload']).then(
					function () {
						return $ocLazyLoad.load({
							serie: true,
							files: [
								'scripts/services/administration/userService.js',
								'scripts/controllers/account/registerUser/registerUserController.js'
							]
						});
					}
				);
			}]
		}
	};

	var registerUserDetails = {
		url: '/details/:ID',
		templateUrl: 'views/site/account/registerUser/detail.html',
		title: 'Detalhes do Usuário',
		controller: "registerUserController",
		controllerAs: 'registerUser',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Detalhes do Usuário',
		},
	};

	var registerOrganizationChart = {
		url: '/registerOrganizationChart',
		templateUrl: 'views/site/account/registerOrganizationChart/index.html',
		title: 'Cadastro de Organograma',
		controller: "registerOrganizationChartController",
		controllerAs: 'registerOrganizationChart',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Cadastro de Organograma',
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load(['ngFileUpload']).then(
					function () {
						return $ocLazyLoad.load({
							serie: true,
							files: [
								'scripts/controllers/account/registerOrganizationChart/registerOrganizationChartController.js'
							]
						});
					}
				);
			}]
		}
	};

	var registerNews = {
		url: '/registerNews',
		templateUrl: 'views/site/account/registerNews/index.html',
		title: 'Cadastro de Notícias',
		controller: "registerNewsController",
		controllerAs: 'registerNews',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Cadastro de Notícias',
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load(['ui.select', 'ngFileUpload']).then(
					function () {
						return $ocLazyLoad.load({
							serie: true,
							files: [
								'scripts/controllers/account/registerNews/registerNewsController.js',
								'lib/summernote/summernote.min.js',
								'lib/summernote/summernote.css',
								'lib/angular-summernote/angular-summernote.min.js',
								'lib/summernote/lang/summernote-pt-BR.min.js'
							]
						});
					}
				);
			}]
		}
	};

	var registerNewsDetails = {
		url: '/details/:ID',
		templateUrl: 'views/site/account/registerNews/detail.html',
		title: 'Detalhes do Usuário',
		controller: "registerNewsController",
		controllerAs: 'registerNews',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Detalhes da Notícia',
		},
	};

	var registerGroupNews = {
		url: '/registerGroupNews',
		templateUrl: 'views/site/account/registerGroupNews/index.html',
		title: 'Cadastro de Grupos de Notícias',
		controller: "registerGroupNewsController",
		controllerAs: 'registerGroupNews',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Cadastro de Grupos de Notícias',
		},
		resolve: {
			deps: ['$ocLazyLoad', function ($ocLazyLoad) {
				return $ocLazyLoad.load(['ui.select']).then(
					function () {
						return $ocLazyLoad.load({
							serie: true,
							files: [
								'scripts/controllers/account/registerGroupNews/registerGroupNewsController.js'
							]
						});
					}
				);
			}]
		}
	};

	var registerGroupNewsDetails = {
		url: '/details/:ID',
		templateUrl: 'views/site/account/registerGroupNews/detail.html',
		title: 'Detalhes do Usuário',
		controller: "registerGroupNewsController",
		controllerAs: 'registerGroupNews',
		data: {
			specialClass: 'body-site'
		},
		ncyBreadcrumb: {
			label: 'Detalhes do Grupos de Notícias',
		},
	};

	$stateProvider
		.state('app', app)
		.state('app.site', site)
		.state('app.site.home', home)
		.state('app.site.news', news)
		.state('app.site.newsDetails', newsDetails)
		.state('app.login', login)
		.state('app.account', account)
		.state('app.account.home', homeAccount)
		.state('app.forgotPassword', forgotPassword)
		.state('app.recover', recover)
		.state('app.account.registerUser', registerUser)
		.state('app.account.registerUser.details', registerUserDetails)
		.state('app.account.registerOrganizationChart', registerOrganizationChart)
		.state('app.account.registerNews', registerNews)
		.state('app.account.registerNews.details', registerNewsDetails)
		.state('app.account.registerGroupNews', registerGroupNews)
		.state('app.account.registerGroupNews.details', registerGroupNewsDetails);
}]);