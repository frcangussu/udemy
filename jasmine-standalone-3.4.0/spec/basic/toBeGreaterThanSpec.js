/**
 * Compara se um valor numérico é maior que outro valor
 * Realiza a conversão para valor numérico antes da comparação
 * Pode ser usado texto
 */

 describe("Suite - comparador toBeGreaterThan",function(){
     it("deve validar o uso do toBeGreaterThan",function(){

        var PI = 3.1415;

        expect(4).toBeGreaterThan(PI);
        expect("5").toBeGreaterThan(PI);

        expect(3).not.toBeGreaterThan(PI);
        
     });
 });