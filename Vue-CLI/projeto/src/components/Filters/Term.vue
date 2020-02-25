
 <template>

  <div class="columns">
      <div class="grid-x grid-margin-x q-pa-md">

        <div class="cell small-12">
          Prazo de resgate
       </div>

       <div class="cell small-12">
           <div class="slider" data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
             <q-slider v-model="qtdDia" :min="1" :max="31"/> 
           </div>
         </div>       
         
        <div class="cell small-12">
           <span v-if="qtdDia <= 1">Até {{ qtdDia }} dia </span>
           <span v-else>Até {{ qtdDia }} dias </span>           
         </div>

     </div>
  </div>   
  
</template>

<script>
export default {
  data () {
    return {
      qtdDia: 0
    }
  }
}
</script>

<style>

</style>