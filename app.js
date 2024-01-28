const {
    getUser,
    getUsers,
    addUser,
    removeUserByIndex,
    removeLastUser,
    removeFirstUser,
    updateUserByIndex,
    getUsersSize,
    formatResponse,
} = require('./functions_api');

//Here we will add 6 classmates
const usersToAdd = [
    { firstname: 'Jacob', lastname: 'Escareño' },
    { firstname: 'Eduardo', lastname: 'Corpus' },
    { firstname: 'Sofia', lastname: 'Campos' },
    { firstname: 'Carlos', lastname: 'Galindo' },
    { firstname: 'Montse', lastname: 'Ramirez' },
    { firstname: 'Xochitl', lastname: 'Gonzalez' },
];

for (const userData of usersToAdd) {
    const addUserResponse = addUser(userData);
    console.log(formatResponse(addUserResponse.code, addUserResponse.body, addUserResponse.msg));
}

// We obtain a user
const usernameToRetrieve = 'Corpus';
const retrievedUserResponse = getUser(usernameToRetrieve);
console.log(formatResponse(retrievedUserResponse.code, retrievedUserResponse.body, retrievedUserResponse.msg));

// Then we remove a user
const removeUserIndex = 3; // Carlos will be deleted, because he's on the 3rd index
const removeUserByIndexResponse = removeUserByIndex(removeUserIndex);
console.log(formatResponse(removeUserByIndexResponse.code, removeUserByIndexResponse.body, removeUserByIndexResponse.msg));

// Then the last user which will be Xochitl
const removeLastUserResponse = removeLastUser();
console.log(formatResponse(removeLastUserResponse.code, removeLastUserResponse.body, removeLastUserResponse.msg));

// We delete the first index who is Jacob
const removeFirstUserResponse = removeFirstUser();
console.log(formatResponse(removeFirstUserResponse.code, removeFirstUserResponse.body, removeFirstUserResponse.msg));

// Here we update the info of a index
const updateUserIndex = 2;
const updatedUserData = { firstname: 'Erasmo', lastname: 'Díaz' };
const updateUserByIndexResponse = updateUserByIndex(updateUserIndex, updatedUserData);
console.log(formatResponse(updateUserByIndexResponse.code, updateUserByIndexResponse.body, updateUserByIndexResponse.msg));

// This will show the array with all the users on it.
const allUsersResponse = getUsers();
console.log(formatResponse(allUsersResponse.code, allUsersResponse.body, allUsersResponse.msg));

// This will show the number of users which are in the array.
const usersSizeResponse = getUsersSize();
console.log(formatResponse(usersSizeResponse.code, usersSizeResponse.body, usersSizeResponse.msg));
