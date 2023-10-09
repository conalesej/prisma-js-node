// import { PrismaClient } from "@prisma/client/edge";
// const prisma = new PrismaClient({
//   datasources: {
//     db: {
//       url: "prisma://root:admin1234@localhost:3306/prismadb",
//     },
//   },
// }); 

import { PrismaClient } from '@prisma/client/edge'
const prisma = new PrismaClient()

const main = async () => {
  // ..write your Prisma Client queries ehre

  const _newUser = { name: "Ej" };

  const user = await prisma.user.create({ data: { ..._newUser } });

  console.log({ user });
};

main()
  .catch((e) => console.log("Error", e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
