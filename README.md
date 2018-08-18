# JHA-4
Easy to use and simple javascript encryption algorithm. Demo: [here](https://kipkat.github.io/JHA-4/example.html).
# Usage / Installation
Script sources:
+ minified: https://raw.githubusercontent.com/kipkat/JHA-4/master/jha-4.min.js
+ obfuscated: https://raw.githubusercontent.com/kipkat/JHA-4/master/jha-4.obf.js
+ dev: https://raw.githubusercontent.com/kipkat/JHA-4/master/jha-4.js
```html
<script src='https://raw.githubusercontent.com/kipkat/JHA-4/master/jha-4.min.js'></script>
```
Example of simple usage:
```js
> singleEncrypt("password",25,'xyzXYZ01+-','salt3d')
"+0ZXzZYYXZyzZZ1XzYZ0Y+-yy+ZY0x0YXYY+1yy-+z0xz0-zxZ"
```
Example of OOP usage:
```js
> pwd = new Encryptor()
> pwd.encr("password_here",19,undefined,'admin')
> document.cookie = pwd.lastS + " -> " + pwd.lastR
"password_here;;19;;1236895470;;admin -> 43870810515169620057688038902268534899"
```
