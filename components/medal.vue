<template>
    <div>
        <div class="f-bu small-gallery" @click="toggle">
            <div class="small-gallery-icon-box">
                <img class="small-gallery-icon" :src="'/gallery/'+medal.img_name+'.png'"/>
            </div>
            <div class="small-gallery-right">
                <h1 class="small-gallery-title">{{ medal.name }}</h1>
                <div class="small-gallery-date">获得于{{ formdate }}</div>
                <div class="small-gallery-award">{{ award[0] }}</div>
            </div>
        </div>
        <div class="gallery">
            <div class="gallery-icon-box">
                <img :class="className" :src="'/gallery/'+medal.img_name+'.png'"/>
            </div>
            <div class="gallery-right">
                <h1 class="gallery-title">{{ medal.name }}</h1>
                <div class="gallery-date">获得于{{ formdate }}</div>
                <div class="gallery-award">
                    <div class="small-div" v-for="word in award">
                        {{ word }}
                    </div>
                </div>
                <div class="gallery-way">
                    <div class="small-div">
                        获得方式：{{ medal.way }}
                    </div>
                    <div class="small-div" v-if="medal.named_way!=null && medal.named_way!=''">
                        冠名方式：{{ medal.named_way }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import $ from 'jquery';

function level_name(l){
    if(l==0)
        return 'gallery-zero-icon';
    if(l==1)
        return 'gallery-first-icon';
    if(l==2)
        return 'gallery-second-icon';
    if(l==3)
        return 'gallery-third-icon';
}

export default {
    props:['medal'],
    computed:{
        formdate() {
            return moment(this.medal.date).format('YYYY-MM-DD');
        },
        award() {
            return this.medal.content.split('\n');
        },
        className() {
            return level_name(this.medal.level);
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
.f-bu
{
  cursor: pointer;
  /*鼠标经过会变为手型*/
}

.gallery
{
    margin-left: auto;
    margin-right: auto;
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 0%;
    width: 60rem;
    height: 16.2rem;

    display: none;

    /*background: rgba(255,255,255,0.6);*/
    /*background-color: white;*/
    /*border-radius: 2rem;*/
}
/*荣誉框*/

.small-gallery
{
    margin-left: auto;
    margin-right: calc(50% - 30rem);
    /*为了实现始终右对齐荣誉框*/
    margin-top: 2%;
    margin-bottom: 2%;
    padding: 0%;
    width: 40rem;
    min-height: 6.4rem;

    background-color: white;
}
/*荣誉预览框*/

.gallery-icon-box
{
    float: left;

    margin: 0%;
    padding: 0%;
    width: 18rem;
    min-height: 16.2rem;
    
    background-color: rgba(30,30,30,0.95);
}
/*荣誉徽章放置框*/

.small-gallery-icon-box
{
    float: left;

    margin: 0%;
    padding: 0%;
    width: 7rem;
    min-height: 6.4rem;
    
    background-color: rgba(30,30,30,0.95);
}
/*荣誉徽章放置预览框*/

.small-gallery-icon
{
    display: block;

    transform: translate(0, 5.55556%);
    margin: 0 auto;
    padding: 0%;
    height: 5.76rem;
}
/*预览荣誉章*/

.gallery-zero-icon
{
    display: block;

    transform: translate(0, 0%);
    margin: 0 auto;
    padding: 0%;
    height: 16.2rem;
}
/*最高荣誉章*/

.gallery-first-icon
{
    display: block;

    transform: translate(0, 5.55556%);
    margin: 0 auto;
    padding: 0%;
    height: 14.58rem;
}
/*一级荣誉章：金牌*/

.gallery-second-icon
{
    display: block;

    transform: translate(0, 21.42857%);
    margin: 0 auto;
    padding: 0%;
    height: 11.34rem;
}
/*二级荣誉章：银牌/一等奖*/

.gallery-third-icon
{
    display: block;

    transform: translate(0, 50%);
    margin: 0 auto;
    padding: 0%;
    height: 8.1rem;
}
/*三级荣誉章：铜牌/二等奖*/

.gallery-right
{
    float: right;

    margin: 0%;
    padding: 0%;
    width: 42rem;
    min-height: 16.2rem;

    background-color: rgba(225,225,225,0.95);
}
/*荣誉框右侧元素*/

.small-gallery-right
{
    float: right;

    margin: 0%;
    padding: 0%;
    width: 33rem;
    min-height: 6.4rem;

    background-color: rgba(225,225,225,0.95);
}
/*荣誉框右侧元素*/

.gallery-title
{
    font-size: 2rem;

    display: inline-block;

    margin: 0%;
    padding: 0rem 1rem;
    width: 28rem;
    min-height: 3rem;

    /*background-color: green;*/
}

.small-gallery-title
{
    font-size: 1.2rem;

    display: inline-block;

    margin: 0%;
    padding: 0rem 1rem;
    width: 20rem;
    min-height: 2rem;

    /*background-color: green;*/
}

.gallery-date
{
    font-size: 1rem;

    float: right;

    margin: 0%;
    padding: 0.5rem 1rem;
    width: 9rem;
    min-height: 2rem;

    /*background-color: orange;*/
}

.small-gallery-date
{
    font-size: 1rem;

    float: right;

    margin: 0%;
    padding: 0rem 1rem;
    width: 9rem;
    min-height: 2rem;

    /*background-color: orange;*/
}

.gallery-award
{
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 600;

    margin: 0%;
    padding: 1rem 1rem;
    /* width: 40rem; */

    /* background-color: purple; */
}
/*颁奖词*/

.small-gallery-award
{
    font-size: 1rem;
    font-style: italic;
    font-weight: 600;

    margin: 0%;
    padding: 0.3rem 0rem;
    width: 33rem;

    text-align: center;
    /*美观考虑，预览颁奖词居中*/

    /* background-color: purple; */
}
/*预览颁奖词*/

.small-div
{
    margin: 0%;
    padding: 0%;
}
/*为了使得颁奖词支持js换行，手动用了小块*/

.gallery-way
{
    font-size: 1.2rem;

    margin: 0%;
    padding: 1rem 1rem;
    width: 40rem;

    /* background-color: pink; */
}
/*获得方式*/
</style>