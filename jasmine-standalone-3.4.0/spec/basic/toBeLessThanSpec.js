/**
 * Compara se um valor numérico é menor que outro valor
 * Realiza a conversão para valor numérico antes da comparação
 * Pode ser usado texto
 */

 describe("Suite - comparador toBeLessThan",function(){
     it("deve validar o uso do toBeLessThan",function(){

        var PI = 3.1415;

        expect(3).toBeLessThan(PI);
        expect(3.5).not.toBeLessThan(PI);

     });
 });