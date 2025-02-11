// Export our provider
export { StarknetProvider } from './context/StarknetProvider';

// Re-export core functionality from starknet-react
export {
  useAccount,
  useBalance,
  useBlock,
  useBlockNumber,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  useStarkName,
  publicProvider,
} from '@starknet-react/core';

// Re-export chains
export * from '@starknet-react/chains';

// Export our types
export type {
  StarknetConfig,
  StarknetState,
  UseStarknetHook,
  UseAccountHook,
  UseContractHook,
  StarknetContextValue,
} from './types';
