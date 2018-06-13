linux: touch your_file.txt
windows: type NUL > router.js


#PhotoShop
1. 抠图
    左侧工具栏 ->  快速选择工具 - 选择需要扣的图 - 左上角有 添加选区 选区减去 - 右击 选择方向 - delete  右下角出现新的图层 - 勾选不需要图层的眼睛 选择填充色背景色0% - 保存
2. GIF制作
    新建文件 - 选择需要的像素大小 - 窗口- 时间轴 - 创建视频时间轴 - 左下角 转为时间轴视频 重复为永久 - 复制需要的帧数 - 打开其他图片文件 复制图层到 新建的文件 - 右下角小眼睛为每个帧显示的图层 - 添加完毕之后 开始播放 时间自己调试 - 调试满意之后 文件- 导出 - 存储为web所用格式 - 调整大小 -  存储

3. 为了添加透明度，我们使用 rgba() 函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。
4. 

# 用iPhone访问Mac上搭建的本地服务器
* https://www.jianshu.com/p/4fc405fe6c91     

# css3 总结
1. CSS3 ribbon: https://www.bypeople.com/css-ribbon/
2. Chrome css样式被覆盖查看方式：Computed 里面去查找样式

# reactjs 总结
1. 常见误区解释： https://medium.com/@baphemot/understanding-reactjs-setstate-a4640451865b

# VS Code 卡顿
    打开vscode之后，点击文件==>首选项==>设置==>search.followSymlinks=>false

# Github API
    blogsiteaccess
    e5c110e16fd4e61921ae5069c46ec8fca227f20c 
https://api.github.com/repos/PhotonAlpha/blogs/issues/1/comments?client_secret=e5c110e16fd4e61921ae5069c46ec8fca227f20c
        首页 API： List<issues> label：rare
            https://api.github.com/repos/PhotonAlpha/blogs/issues
            https://api.github.com/repos/PhotonAlpha/blogs/issues?labels=rare
        SpringBoot API： 
            https://api.github.com/search/code?q=extension:md+in:path+path:backend/Docker+language:md+repo:photonalpha/blogs
        展示页面
            from 首页：
                data: 
                    https://api.github.com/search/code?q=extension:md+in:path+filename:2018-5-22-第一篇博文+language:md+repo:photonalpha/blogs

                    https://api.github.com/repositories/105626245/git/blobs/5dd67f8766f088f8d33a94a678dfa3160407b05d
                comment: 
                    https://api.github.com/repos/PhotonAlpha/blogs/issues/1/comments?client_id=61bfc53d957e74e78f8f&client_secret=31c61e66cdcc9ada8db2267ee779d0bdafac434c&per_page=50&page=1
            from search：
                data：
                    https://api.github.com/repositories/105626245/git/blobs/5dd67f8766f088f8d33a94a678dfa3160407b05d
                comment: 
                    https://api.github.com/search/issues?q=2018-5-22-第一篇博文+in:title+type:issue+repo:photonalpha/blogs
                    
                    https://api.github.com/repos/PhotonAlpha/blogs/issues/1/comments  



