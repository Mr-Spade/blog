<template>
    <div>
        <router-link to="/">
            <img class="title-img f-bu" src="/title.png">
        </router-link>
        <div class="signature">{{ sig }}</div>
    </div>
</template>

<script>
import sigs from '../assets/sig.json'

export default {
    computed:{
        sig(){
            return sigs[Math.floor(Math.random()*sigs.length)]
        }
    }
}
</script>

<style>
.title-img
{
  width: 100%;
}

.signature
{
  font-size: 1.2vw;
  font-weight: 600;
  
  padding-left: 7.5%;
  padding-right: 7.5%;
  padding-bottom: 2.5%;
  text-align: center;
}
</style>