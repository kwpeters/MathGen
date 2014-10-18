/* global angular */

angular.module('typeHelpersModule', [])
    .factory(
    'typeHelpersSvc',
    [
        function () {
            'use strict';


            /**
             * Returns arg if it is a number.  Otherwise defaultVal is returned.
             * @param {any} arg - Object to be checked for number type
             * @param {any} defaultValue - The object to be returned if arg is
             *      not a Number
             * @returns {any} arg if it is a number.  Otherwise defaultVal.
             */
            function numberOrDefault(arg, defaultVal) {

                if (typeof arg === 'number') {
                    return arg;
                }

                return defaultVal;

            }


            return {
                numberOrDefault: numberOrDefault
            };


        }
    ]
);