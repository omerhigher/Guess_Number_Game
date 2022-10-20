

let score = 10;
// let topScore = 0;

let topScore = localStorage.getItem("topScore") || 0;
// console.log(topScore);
document.querySelector(".top-score").textContent =topScore;


let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);


document.querySelector(".check-btn").addEventListener('click', () => {

    const guessInput = Number(document.querySelector(".guess-input").value);
    const msg = document.querySelector(".msg")
    const secretNumber = document.querySelector(".secret-number")

    if (!guessInput) {
        msg.innerText = "sayi girmediniz";
    } else if (randomNumber === guessInput) {
        document.querySelector(".msg").innerHTML = `Tebrikler Bildiniz <i class="fa-regular fa-thumbs-up fa-2x"></i> `;
        document.querySelector(".check-btn").disabled=true;
        document.querySelector("body").style.background = "green";
        

        if (score >= topScore) {
            // topScore = score;
            localStorage.setItem("topScore",score)
            document.querySelector(".top-score").textContent = topScore
        }

            secretNumber.innerText = randomNumber;

            
        }else{
            score--;
            if (score > 0) {
                
                
            guessInput > randomNumber ? (msg.innerHTML =`<i class="fa-solid fa-arrow-trend-down fa-2x"></i> Decrease`) : (msg.innerHTML = ` <i class="fa-solid fa-arrow-trend-up fa-2x"></i> Increase`);
            }else{
                msg.innerHTML=`You lost <i class="fa-solid fa-triangle-exclamation fa-3x"></i>`;
                secretNumber.innerText = randomNumber;
                document.querySelector(".check-btn").disabled=true;
                document.querySelector("body").style.background = "red";
                
            }
            

            document.querySelector(".score").textContent=score;
        }
    
});



document.querySelector(".again-btn").addEventListener('click',()=>{
score=10;
document.querySelector(".score").textContent=score;
randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
document.querySelector(".check-btn").disabled =false;
document.querySelector(".secret-number").innerText = "?";
document.querySelector("body").style.background = "#2d3436"
document.querySelector(".guess-input").value="";
document.querySelector(".msg").innerText = `Starting..` 


});

document.querySelector(".guess-input").addEventListener('keydown',(e)=>{
    if (e.code ==="Enter") {
        document.querySelector(".check-btn").click()
        
    }
} );

// myObj = {a :1,b:2,c :3};
// localStorage.setItem("OBJ",JSON.stringify(myObj));


// // const readObj = localStorage.getItem("OBJ");
// const readObj =JSON.parse(localStorage.getItem("OBJ"));
// console.log(typeof readObj);
// console.log(readObj);
