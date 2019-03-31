<template>
  <Layout :background="$page.blogPost.image">
    <figure>
      <g-image
        v-if="$page.blogPost.image"
        :src="$page.blogPost.image"
        class="banner-img"
        alt="mac on desk"
      ></g-image>
      <figcaption>Photo by Lauren Mancke on Unsplash</figcaption>
    </figure>
    <h1>{{ $page.blogPost.title }}</h1>
    <p>{{ $page.blogPost.date }}</p>
    <div v-html="$page.blogPost.content"/>
  </Layout>
</template>

<script>
import LatestPosts from "../components/LatestPosts.vue";
export default {
  components: {
    LatestPosts
  }
};
</script>


<page-query>
query Post ($path: String!){
	blogPost (path: $path){
    title
    content
    date (format: "MMM Do YYYY")
    tags
    image (height: 600)
  }
}
</page-query>

<style scoped>
.banner-img {
  width: 100%;
}
</style>
