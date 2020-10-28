require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth sad pudding grace infant foster gentle'; 
let testAccounts = [
"0x48a3677cf0a85756e8ec867b47517cd09315e832baa4d50f1f16a3a64144403d",
"0xf221523a0d01c095c73f2ba2081f6f288fa18fd0c6bf41d5347bff243927b220",
"0x7f9d758d046881b6bb63191c71875cd9807adb05b07e8b6a7e9f35b8f1014d22",
"0x2d1b6691c628f030854e6dc61f5e9413b422840aaafa355c1d2c81ec1f5bc24e",
"0x9f0ea8b38d0932394179c341efa0d9920d9f20d86f263ba8bfd8a6809da0be17",
"0x1982cec38ee3f750fc32504befc56143a2c4ea1b1ef498028ec356ed55bf71b5",
"0xca14006f8363a025d7631b3567abc1ec1316dbf5da01acd1175552b8cf3f51f5",
"0x6da4f8fc9b45cabf9d64f7c0557ed71371d6794737dca4a21b331e6dc0dadfaa",
"0x98612684e8c4ca4c0f72912f930ffbf99ceaeff56356f3287e39df694a5ddde2",
"0x6963ac4bd4ee603499de2bd9633c3964fa6b21a4e5fab468cda0a8245bde5489"
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
            version: '^0.5.11'
        }
    }
};
