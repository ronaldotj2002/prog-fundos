
  <template>
  <div class="columns">
    <div class="grid-x grid-margin-x q-pa-md">

      <div class="cell small-12">
          Perfil de risco do fundo
      </div>

      <div class="cell small-12">
           <div class="slider" data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
             <q-slider v-model="greenModel" color="green" markers snap :min="1" :max="12"/>
           </div>
      </div>
      
      <div class="cell small-12">
           <span> {{ greenModel }}</span>
         </div>
  

    </div>
  </div> 

 
</template>


<script>
export default {
  data () {
    return {
      greenModel: 1
    }
  }
}
</script>

<style>

</style>