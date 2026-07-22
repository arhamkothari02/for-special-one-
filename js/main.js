const btn = document.getElementById("startBtn");
const status = document.getElementById("status");

btn.addEventListener("click", () => {

const username =
document.getElementById("username").value.trim().toLowerCase();

const password =
document.getElementById("password").value.trim().toLowerCase();

if(
username === "rashi belsare" &&
password === "bauni belsare"
){

status.style.color="#33e0ff";
status.innerHTML="INITIALIZING AUTHENTICATION...";

setTimeout(()=>{

window.location.href="page2.html";

},2000);

}else{

status.style.color="#ff4d4d";
status.innerHTML="AUTHENTICATION FAILED";

}

});
