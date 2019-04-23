/**
 * serve para tornar síncrono as chamadas do "setTimeout" e "setInterval"
 */
describe("Testes do objeto jasmine.clock",()=>{

    var dobro;
  
    beforeEach(()=>{
        jasmine.clock().install(); // obrigatório
    });

    afterEach(()=>{
        jasmine.clock().uninstall();
    });
    
    beforeAll(()=>{
        dobro = jasmine.createSpy("dobro");
    });

    it('deve demonstrar o uso com o setTimeout', () => {
        
        setTimeout(function(){ dobro(10); },1000);
        jasmine.clock().tick(1000); // tempo maior ou igual ao anterior (setTimeout)
        expect(dobro).toHaveBeenCalled();
        
    });
                
    it('deve demonstrar o uso com o setInterval', () => {
        
        setInterval(function(){ dobro(2); },500);
        jasmine.clock().tick(); // tempo maior ou igual ao anterior (setInterval)
        expect(dobro).toHaveBeenCalled();
        
    });
                

})