import { defineConfig } from 'vite'

export default defineConfig({
    server : {
        port : 8091,
        proxy : {
            '/a': 'http://localhost:8090',
            '/b': 'http://localhost:8090'
        }
    }
})