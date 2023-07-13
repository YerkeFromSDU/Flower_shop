
var x = document.getElementById("logIn");
var y = document.getElementById("signIn");
var z = document.getElementById("btn");

function sign() {
   x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}



function pop() {
    document.getElementById("pageR").style.display = "flex";
}
function close2() {
    
    document.getElementById("pageR").style.display = "none";
}
function mouseOver(element) {
    element.style.fontSize = "27px";
}
function mOver(element){
    element.style.opacity = "0.5";
    element.style.fontSize = "30px";
    element.style.textShadow = "5px 3px red";
}
function mOut(element){
    element.style.opacity = "1";
    element.style.fontSize = "27px";
    element.style.textShadow = "0px 0px white";

}

function mouseOut(element) {
    element.style.fontSize = "25px";
}
// function maps(element) {
//     var a = element.innerHTML;
//     switch(a){
//         case "BLOOM - Aktobe":
//             document.getElementById("aktobe").style.display = "flex";
//             document.getElementById("mapText").style.display = "flex";
//             document.getElementById("mapText").innerHTML = "This is our address in Aktobe";
//             document.getElementById("ata").style.display = "none";
//             document.getElementById("farm").style.display = "none";
//             break;
//         case "Visit the farm":
//             document.getElementById("farm").style.display = "flex";
//             document.getElementById("mapText").style.display = "flex";
//             document.getElementById("mapText").innerHTML = "This is our farm address";
//             document.getElementById("aktobe").style.display = "none";
//             document.getElementById("ata").style.display = "none";
//             break;
//         case "BLOOM - Almaty":
//             document.getElementById("ata").style.display = "flex";
//             document.getElementById("mapText").style.display = "flex";
//             document.getElementById("mapText").innerHTML = "This is our address in Almaty";
//             document.getElementById("aktobe").style.display = "none";
//             document.getElementById("farm").style.display = "none";
//             break;
        
//     }
// }
// function change(element) {
//     var a = element.innerHTML;
//     switch(a) {
//         case "Stories":
//         	$("#back").animate({opacity:"0"},"slow");
//         	$("#back").animate({opacity:"1"},"slow");
// 			document.getElementById("back").style.background = "url('c2d1eac44ea045b39fa0156aeb2d29e8.jpg')";
// 			document.getElementById("main").innerHTML = "Read Stories";
			
//   				$("button").hide();
			
// 			break;

//         case "About us":
            
//             break;
        
//         case "Contacts":
//             break;
//     }
// }

// function pop(){
// 	//var btn = document.getElementById("login").innerHTML;
	
// 		document.querySelector(".join").style.display = "flex";
// 		$(".join").animate({opacity:"1"},"slow");
	
	
 
// }
// function closeit(){
// 	$(".join").animate({opacity:"0"},"slow");
// 	document.querySelector(".join").style.display = "none";
// }
// function login(){
	
// 	document.querySelector(".profile").style.display = "inline";
// 	// document.getElementById("names").innerHTML = "Yerkenaz";

// 	document.getElementById("btn_join").innerHTML = "Log Out";
// 	closeit();
// }
// function logout(){
// 	document.querySelector(".profile").style.display = "none";	
// 	document.getElementById("btn_join").innerHTML = "Log In"

// }
