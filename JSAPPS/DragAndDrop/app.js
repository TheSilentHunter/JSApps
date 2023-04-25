let item = document.querySelector(".item");

item.addEventListener('dragstart',dragStart);
item.addEventListener('dragend',dragEnd);

function dragStart(){
    abc=this.closest("li").getAttribute();
    console.log(abc);
}

function dragEnd(){
}