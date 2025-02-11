'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.useStarkName =
  exports.useNetwork =
  exports.useContractWrite =
  exports.useContractRead =
  exports.useContract =
  exports.useBlockNumber =
  exports.useBlock =
  exports.useBalance =
  exports.useAccount =
    void 0;
exports.StarknetProvider = StarknetProvider;
const chains_1 = require('@starknet-react/chains');
const core_1 = require('@starknet-react/core');
const react_1 = __importDefault(require('react'));
function StarknetProvider({ children, defaultAccount, autoConnect = false, ...rest }) {
  return (
    <core_1.StarknetConfig
      {...rest}
      autoConnect={autoConnect}
      chains={[chains_1.mainnet, chains_1.sepolia]}
      provider={(0, core_1.publicProvider)()}
    >
      {children}
    </core_1.StarknetConfig>
  );
}
// Re-export hooks from starknet-react
var core_2 = require('@starknet-react/core');
Object.defineProperty(exports, 'useAccount', {
  enumerable: true,
  get: function () {
    return core_2.useAccount;
  },
});
Object.defineProperty(exports, 'useBalance', {
  enumerable: true,
  get: function () {
    return core_2.useBalance;
  },
});
Object.defineProperty(exports, 'useBlock', {
  enumerable: true,
  get: function () {
    return core_2.useBlock;
  },
});
Object.defineProperty(exports, 'useBlockNumber', {
  enumerable: true,
  get: function () {
    return core_2.useBlockNumber;
  },
});
Object.defineProperty(exports, 'useContract', {
  enumerable: true,
  get: function () {
    return core_2.useContract;
  },
});
Object.defineProperty(exports, 'useContractRead', {
  enumerable: true,
  get: function () {
    return core_2.useContractRead;
  },
});
Object.defineProperty(exports, 'useContractWrite', {
  enumerable: true,
  get: function () {
    return core_2.useContractWrite;
  },
});
Object.defineProperty(exports, 'useNetwork', {
  enumerable: true,
  get: function () {
    return core_2.useNetwork;
  },
});
Object.defineProperty(exports, 'useStarkName', {
  enumerable: true,
  get: function () {
    return core_2.useStarkName;
  },
});
//# sourceMappingURL=StarknetProvider.js.map
