
///List of Even Numbers
 let arr1=[1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
 for (let i = 0;i<arr1.length;i++){
     if (arr1[i] % 2 == 0){
       console.log(`This is list of even numbers ${arr1[i]}`)
    }

}
// List of Odd numbers
let arr2=[1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
for (let i = 0;i<arr2.length;i++){
    if (arr2[i] % 2 == 1){
        console.log(`This is list of odd numbers ${arr2[i]}`)
        console.log("==================================================")
    }

 }
  // Sum os Numbers
let arr3=[1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let sum1 = 0;
for (let i = 0;i<arr3.length;i++){
    
  sum1 += arr3[i];

    
 }
 console.log(`The sum of all numbers are ${sum1}`);
// Largest Numbers
let list1 =[1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let largest = 0;
for (let i =0; i<list1.length;i++){
    if (list1[i]<largest){
        largest = list1[i]
    }
    }

    console.log(`The largest number in the array is ${largest}`);
    // Sum of positive Numbers
let list =[1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let sum = 0;
   for (let i = 0;i<list.length;i++){
    if (list[i] > 0){
sum += list[i]
    
    }
   }
   console.log(`The sum of all the positive numbers are ${sum}`);
    // Sum of negative Numbers
let list2 =[1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let sum2 = 0;
   for (let i = 0;i<list2.length;i++){
    if (list2[i] < 0){
sum2 += list2[i]
    
    }
   }
   console.log(`The sum of all the negative numbers are ${sum2}`);