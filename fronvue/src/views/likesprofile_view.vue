<template>
  <MainLayout>
    <ProfileLayout>
      <LikeComponent />
    </ProfileLayout>
  </MainLayout>
</template>

<script>
import LikeComponent from "@/components/likesprofile_component.vue";
import ProfileLayout from "@/layouts/ProfileLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: {
    MainLayout,
    LikeComponent,
    ProfileLayout,
  },
  data() {
  
  },
};
</script>