const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
/*   devServer:{
    host:'0.0.0.0',
    port:6103,
    client:{
      WebSocketURL:'ws://0.0.0.0:6103/ws',
    },
    headers:{
      'Access-Control-Allow_Origin':'*',
    }
  } */
})
