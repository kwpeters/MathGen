describe('typeHelpersSvc', function () {

    var typeHelpersSvc;


    beforeEach(module('typeHelpersModule'));


    beforeEach(inject(function (_typeHelpersSvc_) {
        typeHelpersSvc = _typeHelpersSvc_;
    }));


    it('should be defined', function () {
        expect(typeHelpersSvc).toBeDefined();
    });


    describe('numberOrDefault()', function () {


        it('should return a number when a number is provided', function () {
            expect(typeHelpersSvc.numberOrDefault(1, 2)).toEqual(1);
        });


        it('should return the default value when a number is not provided', function () {
            expect(typeHelpersSvc.numberOrDefault(undefined, 2)).toEqual(2);
            expect(typeHelpersSvc.numberOrDefault(null, 2)).toEqual(2);
            expect(typeHelpersSvc.numberOrDefault('foobar', 2)).toEqual(2);
        });


    });

});