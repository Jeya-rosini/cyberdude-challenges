
// Switch-case

// using the offers affordable, which type of saree can be bought is checked using swtich case!!

const offers = +prompt('Wanna know about offers available for sarees?');

switch(true){
   case (offers >= 50):
       console.log("go for handloom saree");
       break;
   case (offers >= 25 && offers < 50):
       console.log("go for semi-cotton saree");
       break;
   case (offers >= 10 && offers < 25):
       console.log("go for cotton-silk saree"); 
       break;
   default:
       console.log("buy a grape saree");
};