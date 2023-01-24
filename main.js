maullidos = 0;
ladridos = 0;
gorjeos = 0;
balidos = 0;
selva = 0;
function sisimuu(){
    navigator.mediaDevices.getUserMedia({audio:true});
    clasificador = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/O_88I-tcR/model.json", modeloiniciar);
}
function modeloiniciar(){
    clasificador.classify(gotresults);
}
function gotresults(error, results){
    console.log("resultadoobtenido");
    if (error){
        console.error(error);
    }else{
        console.log(results)
        red = Math.floor (Math.random() * 255 ) + 1;
        blue = Math.floor (Math.random() * 255) + 1;
        green =  Math.floor (Math.random() * 255) + 1;
        document.getElementById("vecesso").innerHTML = "Maullidos : "+ maullidos + " ,Ladridos:  " + ladridos + " ,Gorjeos: " + gorjeos + " ,Balidos: " + balidos + " ,Selva:  " + selva
        document.getElementById("sonido").innerHTML = "Escucho: " + results[0].label;
        document.getElementById("vecesso").style.color = "rgb (" + red + "," + green + "," + blue + ")";
        document.getElementById("sonido").style.color = "rgb (" + red + "," + green + "," + blue + ")";
        imagen = document.getElementById("imagenanimal");
        if (results[0].label == "Perro"){
            imagen.src= "chihuahua-perro.gif";
            ladridos = ladridos + 1; 
        } else if (results[0].label == "gato"){
            imagen.src = "gato-abriendo-y-cerrando-la-boca.gif";
            maullidos = maullidos + 1;
        } else if (results[0].label == "delfin"){
            imagen.src = "dolphin-funny-animals.gif";
            gorjeos = gorjeos + 1;
        } else if (results[0].label == "Cabra"){
            imagen.src = "cabra02.gif";
            balidos = balidos + 1;
        } else {
            imagen.src = "giphy.gif";
            selva = selva + 1;
        }
    }
}
