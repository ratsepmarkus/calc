let vahe = 0;

function pluss(){
 
 let income = +document.getElementById("summa").value;
 let kirjeldus = document.getElementById("kirjeldus").value;
 let newDiv = document.createElement("div");
 newDiv.innerHTML = kirjeldus +" "+ income +"€";
 document.getElementById("income").appendChild(newDiv);
 vahe = vahe + income;
 document.getElementById("vahe").innerHTML = vahe + "€";
}

function miinus(){
  
let outcome = +document.getElementById("summa").value;
let kirjeldus = document.getElementById("kirjeldus").value;
let newDiv = document.createElement("div");
newDiv.innerHTML = kirjeldus +" "+ outcome +"€";
document.getElementById("outcome").appendChild(newDiv);
vahe =  vahe - outcome;
document.getElementById("vahe").innerHTML = vahe + "€";
 
}

  //PLUSS----------------------------------------------------------------------------------------------
 //  document.getElementById("v22rtus1").innerHTML = document.getElementById("summa").value;          /
  //  var newDiv = document.createElement("div");                                                     /
  //  var newContent = document.getElementById("v22rtus1");                                           /
  //  var node = document.createElement("div");                                                       /
  //  document.getElementById("v22rtus1").appendChild(node);                                          /  
  //                                                                                                  /
  //  newDiv.appendChild(newContent);                                                                 /
  //                                                                                                  /  
  //  var currentDiv = document.getElementById("v22rtus1");                                           /
 // document.body.insertBefore(newDiv, currentDiv);                                                   /  
//-----------------------------------------------------------------------------------------------------
//  document.getElementById("v22rtus2").innerHTML = document.getElementById("summa").value;
