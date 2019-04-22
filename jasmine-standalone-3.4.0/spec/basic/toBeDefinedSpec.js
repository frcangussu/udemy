/**
 * toBeDefined: realiza acomparação de um objeto como não sendo 'undefined'
 * 
 * Obs: evite usar o "not.toBeDefined" pois existe o "toBeUndefined"
 */

 describe("Suite - comparador toBeDefined",function(){
     it("deve validar o uso do toBeDefined",function(){
        var n1 = 10;
        var n2;
        var n3 = undefined;
        expect(n1).toBeDefined();
        expect(null).toBeDefined();
        expect(NaN).toBeDefined();

        expect(n2).not.toBeDefined();
        expect(n3).not.toBeDefined();

     });
 });