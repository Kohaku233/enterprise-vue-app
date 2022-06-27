import { defineConfig } from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'
const pathResolve = (dir:string) => resolve(__dirname, dir)


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  /*如果你需要在嵌套的公共路径下部署项目，只需指定 base 配置项，然后所有资源的路径都将据此配置重写
  由 JS 引入的资源 URL，CSS 中的 url() 引用以及 .html 文件中引用的资源在构建过程中都会自动调整，以适配此选项。公共路径默认为/，我们指定为当前项目根目录./即可
  */
  base:'./',
  /* 当我们在没有任何配置的时候，在运行服务的时候，vite 是会自动跑在本地的3000端口，所以我们可以扩展下配置*/
  server:{
    port:2333,
    open:true,
    cors:true,
    proxy:{
      '/api':{
        target:'https://www.fastmock.site/mock/91d0fe2c2e796666ef0c7d2344561b3a/api',
        changeOrigin:true,
        rewrite:(path)=> path.replace(/^\/api/,'')
      }
    }
  },
  ///* 在我们项目开发过程中，会有很多嵌套层级的目录，所以要找到某个目录经常用相对路径../../..，层级一多就显得眼花缭乱，通过 alias 别名，我们可以快速地指定首层的目录，并且相比相对路径减少了路径索引的消耗，在性能上来说也是更优解 */
  resolve:{
    alias:{
      '@':pathResolve('./src')
    }
  },
  build:{
    outDir:'dist',
    terserOptions:{
      compress:{
        keep_infinity:true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console:true, // 生产环境去除 console
        drop_debugger:true  // 生产环境去除 debugger
      },
    },
    chunkSizeWarningLimit:1500 // chunk 大小警告的限制（以 kbs 为单位）
  }
})
