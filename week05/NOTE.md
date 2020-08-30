# Week 05 学习笔记

## CSS知识体系

1. at-rule
   - @charset
   - @import
   - @media
   - @page
   - @fontface
   - @keyframes

2. rule
   - selector
     - select-group
     - selector
       - `>`
       - `" "`
       - `+`
       - `~`
     - simple-selector
       - type
       - `*`
       - `,`
       - hash: `#`
       - attribute: `[]`
       - `:`
       - `::`
       - `:not()`
   - declaration
     - key
       - variables
       - properties
     - value
       - calc
       - number
       - length
       - ...

## 选择器语法

### 简单选择器

- 通配符：`*`
- type selector（元素选择器）：`div`, `svg|a`
- class selector: `.cls`
- id selector: `#id`
- attribute selector: `[attr=value]`, 同时支持其他的连接符号`^=`,`~=`
- 伪类: `:hover`
- 伪元素: `::before`

### 复合选择器

- 由多个简单选择器组合成
- `*` 或 `div` 必须在最前面，伪类在最后面

### 复杂选择器

- 使用符号连接简单选择器
  - `" "`: 空格，代表子孙选择器
  - `>`: 子类选择器
  - `+`: 兄弟选择器（必须相邻）
  - `~`: 兄弟选择器（无须相邻）
  - `||`: 列选择器

## 选择器优先级

- inline: `style = '...'`
- id: `#id`
- 类选择器: `.cls`, `[attr=value]`, `:hover`
- 类型选择器: `div`, `::before`

```
[ inline, id, class, tag ]
```

## 伪类选择器

### 链接/行为(LOVE,HATE)

- :any-link
- :link
- :visited
- :hover
- :active
- :focus
- :target （用于url #hash）

### html 结构

- :empty
- :nth-child()
- :nth-last-child()
- :first-child
- :last-child
- :only-child

### 逻辑

- :not
- :where （未实现）
- :has （未实现）

## 问题

**Q:** 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

**A:** first-letter 在 compute 前生效，设置 float 仅影响所选元素的布局，但 first-line 是在 layout 后生效，此时不应该再影响布局