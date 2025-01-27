const user1 = { name: "Petr", age: 8 };
const user2 = { name: "Petros", age: 11 };

function agetest(user1: any, user2: any) {
  if (user1.age == user2.age) {
    return null;
  }
  if (user1.age > user2.age) {
    return user1;
  } else {
    return user2;
  }
}

console.log(agetest(user1, user2));

