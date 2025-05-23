<template>
  <MainLayout>
      <CreatePostComponent />
  </MainLayout>
  </template>
  
  <script>
  import CreatePostComponent from '@/components/createpost_component.vue';
  import MainLayout from '@/layouts/MainLayout.vue';
  
  export default {
    components: {
      MainLayout,
      CreatePostComponent,
    },

  };
  </script>
  