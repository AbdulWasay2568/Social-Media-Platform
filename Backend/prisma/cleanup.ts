import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Delete all data from dependent tables first
  await prisma.post.deleteMany({});
  await prisma.comment.deleteMany({});
  await prisma.like.deleteMany({});

  // Delete all data from main tables first

  await prisma.user.deleteMany({});

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
