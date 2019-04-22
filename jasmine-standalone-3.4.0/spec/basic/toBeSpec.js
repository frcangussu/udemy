/**
 * toBe: compara objetos e seus respectivos conteúdos
 */

describe("Suite - comparador toBe",function(){

    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = {'valor':valorBooleano};
    var obj2 = {'valor':valorBooleano};

    it("deve validar o uso do matcher 'toBe'",function(){
        expect(valorBooleano).toBe(true);
        expect(valorBooleanoCopia).toBe(valorBooleano);
        expect(valorBooleano).not.toBe(valorBooleanoTexto);
        expect(valorBooleanoTexto).toBe("true");
        expect(obj1).not.toBe(obj2);
    });

});