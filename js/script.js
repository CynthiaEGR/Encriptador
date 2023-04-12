function cambiarAside(activo,inactivo){
    document.getElementById(activo).style.display = "block";
    document.getElementById(inactivo).style.display = "none";
}
cambiarAside("resultado1","resultado2");

let vocales = ["a","e","i","o","u"];
let sustitutos = ["ai","enter","imes","ober","ufat"];

let botonEncriptar = document.getElementById("btnEncriptar");
botonEncriptar.addEventListener("click", function(){
    let texto = document.getElementById("texto").value;
    let cifrado = "";
    if (texto==""){
        cambiarAside("resultado1","resultado2");
    }else{
        let cambiar = false;
        for (let i = 0; i < texto.length; i++) {
            for (let j = 0; j < vocales.length; j++) {
                if(texto[i] == vocales[j]){
                    cambiar = true;
                    cifrado = cifrado + sustitutos[j];
                    break;
                }else{cambiar = false;}
            }
            if(cambiar == false){
                cifrado = cifrado + texto[i];
            }
        }
        cambiarAside("resultado2","resultado1");
        textoCifradoDescifrado.innerHTML = cifrado;
    }
});

let botonDesencriptar = document.getElementById("btnDesencriptar");
botonDesencriptar.addEventListener("click", function(){
    let texto = document.getElementById("texto").value;
    if (texto==""){
        cambiarAside("resultado1","resultado2");
    }else{
        for (let i = 0; i < sustitutos.length; i++) {
            while(texto.includes(sustitutos[i])){
                texto = texto.replace(sustitutos[i], vocales[i]);
            }
        }
        cambiarAside("resultado2","resultado1");
        textoCifradoDescifrado.innerHTML = texto;
    }
});

let botonCopiar = document.getElementById("btnCopiar");
botonCopiar.addEventListener("click", function(){
    let texto = document.querySelector("#textoCifradoDescifrado").textContent;
    navigator.clipboard.writeText(texto)
    .then(() => {
        console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
    })
});


