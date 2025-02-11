'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useAccount = useAccount;
const StarknetProvider_1 = require('../context/StarknetProvider');
function useAccount() {
  const { account, isConnected } = (0, StarknetProvider_1.useStarknet)();
  return { account, isConnected };
}
//# sourceMappingURL=useAccount.js.map
