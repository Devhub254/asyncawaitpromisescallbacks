//forming relationships between functions using a callback

let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

console.log(stocks.Fruits[2]);




let order = (call_production)=>{
     console.log("order placed, please call production");
    call_production();
};


let production= ()=>{

    console.log("order received , starting production");
};

order(production);



