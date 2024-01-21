<script setup>
import Navbar from "@/components/navbar/Navbar.vue";
import CookiesCard from "@/components/CookiesCard.vue";
import PostItem from "../components/post_items/PostItem.vue";
import AddNewPost from "@/components/post_items/AddNewPost.vue";
import BrandFooter from "../components/BrandFooter.vue";
</script>

<template>
  <main>
    <Navbar />

    <div class="post-ctn">
      <PostItem />
    </div>

    <div class="add-post-container">
      <div class="inner">
        <AddNewPost />
        <CookiesCard />
      </div>
    </div>
  </main>
  <footer>
    <BrandFooter />
  </footer>
</template>

<style lang="css" scoped>
.post-ctn {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0 24px;
  gap: 24px;
  margin: 0 0 24px 0;
}

.add-post-container {
  position: fixed;
  display: block;
  margin-right: 24px;
  width: max-content;

  bottom: 0;
  right: 0;
}
</style>
