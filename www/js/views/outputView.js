/* global angular */

angular.module(
    'outputView',
    [
        'mathGenModel'
    ])
    .controller(
    'outputViewCtrl',
    [
        '$scope', '$state', 'mathGenModelSvc',
        function ($scope, $state, mathGenModelSvc) {
            'use strict';
        }
    ]
);