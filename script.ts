import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

const main = async () => {
  // ..write your Prisma Client queries ehre
  // const _newUser = { name: "Mariel" };
  // const user = await prisma.user.create({ data: { ..._newUser } });
  // const users = await prisma.user.findMany();

  // await prisma.user.deleteMany();
  // const newUser = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Ej Conales",
  //       age: 24,
  //       email: "conalesej@gmail.com",
  //     },
  //     {
  //       name: "Elaine Mizpa",
  //       age: 29,
  //       email: "newEmail@gmail.com",
  //       // userPreference: {
  //       //   create: {
  //       //     emailUpdates: true,
  //       //   },
  //       // },
  //     },
  //   ],
  //   // select: {
  //   //   name: true,
  //   //   userPreference: {
  //   //     select: {
  //   //       emailUpdates: true,
  //   //     },
  //   //   },
  //   // },
  //   // include: {     / When including a child / foreign entity
  //   //   userPreference: true,
  //   // },
  // });

  // const preference = await prisma.userPreference.create({
  //   data: {
  //     emailUpdates: true,
  //   },
  // });
  // console.log({preference});
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Ej",
  //       age: 24,
  //       email: "conalesej@gmail.com",
  //     },
  //     {
  //       name: "Sally",
  //       age: 29,
  //       email: "Hello.com@gmail.com.ph",
  //       role: "BASIC",
  //     },
  //   ],
  // });

  // const user = await prisma.user.findMany({
  //   where: {
  //     // writtenPosts: {
  //     //   every: {
  //     //     title: "Test",
  //     //   },
  //     // },

  //     // userPreference: {     // one to one
  //     //   emailUpdates: true,
  //     // },

  //     // AND: [ // OR / NOT = negates all the shit
  //     //   {
  //     //     email: {
  //     //       endsWith: "@gmail.com",
  //     //     },
  //     //   },
  //     //   {
  //     //     age: {
  //     //       gte: 20,
  //     //     },
  //     //   },
  //     // ],

  //     // email: {
  //     //   // contains: "@gmail.com", // or endsWith / starts with
  //     //   // equals: "conalesej@gmail.com",
  //     //   // not: "conalesej@gmail.com",
  //     //   in: ["Ej", "Elaine"], // or //Not In
  //     // },
  //     // age: {
  //     //   lte: 20, // Less than or equal to 20
  //     // },
  //   },
  //   distinct: ["name", "age"], // Return all the user with an email that contains @gmail.com and with a unique name and age
  //   take: 2, // paginated get 2
  //   skip: 1, // skipp the first item
  //   orderBy: {
  //     age: "asc",
  //   },
  // });

  // const user = await prisma.user.update({
  //   data: {
  //     email: "testUpdate@gmail.com",
  //   },
  //   where: { email: "conalesej@gmail.com" },
  // });

  const user = await prisma.user.update({
    data: {
      userPreference: {
        connect: {
          id: "e8bf583d-4d7a-4701-a69e-9a7d6eabd34b",
        },
      },
    },
    where: { email: "conalesej@gmail.com" },
  });

  console.log(user);
};

main()
  .catch((e) => console.log("Error", e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
