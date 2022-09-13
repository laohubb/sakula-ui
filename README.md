# Sakula UI

- 一个基于Vue3的UI组件库，覆盖包括Switch、Button、Dialog等常用组件
- 预览地址：https://sakula-ui.pages.dev/

## 使用方法

### 安装

打开终端运行下列命令：

```
npm install sakula-ui
```

或

```
yarn add sakula-ui
```

### 使用

请先[安装](http://localhost:3000/doc/get-started#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button,Switch,Tabs,Tab,openDialog,Dialog} from 'sakula-ui'
import 'sakula-ui/dist/lib/sakula.css'
```

就可以使用我提供的组件了。

## 示例

```
<template>
  <Button>点击</Button>
</template>
<script>
  import {Button,Switch,Tabs,Tab,openDialog,Dialog} from 'sakula-ui'
  import 'sakula-ui/dist/lib/sakula.css'
  export default {
    components: {Button}
  }
</script>
```