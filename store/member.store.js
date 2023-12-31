let userDB = [
  {
    member_id: 1, // integer
    email: "test1@gmail.com", // varghar(500)
    member_password: "1234", // varchar(100)
    name: "멤버1", // varchar(100)
    profile_img_path: "test1.png", // varchar(300)
    telephone: "010-1234-5678", // varchar(20)
    entry_type_code: "1", // TINYINT
    user_state_code: "1", // TINYINT
    birth_date: "990815", // varchar(6)
    reg_date: "2021-08-15 12:00:00", // datetime
    reg_member_id: "1", // integer
    edit_date: "2021-08-15 12:00:00", // datetime
    edit_member_id: "1", // integer
  },
  {
    member_id: 2, // integer
    email: "test2@gmail.com", // varghar(500)
    member_password: "1234", // varchar(100)
    name: "멤버2", // varchar(100)
    profile_img_path: "test2.png", // varchar(300)
    telephone: "010-1234-5678", // varchar(20)
    entry_type_code: "1", // TINYINT
    user_state_code: "1", // TINYINT
    birth_date: "990815", // varchar(6)
    reg_date: "2021-08-15 12:00:00", // datetime
    reg_member_id: "1", // integer
    edit_date: "2021-08-15 12:00:00", // datetime
    edit_member_id: "1", // integer
  },
];

function getUsers() {
  return userDB;
}

function getUserById(id) {
  return userDB.find((user) => user.id === id);
}

function getUserByUsername(username) {
  return userDB.find((user) => user.username === username);
}

function updateUser(user) {
  let index = userDB.findIndex((u) => u.id === user.id);
  userDB[index] = user;
  return userDB[index];
}

function addUser(user) {
  user.id = userDB[userDB.length - 1].id + 1;
  userDB.push(user);
  return user;
}

function deleteUser(id) {
  let index = userDB.findIndex((user) => user.id === id);
  userDB.splice(index, 1);
  return userDB;
}

module.exports = {
  getUsers,
  getUserById,
  getUserByUsername,
  updateUser,
  addUser,
  deleteUser,
};
