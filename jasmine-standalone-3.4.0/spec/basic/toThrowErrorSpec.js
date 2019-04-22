/**
 * Verifica se uma exceção é lançada por um método
 * Valida o tipo da exceção lançada
 * Valida mensagem deerro contida na exceção
 * Suporta expressão regular na validação da mensagem  de erro
 */

 describe("Suite - comparador toThrowError",function(){
     it("deve demonstrar o uso do toThrowError",function(){

        var somar = function(n1,n2){
            if (n1 <= 0 || n2 <=0){
                throw new TypeError("Deve ser maior que 0");
            }
            return n1 + n2;
        }

        var comErro = function(){somar(0,0)};

        expect(comErro).toThrowError();
        expect(comErro).toThrowError("Deve ser maior que 0");
        expect(comErro).toThrowError(/maior que 0/);
        expect(comErro).toThrowError(TypeError);
        expect(comErro).toThrowError(TypeError,"Deve ser maior que 0");
        
        
        var semErro = function(){somar(1,1)};
        
        expect(semErro).not.toThrowError();
        
     });
 });