function nextPage() {
    id = document.login_form.id.value
    pwd = document.login_form.pass.value;
    location.href = id + pwd + "login.html";
}



function myChgPic(myPicURL){
    document.images["myBigImage"].src = myPicURL;
}

function myPic(myPicURL){
    document.images["myImage"].src = myPicURL;
}


