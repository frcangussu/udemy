/**
 * toMatch: usa expresão regular na validação
 */

describe("Suite - comparador toMatch",function(){
    it ("deve validar o uso do toMatch",function(){
        var texto = "teste com Jasmine";
        expect(texto).toMatch("Jasmine");
        expect(texto).toMatch(/Jasmine/i); // case incensitive
        expect("12345-456").toMatch(/^\d{5}-\d{3}$/);
    });
});