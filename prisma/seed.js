const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function main() {
    
    const user = await prisma.korisnik.create({
        data: {
            ime: 'Petar',
            prezime: 'Petrovic',
            username: 'petroni',
            email: 'petroni123@gmail.com',
            BrTelefona: '0691234567',
            password: "$2b$10$DF.LSDxAXvBPyMrCzJvJEusXfUAA3KpUZ.GbdWnilRCKoEOVOQhgC"

        }
    })
    console.log('User created: ', user);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });