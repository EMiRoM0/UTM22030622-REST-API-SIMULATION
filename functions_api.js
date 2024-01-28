let users = [];

function formatResponse(code, body, msg) {
    return { code, body, msg };
}

function getUser(firstname) {
    const user = users.find((user) => user.firstname === firstname);
    return user ? formatResponse(200, user, 'The user whas been found') : formatResponse(404, null, 'This user doesnt exist');
}

function getUsers() {
    return formatResponse(200, users, 'These are all the users!');
}

function addUser(user) {
    users.push(user);
    return formatResponse(201, user, 'The user has been added successfully');
}

function removeUserByIndex(index) {
    if (index >= 0 && index < users.length) {
        const deletedUser = users.splice(index, 1)[0];
        return formatResponse(200, deletedUser, 'The user has been removed successfully');
    } else {
        return formatResponse(404, null, 'No users in this index');
    }
}

function removeLastUser() {
    if (users.length > 0) {
        const deletedUser = users.pop();
        return formatResponse(200, deletedUser, 'The last user has been removed successfully');
    } else {
        return formatResponse(404, null, 'Theres no users to remove');
    }
}

function removeFirstUser() {
    if (users.length > 0) {
        const deletedUser = users.shift();
        return formatResponse(200, deletedUser, 'First user has been removed successfully');
    } else {
        return formatResponse(404, null, 'No users to remove');
    }
}

function updateUserByIndex(index, newUser) {
    if (index >= 0 && index < users.length) {
        users[index] = newUser;
        return formatResponse(200, newUser, 'User updated successfully');
    } else {
        return formatResponse(404, null, 'None user were found in this index');
    }
}

function getUsersSize() {
    return formatResponse(200, users.length, 'Users in the array');
}

module.exports = {
    getUser,
    getUsers,
    addUser,
    removeUserByIndex,
    removeLastUser,
    removeFirstUser,
    updateUserByIndex,
    getUsersSize,
    formatResponse,
};
