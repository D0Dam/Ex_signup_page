function changePhone1(){
    const phone1 = document.getElementById("phone1").value
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
    alert("문자 인증이 완료되었습니다.")
    initButton();
    document.getElementById("completion").innerHTML = "인증완료"
    document.getElementById("signUpButton").disabled = flase;
    document.getElementById("signUpButton").setAttribute("style","background-color:yellow;")
}


function signUpCheck(){

    let email = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let passwordCheck = document.getElementById("password").value
    let area = document.getElementById("area").value
    let email = document.getElementById("gender_man").checked
}