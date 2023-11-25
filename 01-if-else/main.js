// If-else Condition

// eg-1:

// Check whether the 90s period cartoon are telecasted or not using if-else condition

const cartoonName = prompt('Cartoon pakalama?');
  
  if (cartoonName == "poppie") {
    console.log(`The cartoon ${cartoonName} is not telecasted`);
  } else if (cartoonName == "pokemon") {
    console.log(`The cartoon ${cartoonName} is not telecasted`);
  } else if (cartoonName == "ben10") {
    console.log(`The cartoon ${cartoonName} is not telecasted`);
  } else if (cartoonName == "doremon") {
    console.log(`The cartoon ${cartoonName} is telecasted`);
  } else {
    console.log(`${cartoonName} kadalayae ilayam`);
  };
 

// eg -2:

// using if-else in this current time period which cartoon show can we watch in pogo channel is checked here!!

const time = +prompt('What show can I watch now?');

if (time >= 15 && time <= 16){
    console.log("time to watch Little Singhan!");
} else if(time >= 16 && time <= 21){
    console.log("time to watch chotta bheem!")
} else{
    console.log("it is time to sleep, Good Night!!")
};

