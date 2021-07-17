require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember smile hockey enter bone genuine'; 
let testAccounts = [
"0x02e36fe24eb44de421ddbec7115e3d71345b59ff31c9698483bc82a96f6b46ee",
"0x03d4d32b88b938e6fb278bb4b05dcf39be01549a280168db8cb31d75e213f523",
"0x5d518c3ca8f8a8570d6c6430e554da5fb61f0d9766034deddd8f046c1a82a02e",
"0x4fc80f5f3dd6a0d6481b567eea19c8818d8fc4b6bd56c6b45acea8e74c59d7da",
"0xf75418d259e165ad54d1f57c4cf3a86d5ab6877cabddd6fd387412821099c297",
"0x8eeb9b0ed994c99bda53d48c33c31245045ac5dac16fe66d1aeefe25b4ec48b3",
"0x2b98ecab3f6723b70f9cf7d6a9326bb50635fb1f52ed1773af5fce47f34fafdc",
"0xc3d946d57c0a19278849c7d85f53f0b0b1e658d25e3ff81fb61942309c498c0a",
"0x9545a9eac80cfe8e2b97087c12c8c00291edea8f90559bce5a3c41298d7893fd",
"0xaddbd99ea38d5127f7921bc7f8b34fc5da25164dd3714c2a8aa761014b550a60"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

