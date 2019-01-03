var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'TereasCoins';
config.appDescription = 'TereasCoins Wallet';
config.appSlogan = 'Solutions as a Service';
config.appId = 'tereascoin.gui';
config.appGitRepo = 'https://github.com/tereasthailand/tereaswallet';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 11898;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'tereas';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'tereas-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "v1.0.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. turtle-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'https://coin.tereas.net/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = 'tereas.net';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = '';

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
];

// your currency name
config.assetName = 'TEREAS';
// your currency ticker
config.assetTicker =  'TEREAS';
// your currency address prefix, for address validation
config.addressPrefix =  'TEREAS';
// standard wallet address length, for address validation
config.addressLength = 102;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 187;

// minimum fee for sending transaction
config.minimumFee = 0.1;
// minimum amount for sending transaction
config.mininumSend = 0.1;
// default mixin/anonimity for transaction
config.defaultMixin = 3;
// to convert from atomic unit
config.decimalDivisor = 100;
// to represent human readable value
config.decimalPlaces = 2;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
];

module.exports = config;
