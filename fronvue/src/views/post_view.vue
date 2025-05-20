<template>
  <MainLayout>
    <PostComponent />
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import PostComponent from "@/components/post_component.vue";

export default {
  components: {
    MainLayout,
    PostComponent,
  },
}
</script>
