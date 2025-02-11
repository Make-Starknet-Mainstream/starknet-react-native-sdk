'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __exportStar =
  (this && this.__exportStar) ||
  function (m, exports) {
    for (var p in m)
      if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p))
        __createBinding(exports, m, p);
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.publicProvider =
  exports.useStarkName =
  exports.useNetwork =
  exports.useContractWrite =
  exports.useContractRead =
  exports.useContract =
  exports.useBlockNumber =
  exports.useBlock =
  exports.useBalance =
  exports.useAccount =
  exports.StarknetProvider =
    void 0;
// Export our provider
var StarknetProvider_1 = require('./context/StarknetProvider');
Object.defineProperty(exports, 'StarknetProvider', {
  enumerable: true,
  get: function () {
    return StarknetProvider_1.StarknetProvider;
  },
});
// Re-export core functionality from starknet-react
var core_1 = require('@starknet-react/core');
Object.defineProperty(exports, 'useAccount', {
  enumerable: true,
  get: function () {
    return core_1.useAccount;
  },
});
Object.defineProperty(exports, 'useBalance', {
  enumerable: true,
  get: function () {
    return core_1.useBalance;
  },
});
Object.defineProperty(exports, 'useBlock', {
  enumerable: true,
  get: function () {
    return core_1.useBlock;
  },
});
Object.defineProperty(exports, 'useBlockNumber', {
  enumerable: true,
  get: function () {
    return core_1.useBlockNumber;
  },
});
Object.defineProperty(exports, 'useContract', {
  enumerable: true,
  get: function () {
    return core_1.useContract;
  },
});
Object.defineProperty(exports, 'useContractRead', {
  enumerable: true,
  get: function () {
    return core_1.useContractRead;
  },
});
Object.defineProperty(exports, 'useContractWrite', {
  enumerable: true,
  get: function () {
    return core_1.useContractWrite;
  },
});
Object.defineProperty(exports, 'useNetwork', {
  enumerable: true,
  get: function () {
    return core_1.useNetwork;
  },
});
Object.defineProperty(exports, 'useStarkName', {
  enumerable: true,
  get: function () {
    return core_1.useStarkName;
  },
});
Object.defineProperty(exports, 'publicProvider', {
  enumerable: true,
  get: function () {
    return core_1.publicProvider;
  },
});
// Re-export chains
__exportStar(require('@starknet-react/chains'), exports);
//# sourceMappingURL=index.js.map
