const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    const ip = initialPrice.value;
    const qty = stockQuantity.value;
    const cp = currentPrice.value;

    if(ip != '' && qty != '' && cp != '') {
        calculateProfitAndLoss(ip,qty,cp);
     } else {
        alert(`Please fill out all the fields`);
     }
};

function calculateProfitAndLoss(initialPrice, stockQuantity, currentPrice) {

    if(currentPrice > initialPrice) {
        const profit = (currentPrice - initialPrice) * stockQuantity ;
        const profitPercentage = (profit / initialPrice) * 100;
        outputMessage(`Your profit on stocks is ${profit} & your profit percent is ${profitPercentage} 🤩`);
    }
    else if(initialPrice > currentPrice) {
        const loss = (initialPrice - currentPrice) * stockQuantity;
        const lossPercentage = (loss / initialPrice) * 100;
        outputMessage(`Your loss on stocks is ${loss} & your loss percent is ${lossPercentage} ☹️`);
    } 
    else {
        outputMessage(`No pain no gain & No gain no pain 🤷‍♂️`);
    }
};

function outputMessage(message) {
    outputDiv.innerHTML = message;
}


