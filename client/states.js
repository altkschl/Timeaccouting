angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.mytimetable', {
        views: {
            app: {
                controller: 'app_mytimetable',
                templateProvider: function (app) {
                    return app.templateProvider('app.mytimetable');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.enterhourspopup', {
        views: {
            app: {
                controller: 'app_enterhourspopup',
                templateProvider: function (app) {
                    return app.templateProvider('app.enterhourspopup');
                }
            }
        }
    }).state('app.fdsyf', {
        views: {
            app: {
                controller: 'app_fdsyf',
                templateProvider: function (app) {
                    return app.templateProvider('app.fdsyf');
                }
            }
        }
    });
});