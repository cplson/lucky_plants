/*
  Warnings:

  - You are about to drop the column `quantity_0` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_1` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_10` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_11` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_2` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_3` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_4` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_5` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_6` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_7` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_8` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_9` on the `Cart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "quantity_0",
DROP COLUMN "quantity_1",
DROP COLUMN "quantity_10",
DROP COLUMN "quantity_11",
DROP COLUMN "quantity_2",
DROP COLUMN "quantity_3",
DROP COLUMN "quantity_4",
DROP COLUMN "quantity_5",
DROP COLUMN "quantity_6",
DROP COLUMN "quantity_7",
DROP COLUMN "quantity_8",
DROP COLUMN "quantity_9";

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "productId" INTEGER,
    "cartId" TEXT NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_name_fkey" FOREIGN KEY ("name") REFERENCES "Product"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
