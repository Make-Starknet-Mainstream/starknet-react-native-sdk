import { mainnet, sepolia } from '@starknet-react/chains';
import { StarknetConfig as BaseProvider, publicProvider } from '@starknet-react/core';
import React from 'react';

import type { StarknetConfig } from '../types';

export function StarknetProvider({
  children,
  defaultAccount,
  autoConnect = false,
  ...rest
}: StarknetConfig & { children: React.ReactNode }) {
  return (
    <BaseProvider
      {...rest}
      autoConnect={autoConnect}
      chains={[mainnet, sepolia]}
      provider={publicProvider()}
    >
      {children}
    </BaseProvider>
  );
}

// Re-export hooks from starknet-react
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
} from '@starknet-react/core';
