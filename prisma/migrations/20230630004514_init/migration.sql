-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "shopperId" TEXT NOT NULL,
    "quantity_0" INTEGER NOT NULL,
    "quantity_1" INTEGER NOT NULL,
    "quantity_2" INTEGER NOT NULL,
    "quantity_3" INTEGER NOT NULL,
    "quantity_4" INTEGER NOT NULL,
    "quantity_5" INTEGER NOT NULL,
    "quantity_6" INTEGER NOT NULL,
    "quantity_7" INTEGER NOT NULL,
    "quantity_8" INTEGER NOT NULL,
    "quantity_9" INTEGER NOT NULL,
    "quantity_10" INTEGER NOT NULL,
    "quantity_11" INTEGER NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_shopperId_fkey" FOREIGN KEY ("shopperId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
