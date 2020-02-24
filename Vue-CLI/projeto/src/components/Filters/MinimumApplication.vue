
 <template>

  <div class="columns">
      <div class="grid-x grid-margin-x q-pa-md">

        <div class="cell small-12">
          Aplicação mínima
       </div>

       <div class="cell small-12">
           <div class="slider" data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
             <q-slider v-model="standard" :min="0" :max="50"/> 
           </div>
         </div>
        
         

        <div class="cell small-12">
           <span>Até R$ {{ standard }} </span>
         </div>


     </div>
  </div> 
  
  
</template>


<script>
export default {
  data () {
    return {
      standard: 0
    }
  }
}
</script>

<style>

</style>