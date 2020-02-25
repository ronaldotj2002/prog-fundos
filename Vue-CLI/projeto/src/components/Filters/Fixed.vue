<template>
   <div class="row">
     <div class="columns">              
        <q-list bordered class="rounded-borders">          
          <q-expansion-item >
            <template v-slot:header class="slot">             
              <q-item-section>
                RENDA FIXA
              </q-item-section>
            </template>

            <q-card>
              <q-card-section>
               
                  <div class="border-check">
                    <div class="checkbox">                    
                      <q-checkbox dense v-model="RendaFixa" label="Renda Fixa" color="cyan" />  
                    </div>
                  </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="border-check">
                  <div class="checkbox">                   
                      <q-checkbox dense v-model="IndexadoSoberano" label="Indexado Soberano" color="cyan" />                      
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="border-check">
                  <div class="checkbox">                   
                    <q-checkbox dense v-model="RendaFixaCreditoPrivado" label="Renda Fixa Crédito Privado" color="cyan" /> 
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="border-check">
                  <div class="checkbox">                    
                    <q-checkbox dense v-model="CreditoPrivadoHighYield" label="Crédito Privado High Yield" color="cyan" /> 
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="border-check">
                  <div class="checkbox">                   
                    <q-checkbox dense v-model="RendaFixaInflacaoSoberano" label="Renda Fixa Inflação Soberano" color="cyan" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
            <q-card>
              <q-card-section>
                <div class="border-check">
                  <div class="checkbox">                    
                    <q-checkbox dense v-model="InflacaoCreditoPrivado" label="Inflação Crédito Privado" color="cyan" />
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>

        </q-list>
    </div>
  </div>          
</template>



<script>
export default {
  data () {
    return {      
      RendaFixa:                 false,
      IndexadoSoberano:          false,
      RendaFixaCreditoPrivado:   false,
      CreditoPrivadoHighYield:   false,
      RendaFixaInflacaoSoberano: false,
      InflacaoCreditoPrivado:    false
    }
  }
}
</script>

<style lang="scss">

.row .row {
    margin-left: 0;
    margin-right: 0;
}
.checkbox {
  margin: 0 0 1em 0;  
}

.border-check{
  border-bottom: 1px solid #999;
}

.q-item {
    position: initial !important;
}
.q-card > div {
    border-left: 0;
    border-right: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding-left: 2em;
}

</style>