import type { Chain } from '@starknet-react/chains';
import type { AccountInterface } from 'starknet';
export interface StarknetConfig {
  chains: Chain[];
  defaultAccount?: AccountInterface;
  autoConnect?: boolean;
}
export interface StarknetState {
  account?: AccountInterface;
  isConnected: boolean;
  isConnecting: boolean;
  error?: Error;
}
export interface UseStarknetHook {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnected: boolean;
  isConnecting: boolean;
  error?: Error;
}
export interface UseAccountHook {
  account?: AccountInterface;
  isConnected: boolean;
}
export interface UseContractHook {
  contract?: any;
  error?: Error;
  loading: boolean;
}
export interface StarknetContextValue extends StarknetState {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}
