var registro=[];

function Matricular(){
    nombre=document.getElementById('txtnombre').value;
    edad=document.getElementById('txtedad').value;
    alumno=new Array(nombre,edad);
    registro.push(alumno);
    tabla="";
    tabla+="<table>";
    tabla+="<tr><td>Nombre</td><td>Edad</td></tr>";
for(i=0;i<registro.length;i++){
    tabla+="<tr><td>"+registro[i][0]+"</td><td>"+registro[i][1]+"</td></tr>";
}
    tabla+="</table>";
    var contenedor=document.getElementById("registros");
    contenedor.innerHTML=tabla;
    contenedor.innerHTML+="<br>Total de Alumnos inscritos:"+registro.length;
}
