import DefaultTheme from 'vitepress/theme'
import { Announcement } from '@theojs/lumen'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() { 
    return h(DefaultTheme.Layout, null, { 
      'home-hero-info-before': () => h(Announcement) 
    }) 
  } 
}