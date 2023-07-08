// programmatically add mock data into the db
import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

const plants = [
    { name: 'Aloe Vera', price: 20.00, stock: 4, url: '/products/aloe_vera.jpeg' },
    { name: 'Monstera Deliciosa', price: 12.00, stock: 7, url: '/products/monstera_deliciosa.jpeg' },
    { name: 'Peace Lily', price: 15.00, stock: 3, url: '/products/peace_lily.jpeg' },
    { name: 'Snake Plant', price: 12.00, stock: 12, url: '/products/snake_plant.jpeg' },

    { name: 'Fiddle Leaf Fig', price: 30.00, stock: 6, url: '/products/fiddle_leaf_fig.jpeg' },
    { name: 'ZZ Plant', price: 20.00, stock: 6, url: '/products/zz_plant.jpeg' },
    { name: 'Spider Plant', price: 10.00, stock: 9, url: '/products/spider_plant.jpeg' },
    { name: 'Pothos', price: 16.00, stock: 14, url: '/products/pothos.jpeg' },

    { name: 'Boston Fern', price: 25.00, stock: 5, url: '/products/boston_fern.jpeg' },
    { name: 'Rubber Plant', price: 12.00, stock: 8, url: '/products/rubber_plant.jpeg' },
    { name: 'Jade Plant', price: 22.00, stock: 10, url: '/products/jade_plant.jpeg' },
    { name: 'Orchid', price: 30.00, stock: 7, url: '/products/orchid.jpeg' },
]
async function main() {
    await db.product.deleteMany()
    for( let plant of plants ){
        await db.product.create({
            data: {
                name: plant.name,
                price: plant.price,
                stock: plant.stock,
                url: plant.url,
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