/**
 * - Realiza uma comparação dizendo se uma variável objeto possuem um valor inválido.
 * - O valor será considerado inválido caso seja 'false', '0', '', 'undefined','null' ou 'NaN'.
 * - Ele deve ser utilizado quando a verificação aborder valores inválidos distintos baseados nas opções citadas acima
 * - prefira usar 'toBeTruthy' ao invés de 'not.toBeFalsy'
 * 
 */

 describe("Suite - comparador toBeFalsy",function(){
     it("deve validar o uso do toBeFalsy",function(){
        
        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect('').toBeFalsy();
        expect(false).toBeFalsy();
        expect(NaN).toBeFalsy();
        expect(0).toBeFalsy();

        expect(true).not.toBeFalsy();

     });
 });