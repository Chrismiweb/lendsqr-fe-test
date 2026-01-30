// import { faker } from "@faker-js/faker";
// import { writeFileSync } from "node:fs";
// import { join } from "node:path";

// const makeUser = (id: string) => {
//   const firstName = faker.person.firstName();
//   const lastName = faker.person.lastName();

//   return {
//     id,
//     orgName: faker.company.name(),
//     userName: faker.internet.username({ firstName, lastName }),
//     email: faker.internet.email({ firstName, lastName }),
//     phoneNumber: faker.phone.number(),
//     createdAt: faker.date.past({ years: 2 }).toISOString(),
//     status: faker.helpers.arrayElement(["Active", "Inactive", "Pending", "Blacklisted"]),
//     profile: {
//       firstName,
//       lastName,
//       avatar: faker.image.avatar(),
//       bvn: faker.string.numeric(11),
//       gender: faker.helpers.arrayElement(["Male", "Female"]),
//     },
//     account: {
//       accountNumber: faker.finance.accountNumber(),
//       bankName: faker.company.name(),
//       balance: faker.finance.amount({ min: 0, max: 5000000, dec: 2 }),
//     },
//   };
// };

// const users = Array.from({ length: 500 }, (_, i) => makeUser(String(i + 1)));

// const outPath = join(process.cwd(), "public", "users.json");
// writeFileSync(outPath, JSON.stringify({ users }, null, 2), "utf-8");

// console.log("Generated:", outPath);
