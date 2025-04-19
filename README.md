## 環境構築
-  Prisma のマイグレーション（テーブル作成）
```
npx prisma migrate dev --name init
```

- DBの内容を確認
```
npx prisma studio
```

- DBリセット
```
npx prisma migrate reset
```