let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}


let order = (Fruit_name,call_production)=>{
   setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
   }, 2000);
    //->>call_production//output->production has started strawberry was selected
};


let production= ()=>{

 setTimeout(()=>{
      console.log("production has started");

      setTimeout(()=>{
        console.log("the fruit was chopped");
        setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

            setTimeout(()=>{
                console.log("the machine was started");
                setTimeout(()=>{
                    console.log(`ice cream was placed on ${stocks.holder[0]}`);//backticks get something outside the function
                    setTimeout(()=>{
                       console.log(`${stocks.toppings[0]} was added as topping`);
                       setTimeout(()=>{
                         console.log("serve icecream");
                       },2000)
                    },3000);
                },2000)
            },1000)
        },1000);
      },2000)
 },0);

};

order(0,production);





