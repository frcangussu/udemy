/**
 * toEqual: compara o conteúdo dos objetos
 */

describe("Suite - comparador toEqual",function(){

    var valorBooleano = true;
    var valorBooleanoCopia = valorBooleano;
    var valorBooleanoTexto = "true";
    var obj1 = {'valor':valorBooleano};
    var obj2 = {'valor':valorBooleano};

    it("deve validar o uso do matcher 'toBe'",function(){
        expect(valorBooleano).toEqual(true);
        expect(valorBooleanoCopia).toEqual(valorBooleano);
        expect(valorBooleano).not.toEqual(valorBooleanoTexto);
        expect(valorBooleanoTexto).toEqual("true");
        expect(obj1).toEqual(obj2);
    });

});