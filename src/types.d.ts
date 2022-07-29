/// <reference types="vite/client" />

declare module 'vue-dragscroll' {
  import VueDragscroll from './main.ts'
  import { dragscroll } from './main.ts'
  
  export { dragscroll }
  export default VueDragscroll
}

interface Window {
  VueDragscroll: any;
  Vue: any;
}
