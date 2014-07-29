angular.module('homeCtrlModule', [])
    .controller(
    'homeCtrl',
    [
        '$scope',
        function ($scope) {
            'use strict';

            $scope.noAdditionProblems = function () {
                return $scope.model.addition.num === 0;
            }

            $scope.noSubtractionProblems = function () {
                return $scope.model.subtraction.num === 0;
            }

            $scope.reset = function () {
                $scope.model = {
                    addition: {num: 0, minValue: 0, maxValue: 9},
                    subtraction: {num: 0, minValue: 0, maxValue: 9, allowNegativeAnswers: false}
                };
            };

            $scope.submit = function () {
                alert('todo: Implement submit().')
            }

            $scope.reset();
        }
    ]
);