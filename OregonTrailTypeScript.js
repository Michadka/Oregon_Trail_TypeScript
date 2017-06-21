(function () {
    /*
    * Interfaces
    */
    function randNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = (function () {
        function Traveler(food, name) {
            this.isHealthy = true;
            this.food = food;
            this.name = name;
        }
        ;
        Traveler.prototype.hunt = function () {
            if (randNumber(1, 100) % 2) {
                this.food = this.food + 100; // or this.food += 100
            }
            return this.food;
        };
        ;
        Traveler.prototype.eat = function () {
            if (this.food < 20) {
                this.isHealthy = false;
            }
            else {
                this.food = this.food - 20; // or this.food -= 20
            }
            return this.isHealthy;
        };
        ;
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = (function () {
        function Wagon(capacity) {
            this.passengerArray = [];
            this.capacity = capacity;
        }
        ;
        // getPassengerArray(){
        //     return this.passengerArray
        // }
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length >= this.capacity) {
                return "sorry";
            }
            else {
                this.passengerArray.push(traveler); //Traveler.name
                return "added";
            }
            ;
        };
        ;
        Wagon.prototype.isQuarantined = function () {
            for (var i = 0; i < this.passengerArray.length; i++) {
                if (!this.passengerArray[i].isHealthy) {
                    return true;
                }
            }
            return false;
        };
        ;
        Wagon.prototype.getFood = function () {
            var total = 0;
            for (var i = 0; i < this.passengerArray.length; i++) {
                total += this.passengerArray[i].food; //same as total = total + array.food
            }
            return total;
        };
        ;
        return Wagon;
    }());
    var T1 = new Traveler(randNumber(1, 100), "Sheldon");
    var T2 = new Traveler(randNumber(1, 100), "Leonard");
    var T3 = new Traveler(randNumber(1, 100), "Rajesh");
    var T4 = new Traveler(randNumber(1, 100), "Howard");
    var T5 = new Traveler(randNumber(1, 100), "Stuart");
    var W1 = new Wagon(4);
    console.log(T1.name + ' was able to eat? ' + T1.eat());
    console.log(T3.name + ' was able to eat? ' + T3.eat());
    console.log(T4.name + ' was able to eat? ' + T5.eat());
    console.log(T2.name + ' has ' + T2.hunt() + ' food!');
    console.log(T4.name + ' has ' + T4.hunt() + ' food!');
    var travelerArray = [T1, T2, T3, T4, T5];
    for (var x = 0; x < travelerArray.length; x++) {
        if (randNumber(1, 100) % 2) {
            console.log(W1.addPassenger(travelerArray[x]));
        }
        else {
            console.log(travelerArray[x].name + " did not luck out");
        }
    }
    console.log("Are folks in the wagon sick? " + W1.isQuarantined());
    console.log("The total food in the wagon is = " + W1.getFood());
})();
/*
* Play the game
*
* Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
*
* Create wagon with an empty passenger list and a capacity of 4.
*
* Make 3 of 5 the travelers eat by calling their eat methods
*
* Make the remaining 2 travelers hunt
*
* Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
* of attempting to be being added to the wagon using the wagons addPassenger method.
*
* Run the isQuarantined method for the wagon
*
* Run the getFood method for the wagon
*
* the return values of all the methods should be displayed in the console using console.log()
* the console.log statements should not live inside any methods on the objects
*/
