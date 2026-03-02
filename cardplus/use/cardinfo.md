# `/cardinfo` 使用教程（入门）

这个页面在 `st_cardplus` 里对应路由 `'/cardinfo'`，标题是“角色信息”，用于编辑角色卡核心字段。

## 1. 进入方式

- 左侧菜单点击 `角色信息`
- 或直接访问路由：`/cardinfo`

> 代码位置：
> - 路由定义：`src/router/index.ts`
> - 菜单项定义：`src/config/menuConfig.ts`（`id: 'cardinfo'`）

## 2. 页面结构

`/cardinfo` 页面分两栏（桌面）或两标签（移动端）：

- 角色列表：创建、选择、删除、排序角色
- 编辑区：当前角色的完整表单

### 角色列表基础结构

编辑区组件顶部有一组常用操作按钮。下面是图片示例：

![alt text](/images/cardplus/st_carplus角色信息编辑介绍.webp)


<script setup lang="ts">
import { ElMessage } from 'element-plus'

const onDemoClick = (name: string) => {
  ElMessage.success(`示例：点击了 ${name}`)
}
</script>

<div class="tutorial-button-list">
  <TutorialActionItem
    label="加载"
    description="导入 .json 角色卡。"
    type="success"
    @click="onDemoClick('加载')"
  >
    <template #icon><iconify-icon icon="material-symbols:folder-open-outline-sharp" /></template>
  </TutorialActionItem>

  <TutorialActionItem
    label="保存"
    description="导出当前角色为 .json 文件。"
    type="primary"
    @click="onDemoClick('保存')"
  >
    <template #icon><iconify-icon icon="material-symbols:file-save-outline" /></template>
  </TutorialActionItem>

  <TutorialActionItem
    label="重置"
    description="清空当前编辑数据（有确认弹窗）。"
    plain
    @click="onDemoClick('重置')"
  >
    <template #icon><iconify-icon icon="material-symbols:refresh" /></template>
  </TutorialActionItem>

  <TutorialActionItem
    description="复制当前角色 JSON 到剪贴板。"
    type="info"
    @click="onDemoClick('复制')"
  >
    <template #icon><iconify-icon icon="material-symbols:content-copy-outline" /></template>
  </TutorialActionItem>

  <TutorialActionItem
    description="弹出输入框，粘贴 JSON 后导入。"
    type="warning"
    @click="onDemoClick('导入')"
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

### 注意事项

在 `外貌特征` 和 `日常作息` 加载自定义条目的时候

请务必使用 `:` 和 `：` ，我们不支持其他奇奇怪怪的例如 `|` 还有 `·`

## 3. 最小使用流程

1. 进入 `/cardinfo`
2. 在左侧创建角色并选中
3. 在“基本信息”里填写 `中文名`、`性别`、`年龄`
4. 点击 `保存` 导出 JSON
5. 需要复用时，用 `加载` 或 `导入` 恢复

## 4. 常见提示

- 导入失败多数是 JSON 格式问题，先检查逗号和引号
- 复制/导出前如果数据为空，会弹“没有可保存的数据”
- `重置` 会恢复默认结构，建议先保存备份
