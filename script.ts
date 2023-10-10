import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // ..write your Prisma Client queries ehre

  const _newUser = { name: "Mariel" };

  // const user = await prisma.user.create({ data: { ..._newUser } });

  const users = await prisma.user.findMany();

  console.log( users );
};

main()
  .catch((e) => console.log("Error", e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
