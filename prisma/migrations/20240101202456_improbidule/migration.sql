-- CreateTable
CREATE TABLE "shows" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "places" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "shows_pkey" PRIMARY KEY ("id")
);
