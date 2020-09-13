# Week 07 学习笔记

## 1. HTML 历史

1. 从 XML、SGML 发展而来
2. 根据 DTD、namespace 区分，namespace 包含【xhtml，mathML，SVG】
3. nbsp含义：no-break space，跟实际意义上的空格并不一样

## 2. HTML 语义化

1. aside：非主要内容
2. a: 锚点 anchor
3. main：主体
4. h1, h2: 一级/二级标题
5. hgroup：标题组，大小标题组合
6. abbr：缩写
7. p：段落
8. strong：重要的东西
9. em：重音
10. img：图片
11. figure/figcaption: 内容与说明
12. li/ol/ul：列表项/有序列表/无序列表
13. nav：导航
14. dfn：定义
15. pre：已经调好格式的文本
16. samp：示例
17. code：代码
18. footer：页脚

## 3. XML 语法

1. tagName：元素
2. text：文本节点
3. comment：注释
4. DocumentType
5. processingInstruction
6. CDATA

**转义字符：**

- &#161：直接使用数字编号
- &amp：与号（&）
- &lt：小于号（<）
- &quot：引号（"）

## 4. 浏览器 API

**DOM:** document object model
**BOM:** browser object model

分为`节点API`，`事件API`，`Range API`

### 节点 Node

- Element
- Document
- CharacterData
- DocumentFragment
- DocumentType

### Node相关的API（不常用，有可能会遇到文本节点）

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling

### Element相关API（会自动忽略文本节点，只筛选Element）

**获取dom树**

- parentElement
- children
- firstElementChild
- lastElementChild
- nextElementSibling
- previousElementSibling

**修改dom树**

- appendChild
- insertBefore
- removeChild
- replaceChild

**高级操作**

- compareDocumentPosition
- contains：可以用于判断节点包含关系
- isEqualNode: 节点内容是否一致
- isSameNode：是否是同一个节点
- cloneNode: 复制节点

## 5. 事件API

### addEventListener

```typescript
addEventListener(type: string, listener: function, options: Options)
addEventListener(type: string, listener: function, useCapture: Boolean = false)

interface Options {
  capture: Boolean; //是否在捕获阶段
  once: Boolean; // 是否只触发一次
  passive: Boolean; // 该方法不能使用 preventDefault()，可以提高滚动事件的性能，在移动端为了提高性能默认 true
}
```

先触发捕获阶段再到冒泡阶段

## 6. Range API

1. childrenNodes 是 living collection
2. range 不可跳跃
3. 比较简单的生成方式：`window.getSelection().getRangeAt(0)`
4. `range.setStartBefore`
5. `fragment = range.extractContents()`：会将dom从dom树中取出
6. 可以使用 Fragment 批量插入 dom 节点
7. `range.insertNode(el)`

## 7. CSSOM

1. `document.styleSheets`：获取html中所有样式表
2. `sheet`
   - `sheet.cssRules`
   - `sheet.insertRule`
   - `sheet.removeRule`
3. `window.getComputedStyle(element, pseudoElement)`：获取实际渲染样式

## 8. CSSOM-View

1. window
   - innerHeight, innerWidth: 页面渲染空间
   - outerHeight, outerWidth: 浏览器窗口空间
   - devicePixelRatio: 物理逻辑像素比
   - screen
     - width, height: 屏幕空间
     - availWidth, availHeight：屏幕可用空间
2. window.open
   - 第三个参数可以控制尺寸
   - 同源窗口可以执行
     - moveTo(), moveBy(): 移动到指定点，移动指定偏移量
     - resizeTo(), resizeBy(): 窗口变化到指定大小，窗口大小指定变化量
3. element
   - scrollTop, scrollLeft
   - scrollHeight, scrollWidth
   - scrollTo(), scrollBy()
   - scrollIntoView()
4. window
   - scrollX, scrollY
   - scrollTo(), scrollBy()
5. layout
   - getClientRects()：多个盒子
   - getBoundingClientRects()：一个能包围的盒子
    ```typescript
    interface Rect {
      width: number;
      height: number;
      left: number;
      top: number;
      right: number;
      bottom: number;
    }
    ```

## 9. 其他API

1. WebGL
2. WebAudio
3. 。。。