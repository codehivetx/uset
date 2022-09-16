# @codehivetx/uset

[UnicodeSet](https://unicode-org.github.io/icu/userguide/strings/unicodeset.html), but in TypeScript.

## Examples

```js
import { USet } from '@codehivetx/uset';

const us = new USet('[abcdef]');
us.add('g');
us.toString(); // [abcdefg]
```

## TODO

Does not support:

- ranges
- strings `{}` in the input text
- union or interesection
- backslashes
- unicode properties
- many more!

## Further Reading

- <https://www.unicode.org/reports/tr35/#Unicode_Sets>
- <https://unicode-org.github.io/icu/userguide/strings/unicodeset.html>

## LICENSE

Apache-2.0, see [LICENSE](./LICENSE)

## Author

@srl295 / Steven R. Loomis  of <https://codehivetx.us>
