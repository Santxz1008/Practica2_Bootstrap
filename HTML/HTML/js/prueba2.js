function validarFormulario(){
    let x = document.forms["frml"]["Nombre"].value; 
    if(x==="")
    {
        alert("Se debe completar el nombre"); 
        return false;
    }
}