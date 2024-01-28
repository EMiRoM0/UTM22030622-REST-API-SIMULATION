let users = [];

const formatResponse = (code, body, msg) => ({ code, body, msg });

const getUser = (firstname) => {
    const user = users.find((user) => user.firstname === firstname);
    return user ? formatResponse(200, user, 'The user whas been found') : formatResponse(404, null, 'This user doesnt exist');
};

const getUsers = () => formatResponse(200, users, 'These are all the users!');

const addUser = (user) => {
    users.push(user);
    return formatResponse(201, user, 'The user has been added successfully');
};

const removeUserByIndex = (index) => {
    if (index >= 0 && index < users.length) {
        const deletedUser = users.splice(index, 1)[0];
        return formatResponse(200, deletedUser, 'The user has been removed successfully');
    } else {
        return formatResponse(404, null, 'No users in this index');
    }
};

const removeLastUser = () => {
    if (users.length > 0) {
        const deletedUser = users.pop();
        return formatResponse(200, deletedUser, 'The last user has been removed successfully');
    } else {
        return formatResponse(404, null, 'Theres no users to remove');
    }
};

const removeFirstUser = () => {
    if (users.length > 0) {
        const deletedUser = users.shift();
        return formatResponse(200, deletedUser, 'First user has been removed successfully');
    } else {
        return formatResponse(404, null, 'No users to remove');
    }
};

const updateUserByIndex = (index, newUser) => {
    if (index >= 0 && index < users.length) {
        users[index] = newUser;
        return formatResponse(200, newUser, 'User updated successfully');
    } else {
        return formatResponse(404, null, 'None user were found in this index');
    }
};

const getUsersSize = () => formatResponse(200, users.length, 'Users in the array');

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
