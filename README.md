# cute-string-util

Frequently used string regular expressions and utilities.

![cat-writer](./images/cat-writer.png)

_`image-from: https://openclipart.org/detail/220229/writing-cat`_


## Get start

```sh
npm i cute-string-util
```

```ts
import CuteString from 'cute-string-util'
console.log( CuteString.onlyNumbers('1hello2world3!') )
// 123
```


## Regular Expressions

- email

  ``/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,30}$/``

  ```ts
  console.log( CuteString.regex.email.test("dev@balsa.to") );
  // true
  ```

- username

  ``/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9-_]{4,29}/``

  ```ts
  console.log( CuteString.regex.username.test("dev-balsa-to") );
  // true
  ```

- filename

  ``/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9-_]{4,29}/``

  ```ts
  console.log( CuteString.regex.filename.test(".npmignore") );
  // true
  ```

- password

  ``/((?!\t\n\r).)[a-zA-Z0-9 .,/<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]{7,}/,``

  ```ts
  console.log( CuteString.regex.password.test("pass-word!")  );
  // true
  ```

- strongPassword

  ``/(?=.*[A-Z])(?=.*[.,/<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-])(?=.*[0-9])(?=.*[0-9])(?=.*[a-z])((?!\t\n\r).)[a-zA-Z0-9 .,/<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]{7,}/``

  ```ts
  console.log( CuteString.regex.strongPassword.test("pass-word!")  );
  // false

  console.log( CuteString.regex.strongPassword.test("Pas5-w0rD!")  );
  // true
  ```

- numeric

  ``/^[-]{0,1}[\d]*[.]{0,1}[\d]+$/``

  ```ts
  console.log( CuteString.regex.numeric.test("-232.1111") );
  // true
  ```

- alphabet

  ``/^[a-zA-Z]+$/``

  ```ts
  console.log( CuteString.regex.alphabet.test("abcd") );
  // true
  ```

- number

  ``/^[0-9]+$/``

  ```ts
  console.log( CuteString.regex.number.test("123456789") );
  // true
  ```

## Functions

- `isVaildEmail(email: string): boolean`

  ```ts
  let email = "dev@balsa.to";
  console.log( CuteString.isVaildEmail(email) );

  // true
  ```

- `isVaildUsername(username: string): boolean`

  ```ts
  let username = "dev-balsa-to";
  console.log( CuteString.isVaildUsername(username) );

  // true
  ```

- `isVaildFilename(filename: string): boolean`

  ```ts
  let filename = ".gitignore";
  console.log( CuteString.isVaildFilename(filename) )

  // true
  ```

- `isVaildPassword(password: string, useStrong: boolean = false): boolean`

  ```ts
  CuteString.isVaildPassword("passwd")  // false
  CuteString.isVaildPassword("password") // true
  CuteString.isVaildPassword("password", true) // false
  CuteString.isVaildPassword("Pa55-w0rd!?", true) // true
  ```

- `camelToSnake(src: string): string`

  ```ts
  console.log( CuteString.camelToSnake("camelInNeedleEar") )
  // camel_in_needle_ear
  ```

- `snakeToCamel(src: string): string`

  ```ts
  console.log( CuteString.snakeToCamel("camel_in_needle_ear") )
  // camelInNeedleEar
  ```

- `numberFormat(src: string | number): string`

  ```ts
  console.log( CuteString.numberFormat(150000) )
  // 150,000
  ```

- `onlyNumbers(src: any): string`

  ```ts
  console.log( CuteString.onlyNumbers("1a2b3c4d5e6f7g8") )
  // 12345678
  ```

- `onlyAlphabets(src: string): string`

  ```ts
  console.log( CuteString.onlyAlphabets("1a2b3c4d5e6f7g8") )
  // abcdefg
  ```

- `lpad(src: any, length: number, pad: number | bigint | string = " "): string`

  ```ts
  console.log( CuteString.lpad(120, 5, "0") )
  // 00120
  ```

- `rpad(src: any, length: number, pad: number | bigint | string = " "): string`

  ```ts
  console.log( CuteString.rpad("pad", 5, "-") )
  // pad--
  ```

- `pad(direction: "left" | "right" | "l" | "r", src: number | bigint | string, length: number, pad: number | bigint | string = " "): string`

  ```ts
  console.log( CuteString.pad("left", 120, 5, "0") ); // 00120
  console.log( CuteString.pad("right", "pad", 5, "-") ); // pad--
  ```

- `valueOf(src: any): string`

  ```ts
  console.log( CuteString.valueOf(120) ); // "120"
  ```

- `toNumber(src: any, removeNotNumberExpression: boolean = true): number`

  ```ts
  console.log( CuteString.toNumber("120,000") ); // 120000
  console.log( CuteString.toNumber("-120,000abc") ); // -120000
  console.log( CuteString.toNumber("-120,000", false) ); // 0
  ```

- `removeSpace(src: any): string`

  ```ts
  console.log( CuteString.removeSpace("a b c d e f ") ); // abcdef
  console.log( CuteString.removeSpace("a\tb\sc\rd\ne\r\nf") ); // abcdef
  ```

- `isEmpty(src: any): boolean`

  ```ts
  console.log( CuteString.isEmpty(" ") ); // false
  console.log( CuteString.isEmpty("") ); // true
  console.log( CuteString.isEmpty(null) ); // true
  console.log( CuteString.isEmpty(undefined) ); // true
  ```

- `isBlank(src: any): boolean`

  ```ts
  console.log( CuteString.isBlank(" ") ); // true
  console.log( CuteString.isBlank("\t\s\r\n") ); // true
  console.log( CuteString.isBlank("a") ); // false
  ```