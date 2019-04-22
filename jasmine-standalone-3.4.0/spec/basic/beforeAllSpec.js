/**
 * Função JS global do Jasmine que é executada uma única vez antes que seja executado algum teste
 * Serve para inicializar um status, criar objetos
 */
describe("Suite - funcionamento do beforeAll", function () {

    let contador = 0;

    beforeAll(function(){
        console.log("1) beforeAll: ",contador);
        contador = 10;
        console.log("2) beforeAll: ",contador);
    });

    beforeEach(function(){
        console.log("1) beforeEach: ",contador);
        contador++;
        console.log("2) beforeEach: ",contador);
    });

    it("deve garantir o valor 11 para o contador", function () {
        console.log("valor 11: ",contador);
        expect(contador).toEqual(11);
    });

    it("deve garantir o valor 12 para o contador",function(){
        console.log("valor 12: ",contador);
        expect(contador).toEqual(12);
    })
});