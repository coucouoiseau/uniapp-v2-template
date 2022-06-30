# uniapp-v2-template
自用uniapp vue2版本 模板

## 目录结构
```
├── api                             # api管理
├── components                      # 公共组件
│   │── status-bar-holder.vue       # 状态栏占位组件
│   └── tab-bar.vue                 # 自定义tabbar(还没使用，使用时需要在页面钩子内关闭原生tabber)
├── page                            # 页面文件
├── static                          # 静态资源
├── utils                           # 工具包
│   │── config.js                   # 请求ip配置
│   │── request.js                  # 请求封装
│   └── whiteList.js                # 请求白名单(可结合request，配置后不添加请求头)
└── package.json                    # package.json
```

