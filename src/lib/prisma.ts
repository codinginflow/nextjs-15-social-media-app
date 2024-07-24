import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
<<<<<<< Updated upstream
  return new PrismaClient();
};

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
=======
    return new PrismaClient();
};

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
>>>>>>> Stashed changes
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

<<<<<<< Updated upstream
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
=======
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
>>>>>>> Stashed changes
