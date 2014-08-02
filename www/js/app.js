// Application-specific JavaScript.

/* App Module */

/* global angular */

angular.module(
    'mathGenApp',
    [
        'ui.router',
        'homeView',
        'outputView'
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

            $stateProvider.state('homeView', {
                url: '/homeView',
                templateUrl: 'js/views/homeView.html',
                controller: 'homeViewCtrl'
            });

            $stateProvider.state('outputView', {
                url: '/outputView',
                templateUrl: 'js/views/outputView.html',
                controller: 'outputViewCtrl'
            });

            $urlRouterProvider.otherwise('/homeView');

        }
    ]
);