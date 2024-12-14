let channels =
[
	{
		title: "SPORT 24", type: "mpd", keyId: "003663ddf1acb25ea88a7cf973afc0d5", key: "35ea91b4151d6975007998c328daee6c",
		file: "https://linear303-it-dash1-prd.selector.skycdn.it/016a/31035/FHD/skysport24/master.mpd", content: "sport"
	},
	{
		title: "SPORT UNO", type: "mpd", keyId: "0036aaa1d68c6b487e29a5cb080a8a28", key: "a3e8db3ff3c876f7b43a961b64a63474",
		file: "https://linear301-it-dash1-prd.selector.skycdn.it/016a/31023/FHD/skysportuno/master.mpd", content: "sport"
	},
	{
		title: "F1", type: "mpd", keyId: "0036a96b6bbbf1828488f90e6b2ca1f4", key: "d24e6ae926e88f8303b6926271ff8155",
		file: "https://linear307-it-dash1-prd.selector.skycdn.it/016a/31478/FHD/skysportf1/master.mpd", content: "sport"
	},
	{
		title: "MOTO GP", type: "mpd", keyId: "00362e9181eaa0c5f91761ade3515eb8", key: "52cf3c27885d58ad76aaf36d4217a984",
		file: "https://linear306-it-dash1-prd.selector.skycdn.it/016a/31483/FHD/skysportmotogp/master.mpd", content: "sport"
	},
	{
		title: "ARENA", type: "mpd", keyId: "00368f2bf10736c9c2c02ab0fa694d00", key: "92eec9d841ac0c1ff16b90a0db82c792",
		file: "https://linear304-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31024/FHD/skysportarena/master.mpd", content: "sport"
	},
    {
		title: "TENNIS", type: "mpd", keyId: "0036fb7c564c4eb99e310f5fa82ab2f2", key: "647f07b6858a669456e73ca103b4c2c0",
		file: "https://linear310-it-dash1-prd.selector.skycdn.it/016a/32559/FHD/skysporttennis/master.mpd", content: "sport"
	},
	{
		title: "NBA", type: "mpd", keyId: "00364eac2ffee337640e39682439b540", key: "0960172d9000c470ade0658bd36c1d53",
		file: "https://linear308-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31764/FHD/skysportnba/master.mpd", content: "sport"
	},
	{
		title: "MAX", type: "mpd", keyId: "0036f13bca1c5603b9f3bb28ec28fa80", key: "f01403bcb5a02c61153d297fb0c4395f",
		file: "https://linear305-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31248/FHD/skysportmax/master.mpd", content: "sport"
	},
	{
		title: "GOLF", type: "mpd", keyId: "00360b7729f74bf56a0a4eb0eda15ec5", key: "f8a5f4723c71ac84c2f1ff6f55939a63",
		file: "https://linear309-it-dash1-prd-akp2.cdn13.skycdp.com/016a/32768/FHD/skysportgolf/master.mpd", content: "sport"
	},
    {
		title: "CALCIO", type: "mpd", keyId: "00362f95db61eba0e6f14acee3f71e01", key: "fb74cd84b53c7557e18424a3356c4665",
		file: "https://linear302-it-dash1-prd.selector.skycdn.it/016a/31209/FHD/skysportseriea/master.mpd", content: "sport"
	},
    {
		title: "DAZN", type: "mpd", keyId: "8ab47741930c476780515f9a00decb0a", key: "7ab4b9ae5a48aa526e511a913b832769",
		file: "https://dcf-de-livedazn.daznedge.net/dash/dazn-linear-024/stream.mpd?p=web", content: "calcio"
	},
	{
		// "9d042fa273964e24a9109e23f4e313cc":"540e3601e1b82192c76c7411ad9c8c8e"
		// "801d9e39d41a49418615f7cee4b6e031":"84b9bec014f0509ee2a4296e5877cf40"
		// "cf513b83f32d4234a7b4982ae9ca3161":"68293d1b7143588339baeaedbe3939d9"
		// "014e7cf40d9e490a812964f4aa72449e":"01b8caafb230eb2a07cc965d54ef4441"
		title: "ELEVEN SPORT", type: "mpd", keyId: "9d042fa273964e24a9109e23f4e313cc", key: "540e3601e1b82192c76c7411ad9c8c8e",
		file: "https://r.dcs.redcdn.pl/webcache/canalplus2/live/store01/11Sports1/hd2-dashdrm02/11Sports1.mpd", content: "calcio"
	},
	{
		title: "CALCIO", type: "mpd", keyId: "00362f95db61eba0e6f14acee3f71e01", key: "fb74cd84b53c7557e18424a3356c4665",
		file: "https://linear302-it-dash1-prd.selector.skycdn.it/016a/31209/FHD/skysportseriea/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 1", type: "dash", keyId: "0036384f59a2b80ed142f82250c79f77", key: "2e6507cb779a28739b0bb1564f418823",
		file: "https://linear311-it-dash1-prd.selector.skycdn.it/016a/31917/FHD/skysport251/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 2", type: "dash", keyId: "003610b4ce44ba838c199b6636cf7431", key: "8369cbbccf0c1ff6bdbacbdae9252a04",
		file: "https://linear312-it-dash1-prd.selector.skycdn.it/016a/32951/FHD/skysport252/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 3", type: "dash", keyId: "0036d3b63b421abd69d9f0d3b6bdcf19", key: "0725c3162d5aefbf9c6d144f06ea0c92",
		file: "https://linear311-it-dash1-prd.selector.skycdn.it/016a/32233/FHD/skysport253/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 4", type: "dash", keyId: "00369c14c20b78aadb1ec0e3c0e74979", key: "e768767e2c7238d8069887bb36aed7fa",
		file: "https://linear312-it-dash1-prd.selector.skycdn.it/016a/31234/FHD/skysport254/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 5", type: "dash", keyId: "0036b781a22ebb0c20c16ac27d5d1448", key: "f309b94acfda720bf1ed5741489f8967",
		file: "https://linear311-it-dash1-prd.selector.skycdn.it/016a/32910/FHD/skysport255/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 6", type: "dash", keyId: "00366f263859fc1cc82d2c4da6a66ef6", key: "754ae922d113c54349002cd9a88694a4",
		file: "https://linear312-it-dash1-prd.selector.skycdn.it/016a/31912/FHD/skysport256/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 7", type: "dash", keyId: "0036faeace9872d3ceeb8b1b63f0baa3", key: "dbd41ee944243307d39b7b27f16615a8",
		file: "https://linear311-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31775/FHD/skysport257/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 8", type: "dash", keyId: "0036fd8ccfddba47c8b40aeff63a797c", key: "dfd5c9d0f4ac6f3a1bd89803399e7026",
		file: "https://linear312-it-dash1-prd-akp2.cdn13.skycdp.com/016a/32772/skysport258/master.mpd", content: "calcio"
	},
	{
		title: "CALCIO 9", type: "dash", keyId: "0036644f7699f43e401f88d920dc385c", key: "e5b0cebdc3edd7996d283041535fce9c",
		file: "https://linear311-it-dash1-prd-akp1.cdn13.skycdp.com/016a/31613/skysport259/master.mpd", content: "calcio"
	},
	{
		title: "CINEMA UNO", type: "mpd", keyId: "0036211ccb7bd9cfd99fb8591e67d772", key: "a10923293396f30380ce411a3504ddc3",
		file: "https://linear314-it-dash1-prd.selector.skycdn.it/016a/32202/FHD/cinemauno/master.mpd", content: "cinema"
	},
	{
		title: "CINEMA DUE", type: "mpd", keyId: "003629d4c6efbd39a2808a85a286b783", key: "41c463cc4bf6da4dec7935eb01a7155e",
		file: "https://linear308-it-dash1-prd-akp2.cdn13.skycdp.com/016a/32564/FHD/cinemadue/master.mpd", content: "cinema"
	},
	{
		title: "CINEMA COMEDY", type: "mpd", keyId: "003638a93ac06c9df7de5d8f349f56fd", key: "45c7c2ba5a3cdfd03e90ff16e6ac15d8",
		file: "https://linear303-it-dash1-prd-akp2.cdn13.skycdp.com/016a/32030/FHD/cinemacomedy/master.mpd", content: "cinema"
	},
	{
		title: "CINEMA ACTION", type: "mpd", keyId: "00368fc53eab9498463dadfc60e0f818", key: "0a70fe8d3b90360035982deaa8c83a6d",
		file: "https://linear306-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31206/FHD/cinemaaction/master.mpd", content: "cinema"
	},
	{
		title: "CINEMA FAMILY", type: "mpd", keyId: "0036012604394c43b063c4f513ee431d", key: "2c665092aa45cbae824bf7ad4e69d767",
		file: "https://linear305-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31255/FHD/cinemafamily/master.mpd", content: "cinema"
	},
	{
		title: "CINEMA COLLECTION", type: "mpd", keyId: "003699aeb8e998fe0afed0c7302ce51f", key: "4583daf5ec387c310633cdc922dd3130",
		file: "https://linear302-it-dash1-prd.selector.skycdn.it/016a/31204/FHD/cinemacollection/master.mpd", content: "cinema"
	},
	{
		title: "CINEMA DRAMA", type: "mpd", keyId: "0036a5270d8f1d1a2f573864aed26225", key: "df0e826d2eeb78051f5dcf6f166e6056",
		file: "https://linear304-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31769/FHD/cinemadrama/master.mpd", content: "cinema"
	},
	{
		title: "CINEMA SUSPENCE", type: "mpd", keyId: "00365eb692a3fd6907192a4a3f0958b2", key: "9f86ea0417e3458186f8ada1a2003fa5",
		file: "https://linear307-it-dash1-prd-akp2.cdn13.skycdp.com/016a/32047/FHD/cinemasuspense/master.mpd", content: "cinema"
	},
	{
		title: "CINEMA ROMANCE", type: "mpd", keyId: "00362d0a5efbd10ab56a3f502f2be023", key: "61c8c429f412ea52e06d9663c48ee9b7",
		file: "https://linear301-it-dash1-prd.selector.skycdn.it/016a/32231/FHD/cinemaromance/master.mpd", content: "cinema"
	},
	{
		title: "DOCUMENTARI", type: "mpd", keyId: "0036de0a1c44a2c972fcf64c9b7f4302", key: "0ade9234f6c56636ad6bb1b3560ddb31",
		file: "https://linear313-it-dash1-prd.selector.skycdn.it/016a/31697/FHD/skydocumentaries/master.mpd", content: "intrattenimento"
	},
	{
		title: "CRIME", type: "mpd", keyId: "0036de91177ccee5fdfd4929c099854f", key: "f40263272212aacdcf7e405cfb4b4a91",
		file: "https://linear315-it-dash1-prd.selector.skycdn.it/016a/32249/FHD/skycrime/master.mpd", content: "intrattenimento"
	},
	{
		title: "INVESTIGATION", type: "mpd", keyId: "003689703a245806508e9d332ed323ee", key: "ef229589d2f7afa40904b6d62c852acf",
		file: "https://linear315-it-dash1-prd.selector.skycdn.it/016a/32686/FHD/skyinvestigation/master.mpd", content: "intrattenimento"
	},
];