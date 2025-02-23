let sites =
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
		title: "SPORT F1", type: "mpd", keyId: "0036a96b6bbbf1828488f90e6b2ca1f4", key: "d24e6ae926e88f8303b6926271ff8155",
		file: "https://linear307-it-dash1-prd.selector.skycdn.it/016a/31478/FHD/skysportf1/master.mpd", content: "sport"
	},
	{
		title: "SPORT MOTOGP", type: "mpd", keyId: "00362e9181eaa0c5f91761ade3515eb8", key: "52cf3c27885d58ad76aaf36d4217a984",
		file: "https://linear306-it-dash1-prd.selector.skycdn.it/016a/31483/FHD/skysportmotogp/master.mpd", content: "sport"
	},
	{
		title: "SPORT ARENA", type: "mpd", keyId: "00368f2bf10736c9c2c02ab0fa694d00", key: "92eec9d841ac0c1ff16b90a0db82c792",
		file: "https://linear304-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31024/FHD/skysportarena/master.mpd", content: "sport"
	},
    {
		title: "SPORT TENNIS", type: "mpd", keyId: "0036fb7c564c4eb99e310f5fa82ab2f2", key: "647f07b6858a669456e73ca103b4c2c0",
		file: "https://linear310-it-dash1-prd.selector.skycdn.it/016a/32559/FHD/skysporttennis/master.mpd", content: "sport"
	},
	{
		title: "SPORT NBA", type: "mpd", keyId: "00364eac2ffee337640e39682439b540", key: "0960172d9000c470ade0658bd36c1d53",
		file: "https://linear308-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31764/FHD/skysportnba/master.mpd", content: "sport"
	},
	{
		title: "SPORT MAX", type: "mpd", keyId: "0036f13bca1c5603b9f3bb28ec28fa80", key: "f01403bcb5a02c61153d297fb0c4395f",
		file: "https://linear305-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31248/FHD/skysportmax/master.mpd", content: "sport"
	},
	{
		title: "SPORT GOLF", type: "mpd", keyId: "00360b7729f74bf56a0a4eb0eda15ec5", key: "f8a5f4723c71ac84c2f1ff6f55939a63",
		file: "https://linear309-it-dash1-prd-akp2.cdn13.skycdp.com/016a/32768/FHD/skysportgolf/master.mpd", content: "sport"
	},
    {
		title: "EUROSPORT 1", type: "mpd", keyId: "0036bb3fa7e6f2c334d7cba5c28b6caf", key: "217fa35739cd68e90b2cd23322c01312",
		file: "https://linear311-it-dash1-prd.selector.skycdn.it/016a/313073/FHD/eurosport/master.mpd", content: "sport"
	},
    {
		title: "EUROSPORT 2", type: "mpd", keyId: "003670a7034342a4a07c91173818c61c", key: "7b90055c1a1ea34d9090e9ebf6c4db8a",
		file: "https://linear312-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31150/FHD/eurosport2/master.mpd", content: "sport"
	},
    {
		title: "DAZN", type: "mpd", keyId: "8ab47741930c476780515f9a00decb0a", key: "7ab4b9ae5a48aa526e511a913b832769",
		file: "https://dcf-de-livedazn.daznedge.net/dash/dazn-linear-024/stream.mpd?p=web", content: "sport"
	},
	{
		title: "DAZN1", type: "mpd", keyId: "82f8e2a17dac44c0a18f660479349c59", key: "1b144f73e6fefe91cd05f850e2b589d0",
		file: "https://dce-ak-livewwdazn.akamaized.net/dashdrm/dazn-linear-024/stream.mpd", content: "sport"
	},
	{
		title: "SPORT CALCIO", type: "mpd", keyId: "00362f95db61eba0e6f14acee3f71e01", key: "fb74cd84b53c7557e18424a3356c4665",
		file: "https://linear302-it-dash1-prd.selector.skycdn.it/016a/31209/FHD/skysportseriea/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 1", type: "dash", keyId: "0036384f59a2b80ed142f82250c79f77", key: "2e6507cb779a28739b0bb1564f418823",
		file: "https://linear311-it-dash1-prd.selector.skycdn.it/016a/31917/FHD/skysport251/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 2", type: "dash", keyId: "003610b4ce44ba838c199b6636cf7431", key: "8369cbbccf0c1ff6bdbacbdae9252a04",
		file: "https://linear312-it-dash1-prd.selector.skycdn.it/016a/32951/FHD/skysport252/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 3", type: "dash", keyId: "0036d3b63b421abd69d9f0d3b6bdcf19", key: "0725c3162d5aefbf9c6d144f06ea0c92",
		file: "https://linear311-it-dash1-prd.selector.skycdn.it/016a/32233/FHD/skysport253/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 4", type: "dash", keyId: "00369c14c20b78aadb1ec0e3c0e74979", key: "e768767e2c7238d8069887bb36aed7fa",
		file: "https://linear312-it-dash1-prd.selector.skycdn.it/016a/31234/FHD/skysport254/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 5", type: "dash", keyId: "0036b781a22ebb0c20c16ac27d5d1448", key: "f309b94acfda720bf1ed5741489f8967",
		file: "https://linear311-it-dash1-prd.selector.skycdn.it/016a/32910/FHD/skysport255/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 6", type: "dash", keyId: "00366f263859fc1cc82d2c4da6a66ef6", key: "754ae922d113c54349002cd9a88694a4",
		file: "https://linear312-it-dash1-prd.selector.skycdn.it/016a/31912/FHD/skysport256/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 7", type: "dash", keyId: "0036faeace9872d3ceeb8b1b63f0baa3", key: "dbd41ee944243307d39b7b27f16615a8",
		file: "https://linear311-it-dash1-prd-akp2.cdn13.skycdp.com/016a/31775/FHD/skysport257/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 8", type: "dash", keyId: "0036fd8ccfddba47c8b40aeff63a797c", key: "dfd5c9d0f4ac6f3a1bd89803399e7026",
		file: "https://linear312-it-dash1-prd-akp2.cdn13.skycdp.com/016a/32772/skysport258/master.mpd", content: "sport"
	},
	{
		title: "CALCIO 9", type: "dash", keyId: "0036644f7699f43e401f88d920dc385c", key: "e5b0cebdc3edd7996d283041535fce9c",
		file: "https://linear311-it-dash1-prd-akp1.cdn13.skycdp.com/016a/31613/skysport259/master.mpd", content: "sport"
	}
];