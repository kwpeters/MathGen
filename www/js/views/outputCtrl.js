/* global angular */

angular.module(
    'outputCtrlModule',
    [
        'mathGenModel'
    ])
    .controller(
    'outputCtrl',
    [
        '$scope', '$state', 'mathGenModelSvc',
        function ($scope, $state, mathGenModelSvc) {
            'use strict';
        }
    ]
);