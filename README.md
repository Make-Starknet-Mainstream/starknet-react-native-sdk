# Starknet React Native SDK

A powerful and easy-to-use React Native SDK for building mobile applications on Starknet. This SDK provides a seamless integration between React Native applications and the Starknet blockchain.

## Features

- 🚀 Built with TypeScript for type safety
- 📱 React Native & Expo compatible
- 🔒 Secure transaction signing
- 🌐 Multiple network support (Mainnet, Testnet, Local)
- 🎯 Simple and intuitive API
- 🛠 Comprehensive hooks for React Native
- 📦 Zero-config installation with Expo
- 📝 Extensive documentation and examples

## Installation

```bash
npm install @make-starknet-mainstream/starknet-react-native-sdk
# or
yarn add @make-starknet-mainstream/starknet-react-native-sdk
```

## Quick Start

```typescript
import { useStarknet, useContract, useAccount } from '@make-starknet-mainstream/starknet-react-native-sdk';

function App() {
  const { connect, disconnect, isConnected } = useStarknet();
  const { account } = useAccount();

  return (
    <View>
      {!isConnected ? (
        <Button onPress={connect} title="Connect to Starknet" />
      ) : (
        <Text>Connected: {account.address}</Text>
      )}
    </View>
  );
}
```

## Documentation

For detailed documentation, visit our [documentation site](https://docs.starknet-react-native.dev).

## Examples

Check out our example applications in the [examples](./examples) directory:

- Basic Wallet App
- NFT Gallery
- DeFi Dashboard

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## Security

If you discover a security vulnerability, please follow our [Security Policy](SECURITY.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📝 [Documentation](https://docs.starknet-react-native.dev)
- 💬 [Discord Community](https://discord.gg/starknet)
- 🐦 [Twitter](https://twitter.com/StarknetRN)
- 📧 [Email Support](mailto:support@starknet-react-native.dev)
