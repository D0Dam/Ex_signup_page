function changePhone1(){
    const phone1 = document.getElementById("phone1").value // 010
    if(phone1.length === 3){
        document.getElementById("phone2").focus();
    }
}

function changePhone2(){
    const phone2 = document.getElementById("phone2").value
    if(phone2.length === 4){
        document.getElementById("phone3").focus();
    }
}

function changePhone3(){
    const phone3 = document.getElementById("phone3").value
    if(phone3.length === 4){
        document.getElementById("sendMessage").focus();
        document.getElementById("sendMessage").setAttribute("style","background-color:yellow;")
        document.getElementById("sendMessage").disabled = false;
    }
}

function initButton(){
    document.getElementById("sendMessage").disabled = true;
    document.getElementById("completion").disabled = true;
    document.getElementById("certificationNumber").innerHTML = "000000";
    document.getElementById("timeLimit").innerHTML = "3:00";
    document.getElementById("sendMessage").setAttribute("style","back-ground-color:none;")
    document.getElementById("completion").setAttribute("style","background-color:none;")
}

let processID = -1;

const getToken = () => {

    document.getElementById("completion").setAttribute("style","background-color:yellow;")
    document.getElementById("completion").disabled = false;

    if(processID != -1) clearInterval(processID);
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("certificationNumber").innerText = token;
    let time = 180;
    processID = setInterval(function (){
        if(time < 0 || document.getElementById("sendMessage").disabled) {
            clearInterval(processID);
            initButton();
            return;
        }
        let mm = String(Math.floor(time / 60)).padStart(2, "0");
        let ss = String(time % 60).padStart(2, "0");
        let result = mm + ":" + ss;
        document.getElementById("timeLimit").innerText = result;
        time--;
    }, 50);
};

function checkCompletion(){
    setTimeout(function() { alert("?????? ????????? ?????????????????????.") }, 10);
    initButton();
    document.getElementById("completion").innerHTML = "????????????";
    document.getElementById("signUpButton").disabled = false;
    document.getElementById("signUpButton").setAttribute("style","background-color:yellow;")
}


function signUpCheck(){

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let passwordCheck = document.getElementById("passwordCheck").value
    let area = document.getElementById("area").value
    let gender_man = document.getElementById("gender_man").checked
    let gender_woman = document.getElementById("gender_woman").checked
    let check = true;

    if(email.includes('@')){
        let emailId = email.split('@')[0]
        let emailServer = email.split('@')[1]
        if(emailId === "" || emailServer === ""){
            document.getElementById("emailError").innerHTML = "???????????? ???????????? ????????????."
            check = false
        }
        else{
            document.getElementById("emailError").innerHTML = ""
        }
    }
     else {
        document.getElementById("emailError").innerHTML = "???????????? ???????????? ????????????."
        check = false
    }
    
    if(name===""){
        document.getElementById("nameError").innerHTML="????????? ???????????? ????????????."
        check = false
    }
    else{
        document.getElementById("nameError").innerHTML=""
    }

    if(password != passwordCheck){
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML="??????????????? ???????????? ????????????."
        check = false
      }else{
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
      }
    
      if(password===""){
        document.getElementById("passwordError").innerHTML="??????????????? ??????????????????."
        check = false
      }else{
        //document.getElementById("passwordError").innerHTML=""
      }
      if(passwordCheck===""){
        document.getElementById("passwordCheckError").innerHTML="??????????????? ?????? ??????????????????."
        check = false
      }else{
        //document.getElementById("passwordCheckError").innerHTML=""
      }
    
    
      // ???????????? ??????
      if(area === "????????? ???????????????."){
        document.getElementById("areaError").innerHTML="????????? ??????????????????."
        check = false
      }else{
        document.getElementById("areaError").innerHTML=""
      }
    
      // ??????????????????
      if(!gender_man && !gender_woman){
        document.getElementById("genderError").innerHTML="????????? ??????????????????."
        check = false
      }else{
        document.getElementById("genderError").innerHTML=""
      }
      
      if(check){
        document.getElementById("emailError").innerHTML=""
        document.getElementById("nameError").innerHTML=""
        document.getElementById("passwordError").innerHTML=""
        document.getElementById("passwordCheckError").innerHTML=""
        document.getElementById("areaError").innerHTML=""
        document.getElementById("genderError").innerHTML=""
        
        //????????? ???????????????
        setTimeout(function() {
          alert("????????? ?????????????????????.")
      },0);
    }
}