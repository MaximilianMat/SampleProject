import { defineConfig } from 'vite'

export default defineConfig({
    build: { sourcemap: 'inline' },
    server : {
        port : 8091,
        proxy : {
            '/a': 'http://localhost:8090',
            '/b': 'http://localhost:8090'
        },
        cors : {
            origin : "ws://localhost:*"
        }
    }
})