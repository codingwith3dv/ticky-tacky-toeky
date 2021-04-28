module.exports = { 
  pwa: {
    name: "Ticky Tacky Toeky", 
    workboxPluginMode: 'InjectManifest', 
    workboxOptions: { 
      swSrc: 'src/service-worker.js'
    }, 
    themeColor: '#cc13ff' 
  },
}