# grunt-sjistoutf8

## 概要
Shift-JISのファイルをUTF-8で書きだすプラグイン。

## インストール
```shell
npm install grunt-sjistoutf8 -D
```

## タスクの書き方

1. Gruntfileでプラグインをロード。

```coffee
grunt.loadNpmTasks 'grunt-sjistoutf8'
```

2. タスクを書く

```coffee
sjistoutf8:
  dist:
    expand: true
    cwd   : 'src'
    src   : ['**/*.html']
    dest  : 'build'
    ext   : '.html'
```