<template>
    <baseLayout>
        <div v-for="medal in medals">
            <medalVue :medal="medal"/>
        </div>
    </baseLayout>
</template>

<script>
import baseLayout from '../../../components/baseLayout.vue';
import medalVue from '../../../components/medal.vue';
import ori_medals from '../../../assets/medals.json';
import moment from 'moment';
export default {
    computed: {
        medals() {
            let tmp=ori_medals;
            tmp.sort((a,b)=>{return moment(b.date).format('x')-moment(a.date).format('x')});
            return tmp;
        }
    },
    components:{
        baseLayout,medalVue
    }
}
</script>