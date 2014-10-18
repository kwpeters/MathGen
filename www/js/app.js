// Application-specific JavaScript.

/* App Module */

/* global angular */

angular.module(
    'appModule',
    [
        'ui.router',
        'homeViewModule',
        'creatorViewModule',
        'creatorPaletteViewModule'
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

            $stateProvider.state(
                'homeView',
                {
                    url: '/homeView',
                    templateUrl: 'js/views/homeView.html',
                    controller: 'homeViewCtrl'
                }
            ).state(
                'creatorView',
                {
                    abstract: true,
                    url: '/creator',
                    templateUrl: 'js/views/creatorView.html',
                    controller: 'creatorViewCtrl'
                }
            ).state(
                'creatorView.palette',
                {
                    url:'/palette',
                    templateUrl: 'js/views/creatorPaletteView.html',
                    controller:  'creatorPaletteViewCtrl'
                }
            );

            $urlRouterProvider.otherwise('/homeView');

        }
    ]
);