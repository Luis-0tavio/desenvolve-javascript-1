function Soma(x,y) {
    return x+y;            
}
function Subtrai(x,y){
    return x-y;
}
function Multiplica(x,y){
    return x*y;
}
function Divide(x,y){
    if (y==0)
        return "Não é possível dividir por \"0\"";
    return x/y;
}
function MostraResultado(x,y){
    console.log(`Soma entre ${x} e ${y}:`, Soma(x,y));
    console.log(`Subtração entre ${x} e ${y}:`, Subtrai(x,y));
    console.log(`Multiplicação entre ${x} e ${y}:`, Multiplica(x,y));
    console.log(`Divisão entre ${x} e ${y}:`, Divide(x,y));
}
