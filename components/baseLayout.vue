<template>
    <div>
        <navigate/>
        <div class="main-box">
            <slot></slot>
        </div>
    </div>
</template>

<script>

import navigate from './navigate.vue';

export default {
    components:{
        navigate
    }
}

</script>

<style>
html{
    width: 100%;
    height: 100%;

    background-color: white;
    background-image: url(/bg.jpg);
    background-position: bottom center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
body
{
    margin: 0%;
    width: 100%;
    height: 100%;
}
.main-box
{
  float: right;

  margin: 0%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 0rem;
  padding-bottom: 0rem;
  width: 72%;

  /*background-color: white;*/
}
</style>