<template>
  <MainLayout>
    <ProfileLayout>
      <EditPostComponent :postId="$route.params.postId" />
    </ProfileLayout>
  </MainLayout>
</template>

<script>
import EditPostComponent from '@/components/editpost_component.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ProfileLayout from '@/layouts/ProfileLayout.vue';

export default {
  components: {
    MainLayout,
    EditPostComponent,
    ProfileLayout,
  },

};
</script>