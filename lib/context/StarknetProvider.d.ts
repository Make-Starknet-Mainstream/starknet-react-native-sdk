import React from 'react';
import type { StarknetConfig } from '../types';
export declare function StarknetProvider({
  children,
  defaultAccount,
  autoConnect,
  ...rest
}: StarknetConfig & {
  children: React.ReactNode;
}): React.JSX.Element;
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
