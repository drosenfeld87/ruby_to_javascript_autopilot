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
  return 'Adding new car to fleet. Fleet size is now ' + cars.length;
  }

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -=10;
  return "Picked up passenger. Car now has " + car.passengers + " passengers";
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
  return gas_amount + '%'
}

function fillUpGas(car) {
  var oldGas = car.gas;
  car.gas = 100;
  return 'Filled up to ' + getGasDisplay(car.gas) + ' on gas from ' + getGasDisplay(oldGas);
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;
  return 'Drove to ' + car.city + '. Remaining gas: ' + getGasDisplay(car.gas);
}

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  return 'Dropped off ' + car.passengers + 'passengers '.

function act(car) {
  var distanceBetweenCities = 50;

    if (car.gas < 20) {
    return fillUpGas(car);
  }
    else if (car.passengers < 3  {
      return pickUpPassenger(car);
    }
    else (car.gas < distanceBetweenCities) {
      return fillUpGas(car);
    }

    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return 'droveTo + ' ' + passengersDropped';
  }
}

function commandFleet(cars) {
  for (var count = 0; count < cars.length; count++) {
    var action = act(cars[count]);
    console.log("Car " + (count + 1) + ": " + action);
  }
  console.log('---');
}

function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i < numDays; i++) {
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}

}
