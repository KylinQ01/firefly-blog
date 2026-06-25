import type { MusicPlayerConfig } from "../types/musicConfig";

export const musicPlayerConfig: MusicPlayerConfig = {
	showInNavbar: true,
	mode: "local",
	volume: 0.7,
	playMode: "list",
	showLyrics: false,

	meting: {
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		server: "netease",
		type: "playlist",
		id: "10046455237",
		auth: "",
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	local: {
		playlist: [
			{
				name: "玻璃",
				artist: "玻璃",
				url: "/assets/music/玻璃.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "颜色",
				artist: "颜色",
				url: "/assets/music/颜色.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "用背脊唱情歌",
				artist: "Gareth.T",
				url: "/assets/music/用背脊唱情歌.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "遇上你之前的我",
				artist: "Gareth.T",
				url: "/assets/music/遇上你之前的我.mp3",
				cover: "",
				lrc: "",
			},
		],
	},
};
