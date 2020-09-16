(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var PRIVATE_DEFAULT = '__$@$__';
  var PUBLIC_DEFAULT = '*';

  var NxHookValue = nx.declare('nx.HookValue', {
    methods: {
      init: function (inHooks, inDefault) {
        var defHooks = {};
        defHooks[PRIVATE_DEFAULT] = inDefault || inHooks[PUBLIC_DEFAULT];
        this.hooks = nx.mix(null, inHooks, defHooks);
      },
      get: function (inValue) {
        var value = this.hooks[inValue];
        return typeof value === 'undefined' ? this.hooks[PRIVATE_DEFAULT] : value;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxHookValue;
  }
})();
