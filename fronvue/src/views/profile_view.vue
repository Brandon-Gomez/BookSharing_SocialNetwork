<template>
  <MainLayout>
    <ProfileComponent />
  </MainLayout>
</template>
<script>
import ProfileComponent from '../components/profile_component.vue';
import MainLayout from '@/layouts/MainLayout.vue';

export default {
  components: {
    MainLayout,
    ProfileComponent,
  },
};
</script>
