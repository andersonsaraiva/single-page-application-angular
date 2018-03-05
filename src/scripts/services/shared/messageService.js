'use strict';

app.service('messageService', ["toaster", function (toaster) {
    this.toasterSuccess = function (title, message){
        toaster.pop('success', title, message);
    };
    
    this.toasterError = function (title, message){
        toaster.pop('error', title, message);
    };
    
    this.toasterInfo = function (title, message){
        toaster.pop('warning', title, message);
    };
    
    this.toasterNamedCreated = function (name) {
        var title = "Sucesso!";
        var message = "Registro [Name] foi criado!";

        message = message.replace("[Name]", name);

        toaster.pop('success', title, message);
    };

    this.toasterNamedEdited = function (name) {

        var title = "Sucesso!";
        var message = "Registro [Name] foi atualizado!";

        message = message.replace("[Name]", name);

        toaster.pop('success', title, message);
    };

    this.toasterNamedRemoved = function (name) {

        var title = "Sucesso!";
        var message = "Registro [Name] foi removido!";

        message = message.replace("[Name]", name);

        toaster.pop('success', title, message);
    };

    this.toasterCreated = function () {
        var title = "Sucesso!";
        var message = "Registro criado com sucesso!";

        toaster.pop('success', title, message);
    };

    this.toasterEdited = function () {
        var title = "Sucesso!";
        var message = "Registro atualizado com sucesso!";

        toaster.pop('success', title, message);
    };

    this.toasterRemoved = function () {
        var title = "Sucesso!";
        var message = "Registro removido com sucesso!";

        toaster.pop('success', title, message);
    };

    this.confirm = function (resourceLabel, callback) {
        var message = resourceLabel;

        bootbox.confirm(message, callback);
    };
}]);