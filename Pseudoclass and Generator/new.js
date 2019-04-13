// new method of defining classes.
// class kinase {
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     eatkabab(){
//         console.log(this.age);
        
//     }   
// }
// let y = new kinase ('khubi',13);
// console.log(y);
// y.eatkabab();
//-------------------------Abstraction&Inheritance------------//

// class thing {
//     constructor(size,mass){
//     this.size=size;
//     this.mass=mass;
//     //this.getMass();
//     //this.getSize(); // number 2 tareeqa of calling the method
//     }
//     getMass(){
//         console.log(this.mass);  //creating method
        
//     } 
//     getSize(){
//        return () => {
//         console.log(this.size);
//            return()=>{
//             console.log('chicken');
//                return function () {
//                    console.log(this);
//                     }.bind({
//                         paratha:'aalo',
//                         kebab:'laraha hn'
//                     })
               
                       
                                      
//                } 
//            }
//        }        
//     }

// let u= new thing ('900inch','44kg'); 
// let g = u.getSize()()()();  //changing this.
//u.getMass();
//u.getSize();             //one tareeqa of using it another in constructor

//-------------------------closure------------------//

function chicken(tamatar,kebab) {
    return function keema(){
        console.log(`${tamatar} ka saalan ${kebab}`);
        
    }
}
let zarb = chicken('chicken','hai')()