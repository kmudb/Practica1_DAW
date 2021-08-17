function convertir(){
    var num=document.getElementById('txttipo').value;
    tipo=document.getElementById('tipo').value;
    texto ="";
    var k=0,m=0,cm=0,mm=0;
    switch(tipo){
        case "1":
            k=parseFloat(num);
            m=parseFloat(num)*1000;
            cm=parseFloat(num)*100000;
            mm=parseFloat(num)*10000000;
            break;
        case "2":
            break;
        case "3":
            break;
        case "4":
            break;
        default:
        break;
    }

    texto="Kilometros"+k+" km<br>";
    texto+="Metros"+m+" m<br>";
    texto+="Centimetros"+cm+" cm<br>";
    texto+="Milimetros"+mm+" mm<br>";

    document.getElementById('datos').innerHTML=texto;
}

