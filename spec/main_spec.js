"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("return barCode while input zipCode length is 5", function(){

        var result = main('95713');
        var expect_string = '|　|:|::　:|:|:　|:::|　:::||　::||:　:|:|:　|';

        expect(expect_string).to.equal(result);
    });

    it("should convert 9-digit postcode to barcode", function(){
        var postcode = '123456789';
        var barcode = main(postcode);

        expect(barcode).to.equal('|　:::||　::|:|　::||:　:|::|　:|:|:　:||::　|:::|　|::|:　|:|::　:|:|:　|');
    });

    it("return barCode while input zipCode length is 9", function(){

        var result = main('450561234');
        var expect_string = '|　:|::|　:|:|:　||:::　:|:|:　:||::　:::||　::|:|　::||:　:|::|　||:::　|';

        expect(expect_string).to.equal(result);
    });

    it("return barCode while input zipCode length is 10", function(){

        var result = main('45056-1234');
        var expect_string = '|　:|::|　:|:|:　||:::　:|:|:　:||::　:::||　::|:|　::||:　:|::|　||:::　|';

        expect(expect_string).to.equal(result);
    });

    it('return zipCode while input barCode length is 5', function () {
      let str = '|　|:|::　:|:|:　|:::|　:::||　::||:　:|:|:　|';
      var result = main(str);
        var expect_string = '95713';

        expect(expect_string).to.equal(result);
    });

    it('return zipCode while input barCode length is 10', function () {
        let str = '|　:|::|　:|:|:　||:::　:|:|:　:||::　:::||　::|:|　::||:　:|::|　||:::　|';
        var result = main(str);
        var expect_string = '45056-1234';

        expect(expect_string).to.equal(result);
    });

});