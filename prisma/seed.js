const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

async function main() {
  // const proizvodi = [
  //   {
  //     ime: "BMW X5",
  //     slika: "https://example.com/images/bmw-x5.jpg",
  //     marka: "BMW",
  //     model: "X5",
  //     karoserija: "SUV",
  //     godiste: 2022,
  //     gorivo: "Dizel",
  //     kubikaza: 3000,
  //     snagaMotora: "286 KS",
  //     cena: 60000.0,
  //     spoljasnjaBoja: "Crna",
  //     unutrasnjaBoja: "Bež",
  //     brSedista: 5,
  //     brVrata: 5,
  //     zemljaUvoza: "Nemačka",
  //     description: "Luksuzan SUV sa vrhunskim performansama.",
      
  //   },
  //   {
  //     ime: "Audi A4",
  //     slika: "https://example.com/images/audi-a4.jpg",
  //     marka: "Audi",
  //     model: "A4",
  //     karoserija: "Limuzina",
  //     godiste: 2021,
  //     gorivo: "Benzin",
  //     kubikaza: 2000,
  //     snagaMotora: "190 KS",
  //     cena: 40000.0,
  //     spoljasnjaBoja: "Bela",
  //     unutrasnjaBoja: "Crna",
  //     brSedista: 5,
  //     brVrata: 4,
  //     zemljaUvoza: "Austrija",
  //     description: "Elegantna limuzina sa visokim nivoom udobnosti.",
      
  //   },
  //   {
  //     ime: "Volkswagen Golf",
  //     slika: "https://example.com/images/vw-golf.jpg",
  //     marka: "Volkswagen",
  //     model: "Golf",
  //     karoserija: "Hatchback",
  //     godiste: 2020,
  //     gorivo: "Dizel",
  //     kubikaza: 1600,
  //     snagaMotora: "115 KS",
  //     cena: 25000.0,
  //     spoljasnjaBoja: "Siva",
  //     unutrasnjaBoja: "Crna",
  //     brSedista: 5,
  //     brVrata: 5,
  //     zemljaUvoza: "Italija",
  //     description: "Praktičan i pouzdan automobil za svakodnevnu vožnju.",
     
  //   },
  // ];
  // await prisma.proizvod.createMany({
  //   data: proizvodi
  // });
  // await prisma.korpa.createMany({
  //   data: [
  //     {
  //       korisnik_id: '795fe79b-b0fe-4849-b093-aed12b7c377a',
  //       proizvod_id: '3befc5e4-84af-42e9-88b4-2ad15fc7bfb9',
  //       kolicina: 1
  //     },
  //     {
  //       korisnik_id: '795fe79b-b0fe-4849-b093-aed12b7c377a',
  //       proizvod_id: 'ca231363-d05e-45ff-8eb3-b13b39128353',
  //       kolicina: 2
  //     }
  //   ]
  // });
  await prisma.listaZelja.createMany({
      data: [
        {
          korisnik_id: '795fe79b-b0fe-4849-b093-aed12b7c377a',
          proizvod_id: '3befc5e4-84af-42e9-88b4-2ad15fc7bfb9',
        },
        {
          korisnik_id: '795fe79b-b0fe-4849-b093-aed12b7c377a',
          proizvod_id: 'ca231363-d05e-45ff-8eb3-b13b39128353',
        }
      ]
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