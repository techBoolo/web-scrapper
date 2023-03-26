/*
  Warnings:

  - You are about to drop the column `dateScrapped` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `postDate` on the `posts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "dateScrapped",
DROP COLUMN "postDate",
ADD COLUMN     "date_scrapped" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "post_date" TIMESTAMP(3);
