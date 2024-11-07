const projectId = "113d9f5689edd84ff230c2a6d679c80c";

document
  .getElementById("create-evm")
  ?.addEventListener("click", async function () {
    const { createAppKit } = await import("@reown/appkit");
    const { EthersAdapter } = await import("@reown/appkit-adapter-ethers");
    const { mainnet, arbitrum } = await import("@reown/appkit/networks");

    const modal = createAppKit({
      adapters: [new EthersAdapter()],
      networks: [mainnet, arbitrum],
      projectId,
    });

    modal.open();
  });

document
  .getElementById("create-solana")
  ?.addEventListener("click", async function () {
    const { createAppKit } = await import("@reown/appkit/react");
    const { SolanaAdapter } = await import(
      "@reown/appkit-adapter-solana/react"
    );
    const { solana, solanaDevnet } = await import("@reown/appkit/networks");

    const modal = createAppKit({
      adapters: [
        new SolanaAdapter({
          wallets: [],
        }),
      ],
      networks: [solana, solanaDevnet],
      projectId,
    });

    modal.open();
  });

document
  .getElementById("create-multichain")
  ?.addEventListener("click", async function () {
    const { createAppKit } = await import("@reown/appkit");
    const { EthersAdapter } = await import("@reown/appkit-adapter-ethers");
    const { mainnet, arbitrum } = await import("@reown/appkit/networks");
    const { SolanaAdapter } = await import("@reown/appkit-adapter-solana");
    const { solana, solanaDevnet } = await import("@reown/appkit/networks");

    const modal = createAppKit({
      adapters: [
        new EthersAdapter(),
        new SolanaAdapter({
          wallets: [],
        }),
      ],
      networks: [mainnet, arbitrum, solana, solanaDevnet],
      projectId,
    });

    modal.open();
  });
