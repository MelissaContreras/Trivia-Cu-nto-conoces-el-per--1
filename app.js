let name;
let avatar;
let count=0;

function saveName(){
  //obtener el nombre del input y guardarlo en una variable
  name = document.getElementById("name").value;
//paso 2 mostrar el nombre en la cabecera
document.getElementById("playerName").innerHTML= name; 
  //paso3 ir a la sgte seccion para elegir al avatar
  document.getElementById("welcome").style.display = "none";
  document.getElementById("avatar").style.display = "block";
}

function chooseAvatar(selectedAvatar){
  //guardar en una variable el avatar al que le de click
avatar= selectedAvatar; 
//paso 2 que se note cual he escogido 
let images = document.getElementsByClassName("avatar");

for (var i = 0; i < images.length; i++) {
   images[i].classList.remove('selected');
}

document.getElementById(selectedAvatar).classList.add("selected");
}

function goToStart(){
  //colocar el nombre y el avatar en la cabecera
document.getElementById("nameHeader").innerHTML= name;
document.getElementById("avatarHeader").src="images/"+avatar+".png";
  //mostrar la pantalla que sigue start
  document.getElementById("avatar").style.display = "none";
  document.getElementById("header").style.display = "block";
  document.getElementById("start").style.display = "block";
}

function goToPlaces1(){
  document.getElementById("start").style.display = "none";
  document.getElementById("places1").style.display = "block";
}

function goToPlaces2(value){
  //si la respuesta es correcta añado uno al contador
  count= count+ value;
  document.getElementById("places1").style.display = "none";
  document.getElementById("places2").style.display = "block";
}

function goToPlaces3(value){
  count= count+ value;
  document.getElementById("places2").style.display = "none";
  document.getElementById("places3").style.display = "block";
}

function goToPlacesAnswers(value){
  count= count+ value;

document.getElementById("corrects").innerHTML= count;

  document.getElementById("places3").style.display = "none";
  document.getElementById("answers").style.display = "block";
}

function goToDances1(value){
  document.getElementById("start").style.display = "none";
  document.getElementById("dances1").style.display = "block";
}

function goToDances2(value){
  //si la respuesta es correcta añado uno al contador
  count= count+ value;
  document.getElementById("dances1").style.display = "none";
  document.getElementById("dances2").style.display = "block";
  }

  function goToDances3(value){
  count= count+ value;
  document.getElementById("dances2").style.display = "none";
  document.getElementById("dances3").style.display = "block";
  }
  function goToDancesAnswers(value){
  count= count+ value;
  document.getElementById("corrects").innerHTML= count;
  document.getElementById("dances3").style.display = "none";
  document.getElementById("answers").style.display = "block";
  }

  

function resetPlaces(){
  //poner el contador en 0
  count=0;
  //ocultar answers y mostrar places1
  document.getElementById("answers").style.display = "none";
  document.getElementById("places1").style.display = "block";
  }
  
function resetDances(){
  //poner el contador en 0
  count=0;
  //ocultar answers y mostrar places1
  document.getElementById("answers").style.display = "none";
  document.getElementById("dances1").style.display = "block";
  }
