import {
    StarknetProvider,
    useAccount,
    useBalance,
    useNetwork,
} from '@make-starknet-mainstream/starknet-react-native-sdk';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function WalletStatus() {
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { data: balance } = useBalance({
    address,
    watch: true,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Starknet React Native Demo</Text>

      {isConnected ? (
        <View>
          <Text style={styles.text}>Connected to: {chain?.name}</Text>
          <Text style={styles.address}>{address}</Text>
          {balance && (
            <Text style={styles.balance}>
              Balance: {balance.formatted} {balance.symbol}
            </Text>
          )}
        </View>
      ) : (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connect Wallet</Text>
        </TouchableOpacity>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <StarknetProvider autoConnect>
      <WalletStatus />
    </StarknetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  address: {
    fontSize: 14,
    fontFamily: 'monospace',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  balance: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E88E5',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
