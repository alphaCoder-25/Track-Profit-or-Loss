const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");

function calculateProfitAndLoss(initialPrice, stockQuantity, currentPrice) {
    if(currentPrice > initialPrice) {
        const profit = (currentPrice - initialPrice) * stockQuantity ;
        const profitPercentage = (profit / initialPrice) * 100;
        console.log(`Your profit on stocks is ${profit} & your profit percent is ${profitPercentage}`);
    }
    else if(initialPrice > currentPrice) {
        const loss = (initialPrice - currentPrice) * stockQuantity;
        const lossPercentage = (loss / initialPrice) * 100;
        console.log(`Your loss on stocks is ${loss} & your loss percent is ${lossPercentage}`);
    } 
    else {
        console.log("No pain no gain & No gain no pain");
    }
};

calculateProfitAndLoss(100,20,1000);