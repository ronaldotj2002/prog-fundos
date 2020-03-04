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
               
                <div class="row large-unstack range">

                    <div class="columns">
                      <div class="grid-x grid-margin-x">

                        <div class="cell small-12">
                            Aplicação mínima
                        </div>

                        <div class="cell small-12">
                          <div  data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
                            <input type="range" step="100" class="slider"  @change="filtroValorMinimo($event.target.value)" v-model="minimumAp" max="25000">
                       
                          </div>
                        </div>

                        <div class="cell small-12">
                          <span>Até R$ {{ minimumAp }}</span>
                        </div>

                      </div>
                    </div>

                    <div class="columns">
                      <div class="grid-x grid-margin-x">
                                    
                          <div class="cell small-12">
                            Perfil de risco do fundo
                          </div>

                          <div class="cell small-12">
                            <div data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
                              
                              <span class="risk1 marg"></span>
                              <span class="risk2 marg"></span>
                              <span class="risk3 marg"></span>
                              <span class="risk4 marg"></span>
                              <span class="risk5 marg"></span>
                              <span class="risk6 marg"></span>
                              <span class="risk7 marg"></span>
                              <span class="risk8 marg"></span>
                              <span class="risk9 marg"></span>
                              <span class="risk10 marg"></span>
                              <span class="risk11 marg"></span>
                              <span class="risk12 marg"></span>
                              <input type="range" class="risk" @change="filtroRisk($event.target.value)" v-model="risk" :min="1" :max="12">
                              <span>menor</span>
                              <span style="float: right">maior</span>
                              
                            </div>
                          </div>
                       
                      </div>
                    </div>

                    <div class="columns">
                      <div class="grid-x grid-margin-x">
                                  
                          <div class="cell small-12">
                            Prazo de resgate
                          </div>

                          <div class="cell small-12">
                            <div data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
                              <input type="range" step="10" class="slider" @change="filtroPrazo($event.target.value)"  v-model="qtdDia" max="270">
                            </div>
                          </div>

                          <div class="cell small-12">
                            <span v-if="qtdDia <= 1" style="float:right">Até {{ qtdDia }} dia </span>
                            <span v-else style="float:right">Até {{ qtdDia }} dias </span> 
                          </div>

                      </div>
                    </div> 

                </div>

                <p class="hr-limite">Horário limite de aplicação: 12:00</p>
          
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
                      
                      <tbody  v-for="(item, indice) in resultBusca" :key="item.fund_detail_full" @click="detalheShow=indice">
                      
                        <tr>
                          
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
                                <img src="../assets/img/star.png" data-tooltip tabindex="1" title="Fundo para investidor qualificado" data-position="top" data-alignment="center" /> 
                                <img src="../assets/img/checked.png" data-tooltip tabindex="1" title="Vovê já Investe neste fundo" data-position="top" data-alignment="center" style="margin-left:5px"/>
                                
                                <br> 
                                <span class="sub-text">{{item.specification.fund_macro_strategy.name}} | {{item.specification.fund_class}}</span>
                          </td>
                          <td class="text-center" width="80">{{item.quota_date.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1') }}</td>
                          <td class="text-center">{{item.profitabilities.month}}</td>
                          <td class="text-center">{{item.profitabilities.year}}</td>
                          <td class="text-center">{{item.profitabilities.m12}}</td>
                          <td class="text-center">{{item.operability.minimum_initial_application_amount}}</td>
                          <td class="text-center">{{item.operability.retrieval_quotation_days_str}}</td>
                          <td class="text-center" data-tooltip tabindex="1" title="Aplicar neste fundo" data-position="top" data-alignment="center"><img src="../assets/img/back.png" width="20px" /></td>  
                                               
                        </tr>

                        <tr v-show="detalheShow == indice" width="100%" style=" padding:30px 0">
                       
                           <td colspan="6">
                             
                               <div class="card-img-bottom">
                                <chartjs-doughnut
                                  :bind="true"                                  
                                  :datasets="datasets"
                                  :labels="labels"
                                  :cotizacao="item.operability.application_quotation_days_str"
                                  :option="option"
                                />
                                                          
                              </div>
                             
                           </td>

                           <td colspan="3">
                             <p>Cotização da aplicação: {{item.operability.application_quotation_days_str}}</p>
                             <p>Cotização do resgate: {{item.operability.retrieval_quotation_days_str}}</p>
                             <p>Liquidação do resgate: {{item.operability.retrieval_liquidation_days_str}}</p>
                             <p>Taxa de administração: {{item.fees.administration_fee}}</p>
                           </td>
                          
                          
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
                  <p @click="rendaFixaShow=!rendaFixaShow"> <b>Renda fixa</b></p>
                   
                      <div class="checkbox" v-show="rendaFixaShow">

                        <label class="show-check-box">
                          <input type="checkbox" v-model="check" value="Indexado Soberano"  @change="filtroCheck($event.target.value)">                                             
                          <span><b>Indexado Soberano</b></span>    
                          <span class="ch"></span>                       
                        </label>

                        <label class="show-check-box">
                          <input type="checkbox" v-model="check" value="Renda Fixa"  @change="filtroCheck($event.target.value)">                                             
                          <span><b>Renda Fixa</b></span>   
                          <span class="ch"></span>                        
                        </label>

                         <label class="show-check-box">
                          <input type="checkbox" v-model="check" value="Renda Fixa Crédito Privado"  @change="filtroCheck($event.target.value)">                                             
                          <span><b>Renda Fixa Crédito Privado</b></span> 
                          <span class="ch"></span>                           
                        </label>

                        <label class="show-check-box">
                          <input type="checkbox" v-model="check" value="Crédito Privado High Yield"  @change="filtroCheck($event.target.value)">                                             
                          <span><b>Crédito Privado High Yield</b></span> 
                          <span class="ch"></span>                          
                        </label>

                         <label class="show-check-box">
                          <input type="checkbox" v-model="check" value="Renda Fixa Inflação Soberano"  @change="filtroCheck($event.target.value)">                                             
                          <span><b>Renda Fixa Inflação Soberano</b></span>    
                          <span class="ch"></span>                        
                        </label>

                        <label class="show-check-box">
                          <input type="checkbox" v-model="check" value="Inflação Crédito Privado"  @change="filtroCheck($event.target.value)">                                             
                          <span><b>Inflação Crédito Privado</b></span>    
                          <span class="ch"></span>                       
                        </label>
                      
                      </div>

                </div>

             </div>
          </div>
        </div>  
 
        <div class="large-4 cell">
          <div class="callout">
            <p class="legendas">LEGENDA</p>
            
              <p class="legendas"><img src="../assets/img/star.png" /> <span>Fundo para investidor quapficado</span></p>
              <p class="legendas"><img src="../assets/img/checked.png" /> <span>Você já investe neste fundo</span></p>
              <p class="legendas"><img src="../assets/img/info.png" /> <span>Entenda o resgate deste fundo</span></p>
              <p class="legendas"><img src="../assets/img/disabled.png" /> <span>Fundo fechado para appcação</span></p>
              <p class="legendas"><img src="../assets/img/open-legends.png" /> <span>Aplicar neste fundo</span></p>
            
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
            filtro            : '',
            risco             : '',
            itemCheck         : '',
            minimumAp         : 40000,
            risk              : 12,
            qtdDia            : 270,
            prazo             : '',
            check             : [],
            rendaFixaShow     : false,
            estrategiaShow    : false,
            rendaVariavelShow : false,
            detalheShow       : false,
            datasets: [
        {
            data: [30, 30, 40],
            backgroundColor: ["#f36e60", "#ffdb3b", "#185190"],
            hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
        }
      ],
            labels: ['Diário', 'Mensal', 'Anual'],
            option: {}
            // this.fund_detail_full.profitabilities.month
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
                return this.fund_detail_full.filter(fund_detail_full => 
                exp.test(fund_detail_full.full_name));

            } else if(this.filtro){
                let fil = new RegExp(this.filtro.trim(), 'i');
                return this.fund_detail_full.filter(fund_detail_full => 
                fil.test(fund_detail_full.operability.minimum_initial_application_amount));

            } else if(this.risco){                  
              let exp = new RegExp(this.risco.trim(), 'i');
                return this.fund_detail_full.filter(fund_detail_full => 
                exp.test(fund_detail_full.specification.fund_risk_profile.score_range_order));

            } else if(this.prazo){
              let exp = new RegExp(this.prazo.trim(), 'i');
                return this.fund_detail_full.filter(fund_detail_full => 
                exp.test(fund_detail_full.operability.retrieval_quotation_days_str));
            }else{
                return this.fund_detail_full;

            }           

        },
    },

    methods: {
      filtroCheck(valor) {     
        for (let i = 0; i < this.check.length; i++){

          console.log(this.check)

          if (this.check === this.check ) {
              this.busca = valor;
          } else{
             this.busca = "";
          }              
        }

        },

      filtroValorMinimo(valor) {
          
          for (let i = 0; i <= this.minimumAp; i++) {
            return this.filtro = valor;            
          }          
                 
      },

      filtroPrazo(valor) {

        for(let i = 0; i <= this.qtdDia; i++) {
          return this.prazo = valor;
        }

      },


      filtroRisk(valor) {     
        
        switch (this.risk) {
          case "1":             
           this.risco = valor;
           break;
          
          case "2":            
           this.risco = valor;
           break;
          
          case "3":            
           this.risco = valor;
           break;

          case "4":            
           this.risco = valor;
           break;

          case "5":            
           this.risco = valor;
           break;

          case "6":            
           this.risco = valor;
           break;

          case "7":            
           this.risco = valor;
           break;

          case "8":            
           this.risco = valor;
           break;

          case "9":            
           this.risco = valor;
           break;

          case "10":            
           this.risco = valor;
           break;

          case "11":            
           this.risco = valor;
           break;

          case "12":            
           this.risco = valor;
           break;
        
          default:
            this.risco = valor;
        }

        },
    },

}

</script>

<style lang="scss" scoped>
  @import '../assets/css/app.scss';

   @media screen and (max-width: 40em) {
  
  .marg {
    margin-left: 14.7px;
}
}
</style>
