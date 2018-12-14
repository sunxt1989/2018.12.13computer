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
                        <router-link to="/comprehensiveIncome" @click.native="switchClick(1)" :class="{current:isCurrent == 1}" tag="li" class="main-li" >
                            <p class="main-li-tit cf">
                                <span class="icon-1"></span>
                                <span :class="{white:isCurrent == 1}" class="title-name">综合所得</span>
                            </p>
                            <p :class="{white:isCurrent == 1}" class="main-li-content">工资、年终奖、劳务</p>
                        </router-link>
                        <router-link to="/production" @click.native="switchClick(2)" :class="{current:isCurrent == 2}" tag="li" class="main-li">
                            <p class="main-li-tit cf">
                                <span class="icon-2"></span>
                                <span :class="{white:isCurrent == 2}" class="title-name">生产经营所得</span>
                            </p>
                            <p :class="{white:isCurrent == 2}" class="main-li-content">个体工商户、合伙企业、个人独资企业</p>
                        </router-link>
                        <router-link to="/lease" @click.native="switchClick(3)" :class="{current:isCurrent == 3}" tag="li" class="main-li">
                            <p class="main-li-tit cf">
                                <span class="icon-3"></span>
                                <span :class="{white:isCurrent == 3}" class="title-name">财产租赁所得</span>
                            </p>
                            <p :class="{white:isCurrent == 3}" class="main-li-content">租房、租车、租设备</p>
                        </router-link>
                         <router-link to="/interest" @click.native="switchClick(4)" :class="{current:isCurrent == 4}" tag="li" class="main-li">
                            <p class="main-li-tit cf">
                                <span class="icon-4"></span>
                                <span :class="{white:isCurrent == 4}" class="title-name">利息、股息、红利所得</span>
                            </p>
                        </router-link>
                         <router-link to="/transfer" @click.native="switchClick(5)" :class="{current:isCurrent == 5}" tag="li" class="main-li">
                            <p class="main-li-tit cf">
                                <span class="icon-5"></span>
                                <span :class="{white:isCurrent == 5}" class="title-name">财产转让所得</span>
                            </p>
                        </router-link>
                         <router-link to="/accidental" @click.native="switchClick(6)" :class="{current:isCurrent == 6}" tag="li" class="main-li">
                            <p class="main-li-tit cf">
                                <span class="icon-6"></span>
                                <span :class="{white:isCurrent == 6}" class="title-name">偶然所得</span>
                            </p>
                        </router-link>
                    </ul>
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <footer>
            <div class="w">
                <div class="left">
                    <p class="left-h1">友情链接</p>
                    <p><a href="#">九鼎集团官网</a></p>
                    <p><a href="#">云会计云服务</a></p>
                    <p><a href="#">钱包行云</a></p>
                    <p><a href="#">南昊教育</a></p>
                </div>
                <div class="content">
                    <p class="content-h1">联系我们</p>
                    <p>名称：云会计联盟（北京）科技有限公司</p>
                    <p>地址：北京学清路科技财富中心8号院502B</p>
                    <p>电话：010-53683512</p>
                    <p>邮箱：ykj@cloudaccounting.cn</p>
                </div>
                <div class="right">
                    <p class="right-h1">官方微信</p>
                    <img src="../../static/images/11.png" alt="">
                </div>
                <span>Copyright 2015-2017 云会计科技联盟有限公司  京ICP备17043046号</span>
            </div>
        </footer>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        data(){
            return{
                isCurrent:'',//
            }
        },
        methods:{
            switchClick(n){
                this.isCurrent = String(n);
            }
        },
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
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0px 0px 15px 0px #ccc;
        padding: 0px 58px 30px;
        text-align: center;
        margin-top: -43px;
        margin-bottom: 30px;
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
    .content .main .main-ul .main-li .main-li-tit .icon-1{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/img1.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-1{
        background: url("../../static/images/img1w.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-2{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/img2.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-2{
        background: url("../../static/images/img2w.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-3{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/img3.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-3{
        background: url("../../static/images/img3w.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-4{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/img4.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-4{
        background: url("../../static/images/img4w.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-5{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/img5.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-5{
        background: url("../../static/images/img5w.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-6{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/img6.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-6{
        background: url("../../static/images/img6w.png") no-repeat;
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
    .content .main .main-ul .current{
        background-color: #b6ddee;
    }
    .content .w .main .main-ul .main-li .white{
        color: #fff;
    }
    footer{
        width:100%;
        height:220px;
        background-color: #2b3b4c;
    }

    footer .left{
        width:30%;
        border-right: 1px solid #fff;
        height:100px;
        display: inline-block;
        float: left;
        margin-top: 30px;
        color: #fff;
    }
    footer .left .left-h1{
        margin-top: 0px;
        font-size:16px;
    }
    footer .left p{
        margin-top: 8px;
        margin-left: 60%;
    }
    footer .left a{
        font-size:12px;
        color: #fff;
        text-decoration: none;
    }

    footer .content{
        width:39%;
        height:100px;
        display: inline-block;
        margin-top: 30px;
        text-align: center;
        color: #fff;
    }
    footer .content .content-h1{
        margin-top: 0px;
        font-size:16px;
    }
    footer .content p{
        margin-top: 8px;
        font-size:12px;
    }

    footer .right{
        width:30%;
        border-left: 1px solid #fff;
        height:100px;
        display: inline-block;
        float: right;
        margin-top: 30px;
        color: #fff;
    }
    footer .right .right-h1{
        margin-top: 0px;
        margin-left: 20%;
        font-size:16px;
    }
    footer .right img{
        margin-top: 10px;
        margin-left: 15%;
    }
    footer span{
        color: #fff;
        display: inline-block;
        width: 100%;
        font-size: 12px;
        text-align: center;
        margin-top: 50px;
    }
</style>

