<template>
    <div>
        <div class="module">
            <div class="module-tit">
                <img src="../../static/images/2.png" alt="">
                <span>收入</span>
            </div>
            <ul class="module-ul">
                <li class="module-li">
                    <span class="module-li-tit">偶然所得</span>
                    <input v-model.number="accidental" class="module-li-short" type="number">
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
                    <span class="module-li-tit">实际捐赠额</span>
                    <input v-model.number="donation" class="module-li-short" type="number">
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
                    <span class="module-li-tit">税前收入</span>
                    <input v-model="beforeIncome" class="module-li-short" type="number" readonly>
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">应纳税额</span>
                    <input v-model="taxAmount" class="module-li-short" type="number" readonly>
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">税后收入</span>
                    <input v-model="afterIncome" class="module-li-short" type="number" readonly>
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
                accidental:'',//偶然所得
                donation:'',//捐赠
                beforeIncome:'',//税前收入
                taxAmount:'',//应纳税额
                afterIncome:'',//税后收入
            }
        },
        methods:{
            computerClick(){
                let accidental = Number(parseFloat(this.accidental).toFixed(2)) > 0 ? Number(parseFloat(this.accidental).toFixed(2)) : 0 //偶然所得
                let donation = Number(parseFloat(this.donation).toFixed(2)) > 0 ? Number(parseFloat(this.donation).toFixed(2)) : 0 //偶然所得


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
    @media screen and (max-width:768px) {
        .module{
            width:100%;
            margin-top: 0.1rem;
        }
        .module .module-tit{
            display: inline-block;
            border-bottom: 1px solid #1a96d4;
            padding: 0.05rem 0.15rem 0.05rem 0.1rem;
            font-size:0.3rem;
        }
        .module .module-tit img{
            width:0.3rem;
            height:0.3rem;
        }
        .module .module-tit #all{
            width:0.3rem;
            height:0.3rem;
        }
        .module .module-ul{
            width:100%;
            font-size:0;
        }
        .module .module-ul .module-li{
            display: inline-block;
            width:100%;
            height:0.6rem;
            font-size:0.24rem;
            margin-top:0.2rem;
        }
        .module .module-ul .module-li .module-li-tit{
            display: inline-block;
            width:2rem;
            height:100%;
            font-size: 0.24rem;
            margin-left: 0rem;
        }
        .module .module-ul .module-li .module-li-short{
            display: inline-block;
            width:3rem;
            height:100%;
            font-size:0.24rem;
            border: 1px solid #b9e9f2;
        }
        .module .module-ul .module-subheading{
            width:100%;
            border-bottom: 1px solid #ccc;
            padding: 0.2rem 0;
        }
        .module .module-ul .module-subheading span{
            font-size:0.24rem;
            padding-left: 0.2rem;
        }
        .module .module-ul .module-li-choice{
            display: inline-block;
            width:100%;
            height:0.6rem;
            font-size:0.24rem;
            margin-top:0.2rem;
        }
        .module .module-ul .module-li-choice .choice{
            width:90%;
            height:0.6rem;
            text-align: center;
            line-height: 0.6rem;
            cursor: pointer;
            margin-left: 5%;
        }
        .module .module-ul .module-li-choice .choice-input{
            width:90%;
            height:0.6rem;
            text-align: center;
            line-height: 0.6rem;
            margin-left: 5%;
            padding: 0;
        }
        .module .module-ul .module-li-choice .choice.selected{
            border: 1px solid #1a96d4;
            color: #1a96d4;
            background-color: #d1edf8;
        }
        .btn{
            display: inline-block;
            width: 2rem;
            height: 0.6rem;
            font-size:0.36rem;
            line-height: 0.6rem;
            margin-top: 0.4rem;
        }
    }
</style>

