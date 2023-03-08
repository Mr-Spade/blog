<template>
    <baseLayout>
        <div v-for="post in posts">
            <PostFrame :post="post"/>
        </div>
    </baseLayout>
</template>

<script>
import baseLayout from '../../../components/baseLayout.vue';
import moment from 'moment';
import PostFrame from '../../../components/postFrame.vue';

export default {
    components: {
        baseLayout,
        PostFrame
    },
    computed: {
        posts(){
            let tmp=this.$pagination.pages;
            tmp.sort((a,b)=>{return moment(b.frontmatter.date).format('x')-moment(a.frontmatter.date).format('x')});
            return tmp;
        }
    }
}
</script>