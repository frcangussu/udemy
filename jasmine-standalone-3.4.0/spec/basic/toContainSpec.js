/**
 * Realiza a busca por determinado item em um array
 * Também pode ser utilizado para buscar uma substring dentro de uma string
 * Não suporta busca por expressões regulares 
 * 
 */

 describe("Suite - comparador toContain",function(){
     it("deve validar o uso do toContain",function(){

        var texto = "Meu nome é Marcio";
        var frutas = ["laranja","banana","pera"];
                
        expect(texto).toContain("Marcio");
        expect(texto).not.toContain("marcio");

        expect(frutas).toContain("laranja");
        expect(frutas).not.toContain("uva");

     });
 });