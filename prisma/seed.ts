// programmatically add mock data into the db
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const plants = [
    { name: 'Aloe Vera', price: 20.00, stock: 4 },
    { name: 'Monstera Deliciosa', price: 12.00, stock: 7 },
    { name: 'Peace Lily', price: 15.00, stock: 3 },
    { name: 'Snake Plant', price: 12.00, stock: 12 },

    { name: 'Fiddle Leaf Fig', price: 30.00, stock: 6 },
    { name: 'ZZ Plant', price: 20.00, stock: 6 },
    { name: 'Spider Plant', price: 10.00, stock: 9 },
    { name: 'Pothos', price: 16.00, stock: 14 },

    { name: 'Boston Fern', price: 25.00, stock: 5 },
    { name: 'Rubber Plant', price: 12.00, stock: 8 },
    { name: 'Jade Plant', price: 22.00, stock: 10 },
    { name: 'Orchid', price: 30.00, stock: 7 },
]
async function main() {
    
    for( let plant of plants ){
        await db.product.create({
            data: {
                name: plant.name,
                price: plant.price,
                stock: plant.stock
            }
        })
    }

    const dbPlants = await db.product.findMany();
    
  console.log({ dbPlants });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });