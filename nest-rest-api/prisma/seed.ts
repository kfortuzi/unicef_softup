import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');
  const result = await prisma.user.createMany({ 
    data: [
      {
        first_name: 'softup',
        last_name: 'softup',
        email: 'admin@softup.co',
        username: 'SoftupX',
        verificationCode: uuidv4(),
        confirmed_at: new Date(),
        password: 'softup1234',
      },
      {
        first_name: 'john',
        last_name: 'doe',
        email: 'john.doe@example.co',
        username: 'JonDoe',
        verificationCode: uuidv4(),
        confirmed_at: new Date(),
        password: '123456789',
      },
    ],
    skipDuplicates: true });
    console.log('Finished Seeding, result: ', result);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
