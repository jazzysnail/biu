## 安装

``` bash
hexo init <folder>
cd <folder>
npm install
npm install --save hexo-renderer-jade hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive
cd themes
git clone https://github.com/jazzysnail/hexo-theme-biu.git
```

## 使用

修改hexo根目录下 `_config.yml` 的 `theme` 属性配置为 `biu`:

``` yaml
theme: biu
```

## 更新

``` bash
cd themes/biu
git pull
```

## License

MIT
