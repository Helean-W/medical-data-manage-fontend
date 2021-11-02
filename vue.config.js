module.exports = {
    devServer: {
        port: 8001,  //前端devserver的端口
        proxy: {
            '/': {
                target: 'http://127.0.0.1:8000/',  //后端的ip和端口
                changeOrigin: true
            }
        }
    }
}