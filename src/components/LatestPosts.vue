<template>
  <div>
    <h3>Latest Posts</h3>
    <article v-for="edge in $static.allBlogPost.edges" :key="edge.node.id">
      <h4>{{ edge.node.title }}</h4>
      <p>{{ edge.node.date }}</p>
      <g-link :to="`/posts/${edge.node.slug}`">Read more</g-link>
    </article>
  </div>
</template>

<static-query>
  query LatestPosts {
    allBlogPost (perPage: 3){
      edges {
        node {
          id
          title
          tags
          date (format: "MMM Do YYYY")
          slug
        }
      }
    }
  }
</static-query>
