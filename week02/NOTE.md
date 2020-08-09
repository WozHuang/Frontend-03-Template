# 学习笔记

## 有限状态机

1. Moore: 每个状态机都有确定的下一个状态
2. Mealy：每个状态机根据输入决定下一个状态

## HTTP 协议

- 文本型的协议

### Request

1. Request Line（单行）
   - GET / HTTP/1.1
2. Headers（KV对）
   - Content-Type: application/json
3. Body（余下所有）
   - JSON
   - x-www-urlencoded-form

### Response

1. Status Line
   - HTTP/1.1 200
2. Headers
3. Body