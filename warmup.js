// var apples = 14;
// console.log(apples);
// console.log('I have ' + (apples) + ' ' + 'apples');

//----------------------------

// var materials  = ['wood', 'metal', 'stone'];
// var words = {
//   'elephant': "The world's largest land mammal.",
//   'school': 'A place of learning.',
//   'ice cream': 'A delicious milk-based dessert.'
// };

//----------------------------

// var num = 16;
//
//   if (num > 10) {
//     console.log(num  + ' is greater than 10.');
//   }
//   else if (num === 10) {
//     console.log(num  + ' is exactly 10.');
//   }
//   else {
//     console.log(num  + ' must be less than 10');
//   }

//----------------------------

// var thing;
// for (thing = 0; thing < 11; thing++) {
//   console.log("Doing the same thing over and over.")
// }

  //----------------------------

// var base = 5;
//   for (var num = 0; num < 20; num++) {
//     console.log(base + num)
// }

//----------------------------

// var total = 0
//   for (var num = 0; num < 100; num++) {
//     total += num
//   };
//   console.log(total);

  //----------------------------

// var height = [3,4,5,6,7,8,9,10,11,12,13,14,15]
// height.forEach(function(element){
//   if (element > 9) {
//     console.log("You can get on the rollercoaster!");
//   }
//   else {
//     console.log("You are too short to ride this rollercoaster.");
//  }
// })

//----------------------------

  // var containers = ['purse', 'wallet', 'backback']
  // containers.forEach(function(element){
  //   console.log(element)
  // })

//----------------------------

    // var greeting = "Hello world!"
    //   console.log(greeting);

//----------------------------

var sum = new Function('a', 'b', 'return a + b');

console.log(sum(5, 7));
