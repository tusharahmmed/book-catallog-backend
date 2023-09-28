-- CreateEnum
CREATE TYPE "ORDER_STATUS" AS ENUM ('pending', 'shipped', 'delivered');

-- CreateTable
CREATE TABLE "review_ratings" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "review_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "status" "ORDER_STATUS" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordered_books" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ordered_books_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "review_ratings" ADD CONSTRAINT "review_ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review_ratings" ADD CONSTRAINT "review_ratings_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordered_books" ADD CONSTRAINT "ordered_books_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordered_books" ADD CONSTRAINT "ordered_books_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
