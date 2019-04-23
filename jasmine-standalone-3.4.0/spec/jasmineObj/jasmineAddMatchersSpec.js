var meuMatcher = {
    toBeValidEmail: function(){
        var emailRegex = /\S+@\S+\.\S+/;
        return {
            compare: function(actual, expected){
                var result = {};
                
                console.log(actual,expected);

                if (expected === undefined){
                    result.pass = emailRegex.test(actual);
                } else {
                    result.pass = expected.test(actual);
                }

                result.message = actual + " não é um email válido";
                if (result.pass){
                    result.message = actual + " é um email válido";
                }
                
                return result;
            }
        }
    }
};

describe("Testes do objeto jasmine.addMatchers",()=>{

    beforeEach(() => {
        jasmine.addMatchers(meuMatcher);
    });

    it('deve verificar se um email é válido', () => {
        expect("email@dominio.com").toBeValidEmail();
        expect("email").not.toBeValidEmail();
    });
    

});