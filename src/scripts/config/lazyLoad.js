app.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        debug: true,
        events: true,
        modules: [{
            name: 'toaster',
            files: [
                'lib/AngularJS-Toaster/css/toaster.min.css',
                'lib/AngularJS-Toaster/toaster.min.js'
            ]
        }, {
            name: 'ui.select',
            files: [
                'lib/ui-select/css/select.min.css',
                'lib/ui-select/select.min.js'
            ]
        }, {
            name: "ui.mask",
            files: [
                'lib/angular-ui-mask/mask.min.js'
            ]
        }, {
            name: 'ngFileUpload',
            files: [
                'lib/ng-file-upload/ng-file-upload.min.js'
            ]
        }, {
            name: 'summernote',
            files: [
                'lib/summernote/summernote.min.js',
                'lib/summernote/summernote.css',                
                'lib/angular-summernote/angular-summernote.min.js',
                'lib/summernote/lang/summernote-pt-BR.min.js'
            ]
        }]
    });
}]);