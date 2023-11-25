# このリポジトリについて

このリポジトリは[NestJS](https://docs.nestjs.com/)が提供する PassportStrategy 関数において、[passport-jwt](https://www.passportjs.org/packages/passport-jwt/)提供の JwtStrategy を引数に設定したものをさらにラップしたモジュールです。
PassportStrategy 関数の説明とこのリポジトリ内のコードにまつわる部分は[こちらのブログ](https://zenn.dev/maronn/articles/strategies-in-nestjs)に記載しています。

# インストール方法

以下のコマンドでインストールします。
`npm install customized-jwt-strategy`

使い方は以下の通りです。

```tsx
import { Injectable } from "@nestjs/common";
import { AuthorizationHeaderStrategyWithKey } from "customized-jwt-strategy";

@Injectable()
export class JwtStrategy extends AuthorizationHeaderStrategyWithKey.strategy({
  secretOrKey: "string 型 or Buffer 型の検証ようの鍵",
}) {
  constructor() {
    super();
  }
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
```
