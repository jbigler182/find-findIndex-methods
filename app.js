// /* 
// Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];

// findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
// findUserByUsername(users, 'taco') // undefined
// */

// // const users = [
// //     {username: 'mlewis'},
// //     {username: 'akagen'},
// //     {username: 'msmith'}
// //   ];


function findUserByUsername(usersArray, username) {
    return usersArray.find(function(user){
      return user.username === username;
    })
  }


// /*
// Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

// const users = [
//   {username: 'mlewis'},
//   {username: 'akagen'},
//   {username: 'msmith'}
// ];

// removeUser(users, 'akagen') // {username: 'akagen'}
// removeUser(users, 'akagen') // undefined
// */
// // const users = [
// //     {username: 'mlewis'},
// //     {username: 'akagen'},
// //     {username: 'msmith'}
// //   ];

function removeUser(usersArray, username) { //Declare a function. Allow it two arguments/parameters. An array and username(key)
    let foundIndex = usersArray.findIndex(function(user){ //declare variable. Name it foundIndex. use findIndex, call back function, to pull username out of object
        return user.username === username;
    })
    if(foundIndex === -1) return; //if the index isn't located return undefined
    return usersArray.splice(foundIndex, 1) //if user name is found, splice it out.
    [0];
}





