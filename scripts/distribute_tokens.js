const users = ["0x176A9C4Cc21713621a74f5a71DB5fe3233f147f5",
               "0x4cd8BDa7C7dD00656F2FC7520Ed1035e76B24399",
               "0x0e2e091221b1D79CCe17F240515443dc139C7d90",
               "0x8B15Df3466c42e8B4521da72AA1011291663AE91",
               "0x0253FaE0d7F003D1E211ef778A2B3394fB435479",
               "0x32d29e78825505dD222E70b06013ec2fd27BDDd8",
               "0x1453700BAf320116b4B5879537ef0d31dD2D3B0d",
               "0xdF02024F0D0c5158415Ee99C79549f704E4EEc6C",
               "0x79bD1df0c909fd7cA78e622636Cab218756671f4",
               "0xE2d21921EEfE4C3741365C071a408C2F98D5EE4F",
               "0x4e2ac13Df563710fDA3048b2eabBcB1B7CBe716D",
               "0xF5A1068dF90515Adc25dD5e551c5Aac37B6d565f",
               "0x3E41b182b7BE785B6d484A4774921f32dEd163CE",
               "0xdeACE1bdAAbED5A7D1481e0EfB60418A50633CB5",
               "0x9ca4f11616FD9a54F6c58637AA4888E8C35Aae37",
               "0xb3aeaF62DeFE5811A1d733D59099051f406AD5e5",
               "0xd8D1431aD5ce22B55f2fE36B4694AA1712f98f9d",
               "0xA181a3c3460Ad5a2650f380352e3E68111E3D60e",
               "0x132FADc5A5cb3EA2D2bF855Eb968DEEbb9f029Cd",
               "0x9c35E01DdbcBb2D384C0B802440d263a85e85742",
               "0xc3BD529d9ad72453be31F79824cD2Db0E1c73D50",
               "0x7F0d4faAA8b08dcDF63E57D2442560fB2eC66b7E",
               "0x3Da40d9dA4Ef3B7B44D5E5ccE6F8f8336ce73582",
               "0xCD0E45f9B79e7397DA4893E68b8DeAfc05Da753A",
               "0xCDf354DaD4f0b692895a3E589735409a756CF9Ac",
               "0xb9b932769F85d4E8CBDA79A7FB0cD2568130a49E",
               "0x777E22D6fc4632277C7D8F2D1DF5B5Dd08249eeD",
               "0x0D1460a3F75e5cDE52c79Fa739A42589CD1E3ce9",
               "0x597e602a82aDF753cf301E579A7e826E35A020F4",
               "0x5105Dd2A04844109619DDdaB2bA8e19A2Ba216c8",
               "0x8eB20C232ea73eF04D9611E722Dba8Ac7cE2B889",
               "0x270b01C5Fd34db3978ACd3ca5eDF3deD9B851226",
               "0x39E6Dd85E38aA82B8b98C87bFDf627c9e4cFacc2",
               "0x560D591cd4d900E051C6A2c1aa272c8Be021FD96",
               "0x1E73E128cedB4b6AA84a5E591F5Bb0Aefa6F8a9E",
               "0xd7C5e4099A6e8B4b46F6686326004ecca6Ffd538",
               "0xBdE4D38Ec4426f1C9F4859D38928a02987e9dBA7",
               "0x3a5b058D8C1dA7565eba70cA02aDdEF58DC83190",
               "0x512c676Ea914bF351cE398F705473CfD30c6692F",
               "0x1c3354d276b49fE8941a09b822a9100d50E88727",
               "0x990205c377E139A40752Db476dbe8Bc610AaB8C0",
               "0xe9bfa3295ED99da961bF2163fB26310D24fEfF0B",
               "0x0cf104Dc7a2fC62F619C8EE2359b27c5B8888Ef2",
               "0xAC12f4A822091F8Eda66AFC71B2F0eDc45bC3266",
               "0x5160E1E915e52E9E1c71A69b0964316E2308bdEB",
               "0x230C0C5846aaB38349C237dbE8bC5f380fb52BCD",
               "0xcc4e91D3Be84f495DA23A8eF1f799a22B7801949",
               "0xc13456A34305e9265E907F70f76B1BA6E2055c8B",
               "0xd5b3eE035C6cEB0D2DDD90ea13d103DCb4EfA3d8",
               "0xA2B40e1cC6bA02c980e39534f5ce43Fd20d8A755",
               "0x0E1ca0c78C85457e04DD6F256b290f6c31B7629A",
               "0x8bdBF4B19cb840e9Ac9B1eFFc2BfAd47591B5bF2",
               "0xccEE88812Bea9Ba2820afA1737E25771988D57d1",
               "0xCE86b917f91C59D48Ec1402365e4417A31866784",
               "0xBaA8d7E9C0bf0Cd02E7d7685043C582d66cBebc4",
               "0x7BCb8597564156eD7c70B3BB00aE8D529bf22974",
               "0xde73Fc41be152Fe142ff93AB8F01e026a94DC41c",
               "0xee75B7f8648A3f562f22fD9389F4a7f6581c727B",
               "0xE8E61Db7918bD88E5ff764Ad5393e87D7AaEf9aD",
               "0x590dfbD53781c6d9D8404eB8e1847fEA1AfAD319",
               "0x551602c5A49e226F415B40a3F1992bEC163f4BA2",
               "0xE7a2B4CBEE97A6f3B26b72dA19a07603B9C9fdC5",
               "0x64677eE1b25D3639A6581CF8D01d96f663F6EA8B",
               "0x34C8B3CE130b4ddEEBcc0B776482247F7400acB7",
               "0x7bAd69D0091e8544813Fd4C41300f76e17495758",
               "0x9C4Ec23229Ef84DD6e4d864c56a7E541675b3A5F",
               "0x14375581e079fbB4c3C39b65dDbef3f2FA7Bbeea",
               "0x8C49DBeccF14e7aA3B97fa875ea28ef456310bBe",
               "0x9a943c0782A85eaBd2181bfb006E81bf191F1d6c",
               "0x222a6353B2b3d63a25AFf79AA19Dda0e91818bB1",
               "0xe71e97e2F94a26b0bE43b104E166421f1A4fDE88",
               "0x697CB8B5754E1e9001abe42d6be95fF598Dab13b",
               "0xB9388206648cE2e17eC5E536b558f0707Ff7517a",
               "0xD8E13fE8731f3685Bbb0B46bb74A1f4BD97d50D4",
               "0xC8E1580A9c8e70B516dac14271290F591D4680d2",
               "0x7158Cc374f6bAC0B0f761692262bf4B3307801C1",
               "0xF3FaAae9345382665577ef6893f6a78A98655aF6",
               "0xF0A421cB39dBB2d481dd0842bd3FD4498394044f",
               "0xC32b7438b3dF7844c9eE799930a2224Fe6E26426",
               "0x2D52F7BaE61912f7217351443eA8a226996a3Def",
               "0x0282e055D3b2f7c0AD656952Ac1bB989FB6D0086",
               "0xe5418b07f7842002D9d13e9DBb4C70C7666D750f",
               "0x562eD81E568d860d2B7Ce395a6ae364398e2A100",
               "0x066b913B2d7EE1e0E43fEC01381C5EBB0f6B6327",
               "0x0bE263922860AC09536f9c3dD4dA39741Ed3a87b",
               "0x6Dc6524e7C22E92A17A76af448f9f17f097d0105",
               "0x4eaFe6Bec9D6dAA0a9609712Fd5B690b8A664a47",
               "0xB79eB097e7C066092e2258B39F46316B28f16E40",
               "0xB491CDb40013b938A33566117AFe6BbEDB4c7241",
               "0xcA8f850feb71c7Dd0e7b999A311905DA01ec1ffc",
               "0xa90ECa853A5ACEf06C287802E2632D9331Fd3D2A",
               "0xcb3b84b72587E4D47276FEacA326Ad813348d5E4",
               "0x16B158E3A0d4F9576c101839d2d1Def9D935152d",
               "0x6Ea8b3524a4E6b6b59642EBD88E0B28B318e64e1",
               "0xb833f001B73cBd23fEF8841E484F2c242dF767bd",
               "0xA6894416336A47a2a3495CC2B5F1ed2CFc10d0f8",
               "0x1b71Aa37eA4f555e65c8577389Ee334F2B4091F2",
               "0xDd2dCDc7bA8ea57C258F155DAce3d1f7F11B3110",
               "0x723eA236B39C9409FAe54c585Bb4C010A6a3c39F",
               "0x4413A906a012F06bD0ABDa5eeC45F7D67b449284",
               "0x23CB5f48fa3F4502232F3442637f90E8e3355701",
               "0x78F124c90891dD364e0A2a67C183951f6aBB30ba",
               "0xCa2c43f9E2562CA7BF4508535e964cb715ca0CcF",
               "0x8b0473E5f2871d420b7891c01a45eF84eE2d523D",
               "0xC0442a99C8b0E656986f20C9519cDbCbD52e8C5f",
               "0x1B93CA3890D34a54D6d94A3A3e7586c9498b3654",
               "0xF30a6e52772335983Eb996FF5010eC5d81aCE38d",
               "0x7A976FAaf9C404c680593b20123039847F083D0E",
               "0x10Fd32fD1932321b8aDFa91fbF6dC126f773D655",
               "0x2594Af513f4a51452653a9E41434482344044b30",
               "0x1C1Edf55Ca9270C545c038D3166Cf5b6363c5604",
               "0x11D17f95c23846FE21e586a75DbB90fe0698045a",
               "0x59AccDb2cCf9aaD2a0E339DB94457905DeEAEC2D",
               "0x7B6Db723F329e201ed9e497918DEFF895a88dB16",
               "0x576f2db7Aa4ED401014C8FF7933f664e438176D7",
               "0xAEaa20C67F806D0E71eb4665949503287995981e",
               "0xc944a44AF09Dc0838F1c3c783C2c6f012cE4D7f0",
               "0xAD1BdD9bA06104E36453e864405A07E4C0Be633c",
               "0x8edE26F2e7c9af725c20e4bAE69CB2475a3Ad4fb",
               "0xD882a2D0267e0f425a75Ff1d88B7D5DA01e50eEE",
               "0x402c170ef42A93839a26B3f4df716d38C27B4399",
               "0x811Bd07c073b7E9dc3DC02afA4f6E2604E3C1435",
               "0x41cA37052D6F6C5Ff804cC037551F1533a6fDc52",
               "0xd9deD0500fBdBb7edfb69692B9316BC6f6d19ea5",
               "0xF9C06828963EE182e2339eb62497b1cb691e7250",
               "0xeA5d08Bc7D5DF9270cFE0aF331BBE5261eA0cc64",
               "0x8Ea431995C338Bf270dc1c6cD1802933FCF44a9a",
               "0xEc4eE9Ee325e648eC0305fe9b1587f2b6B9Abdc5",
               "0x96B9D9a5cFe8c572DeF7588d31f7921138794e24",
               "0x7041Ec2720F4900b06d9E87F0468A18dD38D9626",
               "0x9663991Ea5fa2b787162294a4eF0B705c9C8b388",
               "0x17b1d9a1a8F0363E04bcCDF2839cB107B2297774",
               "0xdE5954B07050f43ded283102742C87dC42fd1F09",
               "0xe7487A038D39dBc7081eC44FA51b2CB8936C241f",
               "0x017De4d84a7BE24e6fF07137C06e93053FeAf9ED",
               "0x41499632EdEB037AbB98538eFcdf99fCDd55b49a",
               "0xF4aCC1ed6E32e3B043295CA16003E2F64F50D117",
               "0xaf91CB4fE0F491C74a4bd278bA24F6D38007e1Fd",
               "0xac2E80F93d507ab5ef326B38B8C7363e02Bd2CFD",
               "0x73a6c379AaBcE1Fc647524689336Fc47Ad1cd597",
               "0xeF0e5397469233Bb52178DdAc48E4637Bb5002cB",
               "0x6e6a04Ee325470bd4C6Af8114C74b5cFaFE1ef05",
               "0x8F71041deFa491438b932664F30ACc14a0a0a2fD",
               "0xaC7a677815EcD9c0AD2B13686F7ab54ff7485762",
               "0xA6582CE1AC46053d666a7692ACA4C6C6D3203989",
               "0xa83c572C8072f3b11562F08B89d4F3077682acDB",
               "0xe42CAF701D5E0b94496C8B641739f80aD580319c",
               "0x4Eefb4A97Be3A46022c290dECc2e0592cFe412A0",
               "0x35fDa7bABAa56ae6EB4faBf352897AC5A6Ea8595",
               "0x216D97f2820F25588a2B45D4fe5EA3908A518971",
               "0xd03f35EB930b1ba9155C1211D14A9ab32F43A7B1",
               "0xE66Abd2b1FE54EFEEAC58600785Ef1fC9c8Aabc0",
               "0x03D2289C516185B44E3dB3f174a4cb1e14774C6f",
               "0xD78fb850E668199F351D3C1ADd1BC1623B7373eB",
               "0xb20472b506d7196F6ba33090ecb746fe80BC4117",
               "0x1f47bC66093141f6f50CD345Eaa6c186a1EE1868",
               "0x87a4F3B048F22504FB35b6E0E393522b5A280ef3",
               "0x5D52CF8d8b4e802B91CEE2D20dc0940F996BAf04",
               "0xa3E56A7d3C97681D443dE712e3d397D8d8D8A077",
               "0xaE69116E4AA49645f78C1Fc9f28F677aeDE0d153",
               "0x51D6Af00262A2e03111005760eCa6857cf3Ba4c3",
               "0xa70e6fE4488104Be32B9B657F5Be7B68aFc17f9a",
               "0x5fd58c74DbcB4c56d09EB130b29c71CdaF71d730",
               "0xbB2C046D4278f914010148c77972f7FA3A4d86A8",
               "0x2F708746673dfA0e07b4cdd884Ab83Ac32B89e8D",
               "0x79B4fAEAA31EAc19f33A1517288abE82cB2da6Fd",
               "0x4eb6CE3Ee2eceA32118592Db89e661193710FE30",
               "0x61114Cd93c6a34fA3eD5fc439933c89a87191307",
               "0x9C3E762aE9D739573C8730b12da0576FA2c1b01d",
               "0x50aBb229C97968E6c009155Eb8e4f60083EF0F3a",
               "0x82e5904bE1c61B7F2bfAa222D8B54919774D0716",
               "0xaEA263FF92a7a8A2f183a4Aa44EfDC7e3B47D794",
               "0xf0d3105C77F90B246087802acEa7fDfeb340F9a0",
               "0xd9e4616edb3bA1532E9263f7ecc885458E1B5E3d",
               "0x55710Aa3Bb05b611fcF16D02E28cC35BEB89BAE7",
               "0x07895535bEF59afeE134FB61dF010573691d002b",
               "0xc96A9E8Ae2829Ba979DBf9A223169afACB05a860",
               "0x857456e6abfbAb1160F454Efb552035ACd2228F0",
               "0x39889F2Cac90Aa0342e850428e83dEBb438A8Fbf",
               "0x9c9218650468e606EA47AE1b8e4A8848e8563536",
               "0x16f7183854dBbd1860FBb9af411f8204fa479aeA",
               "0x44A369122dA6d467c81E7d83c8DF66a3E34d4F79",
               "0xf63C10e01855878f2855a167BE913F9a9D4Dc4B5",
               "0x5296feD6c931a65675Ac64E2C1843587dfc8fF39",
               "0x8ACC033b67C4e06d111B793505B3cd7e3712D63b",
               "0x12A4eeC88a9A89cf2e1FfAdb5549aF3A0Ed875bf",
               "0x363BD4789D2039e541B6a475aB0CC2eC01009687",
               "0xdB5c76550a45943e65f532002a06a94c80ba4b5F",
               "0x1B8268398f42d775a5592312b54601031B0629d6",
               "0x461e76A4fE9f27605d4097A646837c32F1ccc31c",
               "0xe0361d47cf81357085c6ab6D847A05C7b9d78BE5",
               "0xF32b0bc88713F9DEc79EB681ab4c58D46CbE05a7",
               "0x3BF8383Be8C5F8263143FEAa94343628C6d9A481",
               "0xd4Eba4B33bf0D07cF013a11392FA22ad7Dae73EE",
               "0xc476B6B5c4c70Ff4fBb675b9F961555775Fa6fcd",
               "0x8Dae0B60271140354F43beb0F628621fcac7c697",
               "0x75403cfeba7E534aD555C439e251540e8be6eF69",
               "0x6893593C695d23f002F9278FA75aE1367Ce78d96",
               "0x1D3994A9Fb41d49c2A8C487342b67B7F117d8D9c",
               "0xE09bd2AA0704D4676aeC6A777122D687e3E5d8d5",
               "0x333940D1CB910cDD7E9E8A2f3995911C6f39c70B",
               "0xDC45bdAFB895a674EC08863eD8CeC753047A7F82",
               "0x3f90Eda8B7100943E2793f3BaAa4931dF90B907E",
               "0x9d529339F76F0DA057Ce1fEE0F2363385A565036",
               "0xA78761C5Be334aE68A1afC518dc154E74b28170F",
               "0x2F9994048EE63271f5beB337C902B74B93A0136A",
               "0xa7A166E52BAf20DA1162D3c8f786395773254504",
               "0x530D8De01f485769bcd1D21ba13dfbe3074f593C",
               "0xbA9a7BF08Aad49E3c46a6A9Cef85ecc42b0B1CfB",
               "0x6C1d5E6437f993d9DD01E2deE10a5630557fbaF1",
               "0x6a73b6D8809645407b74801fED3D3E47e443183f",
               "0xc364Dcc9548329A8C79062f340bdD2e428b4EF22",
               "0x85A2BeEe757634d9f403EC62480F9e2b921525f8",
               "0x75920A6F77e19e1BB987f71B91b777977Ff16E3E",
               "0x9235eDDA7a84d917872a4278a5723ff2a34709dB",
               "0xBa9576FBa6f82fA2f3aD2710A81F288456Db2370",
               "0xdE3105d7b651668DB7d7d3D312A0cFa61B0EC61d",
               "0xd82CA7D209d099B2Ed8FCa7efB15d7d8a1542597",
               "0x706Cf0E0060CE7406F587b8E3CDEd9b47880f86a",
               "0x34C50CB8E10a241F06541efBb3b2eB32986EF2cF",
               "0x55437D86461D6fF8D959226Af93d0e93a62A31Fa",
               "0x76686ab611730C9193a2cf193015d78b67820D7A",
               "0x2ce2dca0c2208BAbC8E6556114339202f75DCc9E",
               "0x5927f35a86644e822A7775964647F240655A0253",
               "0x30132cbfeCE481aa91A77bEb5c99F37082b93340",
               "0x6991B1B4a340f2a25f48F50f12E481eaCD172452",
               "0x29A5aAE40fb25109d3d6674Bf95BED6CbFAD76A2",
               "0x2E2D4678eEAF2D07833A421f4eeec71CE92af469",
               "0xc5701aa04BEbE68Aa8e09a1C442a2E3F2cEE2772",
               "0xDbCE66C4468AC0EFE660cea7B667E9e222BE8C0C",
               "0xD8A6F3397926e781C1311d3B11cA0A0F730494Df",
               "0xCFEBa03E69e9980446a87D9095063A0275D12db6",
               "0x2217adCb9A287fb8A176F2DbfE9711681a66A2fd",
               "0xD1A0B66835D830e9ada42eEf436f3AA8005b20B5",
]

const TinfoilNFT = artifacts.require("TinfoilNFT");

async function run_script() {
  const t = await TinfoilNFT.at("0xd23615c727be1a80ad1993f6c496c6fe84222c5d")
  for (let i=0; i<users.length; i++){
    console.log(i, users[i]);
    await t.mintNewNFT(users[i], 0, "");
  }
}

module.exports = async function (callback) {
  try {
    await run_script();
  }
  catch (error) {
    console.log(error)
  }
  callback()
}
