import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');
  const result = await prisma.users.createMany({
    data: [
      {
        firstName: 'softup',
        lastName: 'softup',
        email: 'admin@softup.co',
        verificationCode: uuidv4(),
        confirmedAt: new Date(),
        password: 'softup1234',
      },
      {
        firstName: 'john',
        lastName: 'doe',
        email: 'john.doe@example.co',
        verificationCode: uuidv4(),
        confirmedAt: new Date(),
        password: '123456789',
      },
    ],
    skipDuplicates: true,
  });
  console.log('Finished Seeding, result: ', result);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
