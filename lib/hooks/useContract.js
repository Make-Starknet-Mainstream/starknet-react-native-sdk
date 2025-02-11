'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.useContract = useContract;
const react_1 = require('react');
const starknet_1 = require('starknet');
const StarknetProvider_1 = require('../context/StarknetProvider');
function useContract(address, abi) {
  const { provider } = (0, StarknetProvider_1.useStarknet)();
  const [state, setState] = (0, react_1.useState)({
    contract: undefined,
    error: undefined,
    loading: true,
  });
  const initContract = (0, react_1.useCallback)(async () => {
    try {
      const contract = new starknet_1.Contract(abi, address, provider);
      setState({
        contract,
        loading: false,
      });
    } catch (error) {
      setState({
        contract: undefined,
        error: error instanceof Error ? error : new Error('Failed to init contract'),
        loading: false,
      });
    }
  }, [abi, address, provider]);
  (0, react_1.useEffect)(() => {
    initContract();
  }, [initContract]);
  return state;
}
//# sourceMappingURL=useContract.js.map
