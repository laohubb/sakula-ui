<template>
  <article class="markdown-body">
    <h1>
      开始使用
    </h1>

    <p>请先<router-link to="/doc/install">安装</router-link>本组件库。</p>
    <p>然后在你的代码中写入下面的代码</p>
    <pre><code>import {Button,Switch,Tabs,Tab,openDialog,Dialog} from 'sakula-ui'
import 'sakula-ui/dist/lib/sakula.css'</code></pre>

    就可以使用我提供的组件了。
    <h2>Vue 单文件组件</h2>
    <p>代码示例：</p>
    <pre><code>&lt;template&gt;
  &lt;Button&gt;按钮&lt;/Button&gt;
&lt;/template&gt;
&lt;script&gt;
  import {Button,Switch,Tabs,Tab,openDialog,Dialog} from 'sakula-ui'
  import 'sakula-ui/dist/lib/sakula.css'
  export default {
    components: {Button}
  }
&lt;/script&gt;
 </code></pre>

  </article>
</template>
