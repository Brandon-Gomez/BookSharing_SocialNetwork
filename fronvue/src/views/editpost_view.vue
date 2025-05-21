<template>
  <MainLayout>
      <EditPostComponent :postId="$route.params.postId" />
  </MainLayout>
  </template>
  
  <script>
  import EditPostComponent from '@/components/editpost_component.vue';
  import MainLayout from '@/layouts/MainLayout.vue';
  
  export default {
    components: {
      MainLayout,
      EditPostComponent,
    },
  };
  </script>
  