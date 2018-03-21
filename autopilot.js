var cars = [];
add_one_car_per_day(cars, 10);

function getNewCar() {
  var new_car =  {
      city: 'Toronto',
      passengers: 0,
      gas: 100,
    };
    return new_car
  }

function addCar(cars, newCar) {
  cars.push(newCar);
  console.log('Adding new car to fleet. Fleet size is now ' + cars.length );
  }

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -=10;
  console.log("Picked up passenger. Car now has " + car.passengers + " passengers" );
}

function getDestination(car) {
  if (car.city === 'Toronto') {
    return 'Mississauga'
  }
  else if (car.city === 'Mississauga') {
    return 'London'
  }
  else if (car.city === 'London') {
    return 'Toronto'
  }
}

function getGasDisplay(gas_amount) {
  return gas_amount
}

function fillUpGas(car) {
  car.gas = 100;
  console.log('Filled up to');
}
