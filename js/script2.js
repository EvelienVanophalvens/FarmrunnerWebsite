
document.querySelector("#btnMail").addEventListener("click", function(e){
    e.preventDefault();
    console.log("g");
    document.querySelector("#btnMail").value = "verstuurd";
    setTimeout(function(){
        document.querySelector("#btnMail").value = "versturen";
        document.querySelector("#adres").value = "";
        document.querySelector("#mail").value = "";


        
    }, 10000)
})