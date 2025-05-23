# 角色卡编辑器使用手册

## 目录

- [角色卡编辑器使用手册](#角色卡编辑器使用手册)
  - [目录](#目录)
  - [简介](#简介)
  - [警告](#警告)
  - [界面概览](#界面概览)
  - [基本操作](#基本操作)
    - [创建新角色卡](#创建新角色卡)
    - [保存角色卡](#保存角色卡)
    - [加载角色卡](#加载角色卡)
    - [重置表单](#重置表单)
    - [复制到剪贴板](#复制到剪贴板)
    - [从剪贴板导入](#从剪贴板导入)
  - [详细功能说明](#详细功能说明)
    - [基本信息](#基本信息)
    - [背景故事](#背景故事)
    - [外观特征](#外观特征)
    - [服装套装](#服装套装)
    - [性格特质](#性格特质)
    - [人际关系](#人际关系)
    - [技能](#技能)
    - [喜好与厌恶](#喜好与厌恶)
    - [日常作息](#日常作息)
  - [高级功能](#高级功能)
    - [导出特定部分](#导出特定部分)
  - [常见问题](#常见问题)

## 简介

角色卡编辑器是一个用于创建、编辑和管理角色信息的工具。通过这个编辑器，您可以详细描述角色的基本信息、外观特征、性格特质、人际关系、技能等多个方面，并将这些信息保存为标准的JSON格式文件，方便在各种场景中使用。

无论您是小说创作者、角色扮演游戏玩家、还是虚拟角色设计师，这个工具都能帮助您系统地构建完整的角色形象。

## 警告

本工具导出的角色 **无法** 直接导入到酒馆，它只是角色的描述文件

## 界面概览

角色卡编辑器界面由多个部分组成，每个部分负责角色的不同方面：

- 顶部工具栏：包含保存、加载、重置等基本操作按钮
- 基本信息区：填写角色的姓名、性别、年龄等基础信息
- 背景故事区：描述角色的背景和历史
- 外观特征区：详细描述角色的外观
- 服装套装区：管理角色的多套服装
- 性格特质区：描述角色的性格和行为模式
- 人际关系区：记录角色与其他人物的关系
- 技能区：管理角色的各种技能
- 喜好与厌恶区：记录角色的喜好和厌恶
- 日常作息区：描述角色的日常生活习惯

## 基本操作

![顶部工具栏](https://pic.awaae001.top/00-doc/cardplus/%E9%A1%B6%E9%83%A8%E5%B7%A5%E5%85%B7%E6%A0%8F_e0e724a5.webp)


### 创建新角色卡

1. 打开角色卡编辑器页面
2. 各个部分的表单将显示为空白状态
3. 开始填写各个部分的信息

### 保存角色卡

1. 填写完角色信息后，点击顶部工具栏中的"保存"按钮
2. 系统会将角色卡数据保存为JSON文件
3. 文件名格式为：`[角色中文名]_[随机数].json`
4. 保存成功后会显示成功提示

> **注意**：空白字段不会被保存到JSON文件中

### 加载角色卡

1. 点击顶部工具栏中的"加载"按钮
2. 在弹出的文件选择对话框中，选择之前保存的角色卡JSON文件
3. 系统会读取文件内容并填充到表单中
4. 加载成功后会显示成功提示

### 重置表单

1. 点击顶部工具栏中的"重置"按钮
2. 系统会弹出确认对话框
3. 点击"确定"后，所有表单内容将被清空
4. 点击"取消"则不会进行任何操作

> **警告**：重置操作会清空所有已填写的内容，请确保已保存重要数据

### 复制到剪贴板

1. 点击顶部工具栏中的"复制到剪贴板"按钮
2. 系统会将当前角色卡数据转换为JSON格式并复制到剪贴板
3. 复制成功后会显示成功提示
4. 您可以将复制的内容粘贴到任何文本编辑器中

### 从剪贴板导入

1. 首先将有效的角色卡JSON数据复制到剪贴板
2. 点击顶部工具栏中的"从剪贴板导入"按钮
3. 系统会读取剪贴板内容，解析JSON数据并填充到表单中
4. 导入成功后会显示成功提示

> **注意**：剪贴板中必须是有效的角色卡JSON数据，否则会导入失败

## 详细功能说明

![基本信息](https://pic.awaae001.top/00-doc/cardplus/%E5%9F%BA%E6%9C%AC%E4%BF%A1%E6%81%AF_3ecca3da.webp)

### 基本信息

在基本信息区域，您可以填写角色的基础信息：

- **中文名**：角色的中文名称
- **日文名**：角色的日文名称（如有）
- **性别**：选择角色的性别（或填写自定义性别）
- **年龄**：角色的年龄
- **身份**：角色的身份或职业

### 背景故事

在背景故事区域，您可以详细描述角色的背景历史、成长经历等信息。支持多行文本输入，可以按照段落组织内容。

### 外观特征

在外观特征区域，您可以详细描述角色的外观：

- **身高**：角色的身高
- **发色**：头发颜色
- **发型**：头发样式
- **眼睛**：眼睛的特征
- **鼻子**：鼻子的特征
- **嘴唇**：嘴唇的特征
- **肤色**：皮肤颜色
- **体型**：身体类型和形状
- **胸围/腰围/臀围**：三围数据
- **其他身体特征**：包括胸部、生殖器、肛门、阴毛、大腿、臀部、脚等详细描述

### 服装套装

![服装设定](https://pic.awaae001.top/00-doc/cardplus/%E6%9C%8D%E8%A3%85%E8%AE%BE%E5%AE%9A_544a24f5.webp)


在服装套装区域，您可以管理角色的多套服装：

1. 点击"添加服装套装"按钮创建新的套装
2. 为每套服装填写以下信息：
   - **套装名称**：如"日常服装"、"工作制服"等
   - **套装描述**：对整套服装的概述
   - **上衣**：上衣的详细描述
   - **下装**：裤子、裙子等下装的描述
   - **鞋子**：鞋子的描述
   - **袜子**：袜子的描述
   - **内衣**：内衣的描述
   - **配饰**：各种配饰的描述，可以按行分隔多个配饰
3. 点击套装右侧的"删除"按钮可以删除不需要的套装

**导出服装套装**：点击"导出服装套装"按钮，可以将所有服装套装数据复制到剪贴板，方便在其他角色卡中重用。

### 性格特质

![性格特征](https://pic.awaae001.top/00-doc/cardplus/%E6%80%A7%E6%A0%BC%E7%89%B9%E5%BE%81_bb750ed2.webp)

在性格特质区域，您可以描述角色的性格：

1. 填写**MBTI性格**类型（如INTJ、ENFP等）
2. 点击"添加性格特质"按钮添加具体特质
3. 为每个特质填写：
   - **特质名称**：如"害羞"、"勇敢"等
   - **特质描述**：对该特质的详细解释
   - **对话示例**：展示该特质的对话例子
   - **行为示例**：展示该特质的行为例子
4. 点击特质右侧的"删除"按钮可以删除不需要的特质

**导出性格特质**：点击"导出性格特质"按钮，可以将所有性格特质数据复制到剪贴板，方便在其他角色卡中重用。

### 人际关系

![人际关系](https://pic.awaae001.top/00-doc/cardplus/%E4%BA%BA%E9%99%85%E5%85%B3%E7%B3%BB_7e87a593.webp)

在人际关系区域，您可以描述角色与其他人物的关系：

1. 点击"添加人际关系"按钮创建新的关系
2. 为每个关系填写：
   - **关系人名称**：关系人的名字
   - **关系描述**：对这段关系的概述
   - **关系特点**：这段关系的特点或亮点
   - **对话示例**：与该人物的对话例子
3. 点击关系右侧的"删除"按钮可以删除不需要的关系

**导出人际关系**：点击"导出人际关系"按钮，可以将所有人际关系数据复制到剪贴板，方便在其他角色卡中重用。

### 技能

在技能区域，您可以描述角色掌握的各种技能：

![角色技能](https://pic.awaae001.top/00-doc/cardplus/%E8%A7%92%E8%89%B2%E6%8A%80%E8%83%BD_f67d6a2f.webp)

1. 点击"添加技能"按钮创建新的技能
2. 为每个技能填写：
   - **技能名称**：如"剑术"、"魔法"、"烹饪"等
   - **技能描述**：对该技能的详细解释
   - **对话示例**：展示该技能的对话例子
   - **行为示例**：展示该技能的行为例子
3. 点击技能右侧的"删除"按钮可以删除不需要的技能

**导出技能**：点击"导出技能"按钮，可以将所有技能数据复制到剪贴板，方便在其他角色卡中重用。

### 喜好与厌恶

![喜好和作息](https://pic.awaae001.top/00-doc/cardplus/%E5%96%9C%E5%A5%BD%E5%92%8C%E4%BD%9C%E6%81%AF_88a2d66a.webp)

在喜好与厌恶区域，您可以描述角色的喜好和厌恶：

- **喜好**：角色喜欢的事物、活动、食物等，每行一项
- **厌恶**：角色厌恶的事物、活动、食物等，每行一项

### 日常作息

在日常作息区域，您可以描述角色一天中不同时段的活动：

- **早晨**：早晨的活动
- **上午**：上午的活动
- **下午**：下午的活动
- **傍晚**：傍晚的活动
- **夜晚**：夜晚的活动
- **深夜**：深夜的活动

## 高级功能

### 导出特定部分

角色卡编辑器允许您导出特定部分的数据，方便在不同角色卡之间共享和重用：

- **导出服装套装**：将所有服装套装数据复制到剪贴板
- **导出性格特质**：将所有性格特质数据复制到剪贴板
- **导出人际关系**：将所有人际关系数据复制到剪贴板
- **导出技能**：将所有技能数据复制到剪贴板

导出的数据为JSON格式，可以通过编辑JSON文件或使用"从剪贴板导入"功能在其他角色卡中使用。

## 常见问题

**Q: 我可以同时编辑多个角色卡吗？**

A: 编辑器一次只能编辑一个角色卡。如果需要编辑多个角色卡，请先保存当前角色卡，然后再加载其他角色卡。

**Q: 角色卡数据会自动保存吗？**

A: 不会。您需要手动点击"保存"按钮将数据保存到文件中，或使用"复制到剪贴板"功能保存数据。

**Q: 如何在其他设备上使用我的角色卡？**

A: 您可以将保存的JSON文件传输到其他设备，然后在那里使用"加载"功能导入数据。

**Q: 为什么有些字段在保存后消失了？**

A: 编辑器会自动过滤空值。如果某个字段为空（包括空字符串、0、null等），在保存时会被过滤掉，但不会影响功能使用。
