function validate(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const nPattern = /^[A-Za-z\s]+$/;
    const pPattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    if(nPattern.test(name)){
    }else{
        alert("Letters and spaces only.");
        return;
    }
    if(pPattern.test(phone)){
    }else{
        alert("Invalid format. Phone number should be (xxx) xxx-xxxx.");
        return;
    }
    const displayPhone = phone.substring(1,4) + "-" + phone.substring(6,9) + "-" + phone.substring(10,14);   
    document.getElementById("display").innerHTML =
    `<div>
    <p>userName: ${name}</p>
    <p>Address: ${document.getElementById("address").value}</p>
    <p>Phone number: ${displayPhone}</p>
</div>`;
}