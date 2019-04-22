/**
 * - Realiza uma comparação dizendo se uma variável objeto possuem um valor válido.
 * - O valor será considerado válido caso ele possua um valor diferente de 'false', '0', '', 'undefined','null' ou 'NaN'.
 * - Ele deve ser utilizado quando a verificação aborder valores inválidos distintos baseados nas opções citadas acima
 * - prefira usar 'toBeFalsy' ao invés de 'not.toBeTruthy'
 * 
 */

 describe("Suite - comparador toBeTruthy",function(){
     it("deve validar o uso do toBeTruthy",function(){
        var n1 = 10;
        var n2 = undefined;
        var n3 = 0;
        var n4 = '';
        var n5 = null;
        var n6 = NaN;
        var n7;
        
        expect(n1).toBeTruthy();
        expect("teste").toBeTruthy();
        expect(true).toBeTruthy();

        expect(n2).not.toBeTruthy();
        expect(n3).not.toBeTruthy();
        expect(n4).not.toBeTruthy();
        expect(n5).not.toBeTruthy();
        expect(n6).not.toBeTruthy();
        expect(n7).not.toBeTruthy();

     });
 });