<template>
    <ul class="first-list">
        <li v-for="fi in stru">
            <div v-if="fi.sub!=null">
                <span class="f-bu" @click="toggle">{{ fi.name }}</span>
                <ul class="second-list">
                    <li v-for="si in fi.sub">
                        <router-link v-if="fi.path!=null&&si.path!=null" :to="'/'+fi.path+'/'+si.path">
                            {{ si.name }}
                        </router-link>
                        <div v-else>
                            {{ si.name }}
                        </div>
                    </li>
                </ul>
            </div>
            <div v-else>
                <router-link v-if="fi.path!=null" :to="'/'+fi.path">
                    {{ fi.name }}
                </router-link>
                <div v-else>
                    {{ fi.name }}
                </div>
            </div>
        </li>
    </ul>
</template>

<script>

import structure from '../assets/structure.json';
import $ from 'jquery';


export default {
    data(){
        return {
            stru:structure
        }
    },
    methods:{
        toggle(event){
            $(event.currentTarget).next().slideToggle();
        }
    }
}

</script>

<style>
a:link
{
  text-decoration:none;
  
  color:black;
}
a:visited
{
  text-decoration:none;
  
  color:black;
}
a:hover
{
  text-decoration:none;
  
  color:black;
}

.f-bu
{
  cursor: pointer;
  /*鼠标经过会变为手型*/
}

ul
{
  list-style-type: none;
  /*去掉列表开头的点*/
}

li
{
  padding-top: 2%;
  padding-bottom: 2%;
  /*列表项上下有适当间距*/
}

.first-list
{
  margin-top: 2.5%;
  margin-bottom: 0%;
  font-size: 1.5vw;
  font-weight: 600;
}

.second-list
{
  font-size: 1.2vw;
  display: none;
}
</style>