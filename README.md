# next-hook-value
> Get value for hooks or default.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-hook-value
```

## apis
| api | params | description            |
| --- | ------ | ---------------------- |
| get | -      | get the value in hooks |

## usage
```js
import NxHookValue from '@feizheng/next-hook-value';

const hookValue = new NxHookValue({
  2: '参数错误',
  3: '未知错误',
  '-1': '用户取消',
  '*': '服务端接口返回的错误',
  'circle|rect|use|path': 'svg',
  'div|span|ul|li': 'html',
});

hookValue.get('2') //参数错误
hookValue.get('3') //未知错误
hookValue.get('-1') //用户取消

hookValue.get(null) //服务端接口返回的错误
hookValue.get(100) //服务端接口返回的错误

hookValue.get('circle') // svg
hookValue.get('rect') // svg
hookValue.get('use') // svg
hookValue.get('path') // svg

hookValue.get('div') // html
hookValue.get('span') // html
hookValue.get('ul') // html
hookValue.get('li') // html
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-hook-value/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-hook-value
[version-url]: https://npmjs.org/package/@feizheng/next-hook-value

[license-image]: https://img.shields.io/npm/l/@feizheng/next-hook-value
[license-url]: https://github.com/afeiship/next-hook-value/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-hook-value
[size-url]: https://github.com/afeiship/next-hook-value/blob/master/dist/next-hook-value.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-hook-value
[download-url]: https://www.npmjs.com/package/@feizheng/next-hook-value
