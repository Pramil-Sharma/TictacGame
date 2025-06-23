let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let newContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");
let turno = true;
const win_patterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

const resetGame = () => {
    turno = true;
    enabledBoxes();
    newContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if(turno){
            box.innerText = "O";
            turno = false ;
        }
        else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkwinner();

        
    })
})

const disabledBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enabledBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = () => {
    msg.innerText = 'Winner Winner, Dal Chawal dinner ';
    newContainer.classList.remove("hide");
}

checkwinner = () => {
    for(let pattern of win_patterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !=""&& pos2val !=""&&pos3val!=""){
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner winner chicken dinner!",pos1val);
                disabledBoxes()
                showWinner()
            }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener('click',resetGame);