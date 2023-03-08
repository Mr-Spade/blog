<template>
    <div class="navigate">
        <navHeader/>
        <navBody/>
        <navBottom/>
    </div>
</template>

<script>

import navBody from './navBody.vue';
import navHeader from './navHeader.vue';
import navBottom from './navBottom.vue';

export default {
    components:{
        navBody,
        navHeader,
        navBottom
    }
}

</script>

<style>
.navigate
{
  position: fixed;
  
  margin: 0%;
  padding: 2%;
  width: 20%;
  height: 100%;

  background: rgba(255,255,255,0.75);
  /*background-color: white;*/
}
</style>