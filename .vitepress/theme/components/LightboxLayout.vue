<template>
  <DefaultTheme.Layout>
    <template #home-hero-info-before>
      <Announcement />
    </template>
  </DefaultTheme.Layout>

  <el-image-viewer
    v-if="visible"
    :url-list="imageList"
    :initial-index="initialIndex"
    :hide-on-click-modal="true"
    teleported
    @close="closeViewer"
  />
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import { Announcement } from '@theojs/lumen'

const route = useRoute()
const visible = ref(false)
const imageList = ref<string[]>([])
const initialIndex = ref(0)

let cleanup: (() => void) | null = null

const closeViewer = () => {
  visible.value = false
}

const bindImageLightbox = () => {
  cleanup?.()

  const images = Array.from(
    document.querySelectorAll<HTMLImageElement>('.vp-doc img:not(.no-lightbox)')
  ).filter((img) => !img.closest('a') && !!img.getAttribute('src'))

  const urls = images
    .map((img) => img.getAttribute('src') || '')
    .filter(Boolean)
    .map((src) => new URL(src, window.location.href).toString())

  const unbinders: Array<() => void> = []

  images.forEach((img, index) => {
    img.style.cursor = 'zoom-in'
    const handleClick = (event: MouseEvent) => {
      event.preventDefault()
      imageList.value = urls
      initialIndex.value = index
      visible.value = true
    }
    img.addEventListener('click', handleClick)
    unbinders.push(() => img.removeEventListener('click', handleClick))
  })

  cleanup = () => {
    unbinders.forEach((unbind) => unbind())
  }
}

onMounted(() => {
  nextTick(bindImageLightbox)
})

watch(
  () => route.path,
  () => {
    nextTick(bindImageLightbox)
  }
)

onBeforeUnmount(() => {
  cleanup?.()
})
</script>
