<template>
  <MainLayout>
  <ProfileLayout>
      <CreatePostComponent />
  </ProfileLayout>
  </MainLayout>
  </template>
  
  <script>
  import CreatePostComponent from '@/components/createpost_component.vue';
  import MainLayout from '@/layouts/MainLayout.vue';
  import ProfileLayout from '@/layouts/ProfileLayout.vue';
  
  export default {
    components: {
      MainLayout,
      CreatePostComponent,
      ProfileLayout,
    },

  };
  </script>
  