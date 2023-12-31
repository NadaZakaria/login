var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPassword = document.getElementById("userPassword")
 var userContanier = []
 

 if(localStorage.getItem("userL") != null){

    userContanier = JSON.parse(localStorage.getItem("userL"))
 }

function isEmailExist(){

    for(var i = 0; i< userContanier.length ; i++){
        if(userContanier[i].pUserEmail.toLowerCase() == userEmail.value.toLowerCase()){

            return false
        }
    }
 }

// ===============sign up =================


 document.querySelector(".signupBtn").addEventListener("click", function(){
    
    var userLog = {

        pUserName: userName.value,
        pUserEmail : userEmail.value,
        pUserPassword: userPassword.value
    }

    if(userLog.pUserEmail == "" || userLog.pUserPassword == "" || userLog.pUserName == ""){

        document.querySelector(".par").innerHTML = "all inputs is required"
        document.querySelector(".par2").innerHTML = ""
        document.querySelector(".par3").innerHTML = ""


        
    }else if (isEmailExist() == false){
        document.querySelector(".par3").innerHTML = "email already exist"
        document.querySelector(".par2").innerHTML = ""
        document.querySelector(".par").innerHTML = ""

    }
    else
    {

        userContanier.push(userLog);
        localStorage.setItem("userL" ,JSON.stringify(userContanier) )
        clearInput()
            document.querySelector(".par2").innerHTML = "Success"
            document.querySelector(".par").innerHTML = ""
            document.querySelector(".par3").innerHTML = ""

        
    }
    
})

function clearInput(){
    userName.value =""
    userEmail.value =""
    userPassword.value =""
}

// ====================log in =================================

