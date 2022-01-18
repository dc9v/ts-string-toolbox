'use strict';

let expect = require('chai').expect;
let CuteString = require("../dist/index").default;

describe('get Functions index', () =>
{
    it('regex.email.test("dev@balsa.to") = true ', () =>
    {
        let result = CuteString.regex.email.test("dev@balsa.to");
        expect(result).to.equal(true);
    });

    it('regex.username.test("dev-balsa-to") = true ', () =>
    {
        let result = CuteString.regex.username.test("dev-balsa_to");
        expect(result).to.equal(true);
    });

    it('regex.filename.test(".gitignore") = true ', () =>
    {
        let result = CuteString.regex.filename.test(".gitignore");
        expect(result).to.equal(true);
    });

    it('regex.password.test("pass-word!") = false ', () =>
    {
        let result = CuteString.regex.password.test("pass-word!");
        expect(result).to.equal(true);
    });

    it('regex.strongPassword.test("pass-word!") = false ', () =>
    {
        let result = CuteString.regex.strongPassword.test("pass-word!");
        expect(result).to.equal(false);
    });

    it('regex.strongPassword.test("p?a55-Word!") = true ', () =>
    {
        let result = CuteString.regex.strongPassword.test("p?a55-Word!");
        expect(result).to.equal(true);
    });

    it('regex.numeric.test("-232.11.11") = false ', () =>
    {
        let result = CuteString.regex.numeric.test("-232.11.11");
        expect(result).to.equal(false);
    });

    it('regex.numeric.test("-232.1111") = true ', () =>
    {
        let result = CuteString.regex.numeric.test("-232.1111");
        expect(result).to.equal(true);
    });

    it('regex.numeric.test("1234g") = false ', () =>
    {
        let result = CuteString.regex.numeric.test("1234g");
        expect(result).to.equal(false);
    });

    it('regex.alphabet.test("abcde") = true ', () =>
    {
        let result = CuteString.regex.alphabet.test("abcde");
        expect(result).to.equal(true);
    });

    it('regex.number.test("012345") = false ', () =>
    {
        let result = CuteString.regex.number.test("012345");
        expect(result).to.equal(true);
    });

    it('isValidEmail("dev@balsa.to") = true', () =>
    {
        let result = CuteString.isVaildEmail("dev@balsa.to");
        expect(result).to.equal(true);
    });

    it('isVaildUsername("dev-balsa-to") = true', () =>
    {
        let result = CuteString.isVaildUsername("dev-balsa-to");
        expect(result).to.equal(true);
    });

    it('isVaildFilename("tsconfig.json") = true', () =>
    {
        let result = CuteString.isVaildFilename("tsconfig.json");
        expect(result).to.equal(true);
    });

    it('isVaildPassword("pass-word!") = true', () =>
    {
        let result = CuteString.isVaildPassword("pass-word!");
        expect(result).to.equal(true);
    });

    it('isVaildPassword("pass-word!", true) = false', () =>
    {
        let result = CuteString.isVaildPassword("pass-word!", true);
        expect(result).to.equal(false);
    });

    it('isVaildPassword("Pa55-w0rd!", true) = true', () =>
    {
        let result = CuteString.isVaildPassword("Pa55-w0rd!", true);
        expect(result).to.equal(true);
    });

    it('camelToSnake("camelInNeedleHole") = "camel_in_needle_hole"', () =>
    {
        let result = CuteString.camelToSnake("camelInNeedleHole");
        expect(result).to.equal("camel_in_needle_hole");
    });

    it('snakeToCamel("camel_in_needle_hole") = "camelInNeedleHole"', () =>
    {
        let result = CuteString.snakeToCamel("camel_in_needle_hole");
        expect(result).to.equal("camelInNeedleHole");
    });

    it('numberFormat("100000") = "100,000"', () =>
    {
        let result = CuteString.numberFormat("100,000");
        expect(result).to.equal("100,000");
    });

    it('onlyNumbers("1a23b45c67d89e") = "123456789"', () =>
    {
        let result = CuteString.onlyNumbers("1a23b45c67d89e");
        expect(result).to.equal("123456789");
    });

    it('onlyAlphabets("1a23b45c67d89e") = "abcde"', () =>
    {
        let result = CuteString.onlyAlphabets("abcde");
        expect(result).to.equal("abcde");
    });

    it('lpad(3, 4, 0) = "0003"', () =>
    {
        let result = CuteString.lpad(3, 4, 0);
        expect(result).to.equal('0003');
    });

    it('rpad(100, 5, "-") = "100--" ', () =>
    {
        let result = CuteString.rpad(100, 5, "-");
        expect(result).to.equal('100--');
    });

    it('valueOf(false) = "false" ', () =>
    {
        let result = CuteString.valueOf(false);
        expect(result).to.equal("false");
    });

    it('valueOf(function test(){}) = "test" ', () =>
    {
        let result = CuteString.valueOf(function test() { });
        expect(result).to.equal("test");
    });

    it('toNumber("-0.1122") = -0.1122 ', () =>
    {
        let result = CuteString.toNumber("-0.1122");
        expect(result).to.equal(-0.1122);
    });

    it('removeSpace("a\tb\rc\n  d") = "abcd" ', () =>
    {
        let result = CuteString.removeSpace("a\tb\rc\n  d");
        expect(result).to.equal("abcd");
    });

    it('isEmpty("  ") = false ', () =>
    {
        let result = CuteString.isEmpty("    ");
        expect(result).to.equal(false);
    });

    it('isEmpty("") = true ', () =>
    {
        let result = CuteString.isEmpty("");
        expect(result).to.equal(true);
    });

    it('isEmpty(null) = true ', () =>
    {
        let result = CuteString.isEmpty(null);
        expect(result).to.equal(true);
    });

    it('isEmpty(undefined) = true ', () =>
    {
        let result = CuteString.isEmpty(undefined);
        expect(result).to.equal(true);
    });

    it('isBlank("  ") = true ', () =>
    {
        let result = CuteString.isBlank("  ");
        expect(result).to.equal(true);
    });
})