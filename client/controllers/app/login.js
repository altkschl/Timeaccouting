angular.module('app').controller('app_login', app_login);
function app_login($scope, app, $q, powwowLoginNew) {
    'use strict';
    app.init($scope); 
    $scope.login = function () {
     $scope.app.showLoading('Logging in');    
    var credentials = {'username': $scope.data.username, 'password': $scope.data.password};
    console.log("set credentials");
    app.call('login.loginBasic', credentials);
    }; 
    console.log("Login successfull");
    app.origEstablishConnection = app.establishConnection;
    app.establishConnection = function (params) {
        console.log("establishConnection");
        if (app.alreadyConnected) {
            console.log("Calling powwowLoginNew getcachedcredentials");
            var credentials = powwowLoginNew.getCachedCredentials();
            if (!credentials.username) {
                console.log("No cached credentials");
                // if no user credentials we cannot perform App login - forvard user to loginScreen
                powwowLoginNew.clearCachedCredentials();
                window.location.reload();
                return;
            }
            app.call('login.loginBasic', credentials);
        } else {
            app.origEstablishConnection(params);
        }
    }
}
