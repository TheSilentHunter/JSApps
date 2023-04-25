var string= document.querySelector(".txtbox")

let button = document.querySelector(".btn");

string.addEventListener('keydown',e=>{
    if(e.keyCode==13){
        button.click();
    }
})

button.onclick = () => {
    let str=string.value;
    let count =0;
    [...str].forEach(Char => {
        let char=Char.toLowerCase();
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
            count++;
        }
    });
    alert(`The text has ${count} vowels`);
    document.querySelector(".txtbox").value="";
}