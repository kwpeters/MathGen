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

        api.getAdditionNum      = function () {return data.config.addition.num;};
        api.getAdditionMinValue = function () {return data.config.addition.minValue;};
        api.getAdditionMaxValue = function () {return data.config.addition.maxValue;};

        api.getSubtractionNum = function () {return data.config.subtraction.num;};
        api.getSubtractionMinValue = function () {return data.config.subtraction.minValue;};
        api.getSubtractionMaxValue = function () {return data.config.subtraction.maxValue;};
        api.getSubtractionAllowNegativeAnswers = function () {return data.config.subtraction.allowNegativeAnswers;};

        return api;
});