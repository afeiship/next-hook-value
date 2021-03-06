/*!
 * name: @jswork/next-switch-value
 * description: Get value for switch/case condition or default.
 * homepage: https://github.com/afeiship/next-switch-value
 * version: 1.0.0
 * date: 2020-11-19 08:30:23
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var PRIVATE_DEFAULT = '__$@$__';
  var DEFAULT_OPTIONS = {
    default: '*',
    separator: '|',
    debug: false
  };

  var NxSwitchValue = nx.declare('nx.SwitchValue', {
    methods: {
      init: function (inHooks, inOptions) {
        var defHooks = {};
        this.options = nx.mix(null, DEFAULT_OPTIONS, inOptions);

        defHooks[PRIVATE_DEFAULT] = inHooks[this.options.default];
        this.hooks = this.process(nx.mix(null, inHooks, defHooks));
      },
      get: function (inValue) {
        var value = this.hooks[inValue];
        return typeof value === 'undefined' ? this.hooks[PRIVATE_DEFAULT] : value;
      },
      gets: function () {
        return this.hooks;
      },
      process: function (inHooks) {
        var sap = this.options.separator;
        var clean = !this.options.debug;
        nx.forIn(inHooks, function (key, value) {
          if (key.indexOf(sap) > -1) {
            var keys = key.split(sap);
            keys.forEach(function (newKey) {
              var _key = newKey.trim();
              inHooks[_key] = value;
            });
            clean && delete inHooks[key];
          }
        });
        return inHooks;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxSwitchValue;
  }
})();
