var path   = require('path');
var fs     = require('fs');
var Iconv  = require('iconv').Iconv;
var conv   = new Iconv('SHIFT_JIS', 'UTF-8');

module.exports = function( grunt ) {

  grunt.registerMultiTask('sjistoutf8', 'convert SJIS to UTF8', function(){

    // ファイルの存在チェック
    var checkFile = function(src) {
      if (!grunt.file.exists(src)) {
        grunt.log.error( "Source file \"" + src + "\" not fount." );
        return false;
      }
      return true;
    };

    // 実行
    this.files.forEach(function(_file){

      var file = _file;
      var src  = file.src[0];
      var dest = file.dest;

      // ファイルの存在チェック
      if (!checkFile(src)) return;

      // コンバート実行
      var encoded = conv.convert(fs.readFileSync(src));
      grunt.file.write(file.dest, encoded);
      conv.convert(src);
      grunt.log.ok( src + ': converted to ' + dest );

    });

  });
};