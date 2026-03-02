import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { h } from 'vue'
import TutorialActionItem from './components/TutorialActionItem.vue'
import LightboxLayout from './components/LightboxLayout.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('TutorialActionItem', TutorialActionItem)
  },
  Layout() {
    return h(LightboxLayout)
  } 
}
