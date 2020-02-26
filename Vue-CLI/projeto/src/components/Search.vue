<template>
    <div>        
          <div class="callout">
              
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                    <div class="medium-8 cell search">                  
                        <input type="search" v-on:input="busca = $event.target.value" class="input-buscar medium-12 cell" placeholder="Buscar fundo por nome">
                        <a class="clear button secondary btn-busca" href="#">
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
                    
                    <tbody><tr>
                        
                      <td>RENDA FIXA </td>
                                            
                    </tr>
                    </tbody>
                      <tbody>
                      
                        <tr v-for="item in resultBusca" :key="item.fund_detail_full">
                          
                          <td>{{item.full_name}} <i class="fi-star molde"></i> <i class="fi-check molde"></i> <br> <span class="sub-text">{{item.specification.fund_macro_strategy.name}} | {{item.specification.fund_class}}</span></td>
                          <td>{{item.quota_date}}</td>
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
            fund_detail_full: [],
            busca           : '',
            fund_manage     : null,
            full_name       : null

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

.row .row {
    margin-left: 0;
    margin-right: 0;
}
.btn-busca{
    margin-top: 2em;
}
.q-item__section--side > .q-icon {
    font-size: 24px;
    display: none;
}

@media screen and (min-width: 40em){

.row .row {
    margin-left: 0;
    margin-right: 0;
}
}
</style>