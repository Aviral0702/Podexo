import { PrismaClient } from "@prisma/client";
import { log } from "console";
//This lets us store the Prisma Client instance in global without TypeScript complaining about the prisma property not being defined on global.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// globalForPrisma.prisma || new PrismaClient(...): This checks if there’s already an instance of PrismaClient stored in globalForPrisma.prisma. If yes, it uses that instance; if not, it creates a new PrismaClient.
export const prisma = globalForPrisma.prisma || new PrismaClient({log: ['query','error']});

if(process.env.NODE_ENV !== 'production'){
  globalForPrisma.prisma = prisma;
}

export default prisma;