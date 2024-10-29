const { connect, keyStores, WalletConnection } = require('near-api-js');
const express = require('express');
const app = express();
app.use(express.json());

async function initNear() {
    const keyStore = new keyStores.InMemoryKeyStore();
    const config = {
        networkId: "testnet",
        keyStore,
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
    };
    return connect(config);
}

app.post('/provision_resources', async (req, res) => {
    const near = await initNear();
    const account = await near.account("youraccount.testnet");

    try {
        const response = await account.functionCall({
            contractId: "yourcontract.testnet",
            methodName: "provision_resources",
            args: req.body,
            gas: "300000000000000",
        });
        res.json({ success: true, data: response });
    } catch (error) {
        res.json({ success: false, error: error.toString() });
    }
});

app.listen(5000, () => console.log('Backend running on port 5000'));
