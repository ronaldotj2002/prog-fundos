<template>
  <div class="columns">
    <div class="grid-x grid-margin-x">

       <div class="cell small-12">
          Aplicação mínima
       </div>

       <div class="cell small-12">
         <div class="slider" data-slider data-initial-start="0" data-step="1" data-position-value-function="log" data-non-linear-base="5">
           <span class="slider-handle" data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutputNonLinear"></span>
         </div>
       </div>

       <div class="cell small-12">
         <span>Até R$ <input class="range1" type="number" id="sliderOutputNonLinear"></span>
       </div>

     </div>
  </div>
</template>

<script>

import  '../../assets/js/app.js';
export default {

  

}
</script>

<style>

</style>