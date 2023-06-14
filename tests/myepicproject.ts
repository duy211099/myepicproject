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

        // Call add_gif!
        await program.methods
            .addGif("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmY1NTg3NDhjZjgwYWJlNTdkYWIwYmFhY2VkNzYwNDc5ZjBmYmY2NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/ZauVzMa0xQxHGYK4Qx/giphy.gif")
            .accounts({
                baseAccount: baseAccount.publicKey,
                user: provider.wallet.publicKey,
            }).rpc();
        ;

        // Call the account.
        account = await program.account.baseAccount.fetch(baseAccount.publicKey);
        console.log('👀 GIF Count', account.totalGifs.toString())

        // Access gif_list on the account!
        console.log('👀 GIF List', account.gifList)
    });
});
