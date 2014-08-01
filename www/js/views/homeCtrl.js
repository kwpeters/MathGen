/* global angular */

angular.module(
    'homeCtrlModule',
    [
        'ui.router',
        'mathGenModel'
    ])
    .controller(
    'homeCtrl',
    [
        '$scope', '$state', 'mathGenModelSvc',
        function ($scope, $state, mathGenModelSvc) {
            'use strict';

            $scope.additionControlsAreDisabled = function () {
                return $scope.vm.addition.num === 0;
            };

            $scope.subtractionControlsAreDisabled = function () {
                return $scope.vm.subtraction.num === 0;
            };

            $scope.reset = function () {
                $scope.vm = {addition: {}, subtraction: {}};
                $scope.vm.addition.num = mathGenModelSvc.getAdditionNum();
                $scope.vm.addition.minValue = mathGenModelSvc.getAdditionMinValue();
                $scope.vm.addition.maxValue = mathGenModelSvc.getAdditionMaxValue();

                $scope.vm.subtraction.num = mathGenModelSvc.getSubtractionNum();
                $scope.vm.subtraction.minValue = mathGenModelSvc.getSubtractionMinValue();
                $scope.vm.subtraction.maxValue = mathGenModelSvc.getSubtractionMaxValue();
                $scope.vm.subtraction.allowNegativeAnswers = mathGenModelSvc.getSubtractionAllowNegativeAnswers();
            };

            $scope.submit = function () {
                mathGenModelSvc.setAdditionNum($scope.vm.addition.num);
                mathGenModelSvc.setAdditionMinValue($scope.vm.addition.minValue);
                mathGenModelSvc.setAdditionMaxValue($scope.vm.addition.maxValue);

                mathGenModelSvc.setSubtractionNum($scope.vm.subtraction.num);
                mathGenModelSvc.setSubtractionMinValue($scope.vm.subtraction.minValue);
                mathGenModelSvc.setSubtractionMaxValue($scope.vm.subtraction.maxValue);
                mathGenModelSvc.setSubtractionAllowNegativeAnswers($scope.vm.subtraction.allowNegativeAnswers);

                $state.go('output');
            };

            // Set all vm properties according to the model.
            $scope.reset();
        }
    ]
);