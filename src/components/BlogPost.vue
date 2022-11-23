<template>
  <div class="blog-post">
    <div class="date">{{ post.date }}</div>
    <div class="box-img">
      <img class="post-img" :src="post.image" :alt="post.title" />
      <div class="num-square">{{ post.number }}</div>
    </div>
    <div class="post-title">{{ post.title }}</div>
    <p class="pb-3">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione eaque
      quod, alias aut, iste, dolorum labore facere ullam enim molestias quis
      ipsa illo ad voluptatem earum quo dolorem sint [...]
    </p>
    <hr />
    <div class="d-flex">
      <div>
        <img src="../assets/img_unzip/author.png" alt="Author icon" />
        <span>{{ post.author }}</span>
      </div>

      <div>
        <img
          class="ps-4"
          src="../assets/img_unzip/category.png"
          alt="Category icon"
        />
        <span>{{ post.category }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/style/partials/variables" as *;

.post-img {
  width: 100%;
}

.box-img {
  position: relative;
}
.date {
  width: 100%;
  color: $greytxt;
  padding-bottom: 0.8rem;
}

.post-title {
  color: $butterfly;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.5rem 0;
}

span {
  color: $greytxt;
  font-size: 0.9rem;
  padding-left: 0.8rem;
}

.num-square {
  height: 45px;
  width: 45px;
  position: absolute;
  background-color: $maincolor;
  color: $sugarcane;
  font-size: 1.2rem;
  text-align: center;
  line-height: 45px;
  bottom: 0;
  right: 0;
}
</style>
