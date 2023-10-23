function countCharacter(){
    const charCount = document.getElementById("text").value.length;
    let letterCount = document.getElementById("text").value;
    let counter = 0;
    for (let i = 0; i < letterCount.length; i++){
        if(letterCount[i].match(/[A-Za-z]/)){
            counter++;
        }
    }
    document.getElementById("char").textContent = charCount;
    document.getElementById("letter").textContent = counter;
}