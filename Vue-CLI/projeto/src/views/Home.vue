<template>
  <div class="home">

    <Header /> 

    <div class="grid-container margem-sessao-filtros">

      <div class="grid-x grid-padding-x">
    
        <div class="large-9 cell">
            <Search />
        </div>

        <div class="large-3 cell">
          <check-box />
        </div>  

        <div class="large-9 cell">
          <Result />
        </div>   

        <div class="large-4 cell">
          <Legends />
        </div>  

      </div>

    </div>

            
           
  </div>
</template>

<script>
import '../assets/js/app.js';

import Header  from '@/components/Header.vue';
import Search  from '@/components/Search.vue';
import Fixed   from '@/components/Filters/Fixed.vue';
import Result  from '@/components/Results/Result.vue'
import Legends from '@/components/Legends.vue'


export default {
  name: 'Home',
  components: {
    Header,
    Search,
    'check-box' : Fixed,
    Result,
    Legends

  }
}
</script>
