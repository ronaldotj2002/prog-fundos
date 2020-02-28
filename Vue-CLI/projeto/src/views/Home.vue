<template>
  <div class="home">

    <div class="grid-container fluid bg-header">
      <div class="grid-container">
        <div class="large-12 cell">
          <h2 class="titulo">Lista de Fundos de Investimento</h2>
          <p class="sub-titulo">Conheça a nossa lista de fundos</p>
        </div>
      </div>
    </div>

    <div class="grid-container margem-sessao-filtros">

      <div class="grid-x grid-padding-x">
    
        <div class="large-9 cell">
            <div class="callout">
                <form>
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                    <div class="medium-8 cell search">
                        
                        <input type="text" v-on:input="busca = $event.target.value" class="input-buscar medium-12 cell" placeholder="Buscar fundo por nome">
                        <span class="underline"></span>                    
                        <a class="clear button secondary btn-busca" href="#">
                            <i class="fi-magnifying-glass medium"></i>
                        </a>
                    
                    </div>        
                
                    </div>
                </div>
                </form>
                <div class="row large-unstack range">

                    <div class="columns">
                      <div class="grid-x grid-margin-x">

                        <div class="cell small-12">
                            Aplicação mínima
                        </div>

                        <div class="cell small-12">
                          <div class="slider" data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
                            <input type="range"  v-on:input="buscaRange = $event.target.value" v-model="minimumAp" :max="10000">
                       
                          </div>
                        </div>

                        <div class="cell small-12">
                          <span>Até R$ {{minimumAp }}</span>
                        </div>

                      </div>
                    </div>

                    <div class="columns">
                      <div class="grid-x grid-margin-x">
                                    
                          <div class="cell small-12">
                            Perfil de risco do fundo
                          </div>

                          <div class="cell small-12">
                            <div class="slider" data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
                              <input type="range" v-model="risk" :min="1" :max="12">
                            </div>
                          </div>

                          <div class="cell small-12">
                            <span>Até R$ {{ risk }}</span>
                          </div>

                      </div>
                    </div>

                    <div class="columns">
                      <div class="grid-x grid-margin-x">
                                  
                          <div class="cell small-12">
                            Prazo de resgate
                          </div>

                          <div class="cell small-12">
                            <div class="slider" data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
                              <input type="range" v-model="qtdDia" :min="1" :max="31">
                            </div>
                          </div>

                          <div class="cell small-12">
                            <span v-if="qtdDia <= 1">Até {{ qtdDia }} dia </span>
                            <span v-else>Até {{ qtdDia }} dias </span> 
                          </div>

                      </div>
                    </div> 

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

        <div class="large-3 cell">
          <div class="row">
        <div class="columns">
            <div class="callout" >
                  <p @click="rendaFixaShow=!rendaFixaShow" > Renda fixa</p>
                   
                      <div class="checkbox" v-for="(itemCheck, indice) in resultBusca" :key="indice" v-show="rendaFixaShow">
                        <label for="show-password" v-if="itemCheck.specification.fund_main_strategy.fund_macro_strategy === 1">
                          <input type="checkbox" v-model="check" :value="itemCheck.specification.fund_main_strategy.name" v-on:input="busca = $event.target.value">     
                                             
                          {{ itemCheck.specification.fund_main_strategy.name }}
                         
                        </label>
                      
                      </div>

                </div>

                <div class="callout" >
                  <p @click="estrategiaShow=!estrategiaShow" >Estratégias diferenciadas</p>
                   
                      <div class="checkbox" v-for="(itemCheck, indice) in resultBusca" :key="indice" v-show="estrategiaShow">
                        <label for="show-password" v-if="itemCheck.specification.fund_main_strategy.fund_macro_strategy === 2">
                          <input type="checkbox" v-model="check" :value="itemCheck.specification.fund_main_strategy.name">                          
                          {{ itemCheck.specification.fund_main_strategy.name }}
                         
                        </label>
                        
                      </div>
                
                </div>

                <div class="callout" >
                  <p @click="rendaVariavelShow=!rendaVariavelShow" >Renda variável</p>
                   
                      <div class="checkbox" v-for="(itemCheck, indice) in resultBusca" :key="indice" v-show="rendaVariavelShow">
                        <label for="show-password" v-if="itemCheck.specification.fund_main_strategy.fund_macro_strategy === 3">
                          <input type="checkbox" v-model="check" :value="itemCheck.specification.fund_main_strategy.name">                          
                          {{ itemCheck.specification.fund_main_strategy.name }}
                         
                        </label>
                       
                      </div>               

                </div>

             </div>
          </div>
        </div>  
 
        <div class="large-4 cell">
          <div class="callout">
            <p>LEGENDA</p>
            <ul>
              <li><i class="fi-star molde"></i> Fundo para investidor qualificado</li>
              <li><i class="fi-check molde"></i> Você já investe neste fundo</li>
              <li><i class="fi-info"></i>  Entenda o resgate deste fundo</li>
              <li><i class="fi-prohibited"></i> Fundo fechado para aplicação</li>
              <li><i class="fi-info"></i> Aplicar neste fundo</li>
            </ul>
          </div>
        </div>  

      </div>

    </div>
   
           
  </div>
</template>

<script>
import '../assets/js/app.js';


export default {
  name: 'Home',  

  data () {
    
        return {
            fund_detail_full  : [],
            busca             : '',
            itemCheck         : '',
            minimumAp         : 0,
            risk              : 0,
            qtdDia            : 0,
            check             : [],
            rendaFixaShow     : false,
            estrategiaShow    : false,
            rendaVariavelShow : false,
            events            : []
                      
        }
        
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

        },

        filtroBusca() {

            if(this.filtro) {
                let exp = new RegExp(this.filtro);
                return this.fund_detail_full.filter(fund_detail_full => exp.test(fund_detail_full.full_name));
            } else {
                return this.fund_detail_full;
            }            

        },
    
    },

}
</script>

<style scoped>

  tbody th, tbody td {
    padding: 0.5rem 0;
}  

</style>
