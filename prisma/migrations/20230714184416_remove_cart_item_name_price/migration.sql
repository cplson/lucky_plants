/*
  Warnings:

  - You are about to drop the column `name` on the `CartItem` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `CartItem` table. All the data in the column will be lost.
  - Made the column `productId` on table `CartItem` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "CartItem" DROP CONSTRAINT "CartItem_name_fkey";

-- AlterTable
ALTER TABLE "CartItem" DROP COLUMN "name",
DROP COLUMN "price",
ALTER COLUMN "productId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_id_fkey" FOREIGN KEY ("id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
