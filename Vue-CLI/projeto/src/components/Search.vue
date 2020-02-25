<template>
    <div>        
          <div class="callout">
              
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                    <div class="medium-8 cell search">                  
                        <q-input v-model="nome" label="Buscar fundo por nome" />
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
            nome: '',

        }
    },
      
  components: {
      'range-um'   : MinimumApplication,
      'range-dois' : RiskProfile,
      'range-tres' : Term
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

@media screen and (min-width: 40em){

.row .row {
    margin-left: 0;
    margin-right: 0;
}
}
</style>