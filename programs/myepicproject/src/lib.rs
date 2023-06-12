// an import statement
use anchor_lang::prelude::*;

// Basically, this is the "program id" and has info for Solana on how to run our program. Anchor has generated this one for us. We'll be changing it later.
declare_id!("EjoBwG3XANnFLkFMnEF8EAKSXWKB92Xdszfujk3g2CP6");

// This is how we tell our program, "Hey — everything in this little module below is our program that we want to create handlers for that other people can call".
// macros
#[program]
// pub mod tells us that this is a Rust "module"
pub mod myepicproject {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        // Get a reference to the account.
        let base_account = &mut ctx.accounts.base_account;
        // Initialize total_gifs.
        base_account.total_gifs = 0;
        Ok(())
    }
}

// macro
#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 10000)]
    pub base_account: Account<'info, BaseAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct BaseAccount {
    pub total_gifs: u64,
}