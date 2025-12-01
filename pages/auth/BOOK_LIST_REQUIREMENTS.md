# 书籍列表功能支持需求说明

## 📋 需求概述

当前系统需要完善以下书籍列表相关功能：
- ✅ 首页分类筛选（已实现基础功能）
- ⚠️ 个性化推荐列表（部分实现，需对接后端）
- ⚠️ 用户图书馆（已保存/已完成）
- ⚠️ 搜索功能
- ⚠️ 高级筛选和排序

---

## 📊 当前状态

### ✅ 已完成
- **首页分类筛选**：前端UI和基础API调用已实现
  - 分类选择功能正常
  - 书籍列表展示（双列表滚动效果）
  - API: `Api/Web/BookList`

- **For You 页面**：UI已完成，使用模拟数据
  - 特色推荐区域
  - 推荐书籍横向滚动
  - 继续阅读区域
  - 新发布区域
  - 合集推荐区域

### ⚠️ 待完成
- **个性化推荐**：需要对接后端推荐算法API
- **用户图书馆**：已保存和已完成功能需要后端支持
- **搜索功能**：搜索框和搜索结果页待开发
- **高级筛选**：按评分、时长、格式等筛选待实现
- **排序功能**：按时间、评分、热度排序待实现

---

## 🎯 需要完成的工作

### 1. 个性化推荐列表对接
**前端开发**：
- 将模拟数据替换为真实API调用
- 实现加载状态和错误处理
- 优化推荐算法参数传递

**后端开发**：
- 实现个性化推荐API：`GET /api/books/recommendations`
- 实现特色推荐API：`GET /api/books/featured`
- 实现继续阅读API：`GET /api/books/continue-reading`
- 实现新发布API：`GET /api/books/new-releases`
- 实现合集推荐API：`GET /api/books/collections`

**预计工作量**：2-3 天

---

### 2. 用户图书馆功能
**前端开发**：
- 实现已保存书籍列表展示
- 实现已完成书籍列表展示
- 添加书籍到已保存功能
- 标记书籍为已完成功能
- 从图书馆移除功能

**后端开发**：
- 实现保存书籍API：`POST /api/user/library/save`
- 实现获取已保存列表API：`GET /api/user/library/saved`
- 实现标记完成API：`POST /api/user/library/finish`
- 实现获取已完成列表API：`GET /api/user/library/finished`
- 实现移除书籍API：`DELETE /api/user/library/remove`

**数据库设计**：
- 用户图书馆表（user_library）
- 支持保存状态、完成状态、保存时间等字段

**预计工作量**：3-4 天

---

### 3. 搜索功能
**前端开发**：
- 实现搜索框组件（支持热门搜索、搜索历史）
- 实现搜索结果页面
- 实现搜索建议/自动完成
- 实现搜索高亮显示

**后端开发**：
- 实现搜索API：`GET /api/books/search?q={keyword}`
- 实现搜索建议API：`GET /api/books/search/suggestions?q={keyword}`
- 支持全文搜索（标题、作者、描述）
- 支持搜索排序和分页

**预计工作量**：3-4 天

---

### 4. 高级筛选和排序
**前端开发**：
- 实现筛选面板组件
- 支持多条件筛选（分类、评分、时长、格式等）
- 实现排序选择器
- 实现筛选结果展示

**后端开发**：
- 扩展书籍列表API支持筛选参数
- 实现排序逻辑（按时间、评分、热度等）
- 优化查询性能（索引优化）

**预计工作量**：2-3 天

---

## 🔧 技术需求

### 后端 API 需求

#### 推荐相关API
```
GET /api/books/recommendations
GET /api/books/featured
GET /api/books/continue-reading
GET /api/books/new-releases
GET /api/books/collections
```

#### 图书馆相关API
```
POST /api/user/library/save
GET /api/user/library/saved
POST /api/user/library/finish
GET /api/user/library/finished
DELETE /api/user/library/remove
```

#### 搜索相关API
```
GET /api/books/search?q={keyword}&page={page}&limit={limit}
GET /api/books/search/suggestions?q={keyword}
```

#### 筛选排序API
```
GET /api/books/list?category={id}&rating={min}&duration={max}&format={format}&sort={field}&order={asc|desc}
```

### 数据库调整
- 用户图书馆表设计
- 搜索索引优化
- 推荐算法数据表（用户行为、偏好等）

---

## ⏱️ 优先级建议

1. **高优先级**：个性化推荐列表对接、用户图书馆功能
2. **中优先级**：搜索功能
3. **低优先级**：高级筛选和排序

---

## 📅 预计总工作量

- **个性化推荐对接**：2-3 天
- **用户图书馆功能**：3-4 天
- **搜索功能**：3-4 天
- **高级筛选排序**：2-3 天
- **总计**：10-14 个工作日

---

## 📝 备注

- For You 页面目前使用模拟数据，需要尽快对接真实API
- 用户图书馆功能需要用户认证系统支持
- 搜索功能建议使用全文搜索引擎（如 Elasticsearch）提升性能
- 推荐算法需要收集用户行为数据进行优化


