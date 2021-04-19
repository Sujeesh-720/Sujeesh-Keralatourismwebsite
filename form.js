let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let error = document.getElementById("error");
function validate(){

    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let exm =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/

       if(email.value==""||pwd.value==""){
           alert("Field's cannot be empty");
           return false;
       }
       else if(regexp.test(email.value)&&exm.test(pwd.value)){
          error.innerHTML = "valid";
          error.style.color = "green";
          return true;
       }

       else{
          error.innerHTML = "invalid";
          error.style.color = "red";
          return false;
      }

   
   
}


