<template>
    <div>        
          <div class="callout">
                <form>
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                    <div class="medium-8 cell search">
                        
                        <input type="text" class="input-buscar medium-12 cell" placeholder="Buscar fundo por nome">
                        <span class="underline"></span>                    
                        <a class="clear button secondary btn-busca" href="#">
                            <i class="fi-magnifying-glass medium"></i>
                        </a>
                    
                    </div>        
                
                    </div>
                </div>
                </form>
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
  
  components: {
      'range-um'   : MinimumApplication,
      'range-dois' : RiskProfile,
      'range-tres' : Term
  },
}
</script>

<style scoped lang="scss">

</style>