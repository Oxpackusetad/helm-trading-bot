import { Connection, Keypair, Transaction } from '@solana/web3.js';
import * as dotenv from 'dotenv';
dotenv.config();

// Konfigurasi dari file .env (rahasia)
const connection = new Connection(process.env.SOLANA_RPC_URL || 'https://api.testnet.solana.com');
const BUY_THRESHOLD = 25.0; // 25% atau 25 sen
const SELL_THRESHOLD = 50.0; // 50% atau 50 sen

async function startBot() {
    console.log("🤖 Bot Helm Oxpackusetad Aktif...");
    
    // Loop terus menerus
    setInterval(async () => {
        try {
            // Simulasi cek harga (Ganti dengan fungsi real dari API Helm nanti)
            let currentPrice = 24.0; // Anggap harga sedang 24 sen

            console.log(`[LOG] Harga: ${currentPrice}¢`);

            if (currentPrice <= BUY_THRESHOLD) {
                console.log("🚀 BUY: Harga di bawah 25%! Eksekusi $1.000.000...");
                // Logika kirim transaksi ke Solana di sini
            } 
            
            if (currentPrice >= SELL_THRESHOLD) {
                console.log("💰 SELL: Harga 50% tercapai! Take Profit...");
                // Logika jual posisi di sini
            }
        } catch (e) {
            console.error("Error:", e);
        }
    }, 3000); // Cek setiap 3 detik
}

startBot();
