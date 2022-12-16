/*
  Warnings:

  - You are about to alter the column `date` on the `Game` table. The data in that column could be lost. The data in that column will be cast from `String` to `DateTime`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL,
    "firstTeamCountryCode" TEXT NOT NULL,
    "SecondTeamCountryCode" TEXT NOT NULL
);
INSERT INTO "new_Game" ("SecondTeamCountryCode", "date", "firstTeamCountryCode", "id") SELECT "SecondTeamCountryCode", "date", "firstTeamCountryCode", "id" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
