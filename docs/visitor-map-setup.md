# 访客地图设置指南

我已经为您的网站添加了访客地图功能。现在您需要选择并设置一个访客地图服务。以下是几个推荐的免费服务：

## 🌍 推荐的访客地图服务

### 1. RevolverMaps (推荐)
- **优点**: 实时显示、美观的3D地球、免费
- **设置步骤**:
  1. 访问 https://www.revolvermaps.com/
  2. 点击 "Add RevolverMaps to your site"
  3. 选择地图样式和配置
  4. 获取嵌入代码
  5. 替换 `about.md` 中的 RevolverMaps script 标签

### 2. ClustrMaps
- **优点**: 简单易用、显示访客聚集点
- **设置步骤**:
  1. 访问 https://clustrmaps.com/
  2. 注册账号并添加您的网站
  3. 获取您的站点ID
  4. 将 `about.md` 中的 `YOUR_SITE_ID` 替换为实际ID
  5. 取消注释 `.clustrmaps-widget` 部分

### 3. Flag Counter
- **优点**: 显示国家旗帜、访客数统计
- **设置步骤**:
  1. 访问 https://flagcounter.com/
  2. 选择样式并获取代码
  3. 将 `about.md` 中的 `YOUR_FLAG_ID` 替换为实际ID
  4. 取消注释 `.flag-counter-widget` 部分

## 🔧 当前配置

我已经在您的网站中添加了三个访客地图选项，目前默认使用 RevolverMaps。您可以：

1. **启用 RevolverMaps**: 已经默认启用，会显示3D地球访客地图
2. **切换到其他服务**: 通过修改 `display: none;` 属性来切换不同的地图服务
3. **同时显示多个**: 移除 `display: none;` 可以同时显示多个地图

## 📊 Google Analytics 集成

如果您想要更详细的访客分析，建议同时设置 Google Analytics：

1. 在 `_config.yml` 中添加您的 Google Analytics ID
2. 这将提供更详细的访客地理位置数据

## 🎨 自定义样式

访客地图的样式已经预设好，包括：
- 响应式设计
- 加载动画
- 现代化的卡片样式
- 移动设备优化

您可以在 `_sass/_visitor-map.scss` 文件中进一步自定义样式。

## 📝 下一步

1. 选择一个访客地图服务并完成注册
2. 获取相应的ID或嵌入代码
3. 更新 `about.md` 文件中的相应部分
4. 重新部署您的网站

访客地图将在页面底部显示，让访问者看到您的网站有来自世界各地的访客！
