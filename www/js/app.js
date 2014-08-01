// Application-specific JavaScript.

/* App Module */

/* global angular */

angular.module(
    'mathGenApp',
    [
        'ui.router',
        'homeCtrlModule'
    ]
).config(
    [
        '$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider) {
            'use strict';

            // The following changes are needed to enable CORS support for this
            // client.
            //$httpProvider.defaults.useXDomain = true;
            //delete $httpProvider.defaults.headers.common['X-Requested-With'];
            //$httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'js/views/home.html',
                controller: 'homeCtrl'
            });

            $urlRouterProvider.otherwise('/home');

        }
    ]
);