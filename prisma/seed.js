const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function main() {
    
    // const user = await prisma.korisnik.create({
    //     data: {
    //         ime: 'Petar',
    //         prezime: 'Petrovic',
    //         username: 'petroni',
    //         email: 'petroni123@gmail.com',
    //         BrTelefona: '0691234567',
    //         password: "$2b$10$DF.LSDxAXvBPyMrCzJvJEusXfUAA3KpUZ.GbdWnilRCKoEOVOQhgC"

    //     }
    // })
    // console.log('User created: ', user);
    // const product = await prisma.proizvod.create({
    //   data:{
    //     ime: 'Auto 1',
    //     slika: 'hfjkdfhkdghk',
    //     kategorija: 'Kategorija A',
    //     cena: 250.50,
    //     model: 'Merdza',
    //     boja: 'Crna',
    //     description: 'Dobar, ubija od kvaliteta'
    //   }
    // });
    const product = await prisma.proizvod.create({
      data:{
        ime: 'Auto 2',
        slika: 'adhadj',
        kategorija: 'Kategorija A',
        cena: 500,
        model: 'BMW',
        boja: 'crvena',
        description: 'Odlican, ubija od brzine'
      }
    });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });