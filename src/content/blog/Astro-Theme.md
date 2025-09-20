---
title: "Astro-Theme【使用文档】"
categories: Code
tags: ["Astro"]
id: "Astro-Theme"
date: 2025-03-02 18:18:18
cover: "https://i0.wp.com/uxiaohan.github.io/v2/2025/04/1743737394560.webp"
recommend: true
top: true
---
## 📄 文章格式

```md
---
title: 标题
categories: 分类
tags:
  - 标签1
  - 标签2
id: 文章ID
date: 文章创建日期
updated: 文章更新日期
cover: "封面图URL (为空默认随机内置封面 /public/assets/images/banner)"
recommend: false # 是否推荐文章
top: false # 是否置顶文章
hide: false # 是否隐藏文章
<!-- 页面独有 -->
type: "links" # 页面类型
comment: false # 关闭页面评论（默认开启）
---
```
## 🌈 组件

### 文本加粗

```md
那个女孩子 **气喘吁吁** 的打电话和你说：我在跑步
```

那个女孩子 **气喘吁吁** 的打电话和你说：我在跑步

### 文本倾斜

```md
你问她为什么有 _啪啪啪_ 的声音，她和你说：我是穿拖鞋跑步的
```

你问她为什么有 _啪啪啪_ 的声音，她和你说：我是穿拖鞋跑步的

### 文本删除

```md
你说，好的那你继续 ~~跑步~~ 吧
```

你说，好的那你继续 ~~跑步~~ 吧

### 行内代码

```md
`Vscode` 是全宇宙最好的编辑器
```

`Vscode` 是全宇宙最好的编辑器

### 引用

```md
> 这是一个引用
```

> 这是一个引用

### 有序列表

```md
牛肉的的营养如下：

1. 能量 (kcal)
2. 脂类 (fat)
3. 蛋白质 (protein)
4. 碳水化合物 (carbohydrate)
```

牛肉的的营养如下：

1. 能量 (kcal)
2. 脂类 (fat)
3. 蛋白质 (protein)
4. 碳水化合物 (carbohydrate)

### 无序列表

```md
- 一个女朋友
- 二个女朋友
- 三个女朋友
- ...
- N 个女朋友
```

- 一个女朋友
- 二个女朋友
- 三个女朋友
- ...
- N 个女朋友

### 超链接

```md
[百度一下，你就懂了](https://www.baidu.com)
```

[百度一下，你就懂了](https://www.baidu.com)

### 3 行 3 列的表格

```md
| 表头 | 表头 | 表头 |
| :--: | :--: | :--: |
| 鸡头 | 鸭头 | 狗头 |
| 鸡头 | 鸭头 | 狗头 |
| 鸡头 | 鸭头 | 狗头 |
```

| 表头 | 表头 | 表头 |
| :--: | :--: | :--: |
| 鸡头 | 鸭头 | 狗头 |
| 鸡头 | 鸭头 | 狗头 |
| 鸡头 | 鸭头 | 狗头 |

### 代码块

```javascript
const obj = {
	name: "hi",
	age: 18
};
// 判断某个属性是否在对象里
console.log("name" in obj);
// 删除对象某个属性
console.log(delete obj.name);
// 将对象的属性名提取成数组
console.log(Object.keys(obj));
```

### H 标签

```md
<!-- H标签，页面标题即h1，不建议文章内使用h1标签 -->
## H2
### H3
#### H4
##### H5
```

## H2

### H3

#### H4

##### H5


### 数学公式

```latex
% 函数式
${f(x)=a_nx^n+a_{n-1}x^{n-1}+a_{n-2}x^{n-2}}+\cdots$
% 四则运算
$2x - 5y =  8$
$3x + 9y =  -12$
$7x \times 2y \neq 3z$
% 希腊字母
$\Gamma$、$\iota$、$\sigma$、$\phi$、$\upsilon$、$\Pi$、$\Bbbk$、$\heartsuit$、$\int$、$\oint$
% 三角函数、对数、指数
$\tan$、$\sin$、$\cos$、$\lg$、$\arcsin$、$\arctan$、$\min$、$\max$、$\exp$、$\log$
% 运算符
$+$、$-$、$=$、$>$、$<$、$\times$、$\div$、$\equiv$、$\leq$、$\geq$、$\neq$
% 集合符号
$\cup$、$\cap$、$\in$、$\notin$、$\ni$、$\subset$、$\subseteq$、$\supset$、$\supseteq$、$\N$、$\Z$、$\R$、$\R$、$\infty$
```
> 函数式

${f(x)=a_nx^n+a_{n-1}x^{n-1}+a_{n-2}x^{n-2}}+\cdots$
> 四则运算

$2x - 5y =  8$
$3x + 9y =  -12$
$7x \times 2y \neq 3z$

> 希腊字母

$\Gamma$、$\iota$、$\sigma$、$\phi$、$\upsilon$、$\Pi$、$\Bbbk$、$\heartsuit$、$\int$、$\oint$
> 三角函数、对数、指数

$\tan$、$\sin$、$\cos$、$\lg$、$\arcsin$、$\arctan$、$\min$、$\max$、$\exp$、$\log$
> 运算符

$+$、$-$、$=$、$>$、$<$、$\times$、$\div$、$\equiv$、$\leq$、$\geq$、$\neq$
> 集合符号

$\cup$、$\cap$、$\in$、$\notin$、$\ni$、$\subset$、$\subseteq$、$\supset$、$\supseteq$、$\N$、$\Z$、$\R$、$\R$、$\infty$


### 按钮组件

```md
<!-- 按钮组件 -->
::btn[标题]{link="URL 链接"}
<!-- 支持类型：info、success、warning、error、import -->
::btn[按钮]{link="链接" type="info"}
```

::btn[按钮]{link="https://www.baidu.com"}
::btn[按钮]{link="https://www.baidu.com" type="info"}
::btn[按钮]{link="https://www.baidu.com" type="success"}
::btn[按钮]{link="https://www.baidu.com" type="warning"}
::btn[按钮]{link="https://www.baidu.com" type="error"}
::btn[按钮]{link="https://www.baidu.com" type="import"}

### Note 组件

```md
<!-- note组件 -->
:::note
这是 note 组件 默认主题
:::
<!-- 支持类型：info、success、warning、error、import -->
:::note{type="info"}
这是 note 组件 success 主题
:::
```

:::note
这是 note 组件 默认主题
:::

:::note{type="info"}
这是 note 组件 info 主题
:::

:::note{type="success"}
这是 note 组件 success 主题
:::

:::note{type="warning"}
这是 note 组件 warning 主题
:::

:::note{type="error"}
这是 note 组件 error 主题
:::

:::note{type="import"}
这是 note 组件 import 主题
:::

### Picture 组件

```md
:::picture
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
:::
```

:::picture
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
![Astro主题-vhAstro-Theme](https://i0.wp.com/uxiaohan.github.io/v2/2023/03/42944511.png)
:::

### LivePhoto 组件

```md
<!-- 纵向图片 -->
::vhLivePhoto{photo="https://static.vvhan.com/img/1.webp" video="https://static.vvhan.com/img/1.mp4" type="y"}
<!-- 横向图片 -->
::vhLivePhoto{photo="https://static.vvhan.com/img/2.webp" video="https://static.vvhan.com/img/2.mp4"}
```

::vhLivePhoto{photo="/assets/livephoto/1.webp" video="/assets/livephoto/1.mp4" type="y"}

::vhLivePhoto{photo="/assets/livephoto/2.webp" video="/assets/livephoto/2.mp4"}

### Music 组件

```md
<!-- id 支持：歌曲 id / 歌单 id / 专辑 id / 搜索关键词
type 支持：song, playlist, album, search（默认值：song）
server 支持：netease, tencent, kugou, xiami, baidu（默认值：netease） -->
<!-- 单曲 -->
::vhMusic{id="1474697967"}
<!-- 列表 -->
::vhMusic{id="173901981" type="playlist"}
```

::vhMusic{id="1474697967"}
::vhMusic{id="7411497368" type="playlist"}

### Video 组件

```md
::vhVideo{url="https://originfastly.jsdelivr.net/gh/uxiaohan/uxiaohan.github.io@master/v2/2022/08/index.m3u8"}
```

::vhVideo{url="https://originfastly.jsdelivr.net/gh/uxiaohan/uxiaohan.github.io@master/v2/2022/08/index.m3u8"}
