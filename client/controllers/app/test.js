angular.module('app').controller('app_test', app_test);
function app_test($scope, app, $q, powwowLoginNew) {
    'use strict';
    app.init($scope);
    $scope.login = function () {
        $scope.app.showLoading('Logging in');
        app.action('login', 'submit', this);
    };
    app.origEstablishConnection = app.establishConnection;
    app.establishConnection = function (params) {
        if (app.alreadyConnected) {
            console.log('Calling powwowLoginNew getcachedcredentials');
            var credentials = powwowLoginNew.getCachedCredentials();
            if (!credentials.username) {
                console.log('No cached credentials');
                powwowLoginNew.clearCachedCredentials();
                window.location.reload();
                return;
            }
            app.call('login.loginBasic', credentials);
        } else {
            app.origEstablishConnection(params);
        }
    };
}