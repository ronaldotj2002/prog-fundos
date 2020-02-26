<template>
    <div>        
          <div class="callout">
              
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                    <div class="medium-8 cell search">                  
                        <input type="search" v-on:input="busca = $event.target.value" class="input-buscar medium-12 cell" placeholder="Buscar fundo por nome">
                        <a class="clear button secondary btn-busca">
                            <i class="fas fa-search"></i> 
                        </a>
                    </div>                    
                     
                    </div>
                </div>
                
                <div class="row large-unstack range">

                    <range-um />

                    <range-dois />

                    <range-tres />                          
                
                </div>

                <p>Horário limite de aplicação: 12:00</p>
                        
            </div>

            <div class="callout">
             
            <div class="row">              
                  <table class="scroll">
                    <thead>
                      <tr style="background: #fff;">
                        <th></th>
                        <th>Fundo</th>
                        <th>Data da cota</th>
                        <th>Mês(%)</th>
                        <th>2016(%)</th>
                        <th>12M</th>
                        <th>Aplicação mínima (R$)</th>
                        <th>Prazo do resgate</th>
                        <th>Aplicar</th>
                       
                      </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                        
                            <td class="bg-renda-fixa-table"></td>
                            <td class="bg-renda-fixa-table"><b>RENDA FIXA</b></td>
                            <td class="bg-renda-fixa-table"></td>
                            <td class="bg-renda-fixa-table"></td>
                            <td class="bg-renda-fixa-table"></td>
                            <td class="bg-renda-fixa-table"></td>
                            <td class="bg-renda-fixa-table"></td>
                            <td class="bg-renda-fixa-table"></td>
                            <td class="bg-renda-fixa-table"></td>

                        </tr>
                    </tbody>
                      
                      <tbody>
                      
                        <tr v-for="item in resultBusca" :key="item.fund_detail_full">
                          
                          <td class="border-risk_1"  v-if="item.specification.fund_risk_profile.score_range_order === 1"></td>
                          <td class="border-risk_2"  v-if="item.specification.fund_risk_profile.score_range_order === 2"></td>
                          <td class="border-risk_3"  v-if="item.specification.fund_risk_profile.score_range_order === 3"></td>
                          <td class="border-risk_4"  v-if="item.specification.fund_risk_profile.score_range_order === 4"></td>
                          <td class="border-risk_5"  v-if="item.specification.fund_risk_profile.score_range_order === 5"></td>
                          <td class="border-risk_6"  v-if="item.specification.fund_risk_profile.score_range_order === 6"></td>
                          <td class="border-risk_7"  v-if="item.specification.fund_risk_profile.score_range_order === 7"></td>
                          <td class="border-risk_8"  v-if="item.specification.fund_risk_profile.score_range_order === 8"></td>
                          <td class="border-risk_9"  v-if="item.specification.fund_risk_profile.score_range_order === 9"></td>
                          <td class="border-risk_10" v-if="item.specification.fund_risk_profile.score_range_order === 10"></td>
                          <td class="border-risk_11" v-if="item.specification.fund_risk_profile.score_range_order === 11"></td>
                          <td class="border-risk_12" v-if="item.specification.fund_risk_profile.score_range_order === 12"></td>
                          <td>                            
                                {{item.full_name}} 
                                <i class="fi-star molde"></i> 
                                <i class="fi-check molde"></i> 
                                <br> 
                                <span class="sub-text">{{item.specification.fund_macro_strategy.name}} | {{item.specification.fund_class}}</span>
                          </td>
                          <td width="80">{{item.quota_date}}</td>
                          <td>{{item.profitabilities.month}}</td>
                          <td>{{item.profitabilities.year}}</td>
                          <td>{{item.profitabilities.m12}}</td>
                          <td>{{item.operability.minimum_initial_application_amount}}</td>
                          <td><i class="fi-info"></i></td>
                          <td><i class="fi-info"></i></td>                       
                        </tr>
                        
                      </tbody>
              
                  </table>
                
            </div>
          </div>        
    </div>  
</template>
<script>


  import MinimumApplication from  './Filters/MinimumApplication';
  import RiskProfile        from  './Filters/RiskProfile';
  import Term               from  './Filters/Term';

export default {

    data () {
        
        return {
            fund_detail_full  : [],
            busca             : ''
                      
        }
    },

    components: {
      'range-um'   : MinimumApplication,
      'range-dois' : RiskProfile,
      'range-tres' : Term
    },

    created() {
        
       this.$http.get("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
            .then(res=> res.json())
            .then(fund_detail_full => this.fund_detail_full = fund_detail_full, err => console.log(err));
            },

    computed: {

        resultBusca() {

            if(this.busca) {
                let exp = new RegExp(this.busca.trim(), 'i');
                return this.fund_detail_full.filter(fund_detail_full => exp.test(fund_detail_full.full_name));
            } else {
                return this.fund_detail_full;
            }

        }
    },

      
}

</script>

<style scoped lang="scss">

.details,
.show,
.hide:target {
  display: none;
}
.hide:target + .show,
.hide:target ~ .details {
  display: block;
}

tbody th, tbody td {
    padding: 0.5rem 0;
}

.row .row {
    margin-left: 0;
    margin-right: 0;
}

.q-item__section--side > .q-icon {
    font-size: 24px;
    display: none;
}
.callout {    
    padding: 1rem 0 !important;
   
}
.callout p{
    margin-left: 10px;
}
.bg-renda-fixa-table{
    background: #ececec;
    padding: 2em 0;
}
.bg-renda-fixa-table b{
    margin-left: 10px;
}
.border-risk_1{
    height: 100%;
    border-left: 15px solid #a6ecfc;
}
.border-risk_2{
    height: 100%;
    border-left: 15px solid #68f1dd;;
}
.border-risk_3{
    height: 100%;
    border-left: 15px solid #91ed6e;
}
.border-risk_4{
    height: 100%;
    border-left: 15px solid #b0f42a;
}
.border-risk_5{
    height: 100%;
    border-left: 15px solid #ddf40c;
}
.border-risk_6{
    height: 100%;
    border-left: 15px solid #faf00e;
}
.border-risk_7{
    height: 100%;
    border-left: 15px solid #ffdc00;
}
.border-risk_8{
    height: 100%;
    border-left: 15px solid #fb0;
}
.border-risk_9{
    height: 100%;
    border-left: 15px solid #f80;
}
.border-risk_10{
    height: 100%;
    border-left: 15px solid #ff5e00;
}
.border-risk_11{
    height: 100%;
    border-left: 15px solid #ff0600;
}
.border-risk_12{
    height: 100%;
    border-left: 15px solid #b51414;
}
@media screen and (min-width: 40em){

.row .row {
    margin-left: 0;
    margin-right: 0;
}
}
</style>