/**
 * Verifica se uma exceção é lançada por um método
 * Não detalha o erro, checa apenas se ocorreu erro
 */

 describe("Suite - comparador toThrow",function(){
     it("deve validar o uso do toThrow",function(){

        function multiplicar(){
            numero * 10;
        }

        function somar(n1, n2){
            return n1 + n2;
        }

        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();
        
     });
 });