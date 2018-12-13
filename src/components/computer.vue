<template>
    <div>
        <header>
            <div class="w">
                <img class="logo" src="../../static/images/logo.png" alt="">
                <a class="register" href="#">注册</a>
                <a class="login" href="#">登录</a>
            </div>
        </header>
        <nav>
            <div class="w">
                <ul class="nav-ul">
                    <li class="nav-li"><a href="#">首页</a></li>
                    <li class="nav-li"><a href="#">产品</a></li>
                    <li class="nav-li"><a href="#">服务</a></li>
                    <li class="nav-li"><a href="#">咨询</a></li>
                    <li class="nav-li"><a href="#">安全</a></li>
                    <li class="nav-li"><a href="#">合作</a></li>
                    <li class="nav-li current"><a href="#">个税</a></li>
                </ul>
                <div class="tel">
                    <img src="../../static/images/10.png" alt="">
                    <div><a href="tel:400-6166-458">400-6166-458</a></div>
                </div>
            </div>
        </nav>
        <div class="content">
            <div class="banner"></div>
            <div class="w">
                <div class="main">
                    <h2>个人所得税计算</h2>
                    <ul class="main-ul">
                        <li class="main-li current">
                            <p class="main-li-tit cf">
                                <img class="icon" src="../../static/images/bais2.png" alt="">
                                <span class="title-name">综合所得</span>
                            </p>
                            <p class="main-li-content">工资、年终奖、劳务</p>
                        </li>
                        <li class="main-li">
                            <p class="main-li-tit cf">
                                <img class="icon" src="../../static/images/bais1.png" alt="">
                                <span class="title-name">生产经营所得</span>
                            </p>
                            <p class="main-li-content">个体工商户、合伙企业、个人独资企业</p>
                        </li>
                        <li class="main-li">
                            <p class="main-li-tit cf">
                                <img class="icon" src="../../static/images/bais1.png" alt="">
                                <span class="title-name">财产租赁所得</span>
                            </p>
                            <p class="main-li-content">租房、租车、租设备</p>
                        </li>
                        <li class="main-li">
                            <p class="main-li-tit cf">
                                <img class="icon" src="../../static/images/bais1.png" alt="">
                                <span class="title-name">利息、股息、红利所得</span>
                            </p>
                        </li>
                        <li class="main-li">
                            <p class="main-li-tit cf">
                                <img class="icon" src="../../static/images/bais1.png" alt="">
                                <span class="title-name">财产转让所得</span>
                            </p>
                        </li>
                        <li class="main-li">
                            <p class="main-li-tit cf">
                                <img class="icon" src="../../static/images/bais1.png" alt="">
                                <span class="title-name">偶然所得</span>
                            </p>
                        </li>
                    </ul>
                    <div class="module">
                        <div class="module-tit">
                            <img src="../../static/images/2.png" alt="">
                            <span>收入</span>
                        </div>
                        <ul class="module-ul">
                            <li class="module-li">
                                <span class="module-li-tit">税前工资（月）</span>
                                <input class="module-li-short" type="text">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <footer>

        </footer>
    </div>
</template>

<script>
    export default {

    }
</script>
<style scoped>
    .w{
        width:1200px;
        margin: 0 auto;
        position: relative;
    }
    header{
        width:100%;
        height:45px;
        background-color: #32465a;
        position: relative;
    }
    header .logo{
        display: inline-block;
        margin-top: 2px;
    }
    header .login{
        margin-top: 10px;
        width: 68px;
        height: 26px;
        color: #fff;
        background-color: #27c229;
        border-radius: 3px;
        display: inline-block;
        line-height: 26px;
        text-align: center;
        float: right;
        cursor: pointer;
        margin-right: 20px;
        font-size:16px;
        text-decoration: none;
    }
    header .register{
        margin-top: 10px;
        width: 66px;
        height: 24px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 3px;
        display: inline-block;
        line-height: 26px;
        text-align: center;
        float: right;
        cursor: pointer;
        margin-right: 20px;
        font-size:16px;
        text-decoration: none;
    }
    header .login:active{
        background-color: #27cd29;
    }
    header .register:active{
        background-color: #fff;
        color: #294962;
    }
    nav{
        width:100%;
        height:45px;
        background-color: #fff;
        box-shadow: 0px 4px 30px -10px #ccc;
    }
    nav .nav-ul{
        display: inline-block;
        height:45px;
    }
    nav .nav-ul .nav-li{
        display: inline-block;
        width: 66px;
        height: 45px;
        line-height: 45px;
        margin-right: 34px;
        cursor: pointer;
    }
    nav .nav-ul .nav-li a{
        display: inline-block;
        width:100%;
        height:100%;
        color: #32465a;
        text-align: center;
        font-size: 16px;
        text-decoration: none;
    }
    nav .nav-ul .nav-li a:hover{
        background-color: #1a96d4;
        color: #fff;
    }
    nav .nav-ul .current a{
        background-color: #1a96d4;
        color: #fff;
    }
    nav .tel{
        display: inline-block;
        height:45px;
        float: right;
    }
    nav .tel img{
        width:35px;
        height:35px;
        margin-top: 5px;
        margin-right: 30px;
    }
    nav .tel div{
        display: inline-block;
        width:160px;
        height:45px;
    }
    nav .tel div a{
        display: inline-block;
        height:45px;
        font-size:20px;
        color: #1a96d4;
        text-decoration: none;
        vertical-align: middle;
    }
    .content{
        width:100%;
        text-align: center;
    }
    .content .banner{
        display: inline-block;
        width:100%;
        height:228px;
        background: url("../../static/images/banner.png") no-repeat center;
    }
    .content .main{
        display: inline-block;
        width:972px;
        height:2000px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0px 0px 15px 0px #ccc;
        position: absolute;
        top:-43px;
        left:56px;
        padding: 0px 58px;
        text-align: left;
    }
    .content .main h2{
        font-size:24px;
        color: #333;
        margin: 36px 0px 16px;
        text-align: center;
    }
    .content .main .main-ul{
        width:100%;
    }
    .content .main .main-ul .main-li{
        display: inline-block;
        width:311px;
        border: 1px solid #b6ddee;
        background-color: #fff;
        text-align: center;
        padding: 26px 0;
        margin-top: 20px;
        cursor: pointer;
    }
    .content .main .main-ul .current{
        background-color: #b6ddee;
    }
    .content .main .main-ul .main-li .main-li-tit{
        display: inline-block;
        width:100%;
        height:43px;
        line-height: 43px;
    }
    .content .main .main-ul .main-li .main-li-tit .icon{
        display:inline-block;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
    }
    .content .main .main-ul .main-li .main-li-tit .title-name{
        display: inline-block;
        height:43px;
        font-size:18px;
        color: #333;
    }
    .content .main .main-ul .main-li .main-li-content{
        color: #666;
        font-size:14px;
        margin-top: 16px;
    }
    .content .module{
        width:100%;
        margin-top: 30px;
    }
    .content .module .module-tit{
        display: inline-block;
        border-bottom: 1px solid #1a96d4;
        padding: 5px 15px 5px 10px;
    }
    .content .module .module-ul{
        width:100%;
        margin-top: 18px;
        font-size:0;
    }
    .content .module .module-ul .module-li{
        display: inline-block;
        width:50%;
        height:36px;
        font-size:14px;
        color: #333;
    }
    .content .module .module-ul .module-li .module-li-tit{
        display: inline-block;
        width:140px;
        height:100%;
        line-height: 1;
    }
    .content .module .module-ul .module-li .module-li-short{
        display: inline-block;
        width:330px;
        height:32px;
        line-height: 1;
    }
</style>

