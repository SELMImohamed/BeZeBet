import { Web3Provider } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injectedConnector = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
});

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <MyComponent />
    </Web3ReactProvider>
  );
}
