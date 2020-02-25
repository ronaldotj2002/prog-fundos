<template>
  <div>
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
                    </tbody><tbody>
                     
                      <tr v-for="item in fund_detail_full" :key="item.fund_detail_full">
                        
                        <td>{{item.full_name}} <i class="fi-star molde"></i> <i class="fi-check molde"></i> <br> <span class="sub-text">Renda Fixa | Indexado Soberando</span></td>
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
                <div class="medium-12 cell">
                   
                </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {

    data (){

      return {

        fund_detail_full: [],
        fund_manage: null,
        full_name: null
    }

    },

created() {
        
       this.$http.get("https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full")
            .then(res=> res.json())
            .then(fund_detail_full => this.fund_detail_full = fund_detail_full, err => console.log(err));
            },
}
</script>

<style lang="scss" escoped>
  
  .q-item__section--side > .q-icon {
    font-size: 24px;
    display: none;
}

</style>