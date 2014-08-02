/* global angular */

angular.module('random', [])
    .factory('randomIntSvc', function () {
        "use strict";

        function getRandomInt(minInclusive, maxInclusive) {
            return Math.floor(Math.random() * (maxInclusive - minInclusive + 1)) + minInclusive;
        }

        return {getRandomInt: getRandomInt};
    });