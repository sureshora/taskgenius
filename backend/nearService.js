// backend/nearService.js
const { connect, keyStores, WalletConnection } = require('near-api-js');

async function initNear() {
    const keyStore = new keyStores.InMemoryKeyStore();
    const config = {
        networkId: "testnet",
        keyStore,
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
    };
    return connect(config);
}

async function provisionResources(resourceId) {
    const near = await initNear();
    const account = await near.account("sureshwizard.testnet"); // NEAR account

    const result = await account.functionCall({
        contractId: "taskgenius.testnet",
        methodName: "provision_resources",
        args: { resourceId },  // Pass the resource ID to provision
        gas: "300000000000000",
    });
    return result;
}

module.exports = {
    provisionResources,
};
