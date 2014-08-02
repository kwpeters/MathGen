/* global angular */

angular.module('mathGenModel', [])
    .factory('mathGenModelSvc', function () {
        "use strict";

        var data = {
                config: {
                    addition: {num: 0, minValue: 0, maxValue: 9},
                    subtraction: {num: 0, minValue: 0, maxValue: 9, allowNegativeAnswers: false}
                }
            },
            api = {};

        api.getAdditionNum = function () {
            return data.config.addition.num;
        };
        api.setAdditionNum = function (num) {
            data.config.addition.num = num;
        };

        api.getAdditionMinValue = function () {
            return data.config.addition.minValue;
        };
        api.setAdditionMinValue = function (minValue) {
            data.config.addition.minValue = minValue;
        };

        api.getAdditionMaxValue = function () {
            return data.config.addition.maxValue;
        };
        api.setAdditionMaxValue = function (maxValue) {
            data.config.addition.maxValue = maxValue;
        };

        api.getSubtractionNum = function () {
            return data.config.subtraction.num;
        };
        api.setSubtractionNum = function (num) {
            data.config.subtraction.num = num;
        };

        api.getSubtractionMinValue = function () {
            return data.config.subtraction.minValue;
        };
        api.setSubtractionMinValue = function (minValue) {
            data.config.subtraction.minValue = minValue;
        };

        api.getSubtractionMaxValue = function () {
            return data.config.subtraction.maxValue;
        };
        api.setSubtractionMaxValue = function (maxValue) {
            data.config.subtraction.maxValue = maxValue;
        };

        api.getSubtractionAllowNegativeAnswers = function () {
            return data.config.subtraction.allowNegativeAnswers;
        };
        api.setSubtractionAllowNegativeAnswers = function (allowNegativeAnswers){
            data.config.subtraction.allowNegativeAnswers = allowNegativeAnswers;
        };

        return api;
});