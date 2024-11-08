import { createAppKit } from "@reown/appkit";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import { mainnet, arbitrum } from "@reown/appkit/networks";
import { SolanaAdapter } from "@reown/appkit-adapter-solana";
import { solana, solanaDevnet } from "@reown/appkit/networks";
const projectId = "113d9f5689edd84ff230c2a6d679c80c";

document
  .getElementById("create-evm")
  ?.addEventListener("click", async function () {
    const modal = createAppKit({
      adapters: [new EthersAdapter()],
      networks: [mainnet, arbitrum],
      projectId,
      features: {
        email: false,
        socials: false,
      }
    });

    modal.open();
  });

document
  .getElementById("create-solana")
  ?.addEventListener("click", async function () {
    const modal = createAppKit({
      adapters: [
        new SolanaAdapter({
          wallets: [],
        }),
      ],
      networks: [solana, solanaDevnet],
      projectId,
      features: {
        email: false,
        socials: false,
      }
    });

    modal.open();
  });

document
  .getElementById("create-multichain")
  ?.addEventListener("click", async function () {
    const modal = createAppKit({
      adapters: [
        new EthersAdapter(),
        new SolanaAdapter({
          wallets: [],
        }),
      ],
      networks: [mainnet, arbitrum, solana, solanaDevnet],
      projectId,
      features: {
        email: false,
        socials: false,
      }
    });

    modal.open();
  });
