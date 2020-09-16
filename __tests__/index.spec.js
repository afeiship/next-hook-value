(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxHookValue = require('../src/next-hook-value');

  describe('NxHookValue.methods', function () {
    test('init normal case', function () {
      var hookValue = new NxHookValue({
        2: '参数错误',
        3: '未知错误',
        '-1': '用户取消',
        '*': '服务端接口返回的错误'
      });

      expect(hookValue.get(2)).toBe('参数错误');
      expect(hookValue.get(3)).toBe('未知错误');
      expect(hookValue.get(-1)).toBe('用户取消');
      expect(hookValue.get(100)).toBe('服务端接口返回的错误');
      expect(hookValue.get(null)).toBe('服务端接口返回的错误');
    });

    test('You have * your hooks', ()=>{
      var hookValue = new NxHookValue({
        circle: 'circle me',
        rect: 'rect me',
        '*': 'star value'
      }, 'default value');

      expect(hookValue.get('circle')).toBe('circle me');
      expect(hookValue.get('rect')).toBe('rect me');
      expect(hookValue.get('*')).toBe('star value');
      expect(hookValue.get('other')).toBe('default value');
    })
  });
})();
