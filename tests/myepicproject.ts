import { Myepicproject } from './../target/types/myepicproject';
import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
const { SystemProgram } = anchor.web3;

describe("myepicproject", () => {
    console.log("🚀 Starting test...")
    // Configure the client to use the local cluster.
    // anchor.setProvider(anchor.AnchorProvider.env());

    // Create and set the provider. We set it before but we needed to update it, so that it can communicate with our frontend!
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);


    const program = anchor.workspace.Myepicproject as Program<Myepicproject>;

    const baseAccount = anchor.web3.Keypair.generate();

    it("Is initialized!", async () => {
        // Add your test here.
        const tx = await program.methods
            .initialize()
            .accounts({
                baseAccount: baseAccount.publicKey,
                user: provider.wallet.publicKey,
                systemProgram: SystemProgram.programId,
            })
            .signers([baseAccount])
            .rpc();
        console.log("📝 Your transaction signature", tx);

        // Fetch data from the account.
        let account = await program.account.baseAccount.fetch(baseAccount.publicKey);
        console.log('👀 GIF Count', account.totalGifs.toString())
    });
});
