
const users = [
  { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
  { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
  { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
  { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

const addUser = (newUser) => {
  return users.push(newUser);
}

const removeUser = (id) => {
  return users.filter((user) => {
    return user.id !== id;
  })
}

const updateUser = (id, newUser) => {
  return users.map((user) => {
    return user.id === id ? {...newUser} : user;
  });
}

const count = () => {
  let countMale = 0, countAge = 0;
  users.forEach((user) => {
    if (user.gender === "male") countMale++;
    if (user.age >= 15) countAge++;
  });

  return [countMale, countAge];
}

// const result = count();

// console.log(`Số người là nam gioi là ${result[0]}`);
// console.log(`Số người trên 15 tuổi là ${result[1]}`);

const totalMoney = () => {
  return users.reduce((total, user) => {
    return (user.id % 2 === 0) ? total += user.money : total;
  }, 0);
}

console.log(totalMoney());

const richKid = () => {
  let max = users[0].money;
  users.forEach(user => {
    if (user.money > max) {
      max = user.money;
    }
  });
  users.forEach(user => {
    if (user.money === max) {
      console.log(user);
    } 
  });
}

const poorKid = () => {
  let min = users[0].money;
  users.forEach(user => {
    if (user.money < min) {
      min = user.money;
    }
  });
  users.forEach(user => {
    if (user.money === min) {
      console.log(user);
    } 
  });
}

const change = () => {
  return users.map((user) => {
    user.gender = "female";
    return user;
  })
}

console.log(change());


