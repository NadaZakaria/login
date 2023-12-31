var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword")
var userContanier = []



 if(localStorage.getItem("userL") != null){
    userContanier = JSON.parse(localStorage.getItem("userL"))
 }
 function isEmailExist( ){
  
    for(var i = 0; i< userContanier.length ; i++){
        if(userContanier[i].pUserEmail.toLowerCase() == userEmail.value.toLowerCase()){

            localStorage.setItem('user', userContanier[i].pUserName) 
            return false
        }
    }
 }

document.querySelector(".loginBtn").addEventListener("click", function(){

    var userLog = {
        pUserEmail : userEmail.value,
        pUserPassword: userPassword.value
    }

    if(userLog.pUserEmail == "" || userLog.pUserPassword == ""){
       
        document.querySelector(".par").innerHTML = "all inputs is required"
        
    }else if (isEmailExist() == false){
        window.location = "./welcome.html"
    }
    else
    {
        document.querySelector(".par2").innerHTML = "invalid"
        document.querySelector(".par").innerHTML = ""
    }
    
})

function clearInput(){
    userEmail.value =""
    userPassword.value =""
}


 