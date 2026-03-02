# 快速开始

本页面用于快速启动文档站，并开始编写可交互的教程内容。

## 如何编写可以交互的教程？

项目已内置统一组件 `TutorialActionItem`，可以在 `.md` 页面直接使用。

```vue
<script setup lang="ts">
import { ElMessage } from 'element-plus'
const clickTip = () => ElMessage.success('点击成功')
</script>

<TutorialActionItem
  label="保存"
  description="把当前角色数据导出为 JSON 文件。"
  type="primary"
  @click="clickTip"
>
  <template #icon><iconify-icon icon="material-symbols:file-save-outline" /></template>
</TutorialActionItem>
```

你可以在这里看到渲染的结果

<script setup lang="ts">
import { ElMessage } from 'element-plus'

const clickTip = (text: string) => {
  ElMessage.success(text)
}
</script>

<div class="tutorial-button-list">
  <TutorialActionItem
    label="加载"
    description="从本地选择并加载角色卡 JSON 文件。"
    type="success"
    @click="clickTip('示例：点击了 加载')"
  >
    <template #icon><iconify-icon icon="material-symbols:folder-open-outline-sharp" /></template>
  </TutorialActionItem>

  <TutorialActionItem
    label="保存"
    description="把当前角色数据导出为 JSON 文件。"
    type="primary"
    @click="clickTip('示例：点击了 保存')"
  >
    <template #icon><iconify-icon icon="material-symbols:file-save-outline" /></template>
  </TutorialActionItem>

  <TutorialActionItem
    label="重置"
    description="清空当前角色编辑内容并恢复默认结构。"
    plain
    @click="clickTip('示例：点击了 重置')"
  >
    <template #icon><iconify-icon icon="material-symbols:refresh" /></template>
  </TutorialActionItem>

  <TutorialActionItem
    label="复制"
    description="复制当前角色 JSON 到剪贴板。"
    type="info"
    @click="clickTip('示例：点击了 复制')"
  >
    <template #icon><iconify-icon icon="material-symbols:content-copy-outline" /></template>
  </TutorialActionItem>

  <TutorialActionItem
    label="导入"
    description="从粘贴的 JSON 文本导入角色数据。"
    type="warning"
    @click="clickTip('示例：点击了 导入')"
  >
    <template #icon><iconify-icon icon="material-symbols:content-paste-go-rounded" /></template>
  </TutorialActionItem>
</div>

<style scoped>
.tutorial-button-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0 18px;
}
</style>