app.service('modalService', ['$uibModal', function ($uibModal) {
    this.confirm = function (title, message, yesCallback, noCallback, cancelCallback){
		var modalInstance = $uibModal.open({
            windowClass: 'modal-message',
            templateUrl: 'views/site/partials/modalConfirm.html',
            controller: ["$scope", "$uibModalInstance", "content", function ($scope, $uibModalInstance, content) {
                $scope.title = content.title;
                $scope.message = content.message;

                $scope.showYes = content.yesCallback != null;
                $scope.showNo = content.noCallback != null;
                $scope.showCancel = content.cancelCallback != null;
                
                $scope.yes = function () {
                	if (content.yesCallback){
                		content.yesCallback($uibModalInstance);
                	}
                };
                
                $scope.no = function () {
                	if (content.noCallback){
                		content.noCallback($uibModalInstance);
                	}
                };

                $scope.cancel = function () {
                	if (content.cancelCallback){
                		content.cancelCallback($uibModalInstance);
                	}
                };
            }],
            size: 'md',
            resolve: {
                content: function () {
                    var content = { 
                		title: title, 
                		message: message,
                		yesCallback: yesCallback,
                		noCallback: noCallback,
                		cancelCallback: cancelCallback
                    };

                    return content;
                }
            },
            backdrop: 'static',
            keyboard: false,
        });

        return modalInstance;
	};

	this.showModal = function (message, title, windowClass, template){
        var modalInstance = $uibModal.open({
            windowClass: windowClass,
            templateUrl: template,
            controller: ["$scope", "$uibModalInstance", "$model", function ($scope, $uibModalInstance, $model) {
                $scope.$model = $model;

                $scope.ok = function () {
                	$uibModalInstance.close('OK');
                };

                $scope.cancel = function () {
                	$uibModalInstance.dismiss('cancel');
                };
            }],
            size: 'lg',
            resolve: {
                $model: function () {
                    var $model = { title: title, message: message };

                    return $model;
                }
            },
            backdrop: 'static',
            keyboard: false,
        });

        return modalInstance;		
	};
    
    this.showModalError = function (message, title) {
    	return this.showModal(message, title, 'modal-message modal-danger', 'views/site/partials/modalError.html'); 
    };

    this.showModalWarning = function (message, title) {
    	return this.showModal(message, title, 'modal-message modal-warning', 'views/site/partials/modalWarning.html'); 
    };

    this.showModalSuccess = function (message, title) {
    	return this.showModal(message, title, 'modal-message modal-success', 'views/site/partials/modalSuccess.html'); 
    };
}]);