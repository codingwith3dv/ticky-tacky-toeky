module.exports = {
	pwa: {
		name: "Ticky Tacky Toeky",
		themeColor: "#cc13ff",
		workboxPluginMode: "InjectManifest",
		workboxOptions: {
			swSrc: "./src/service-worker.js"
		},
		
	},
}