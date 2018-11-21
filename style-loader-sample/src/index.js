import './style.css'
import pic from '../images/dot.jpg';

console.log('test');

// インポートした画像リソースをページに反映
// JavaScrip化した画像データは、オリジナルよりもサイズが大きくなる。
// 一定以上のサイズは、そのまま画像ファイルとして出力するようにする。
window.addEventListener('DOMContentLoaded', function() {
  let img = new Image();
  img.src = pic;
  document.body.append(img);
}, false);