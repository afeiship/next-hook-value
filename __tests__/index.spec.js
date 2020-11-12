(function () {
  const nx = require('@feizheng/next-js-core2');
  const NxSwitchValue = require('../src/next-switch-value');

  describe('NxSwitchValue.methods', function () {
    test('init normal case', function () {
      const hookValue = new NxSwitchValue({
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

    test('You have * your hooks', () => {
      const hookValue = new NxSwitchValue(
        {
          circle: 'circle me',
          rect: 'rect me',
          '*': 'star value'
        },
        { default: 'default value' }
      );

      expect(hookValue.get('circle')).toBe('circle me');
      expect(hookValue.get('rect')).toBe('rect me');
      expect(hookValue.get('*')).toBe('star value');
      expect(hookValue.get('other')).toBe('default value');
    });

    test('separator', () => {
      const hookValue = new NxSwitchValue({
        'circle|rect|use|path': 'svg',
        'div|span|ul|li': 'html',
        '*': 'canvas'
      });

      expect(hookValue.gets()).toEqual({
        '*': 'canvas',
        '__$@$__': 'canvas',
        circle: 'svg',
        rect: 'svg',
        use: 'svg',
        path: 'svg',
        div: 'html',
        span: 'html',
        ul: 'html',
        li: 'html'
      });
    });
  });
})();
