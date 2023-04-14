
function loadAsyncScript(src, callback = function () {}) { // 同步加载js
  const head = document.getElementsByTagName('head')[0];
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', src);
  script.setAttribute('async', true);
  script.setAttribute('defer', true);
  head.appendChild(script);

  if (script.readyState) { // ie
      script.onreadystatechange = function () {
          var state = this.readyState;
          if (state === 'loaded' || state === 'complete') {
              callback();
          }
      }
  } else {
      script.onload = function () {
          callback();
      }
  }
}
loadAsyncScript('https://cdn.bootcdn.net/ajax/libs/vConsole/3.9.0/vconsole.min.js',function(){
var vConsole = new VConsole();
  console.log('Hello world');
});
