/**
 * Falha manual (Fail) permite interromper um testes lançando um erro
 * O jasmine possui a função "fail" para falhar manualmente um teste
 * usada para certificar que uma operação não desejada não seja executada
 */
 describe("Suite - testa a função 'fail' de falha manual",function(){
     
    it("deve demonstrar o uso do fail",function(){

        var operacao = function(executar, callback){
            if (executar){
                callback();
            }
        }

        operacao(false,function(){
            fail("Não deve eecutar função de callback");
        });

     });
     
 });