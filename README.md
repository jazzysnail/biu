##  安装 Install

``` bash
hexo init <folder>
cd <folder>
npm install
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
cd themes
git clone https://github.com/jazzysnail/hexo-theme-biu.git
```

##  使用 Usage
修改hexo根目录下 `_config.yml` 的 `theme` 属性配置为 `biu`:
open up `_config.yml` in hexo root directory and set `theme` to `biu`:

``` yaml
theme: biu
```

##  更新 Update

``` bash
cd themes/biu
git pull
```

##  版权 License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2013-2016 Evan You
