/*
  Warnings:

  - A unique constraint covering the columns `[postID,userID]` on the table `Like` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Like_postID_userID_key" ON "Like"("postID", "userID");
