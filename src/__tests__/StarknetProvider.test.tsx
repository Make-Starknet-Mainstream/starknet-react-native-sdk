import React from 'react';
import { render, act } from '@testing-library/react-native';
import { StarknetProvider, useStarknet } from '../context/StarknetProvider';
import { Provider } from 'starknet';

const mockProvider = new Provider({ sequencer: { network: 'goerli-alpha' } });

function TestComponent() {
  const { isConnected, isConnecting, connect } = useStarknet();
  return (
    <>
      <text>Connected: {isConnected.toString()}</text>
      <text>Connecting: {isConnecting.toString()}</text>
      <button onPress={connect} title="Connect" />
    </>
  );
}

describe('StarknetProvider', () => {
  it('provides connection state', () => {
    const { getByText } = render(
      <StarknetProvider provider={mockProvider}>
        <TestComponent />
      </StarknetProvider>
    );

    expect(getByText('Connected: false')).toBeTruthy();
    expect(getByText('Connecting: false')).toBeTruthy();
  });

  it('handles connect action', async () => {
    const { getByText, getByTitle } = render(
      <StarknetProvider provider={mockProvider}>
        <TestComponent />
      </StarknetProvider>
    );

    await act(async () => {
      getByTitle('Connect').props.onPress();
    });

    expect(getByText('Connecting: true')).toBeTruthy();
  });
});
