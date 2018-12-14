<template>
    <div>
        <div class="module">
            <div class="module-tit">
                <img src="../../static/images/2.png" alt="">
                <span>收入</span>
            </div>
            <ul class="module-ul">
                <li class="module-li">
                    <span class="module-li-tit">经营所得</span>
                    <input class="module-li-short" type="text">
                    <span>元</span>
                </li>
            </ul>
        </div>
        <div class="module">
            <div class="module-tit">
                <img src="../../static/images/2.png" alt="">
                <span>扣除及减除项目</span>
            </div>
            <ul class="module-ul">
                <li class="module-li">
                    <span class="module-li-tit">成本费用</span>
                    <input class="module-li-short" type="text">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">弥补以前年度亏损</span>
                    <input class="module-li-short" type="text">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">合伙企业合伙人分配比例</span>
                    <input class="module-li-short" type="text">
                    <span>%</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">投资者减除费用</span>
                    <input class="module-li-short" type="text">
                    <span>元</span>
                </li>
            </ul>
        </div>
        <div class="btn" @click="computerClick">
            计算
        </div>
        <div class="module">
            <div class="module-tit">
                <img src="../../static/images/2.png" alt="">
                <span>计算结果</span>
            </div>
            <ul class="module-ul">
                <li class="module-li">
                    <span class="module-li-tit">计算结果</span>
                    <input class="module-li-short" type="text" readonly>
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">税前收入</span>
                    <input class="module-li-short" type="text" readonly>
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">适用税率</span>
                    <input class="module-li-short" type="text" readonly>
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">应纳税额</span>
                    <input class="module-li-short" type="text" readonly>
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">税后收入</span>
                    <input class="module-li-short" type="text" readonly>
                    <span>元</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'Hi, I am transfer'
            }
        },
        methods:{
            computerClick(){

            }
        },
    }
</script>
<style scoped>
    .module{
        width:100%;
        margin-top: 30px;
        text-align: left;
    }
    .module .module-tit{
        display: inline-block;
        border-bottom: 1px solid #1a96d4;
        padding: 5px 15px 5px 10px;
        font-size:16px;
    }
    .module .module-tit #all{
        width:16px;
        height:16px;
    }
    .module .module-ul{
        width:100%;
        font-size:0;
    }
    .module .module-ul .module-li{
        display: inline-block;
        width:50%;
        height:36px;
        font-size:14px;
        color: #333;
        margin-top:20px;
    }
    .module .module-ul .module-li .module-li-tit{
        display: inline-block;
        width:120px;
        height:100%;
        line-height: 1;
        font-size: 14px;
        margin-left: 20px;
    }
    .module .module-ul .module-li .module-li-short{
        display: inline-block;
        width:320px;
        height:32px;
        line-height: 1;
        font-size:14px;
        text-align: center;
        border: 1px solid #b9e9f2;
    }
    .module .module-ul .module-subheading{
        width:100%;
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
    }
    .module .module-ul .module-subheading span{
        font-size:14px;
        color: #333;
        border-left:1px solid #1a96d4;
        padding-left: 10px;
    }
    .module .module-ul .module-li-choice{
        display: inline-block;
        width:50%;
        height:36px;
        font-size:14px;
        color: #333;
        margin-top:20px;
    }
    .module .module-ul .module-li-choice .choice{
        width:440px;
        height:32px;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 32px;
        color: #333;
        margin-left: 10px;
        cursor: pointer;
    }
    .module .module-ul .module-li-choice .choice-input{
        width:440px;
        height:32px;
        border: 1px solid #b9e9f2;
        text-align: center;
        line-height: 32px;
        color: #333;
        margin-left: 10px;
    }
    .btn{
        display: inline-block;
        width: 224px;
        height: 42px;
        font-size:22px;
        color: #fff;
        background-color: #13b5ea;
        text-align: center;
        line-height: 42px;
        border-radius: 3px;
        margin-top: 40px;
        cursor: pointer;
    }
</style>
