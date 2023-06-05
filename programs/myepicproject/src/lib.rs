// an import statement
use anchor_lang::prelude::*;

// Basically, this is the "program id" and has info for Solana on how to run our program. Anchor has generated this one for us. We'll be changing it later.
declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

// This is how we tell our program, "Hey — everything in this little module below is our program that we want to create handlers for that other people can call". 
// macros 
#[program]
// pub mod tells us that this is a Rust "module"
pub mod myepicproject {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

// macro
#[derive(Accounts)]
pub struct Initialize {}
