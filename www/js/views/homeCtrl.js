/* global angular */


angular.module(
    'homeCtrlModule',
    [
        'mathGenModel'
    ]
)
    .controller(
    'homeCtrl',
    [
        '$scope', 'mathGenModelSvc',
        function ($scope, mathGenModelSvc) {
            'use strict';

            $scope.noAdditionProblems = function () {
                return $scope.vm.addition.num === 0;
            };

            $scope.noSubtractionProblems = function () {
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
                // todo:
                alert('todo: Implement submit().');
            };

            $scope.reset();
        }
    ]
);