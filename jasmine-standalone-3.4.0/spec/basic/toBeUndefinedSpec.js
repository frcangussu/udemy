/**
 * toBeUndefined: realiza acomparação de um objeto como sendo 'undefined'
 * 
 * Obs: evite usar o "not.toBeUndefined" pois existe o "toBeDefined"
 */

 describe("Suite - comparador toBeUndefined",function(){
     it("deve validar o uso do toBeUndefined",function(){
        var n1;
        var n2 = undefined;
        var n3 = false;
        
        expect(n1).toBeUndefined();
        expect(n2).toBeUndefined();

        expect(n3).not.toBeUndefined();
        expect(null).not.toBeUndefined();

     });
 });