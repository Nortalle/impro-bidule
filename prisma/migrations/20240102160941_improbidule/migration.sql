-- AlterTable
ALTER TABLE "shows" ADD COLUMN     "reserved" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "price" SET DEFAULT 0;
