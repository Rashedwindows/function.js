// assign object

var computer = {

    harddisk: "1000gb",
    ram : "8gb",
    processor : "amd ryzen5 2400g",
    motherBoard : "amd brand",
    price : "30000 taka"

}

// select object property
 var computerPrice = computer.price;



console.log(computer.processor);

console.log(computerPrice)

// change property value

computer.price = 28000;

console.log(computer);

console.log(computer.price);


// first way to set a value and object property

computer.processor = "intel core i5";

console.log(computer);
// second way to set a value and object property
computer["price"]=22000;

console.log(computer.price);

//third way to set a value and object property

var priceProparty ="price";

computer[priceProparty]=19000;

console.log(computer.price)