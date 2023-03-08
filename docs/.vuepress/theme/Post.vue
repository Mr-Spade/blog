<template>
    <baseLayout>
        <div class="post">
            <Content/>
        </div>
    </baseLayout>
</template>

<script>
import baseLayout from '../../../components/baseLayout.vue';
export default {
    components:{
        baseLayout
    }
}
</script>

<style>
.post
{
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 95%;
  /*min-height: 10rem;*/

  background: rgba(255,255,255,0.75);
  /*background-color: white;*/
  border-radius: 2rem;
}
</style>