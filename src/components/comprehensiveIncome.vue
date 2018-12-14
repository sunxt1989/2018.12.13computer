<template>
    <div>
        <div class="module">
            <div class="module-tit">
                <img src="../../static/images/2.png" alt="">
                <span>收入</span>
            </div>
            <ul class="module-ul">
                <li class="module-li">
                    <span class="module-li-tit">税前工资（月）</span>
                    <input v-model.number="gongzi" class="module-li-short" type="number">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">年终奖</span>
                    <input v-model.number="nianzhongjiang" class="module-li-short" type="number">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">劳务报酬（兼职）</span>
                    <input v-model.number="laowubaochou" class="module-li-short" type="number">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">稿酬</span>
                    <input v-model.number="gaochou" class="module-li-short" type="number">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">特许权使用费</span>
                    <input v-model.number="texu" class="module-li-short" type="number">
                    <span>元</span>
                </li>
            </ul>
        </div>
        <div class="module">
            <div class="module-tit">
                <img src="../../static/images/2.png" alt="">
                <span>五险一金</span>
                <input v-model.number="allCheckbox" id="all" type="checkbox">
                <label for="all">总数</label>
            </div>
            <ul class="module-ul">
                <li class="module-li">
                    <span class="module-li-tit">基本养老保险</span>
                    <input v-model.number="jbyanglao" class="module-li-short" type="number" :disabled="allCheckbox">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">补充养老保险</span>
                    <input v-model.number="bcyanglao" class="module-li-short" type="number" :disabled="allCheckbox">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">基本医疗保险</span>
                    <input v-model.number="jbyiliao" class="module-li-short" type="number" :disabled="allCheckbox">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">补充医疗保险</span>
                    <input v-model.number="bcyiliao" class="module-li-short" type="number" :disabled="allCheckbox">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">失业保险</span>
                    <input v-model.number="shiye" class="module-li-short" type="number" :disabled="allCheckbox">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">住房公积金</span>
                    <input v-model.number="gongjijin" class="module-li-short" type="number" :disabled="allCheckbox">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">总数</span>
                    <input v-model.number="allNum" class="module-li-short" type="number">
                    <span>元</span>
                </li>
            </ul>
        </div>
        <div class="module">
            <div class="module-tit">
                <img src="../../static/images/2.png" alt="">
                <span>专项附加扣除</span>
            </div>
            <ul class="module-ul">
                <li class="module-subheading">
                    <span>子女教育人数</span>
                </li>
                <li class="module-li-choice">
                    <div @click="isSingle = !isSingle" :class="{selected : isSingle}" class="choice" >
                        单个子女1000/月
                    </div>
                </li>
                <li class="module-li-choice">
                    <input v-model.number="childNum" @change="childNumChange" class='choice-input' type="number" placeholder="请输入子女个数">
                </li>
                <li class="module-li-choice">
                    <div @click="isWhole = !isWhole;isHalf = !isWhole" :class="{selected : isWhole}" class="choice">
                        夫妻一方扣除100%
                    </div>
                </li>
                <li class="module-li-choice">
                    <div @click="isHalf = !isHalf;isWhole = !isHalf " :class="{selected : isHalf}" class="choice">
                        夫妻各扣除50%
                    </div>
                </li>
                <li class="module-subheading">
                    <span>继续教育</span>
                </li>
                <li class="module-li-choice">
                    <div @click="isEducation = !isEducation" :class="{selected : isEducation}" class="choice">
                        学历教育
                    </div>
                </li>
                <li class="module-li-choice">
                    <div @click="isOccupation = !isOccupation" :class="{selected : isOccupation}" class="choice">
                        职业资格教育
                    </div>
                </li>
                <li class="module-subheading">
                    <span>房贷/租房</span>
                </li>
                <li class="module-li-choice">
                    <div @click="isHousingLoan = !isHousingLoan" :class="{selected : isHousingLoan}" class="choice">
                        填写首套住房贷款利息
                    </div>
                </li>
                <li class="module-li-choice">
                    <div @click="isCity = !isCity" :class="{selected : isCity}" class="choice">
                        直辖市、省会城市
                    </div>
                </li>
                <li class="module-li-choice">
                    <div @click="isExceedMillion = !isExceedMillion" :class="{selected : isExceedMillion}" class="choice">
                        市辖区户籍人口超过100万
                    </div>
                </li>
                <li class="module-li-choice">
                    <div @click="unExceedMillion = !unExceedMillion" :class="{selected : unExceedMillion}" class="choice">
                        市辖区人口不超过100万（含）
                    </div>
                </li>
                <li class="module-subheading">
                    <span>赡养老人（60岁以上）</span>
                </li>
                <li class="module-li-choice">
                    <div @click="isOne = !isOne" :class="{selected : isOne}" class="choice">
                        独生子女
                    </div>
                </li>
                <li class="module-li-choice">
                    <div @click="unOne = !unOne" :class="{selected : unOne}" class="choice">
                        非独生子女
                    </div>
                </li>
                <li class="module-li-choice">
                    <input v-model.number="unOnlyMoney" class='choice-input' type="number" placeholder="选择非独生子女，请输入金额">
                </li>
            </ul>
        </div>
        <div class="module">
            <div class="module-tit">
                <img src="../../static/images/2.png" alt="">
                <span>其他扣除</span>
            </div>
            <ul class="module-ul">
                <li class="module-li">
                    <span class="module-li-tit">免税所得</span>
                    <input v-model.number="mianshuisuode" class="module-li-short" type="number">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">商业健康保险</span>
                    <input v-model.number="shangyejaingkang" class="module-li-short" type="number">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">捐赠</span>
                    <input v-model.number="juanzeng" class="module-li-short" type="number">
                    <span>元</span>
                </li>
                <li class="module-li">
                    <span class="module-li-tit">其他扣除</span>
                    <input v-model.number="qitakouchu" class="module-li-short" type="number">
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
        data(){
            return{
                gongzi:'0',//税前工资
                nianzhongjiang:'0',//年终奖
                laowubaochou:'0',//劳务报酬
                gaochou:'0',//稿酬
                texu:'0',//特许权使用费
                jbyanglao:'0',//基本养老保险
                bcyanglao:'0',//补充养老保险
                jbyiliao:'0',//基本医疗保险
                bcyiliao:'0',//补充医疗保险
                shiye:'0',//失业保险
                gongjijin:'0',//住房公积金
                allNum:'0',//五险一金总数
                childNum:'',//输入的子女个数
                unOnlyMoney:'',//非独生子女输入金额
                mianshuisuode:'0',//免税所得
                shangyejaingkang:'0',//商业健康
                juanzeng:'0',//捐赠
                qitakouchu:'0',//其他扣除
                allCheckbox:false,//五险一金总数

                isSingle:false,//是否选择单个子女
                isWhole:false,// 夫妻一方扣除100%
                isHalf:true,//夫妻各扣除50%
                isEducation:false,//学历教育
                isOccupation:false,//学历教育

                isHousingLoan:false,//填写首套住房贷款利息
                isCity:false,//直辖市、省会城市
                isExceedMillion:false,//市辖区户籍人口超过100万
                unExceedMillion:false,//市辖区人口不超过100万（含）

                isOne:false,//独生子女
                unOne:false,//非独生子女


                beforeIncome:0,//税前收入
                taxAmount:0,//应纳税额
                afterIncome:0,//税后收入
            }
        },
        watch:{
            isHousingLoan:function(val){
                if(val){
                    this.isCity = false
                    this.isExceedMillion = false
                    this.unExceedMillion = false
                }
            },
            isCity:function(val){
                if(val){
                    this.isHousingLoan = false
                    this.isExceedMillion = false
                    this.unExceedMillion = false
                }
            },
            isExceedMillion:function(val){
                if(val){
                    this.isHousingLoan = false
                    this.isCity = false
                    this.unExceedMillion = false
                }
            },
            unExceedMillion:function(val){
                if(val){
                    this.isHousingLoan = false
                    this.isExceedMillion = false
                    this.isCity = false
                }
            },
            isOne:function(val){
                if(val)this.unOne = false
            },
            unOne:function(val){
                if(val)this.isOne = false
            },
        },
        methods:{
            childNumChange(){
                var str = /^\d+$/;//判断只允许输入正整数
                if(!str.test(this.childNum)){
                    this.childNum = parseFloat(this.childNum).toFixed(0);
                }else{
                }
            },
            computerClick(){
                let gongzi = Number(parseFloat(this.gongzi).toFixed(2)) > 0 ? Number(parseFloat(this.gongzi).toFixed(2)) : 0 //税前工资
                let nianzhongjiang = Number(parseFloat(this.nianzhongjiang).toFixed(2)) > 0 ? Number(parseFloat(this.nianzhongjiang).toFixed(2)) : 0//年终奖
                let laowubaochou = Number(parseFloat(this.laowubaochou).toFixed(2)) > 0 ? Number(parseFloat(this.laowubaochou).toFixed(2)) : 0//劳务报酬
                let gaochou = Number(parseFloat(this.gaochou).toFixed(2)) > 0 ? Number(parseFloat(this.gaochou).toFixed(2)) : 0//稿酬
                let texu = Number(parseFloat(this.texu).toFixed(2)) > 0 ? Number(parseFloat(this.texu).toFixed(2)) : 0//特许权使用费
                let jbyanglao = Number(parseFloat(this.jbyanglao).toFixed(2)) > 0 ? Number(parseFloat(this.jbyanglao).toFixed(2)) : 0//基本养老保险
                let bcyanglao = Number(parseFloat(this.bcyanglao).toFixed(2)) > 0 ? Number(parseFloat(this.bcyanglao).toFixed(2)) : 0//补充养老保险
                let jbyiliao = Number(parseFloat(this.jbyiliao).toFixed(2)) > 0 ? Number(parseFloat(this.jbyiliao).toFixed(2)) : 0//基本医疗保险
                let bcyiliao = Number(parseFloat(this.bcyiliao).toFixed(2)) > 0 ? Number(parseFloat(this.bcyiliao).toFixed(2)) : 0//补充医疗保险
                let shiye = Number(parseFloat(this.shiye).toFixed(2)) > 0 ? Number(parseFloat(this.shiye).toFixed(2)) : 0//失业保险
                let gongjijin = Number(parseFloat(this.gongjijin).toFixed(2)) > 0 ? Number(parseFloat(this.gongjijin).toFixed(2)) : 0//住房公积金
                let allNum = Number(parseFloat(this.allNum).toFixed(2)) > 0 ? Number(parseFloat(this.allNum).toFixed(2)) : 0//五险一金总数
                let childNum = Number(this.childNum) > 0 ? Number(this.childNum) : 0//输入的子女个数
                let unOnlyMoney = Number(parseFloat(this.unOnlyMoney).toFixed(2)) > 0 ? Number(parseFloat(this.unOnlyMoney).toFixed(2)) : 0//非独生子女输入金额
                let mianshuisuode = Number(parseFloat(this.mianshuisuode).toFixed(2)) > 0 ? Number(parseFloat(this.mianshuisuode).toFixed(2)) : 0//免税所得
                let shangyejaingkang = Number(parseFloat(this.shangyejaingkang).toFixed(2)) > 0 ? Number(parseFloat(this.shangyejaingkang).toFixed(2)) : 0//商业健康
                let juanzeng = Number(parseFloat(this.juanzeng).toFixed(2)) > 0 ? Number(parseFloat(this.juanzeng).toFixed(2)) : 0//捐赠
                let qitakouchu = Number(parseFloat(this.qitakouchu).toFixed(2)) > 0 ? Number(parseFloat(this.qitakouchu).toFixed(2)) : 0//其他扣除
                let wuxianyijin = 0;//五险一金合计
                let singleMoney = 0//子女教育人数
                let educationMoney = 0//继续教育
                let roomRate = 0//房贷/租房
                let childrenMoney = 0//独生子女费
                let x = 0;
                let y1 = 0;
                let y2 = 0;
                let z = 0
                let taxY1 = 0//y1税率
                let taxY2 = 0//y2税率

                //税前收入
                this.beforeIncome = gongzi + nianzhongjiang + laowubaochou + gaochou + texu;

                //判断五险一金是否选择总数
                if(this.allCheckbox){
                    wuxianyijin = allNum
                }else{
                    wuxianyijin = jbyanglao + bcyanglao + jbyiliao + shiye + gongjijin - bcyiliao
                }

                //判断专属附加税
                //子女教育人数
                if(this.isSingle){
                    singleMoney = this.isWhole ? 1000 : 500
                }else{
                    if(childNum){
                        singleMoney = this.isWhole ? childNum * 1000 : childNum * 500
                    }else{
                        singleMoney = 0
                    }
                }
                //继续教育
                educationMoney += Number(this.isEducation ? 400 : 0)
                educationMoney += Number(this.isOccupation ? 300 : 0)
                //房贷/租房
                roomRate = this.isHousingLoan ? 1000 :
                    this.isCity ? 1200 :
                        this.isExceedMillion ? 1000 :
                            this.unExceedMillion ? 800 : 0
                //独生子女
                if(this.isOne){
                    childrenMoney = 2000;
                }else{
                    if(this.unOne && unOnlyMoney){
                        childrenMoney = unOnlyMoney > 1000 ? 1000 : unOnlyMoney
                    }
                }
                x = gongzi - wuxianyijin - singleMoney - educationMoney - roomRate - childrenMoney - mianshuisuode - shangyejaingkang - qitakouchu
                //计算捐赠
                juanzeng = juanzeng > x * 0.3 ? x * 0.3 : juanzeng

                y1 = x + laowubaochou + gaochou + texu
                if(nianzhongjiang){
                    z = x - juanzeng -5000;
                    y2 = (nianzhongjiang + (z < 0 ? z : 0))/12
                }
                taxY1 = this.tax1(y1);
                taxY2 = this.tax2(y2,nianzhongjiang);
                console.log(taxY1);
                console.log(taxY2);
                //应纳税额
                this.taxAmount = taxY1 + taxY2
                this.afterIncome = this.beforeIncome - this.taxAmount
            },
            tax1(n){
                return n <= 3000 ? ( n * 0.03) :
                    n <= 12000 ? ( n * 0.1 - 210) :
                        n <= 25000 ? ( n * 0.2 - 1410) :
                            n <= 35000 ? ( n * 0.25 - 2660) :
                                n <= 55000 ? ( n * 0.3 -4410) :
                                    n <= 80000 ? ( n * 0.35 - 7160) : ( n * 0.45 - 15160)
            },
            tax2(n,m){
                console.log(n);
                console.log(m);
                return n <= 3000 ? (m * 0.03) :
                    n <= 12000 && n > 3000 ? (m * 0.1 - 210) :
                        n <= 25000 ? (m * 0.2 - 1410) :
                            n <= 35000 ? (m * 0.25 - 2660) :
                                n <= 55000 ? (m * 0.3 -4410) :
                                    n <= 80000 ? (m * 0.35 - 7160) : (m * 0.45 - 15160)
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
    .module .module-ul .module-li-choice .choice.selected{
        border: 1px solid #1a96d4;
        color: #1a96d4;
        background-color: #d1edf8;
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
