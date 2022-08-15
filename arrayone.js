//array - to store more than 1 value in a variable
//linear data structure
//var array-name = [item1,item2,item3,item4...item]
//array size is not fixed
//can hold different types of data
//to  fetch item from array- use its index and it starts from zero
//variable creation
var collection = 10
//array creation

var car = ["benz","bmw",100]

 console.log(typeof(car));

 //to fetch item from array - use its index
 console.log(car[0])
 console.log(car[car.length-1])

 //to lenght of the array
 console.log(car.lenght)
 //inserting an item to an existing array-push()
 car.push("skoda")
 car[car.length]="porche"
 console.log(car)
 //to display array
 //of keyword to get values stored in array
 for(let item of car){
     console.log((item));
 }
//in keyword to get index of array
     for(let index in car){
         console.log(index);//to get index of array
     }
//in to get index of arry
     for(let index in car){
        console.log(car[index]);//normal for loop7}
     }
//normal forloop
for(i=0;i<=car.length;i++)
{
    console.log(car[i]);
}




