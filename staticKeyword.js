/* 
static is a keyword properties or method
that belongs to a class itself than the objects created
from that class (class owns anything static, not objects)

*/
// class mathUtil{
//     static pi = 3.14159; //this can be accessed as mathUtil.pi

//     static getDiameter(radius){
//         return radius*2;
//     }
//     static getCircumference(radius){
//         return 2*mathUtil.pi*radius
//     }
// }
// console.log(mathUtil.pi);
// console.log(mathUtil.getDiameter(10));
// console.log(mathUtil.getCircumference(10));

class user {
    static usercount = 0;
    constructor(name){
        this.name = name;
        user.usercount++
    }
}

power1 = new user("Mohamed")
power2 = new user("harrun")

console.log(user.usercount)
