<template>

  <MainLayout>
    <ProfileLayout >
      <ProfileComponent />
    </ProfileLayout>
  </MainLayout>
</template>
<script>
import ProfileComponent from '../components/profile_component.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import ProfileLayout from '@/layouts/ProfileLayout.vue';

export default {
  components: {
    MainLayout,
    ProfileLayout,
    ProfileComponent,
  },
};
</script>
