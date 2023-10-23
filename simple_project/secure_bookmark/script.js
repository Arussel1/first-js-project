document.addEventListener("DOMContentLoaded", function(){
function bookmark(url){
    const webList = document.getElementById("webList");
    const webs = document.createElement("li");
    const link = document.createElement("a");
    const lock = document.createElement("span");
    link.href = url ;link.textContent = url;
    if(url.substring(0,5) === 'https'){
        lock.textContent = "🔒";
        lock.className = "green";
    }else{
        lock.textContent = "🔓";
        lock.className = "red";
    }
    webs.appendChild(link); 
    webs.appendChild(lock);
    webList.appendChild(webs);
}
bookmark("http://www.testingmcafeesites.com/index.html");
bookmark("https://www.google.com/");
bookmark("https://www.facebook.com/");
})