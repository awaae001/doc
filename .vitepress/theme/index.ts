import DefaultTheme from 'vitepress/theme'
import { Announcement } from '@theojs/lumen'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { h } from 'vue'
import TutorialActionItem from './components/TutorialActionItem.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('TutorialActionItem', TutorialActionItem)
  },
  Layout() { 
    return h(DefaultTheme.Layout, null, { 
      'home-hero-info-before': () => h(Announcement) 
    }) 
  } 
}
