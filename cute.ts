const CuteString =
{
   regex: {
      // TLDs, ccTLDs, handshake(HNS)
      email: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{1,30}$/,

      // Start with [a-zA-Z0-9], allow [a-zA-Z0-9-_] 4 more or digits )
      username: /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9-_]{4,29}/,

      // linux filename rules
      filename: /^[^<>:;,?"*|/]+$/,

      // over 7 digits
      password: /((?!\t\n\r).)[a-zA-Z0-9 .,/<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]{7,}/,

      // over 8 digits, must contain lower case, upper case, special character, number
      strongPassword: /(?=.*[A-Z])(?=.*[.,/<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-])(?=.*[0-9])(?=.*[0-9])(?=.*[a-z])((?!\t\n\r).)[a-zA-Z0-9 .,/<>?;:"'`!@#$%^&*()\[\]{}_+=|\\-]{7,}/,

      // Number format [-] [0-9] [.] [0-9]
      numeric: /^[-]{0,1}[\d]*[.]{0,1}[\d]+$/,

      // only alphabets
      alphabet: /^[a-zA-Z]+$/,

      // only numbers
      number: /^[0-9]+$/
   },

   isVaildEmail(email: string): boolean
   {
      return CuteString.regex.email.test(email);
   },

   isVaildUsername(username: string): boolean
   {
      return CuteString.regex.username.test(username);
   },

   isVaildFilename(filename: string): boolean
   {
      return CuteString.regex.filename.test(filename);
   },

   isVaildPassword(password: string, useStrong: boolean = false): boolean
   {
      if (useStrong)
      {
         return CuteString.regex.strongPassword.test(password);
      }

      return CuteString.regex.password.test(password);
   },

   camelToSnake(src: string): string
   {
      return src.replace(/[a-z]{1}[A-Z]/g, o => `${ o.charAt(0).toLowerCase() }_${ o.charAt(1).toLowerCase() }`);
   },

   snakeToCamel(src: string): string
   {
      return src.replace(/[a-zA-Z]{1}[_]{1}[a-zA-Z]{1}/g, o => `${ o.charAt(0).toLowerCase() }${ o.charAt(2).toUpperCase() }`);
   },

   numberFormat(src: string | number): string
   {
      return CuteString.valueOf(src).replace(/(\d)(?=(\d{3})+\.)/g, o => `${ o },`);
   },

   onlyNumbers(src: any): string
   {
      return CuteString.valueOf(src).replace(/[^\d]/g, "");
   },

   onlyAlphabets(src: string): string
   {
      return src.replace(/[^a-zA-Z]/g, "");
   },

   lpad(src: any, length: number, pad: number | bigint | string = " "): string { return CuteString.pad("left", src, length, pad); },

   rpad(src: any, length: number, pad: number | bigint | string = " "): string { return CuteString.pad("right", src, length, pad); },

   pad(direction: "left" | "right" | "l" | "r", src: number | bigint | string, length: number, pad: number | bigint | string = " "): string
   {
      src = CuteString.valueOf(src).trim();

      while (src.length < length)
      {
         if (direction == "left" || direction == "l")
         {
            src = (pad + src).length > length ? (pad + src).substring(0, length) : pad + src;
         }
         else if (direction == "right" || direction == "r")
         {
            src = (src + pad).length > length ? (src + pad).substring(0, length) : src + pad;
         }
      }

      return src;
   },

   valueOf(src: any): string
   {
      switch (typeof src)
      {
         case "boolean":
            return src ? "true" : "false";

         case "bigint":
         case "number":
            return String(src);

         case "symbol":
            return src.toString();

         case "function":
            return src.name;

         case "string":
            return src;

         case "object":
            return "";

         default:
         case "undefined":
            return '';
      }
   },

   toNumber(src: any, removeNotNumberExpression: boolean = true): number
   {
      let numeric = /[-]{0,1}[\d]*[.]{0,1}[\d]+/;

      if (removeNotNumberExpression)
      {
         src = src.replace(/[^\d-.]/g, "");
      }

      let res = numeric.exec(src);

      if (res === null || res.length === 0)
      {
         return 0;
      }
      else
      {
         let n = Number(res[ 0 ]);
         return isNaN(n) ? 0 : n;
      }
   },

   removeSpace(src: any): string
   {
      return CuteString.valueOf(src).replace(/(\s*)/g, "");
   },

   isEmpty(src: any): boolean
   {
      if (typeof src === 'undefined' || src === null)
      {
         return true;
      }

      return CuteString.valueOf(src).length == 0 ? true : false;
   },

   isBlank(src: any): boolean
   {
      if (typeof src === 'undefined' || src === null)
      {
         return true;
      }

      return CuteString.removeSpace(CuteString.valueOf(src)).length == 0 ? true : false;
   },

   wildcardMatch(pattern: string, src: string): boolean
   {
      const reg = (src: string) => src.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");

      return new RegExp("^" + pattern.split("*").map(reg).join(".*") + "$").test(src);
   }
};

export { CuteString as default };