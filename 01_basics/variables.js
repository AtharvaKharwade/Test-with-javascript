const student_id = 3323
let student_email = "Atharva@gmail.com"
var student_password = "12345"
student_city = "Nagpur"

// student_id = 211// cannot change const
student_email = "dragon@gmail.com"
student_password = "drag123"
student_city = "Pune"
let student_state ;
console.log(student_id);

/* prefer not to use var 
beacuse of issue in block scope and functional scope
 */

console.table([student_id , student_email ,student_password ,student_city,student_state])