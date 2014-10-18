/* global describe */
/* global beforeEach */
/* global inject */
/* global it */
/* global expect */

describe('randomSvc', function () {
    "use strict";

    var randomSvc;

    beforeEach(module('randomModule'));

    beforeEach(inject(function (_randomSvc_) {
        randomSvc = _randomSvc_;
    }));


    it('should be defined', function () {
        expect(randomSvc).toBeDefined();
    });


    describe('getUniqueRandomInts()', function () {


        it('should be defined', function () {
            expect(randomSvc.getUniqueRandomInts).toBeDefined();
        });


        it('should return the specified number of values', function () {
            var values = randomSvc.getUniqueRandomInts(1, 10, 5);
            expect(values.length).toBe(5);
        });


        it('should not contain duplicates', function () {
            var values = randomSvc.getUniqueRandomInts(1, 5, 5);
            expect(values).toContain(1);
            expect(values).toContain(2);
            expect(values).toContain(3);
            expect(values).toContain(4);
            expect(values).toContain(5);
        });

    });


    describe('sample()', function () {

        it('should be defined', function () {
            expect(randomSvc.sample).toBeDefined();
        });


        it('should return 1 sample when numSamples is not specified', function () {
            expect(randomSvc.sample([1, 2, 3]).length).toBe(1);
        });


        it('should return the requested number of samples', function () {
            expect(randomSvc.sample([1, 2, 3, 4], 3).length).toBe(3);
        });

    });


    describe('uniqueSample()', function () {

        it('should be defined', function () {
            expect(randomSvc.uniqueSample).toBeDefined();
        });


        it('should return 1 sample when numSamples is not specified', function () {
            expect(randomSvc.uniqueSample([1, 2, 3]).length).toBe(1);
        });


        it('should return the requested number of samples', function () {
            expect(randomSvc.uniqueSample([1, 2, 3, 4], 3).length).toBe(3);
        });


        it('should limit number of samples to length of theArray', function () {
            expect(randomSvc.uniqueSample([1, 2, 3], 10).length).toBe(3);
        });


        it('should not contain duplicates', function () {
            var samples = randomSvc.uniqueSample([1, 2, 3, 4, 5], 5);

            expect(samples).toContain(1);
            expect(samples).toContain(2);
            expect(samples).toContain(3);
            expect(samples).toContain(4);
            expect(samples).toContain(5);
        });

    });

});
