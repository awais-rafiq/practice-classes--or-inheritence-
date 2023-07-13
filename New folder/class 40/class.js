let p1 = {
    name: "Awais",
    age: "20", 
    profession: "Web developer",
    teaching: function () {
        console.log("Awais is very good  developer");
    }
}
let p2 = {
    name: "Awais",
    age: "20", 
    profession: "Web developer",
    teaching: function () {
        console.log("Awais is very good developer");
    }
}

// class person {
//     constructor(n, a){ 
//         // Initialized properties of class
//         this.nam = n;
//         this.age = a;
//     }

//     // Constructor function is just like other functions that automatically calls when object of this class is created.
//     // Why ?
//     //      this is for initializing the properties of class


//     a_g_e(nam){
//         console.log(`${nam} is ${this.age} years old.`)
//     }

//     static qualification = "undergraduate";
//     static  method(){
//         console.log(this.age);
//         console.log(this.nam);
//     }

// }



// let personObject1 = new person("Ahmad", "22");
// let personObject2 = new person("Hassan", "19");

// // personObject1.a_g_e("muneeb");
// // console.log(personObject2.age)

// person.method()