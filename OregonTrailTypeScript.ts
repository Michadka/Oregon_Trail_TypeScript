(function(){

    /*
    * Interfaces
    */

function randNumber(min, max){ //use this to generate all random numbers
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;
    }

    //interface describing what the passenger array should look like
    interface IPassengerArray {
        [index:number]:Traveler
    }


    //interface describing attributes and methods a wagon should have
    interface IWagon{
        capacity: number;
        passengerArray: IPassengerArray;

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;
    }

    /*
    * Classes
    */

    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    class Traveler implements ITraveler {
        food: number; //interface forces 'number' so it's not needed bit OK for understanding
        name: string; //interface forces 'string' so it's not needed bit OK for understanding
        isHealthy = true;
        constructor(food: number, name: string){ //rules that say what is required when a Traveler is instantiated
            this.food = food;
            this.name = name;
        };
        hunt(){
            if(randNumber(1, 100) % 2){
                this.food = this.food + 100; // or this.food += 100
            }
            return this.food;
        };
        eat(){
             if(this.food <20){
                this.isHealthy = false;
            }else{
                this.food = this.food - 20;// or this.food -= 20
            }
            return this.isHealthy;
        };
    }

    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray = [];
        
        constructor(capacity: number){
            this.capacity = capacity;
        };
        // getPassengerArray(){
        //     return this.passengerArray
        // }
        addPassenger(traveler: Traveler){
            if (this.passengerArray.length >= this.capacity){
                return "sorry";
            }else{
                this.passengerArray.push(traveler) //Traveler.name
                return "added";
            };
        };
        isQuarantined(){
            for (let i = 0; i < this.passengerArray.length; i++) {
                if (!this.passengerArray[i].isHealthy) {
                    return true;
                }
            }
            return false;
        };
        getFood(){
            let total = 0;
            for (let i = 0; i < this.passengerArray.length; i++) {
                total += this.passengerArray[i].food;  //same as total = total + array.food
            }
            return total;
        };


    }

let T1 = new Traveler(randNumber(1, 100), "Sheldon");
let T2 = new Traveler(randNumber(1, 100), "Leonard");
let T3 = new Traveler(randNumber(1, 100), "Rajesh");
let T4 = new Traveler(randNumber(1, 100), "Howard");
let T5 = new Traveler(randNumber(1, 100), "Stuart");
let W1 = new Wagon(4);
console.log(T1.name + ' was able to eat? ' + T1.eat());
console.log(T3.name + ' was able to eat? ' + T3.eat());
console.log(T4.name + ' was able to eat? ' + T5.eat());
console.log(T2.name + ' has ' + T2.hunt() + ' food!');
console.log(T4.name + ' has ' + T4.hunt() + ' food!');

let travelerArray = [T1, T2, T3, T4, T5];
for (let x=0; x < travelerArray.length; x++){
        if(randNumber(1, 100) % 2){
            console.log(W1.addPassenger(travelerArray[x]));
        }else{
            console.log(travelerArray[x].name + " did not luck out")
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

