/* global angular */
/* global _ */

angular.module('randomModule', ['typeHelpersModule'])
    .factory(
    'randomSvc',
    [
        'typeHelpersSvc',
        function (typeHelpersSvc) {
            'use strict';

            /**
             * Generates an array of random integers without duplicates.
             * @param {Number} minInclusive - The minimum integer that can be returned
             * @param {Number} maxInclusive - The maximum integer that can be returned
             * @param {Number} numValues - The number of random integers in the
             *      returned array.  If not specified, 1 is assumed.
             * @returns {Array} An array of random integers
             */
            function getUniqueRandomInts(minInclusive, maxInclusive, numValues) {

                var numIntsInRange = maxInclusive - minInclusive + 1,
                    randomInts = [],
                    curRandomInt;

                numValues = typeHelpersSvc.numberOrDefault(numValues, 1);
                numValues = Math.min(numValues, numIntsInRange);

                // Optimization: If the number of requested values equals the number of
                // integers in the range, just do a shuffle.
                if (numValues === numIntsInRange) {
                    return _.shuffle(_.range(minInclusive, maxInclusive + 1));
                }

                while (randomInts.length < numValues) {
                    curRandomInt = _.random(minInclusive, maxInclusive);
                    if (!_.contains(randomInts, curRandomInt)) {
                        randomInts.push(curRandomInt);
                    }
                }

                return randomInts;
            }


            /**
             * Returns an array containing random samples from theArray.
             * Duplicate samples are possible.
             *
             * Note:  Lodash's sample() is not performan as it shuffles the
             *      *entire* collection when multiple samples are requested.
             *
             * @param {Array} theArray - The collection from which samples are
             *      made
             * @param {Number} numSamples - The number of samples to return.  If
             *      not specified, 1 is assumed.
             * @returns {Array} An array containing the random samples.
             */
            function sample(theArray, numSamples) {

                var samples = [],
                    randomIndex;

                numSamples = typeHelpersSvc.numberOrDefault(numSamples, 1);

                while (samples.length < numSamples) {
                    randomIndex = _.random(0, theArray.length - 1);
                    samples.push(theArray[randomIndex]);
                }

                return samples;
            }


            /**
             * Returns an array of unique random samples from theArray.
             *
             * Note:  Lodash's sample() is not performan as it shuffles the
             *      *entire* collection when multiple samples are requested.
             *
             * @param {Array} theArray - The collection from which samples are
             *      made
             * @param {Number} numSamples - The number of samples to return.  If
             *      not specified, 1 is assumed.  If theArray.length is less
             *      than numSamples, then only theArray.length samples will be
             *      returned.
             * @returns {Array} An array containing the random samples.
             */
            function uniqueSample(theArray, numSamples) {

                var samples = [],
                    indices;

                numSamples = typeHelpersSvc.numberOrDefault(numSamples, 1);

                // Limit number of unique samples to the size of the array.
                numSamples = Math.min(numSamples, theArray.length);

                // Optimization:  If the number of requested unique samples is
                // equal to the size of the array, this is the same as _.shuffle().
                if (numSamples === theArray.length) {
                    return _.shuffle(theArray);
                }

                indices = getUniqueRandomInts(0, theArray.length - 1, numSamples);

                indices.forEach(function (curIndex) {
                    samples.push(theArray[curIndex]);
                });

                return samples;
            }


            return {

                getUniqueRandomInts:    getUniqueRandomInts,
                sample:                 sample,
                uniqueSample:           uniqueSample

            };

        }
    ]
);