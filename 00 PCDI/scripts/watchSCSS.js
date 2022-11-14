const sass = require('sass');
const fs = require('fs');
const chokidar = require("chokidar");

function compileSass() {
    const css = sass.compile('00 PCDI/base/base.scss')
    fs.writeFileSync('0Export/Content/style.css', css.css, 'utf-8')
    console.log('recompiling styles...')
}

function watchSCSS(dir) {
    chokidar.watch(dir).on('all', compileSass)
    console.log('watching styles/...')
}

module.exports = watchSCSS;