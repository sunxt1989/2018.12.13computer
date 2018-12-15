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
                    <ul class="main-ul cf">
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
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-1{
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-2{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-2{
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-3{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-3{
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-4{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-4{
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-5{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-5{
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li .main-li-tit .icon-6{
        display:inline-block;
        width:43px;
        height:43px;
        vertical-align: middle;
        margin-right: 14px;
        background: url("../../static/images/10.png") no-repeat;
    }
    .content .main .main-ul .main-li.current .main-li-tit .icon-6{
        background: url("../../static/images/10.png") no-repeat;
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
    @media screen and (max-width:768px) {
        body {
            width:100%;
            font-size: 0.14rem;
        }
        .w{
            width:6rem;
        }
        header{
            height:0.6rem;
        }
        header .logo{
            width:0.5rem;
            height:0.5rem;
            margin-top: 0.02rem;
        }
        header .login{
            margin-top: 0.1rem;
            width: 0.68rem;
            height: 0.4rem;
            line-height: 0.4rem;
            margin-right: 0.2rem;
            font-size:0.16rem;
        }
        header .register{
            margin-top: 0.1rem;
            width: 0.68rem;
            height: 0.4rem;
            line-height: 0.4rem;
            margin-right: 0.2rem;
            font-size:0.16rem;
        }
        nav{
            width:100%;
            height:0.6rem;
        }
        nav .nav-ul{
            height:0.6rem;
        }
        nav .nav-ul .nav-li{
            width: 0.6rem;
            height: 0.6rem;
            line-height: 0.6rem;
            margin-right: 0rem;
        }
        nav .nav-ul .nav-li a{
            display: inline-block;
            width:0.6rem;
            height:0.6rem;
            font-size: 0.2rem;
            vertical-align: top;
        }
        nav .tel{
            width:1rem;
            height:0.6rem;
            display: block;
            position: relative;
            text-align: right;
            top:0rem;
            right: 0rem;
        }
        nav .tel img{
            width:0.4rem;
            height:0.4rem;
            position: absolute;
            top:0.1rem;
            left: 0.5rem;
            margin-top: 0;
            margin-right: 0
        }
        nav .tel div{
            display: none;
            text-align: center;
            width: 1.6rem;
            height: 0.3rem;
            position: absolute;
            top: 0.6rem;
            right: 0rem;
            background-color: #fff;
            border: 1px solid #ccc;
        }
        nav .tel div a{
            height:0.6rem;
            font-size:0.2rem;
            color: #1a96d4;
            text-decoration: none;
            vertical-align: middle;
        }
        nav .tel span{
            width:1.6rem;
            font-size:0.18rem;
            color: #1a96d4;
            position: absolute;
            top:0.2rem;
            right: 0rem;
        }
        .content .banner{
            width:100%;
            height:2rem;
            background: url("../../static/images/banner.png") no-repeat center;
            background-size: 200%;
        }
        .content .main{
            width:5.8rem;
            border-radius: 5px;
            padding: 0px 0.1rem 0.3rem;
            text-align: center;
            margin-top: -0.43rem;
            margin-bottom: 0.30rem;
        }
        .content .main h2{
            font-size:0.24rem;
            margin: 0.36rem 0rem 0.16rem;
        }
        .content .main .main-ul .main-li{
            width: 2.7rem;
            height: 1rem;
            padding: 0.06rem 0;
            margin-top: 0.2rem;
            margin-right: 0.1rem;
            float: left;
        }
        .content .main .main-ul .main-li .main-li-tit{
            height:0.43rem;
            line-height: 0.43rem;
        }

        .content .main .main-ul .main-li .main-li-tit .icon-1{
            width:0.43rem;
            height:0.43rem;
            margin-right: 0.14rem;
            background-size: 100%;
        }
        .content .main .main-ul .main-li .main-li-tit .icon-2{
            width:0.43rem;
            height:0.43rem;
            margin-right: 0.14rem;
            background-size: 100%;
        }
        .content .main .main-ul .main-li .main-li-tit .icon-3{
            width:0.43rem;
            height:0.43rem;
            margin-right: 0.14rem;
            background-size: 100%;
        }
        .content .main .main-ul .main-li .main-li-tit .icon-4{
            width:0.43rem;
            height:0.43rem;
            margin-right: 0.14rem;
            background-size: 100%;
        }
        .content .main .main-ul .main-li .main-li-tit .icon-5{
            width:0.43rem;
            height:0.43rem;
            margin-right: 0.14rem;
             background-size: 100%;
        }
        .content .main .main-ul .main-li .main-li-tit .icon-6{
            width:0.43rem;
            height:0.43rem;
            margin-right: 0.14rem;
             background-size: 100%;
        }
        .content .main .main-ul .main-li.current .main-li-tit .icon-1{
            background-size: 100%;
        }
        .content .main .main-ul .main-li.current .main-li-tit .icon-2{
            background-size: 100%;
        }
        .content .main .main-ul .main-li.current .main-li-tit .icon-3{
            background-size: 100%;
        }
        .content .main .main-ul .main-li.current .main-li-tit .icon-4{
            background-size: 100%;
        }
        .content .main .main-ul .main-li.current .main-li-tit .icon-5{
            background-size: 100%;
        }
        .content .main .main-ul .main-li.current .main-li-tit .icon-6{
            background-size: 100%;
        }

        .content .main .main-ul .main-li .main-li-tit .title-name{
            height:0.43rem;
            font-size:0.18rem;
        }
        .content .main .main-ul .main-li .main-li-content{
            font-size:0.14rem;
            margin-top: 0rem;
        }
        footer{
            width:100%;
            height:2.6rem;
            background-color: #2b3b4c;
            display: block;
        }

        footer .left{
            width:22%;
            border-right: 0.01rem solid #fff;
            height:1.5rem;
            display: inline-block;
            float: left;
            margin-top: 0.3rem;
            color: #fff;
        }
        footer .left .left-h1{
            margin-top: 0rem;
            font-size:0.16rem;
        }
        footer .left p{
            margin-top: 0.03rem;
            margin-left: 0.1rem;
        }
        footer .left a{
            font-size:0.12rem;
            color: #fff;
            text-decoration: none;
        }

        footer .content{
            width:55%;
            height:1.5rem;
            display: inline-block;
            margin-top: 0.30rem;
            text-align: center;
            color: #fff;
        }
        footer .content .content-h1{
            margin-top: 0rem;
            font-size:0.16rem;
        }
        footer .content p{
            margin-top: 0.08rem;
            font-size:0.12rem;
        }

        footer .right{
            width:22%;
            border-left: 0.01rem solid #fff;
            height:1.5rem;
            display: inline-block;
            float: right;
            margin-top: 0.30rem;
            color: #fff;
        }
        footer .right .right-h1{
            margin-top: 0rem;
            margin-left: 20%;
            font-size:0.16rem;
        }
        footer .right img{
            width:1.3rem;
            margin-top: 0.10rem;
            margin-left: 15%;
        }
        footer span{
            color: #fff;
            display: inline-block;
            width: 100%;
            font-size: 0.12rem;
            text-align: center;
            margin-top: 0.5rem;
        }
    }
</style>

