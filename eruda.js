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
body = body.replace("</head>", `<script src="https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/eruda/2.4.1/eruda.min.js"></script><script>eruda.init();;(function () {
    'use strict'
    function $$(el) {
        return document.querySelector(el)
    }
    /**
   * example:
   * addNewStyle('.box {height: 100px !important;}')
   *
   * @param {*} newStyle string
   */
    function addNewStyle(newStyle) {
        var styleElement = document.getElementById('styles_js')

        if (!styleElement) {
            styleElement = document.createElement('style')
            styleElement.type = 'text/css'
            styleElement.id = 'styles_js'
            document.getElementsByTagName('head')[0].appendChild(styleElement)
        }

        styleElement.appendChild(document.createTextNode(newStyle))
    }
    /**
 *example:
 *setClassStyle('div[id^="stage-"]', function (el) {
      el.style = 'width:400px;'
    })
 * 
 * @param {*} classNameStr
 * @param {*} cb
 */
    function setClassStyle(classNameStr, cb) {
        document.querySelectorAll(classNameStr).forEach((el) => {
            cb && cb(el)
        })
    }


    document.addEventListener('dblclick', function () {
        //setTimeout(scrollToBottom, 100);
    })
    $(document.body).append('<buttton id="loadAll">文件列表加载全部</button>');//<buttton id="toTop">回顶部</button>
    $('#loadAll').on('click',function(){
        setTimeout(scrollToBottom, 100);
    });
    $('#toTop').on('click',function(){
        document.querySelector('.content-container__3NX7D').scrollTo(0,0);
    });
    // Your code here...
    addNewStyle(`#loadAll {    position: absolute;
    right: 42px;
    top: 80px;
    z-index: 9999999;
    background: #f00;
    cursor:pointer;
    color:#fff;
    padding: 10px;
    border-radius: 6px;}
    #toTop {
        margin-left:20px;
    }
    #layout > div.ant-alert.ant-alert-info.ant-alert-with-description.ant-alert-plain.ant-alert-with-icon.bind-wechat-alert-25L0S7PmA_ {
    display:none;
    }`);

    var timer1 = setInterval(function(){
        console.log(111);
        $('.ant-alert-close-icon').click();
        if($('.ant-alert-close-icon').length==0){
           clearInterval(timer1);
        }
    },1000)


    function scrollToBottom() {
        const domWrapper = document.querySelector('.content-container__3NX7D'); // 外层容器 出现滚动条的dom
        (function smoothscroll() {
            const currentScroll = domWrapper.scrollTop;   // 已经被卷掉的高度
            const clientHeight = domWrapper.offsetHeight; // 容器高度
            const scrollHeight = domWrapper.scrollHeight; // 内容总高度
            if (scrollHeight - 10 > currentScroll + clientHeight) {
                window.requestAnimationFrame(smoothscroll);
                domWrapper.scrollTo(0, currentScroll + (scrollHeight - currentScroll - clientHeight) / 2);
            }
        })();
    }
})()</script></head>`);
$done({body});
