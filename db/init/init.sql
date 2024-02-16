-- DB作成
CREATE DATABASE codeduel;
-- 作成したDBに接続
\c codeduel;

INSERT INTO "Os" VALUES(1, 'testOS', 'testPath')
INSERT INTO "Card" VALUES(1, 1, 'sample1', 100, 'ATTACK', 'hoge');
INSERT INTO "Card" VALUES(2, 1, 'sample2', 200, 'HEAL', 'fuga');
INSERT INTO "Card" VALUES(3, 1, 'sample3', 300, 'ABSORPTION', 'huge');