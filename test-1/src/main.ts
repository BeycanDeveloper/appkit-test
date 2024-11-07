import type { ConnectConfig } from '@multiplechain/types';

const options: ConnectConfig = {
  themeMode: 'light',
  projectId: '113d9f5689edd84ff230c2a6d679c80c',
};

document
  .getElementById('open-evm')
  ?.addEventListener('click', async function () {
    const EvmChains = await import('@multiplechain/evm-chains');
    const evmProvider = new EvmChains.Provider(EvmChains.networks.ethereum);
    EvmChains.browser.adapters.Web3Wallets.connect(evmProvider, options);
  });

document
  .getElementById('open-solana')
  ?.addEventListener('click', async function () {
    const Solana = await import('@multiplechain/solana');
    const solProvider = new Solana.Provider({
      testnet: true,
    });
    Solana.browser.adapters.Web3Wallets.connect(solProvider, options);
  });
