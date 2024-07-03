
//better way to write promises async await
//await
let stocks = {
    Fruits : ["strawberry","grapes","banana","apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;


async function order(){
    try{
        await abc   ;//abc is pointing out to a function that does not exist
    }
    catch(error){
        console.log("abc doesnt exist", error);
    }
    finally{
        console.log("run code anyways");
    }
}


order()



