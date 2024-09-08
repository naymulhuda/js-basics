const address ='chitagong';
// const part = address.slice(2,7);
const part = address.slice(2,5);
// console.log(part);

const sentence = 'I am good and hard working person.';
// console.log(sentence.split(''));
// console.log(sentence.split(' '))
// console.log(sentence.split('o'))

const friendsStr = 'abir, rohim, kabir, mahir, arif, sahir, lookman';
const friends = friendsStr.split(',');
console.log(friends);

const realFriends = ['abir', 'rohim', 'kabir', 'mahir', 'arif', 'sahir', 'lookman' ]
console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));
