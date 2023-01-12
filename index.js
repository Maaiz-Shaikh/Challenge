
var home = document.getElementById("home");
var thankyou = document.getElementById("thank-you");

thankyou.style.display="none";
var btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    let inp = document.getElementById("email").value.split("@")[0];
    var name = document.getElementById("name");
    if(inp!=""){
        home.style.display="none";
        thankyou.style.display="flex";
        name.innerHTML = inp;
    }
    
});

