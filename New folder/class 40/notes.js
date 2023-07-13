// 1) Classes:-
//     Class is itself is not a object. This is basically 
//     a blueprint of the object.
    
//     example:

//     class person {
//         constructor(params){

//         }
//     }

//     let personObject1 = new person(values for params);















// 2) Constructor Function:-
//     This is just like another functions, that automatically called when
//     object is created.
//     Why constructor function uses?
//         Because we want initialize the values of our properties.

// Classes contains two things:
//     1) Properties/data members
//     2) Methods/ Members functions




// 3) Properties or Data members:-
//     Properties are just normal variable, but object oriented programming 
// we called these   variable as properties and data members.
//     Note:
//         we can  access this data member in class via this keyword

    // class person {
    //     constructor(name, height){
    //         this.personName = name;
    //         this.personHeight = height;
    //     }
    // }


    // class person{
    //     constructor(name,height,age){
    //         this.personName=name;
    //         this.personAge=age;
    //         this.personHeight=height;
    //     }
    // }

//     let obj1 = new person("Ali", "5.5 inch");
//     let obj1 = new person("Ahmad", "5.8 inch");


// 4) Methods or Members functions
//     These functions works similar as normal functions.But in OOP(Object Oriented
//  Programming)  these are  called as methods or Member functions.
//     Note:
//         These functions syntax is'nt include function keyword

//     Example:- 

    // class person {
    //     constructor(name, height){
    //         this.personName = name;
    //         this.personHeight = height;
    //     }
    //     show(){
    //         console.log(`${this.name} have ${this.height} height`)
    //     }
    // }
    // let obj1 = new person("Ali", "5.5 inch");
    // // let obj1 = new person("Ahmad", "5.8 inch");
    // obj1.show();    // Ali have 5.5 inch height








// 5) Static Keyword:
//     This keyword is used when we want to access date members and members functions
//     without creating object of that class.
//     Note:
//         These data members and member functions are accessed via
//  className.methodName or className.methodName

//     example:

    // class person {
    //     constructor(name, height){
    //         this.personName = name;
    //         this.personHeight = height;
    //         this.nationality = "pakistani"
    //     }
    //     show(){
    //         console.log(`${this.name} have ${this.height} height`)
    //     }
    //     static nationality = "Pakistani";
    //     static religion(){
    //         console.log(`90% chances are this ${person.nationality} man can be muslim`)
    //     }
    // }
    // console.log(person.nationality);    // Pakistani
    // person.religion();                  // 90% chances are this pakistani man can be muslim




    // class person{
//     constructor(name,height){
//         this.name=name;
//         this.height=height;
//         this.nationality="CANADA";
//     }
//     show(){
//         console.log(`${this.name} have ${this.height}  height`);
//     }
//     static nationality="pakistani";
//    static religion(){
// console.log(`90% chances are this ${person.nationality} man can be muslim`);
//    }
// }
// console.log(person.nationality);
// person.religion()




// 6) Inheritance
//     In  inheritance, child class can access data members(properties)
//     and member function(methods) of parent class.
//     Note: 
//         You can perform inheritance upto any level that you want

//     Two main keywords comes:
//         1) extends
//             This keyword uses for creating child class of parent class.
//         2) super() method
//             This method uses in child class constructor function
//             Used for calling constructor function of parent class.

//             example : 
//                 class animal {
//                     constructor(legs){
//                         this.legs = legs;
//                     }
//                 }
//                 class dog extends animal {
//                     constructor(legs, age){
//                         super(legs);
//                         this.age = age;
//                     }
//                 }

//                 ===============================================================================