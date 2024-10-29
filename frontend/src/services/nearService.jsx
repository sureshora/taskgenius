// services/nearService.js
import { connect, WalletConnection, keyStores } from 'near-api-js';
import { Buffer } from 'buffer';
window.Buffer = Buffer;

let wallet;

export async function initNEAR() {
    const keyStore = new keyStores.BrowserLocalStorageKeyStore();
    const config = {
        networkId: "testnet",
        keyStore,
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
    };
    const near = await connect(config);
    wallet = new WalletConnection(near, null);
}

export async function executeTransaction(method, args = {}) {
    if (!wallet) await initNEAR();
    const account = wallet.account();
    return account.functionCall({
        contractId: "sureshwizard.testnet", // Replace with actual contract ID
        methodName: method,
        args,
        gas: "300000000000000", // Adjust gas as needed
    });
}

export async function getStageStatus(contractId, method) {
    if (!wallet) await initNEAR();
    const account = wallet.account();
    return account.viewFunction(contractId, method);
}

export function isSignedIn() {
    return wallet && wallet.isSignedIn();
}

export function signIn() {
    wallet.requestSignIn("sureshwizard.testnet"); // Replace with your contract ID
}

export function signOut() {
    wallet.signOut();
}
export async function getStatus() {
    try {
        // Any actual logic or API calls can be placed here
        return "How are you?"; // Sample status message
    } catch (error) {
        console.error("Error fetching status:", error);
        throw error;
    }
}