/**
 * toBeNull: realiza acomparação de um objeto como sendo 'null'
 * 
 *  - usamos o 'null' para dizer que uma variável não possui valor
 *  - se diferencia de 'undefined' pelo fato de 'null' ser um tipo e 'undefined' ser uma variável ainda não definida
 * 
 */

 describe("Suite - comparador toBeNull",function(){
     it("deve validar o uso do toBeNull",function(){
        var n1 = null;
        var n2 = undefined;
        var n3;
        var n4 = NaN;
        var n5 = "teste";
        
        expect(n1).toBeNull();

        expect(n2).not.toBeNull();
        expect(n3).not.toBeNull();
        expect(n4).not.toBeNull();
        expect(n5).not.toBeNull();

     });
 });