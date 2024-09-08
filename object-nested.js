const college = {
    name: 'VNC',
    class:['ten', 'one', 'two', 'three'],
    events: ['science fair', 'bijoy dios', 'book fair'],
    speciality: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}


console.log(college.name)
console.log(college.speciality)
// to get the 1st object item of the main object
console.log(college.speciality.color) 
console.log(college)
// to get 3rd object 2nd object item of the main object
console.log(college.speciality.result);

// change the the second object value of merit
college.speciality.result.merit = 'top notch top most';
console.log(college.speciality.result.merit)
//second way
console.log(college['speciality'].result.merit)

console.log(college.events);

//change the value of events
college.events[1] = '16 December';
console.log(college.events[1]);

console.log(college)
// to delete any property - use delete
delete college.class;
console.log(college)










