<template>
    <div class="post-li">
        <router-link :to="post.path">
            <h1 class="post-title">{{ post.title }}</h1>
        </router-link>
        <div class="post-ab" v-if="post.frontmatter.abstract!=null">
            摘要：{{ post.frontmatter.abstract }}
        </div>
        <div class="post-date">
            {{ formdate }}
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: ['post'],
    computed: {
        formdate() {
            return moment(this.post.frontmatter.date).format('YYYY-MM-DD');
        }
    }
}
</script>

<style>
.post-li
{
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 80%;
  /*min-height: 10rem;*/

  background: rgba(255,255,255,0.75);
  /*background-color: white;*/
  border-radius: 2rem;
}

.post-title
{
  font-size: 3vw;

  margin: 0%;
  padding: 0%;
  padding-bottom: 0.5rem;
}
/*post块标题*/

.post-ab
{
  font-size: 1.5vw;

  margin: 0%;
  padding: 0%;
}

.post-date
{
  font-size: 1.2vw;

  margin: 0%;
  padding: 0%;
  padding-top: 0.5rem;
}
</style>