<template>
  <div class="home">
    
    <Header />
    <div class="grid-container margem-sessao-filtros">
      <div class="grid-x grid-padding-x">
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
