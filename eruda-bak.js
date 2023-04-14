/*
生效条件-----------
1. 开启http数据抓取
2. 找到MitM项，生成证书（https证书）,安装并信任
生效条件----------- end

添加QX重写规则
类型：script-response-body
匹配的URL：^https?:\/\/.*
脚本路径：https://raw.githubusercontent.com/winner800/QX/main/eruda.js
*/
var body = $response.body;
body = body.replace("</head>", `<script>function loadAsyncScript(src,callback=function(){}){const head=document.getElementsByTagName('head')[0];const script=document.createElement('script');script.setAttribute('type','text/javascript');script.setAttribute('src',src);script.setAttribute('async',true);script.setAttribute('defer',true);head.appendChild(script);if(script.readyState){script.onreadystatechange=function(){var state=this.readyState;if(state==='loaded'||state==='complete'){callback()}}}else{script.onload=function(){callback()}}}loadAsyncScript('https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/eruda/2.4.1/eruda.min.js',function(){eruda.init();});</script></head>`);
$done({body});
