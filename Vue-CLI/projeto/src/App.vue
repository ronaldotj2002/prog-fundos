<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<style lang="scss">

@import "~foundation-sites/scss/foundation.scss";
@include foundation-button;

$cor-branca: #fff;
$margin-top: 2em;
$fieldset-border: 1px solid #999;

@mixin replace-text($image) {
  
  background: {
    image: $image;
    repeat: no-repeat;    
  }
}

.bg-header {
  @include replace-text(url("./assets/img/bg-header.png"));
  height: 327px;
  color: $cor-branca;
  text-align: center;
}

.titulo{
  margin-top: 6em;
  display: inline-block;
  font-family: 'Roboto Slab', serif;
}
.sub-titulo{
  font-size: 1.5em;
  
}
.margem-sessao-filtros{
  margin-top: $margin-top; 
}

.search{
  height: 5em;
}
.input-buscar {
   background: transparent;
  border: none;
  border-bottom: 1px solid #CCC;
  color: #555;
  box-sizing: border-box;  
  &:focus {
    outline: none;    
  }
}

input::-webkit-input-placeholder {
  color: #999;
}

input:focus::-webkit-input-placeholder {
  color: #639d31;
}

.input-buscar:focus+.underline {
  transform: scale(1);
}

.underline {
  background-color: #639d31;
  display: inline-block;
  height: 2px;
  position: relative;
  bottom: 32px;  
  -webkit-transform: scale(0, 1);
  transform: scale(0, 1);
  -webkit-transition: all 0.5s linear;
  transition: all 0.5s linear;
  width: 100%;
}

.btn-busca{
  position: relative;
  bottom: 6em;
  left: 33em;
}
.btn-busca i{
  font-size: 30px;  
}

.range{
  background: #e9e9e9;
  padding: 1em 0.6em;
}

input.range1{
  background: transparent;
  border: none;
  color: #555;
  box-sizing: border-box;

}

.callout p {
  margin-top: 0.8em;
}

ul li{
  list-style: none;
}

@media print, screen and (max-width: 39.99875em) {    
    .btn-busca {
      position: relative;
      bottom: 6em;
      left: 17em;
            }}



</style>
