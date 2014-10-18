angular.module('creatorPaletteViewModule', [])
    .controller(
    'creatorPaletteViewCtrl',
    [
        '$scope',
        function ($scope) {
            'use strict';


            $scope.vm = {
                problemTypes: [
                    {
                        name: 'Addition - 2 addend',
                        desc: 'Addition of 2 numbers',
                        isSelected: false,
                        configUrl: '#/creator/palette'
                    },
                    {
                        name: 'Addition - 3 addend',
                        desc: 'Addition of 3 numbers',
                        isSelected: false,
                        configUrl: '#/creator/palette'
                    },
                    {
                        name: 'Subtraction',
                        desc: 'Subtraction problems',
                        isSelected: false,
                        configUrl: '#/creator/palette'
                    }
                ]
            };

            $scope.selectProblemType = function (probType) {
                // Deselect all problem types except the one specified.
                $scope.vm.problemTypes.forEach(function (curProbType) {
                    curProbType.isSelected = (curProbType === probType);
                });

            };
        }
    ]
);