/*
  Warnings:

  - Added the required column `home_page` to the `posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "home_page" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL;
