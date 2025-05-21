<template>
  <div>
    <MainLayout>
      <EditProfileComponent />
    </MainLayout>
  </div>
</template>

<script>
import EditProfileComponent from '../components/editprofile_component.vue'; // Importar el componente
import MainLayout from '@/layouts/MainLayout.vue'; // Importar el layout principal

export default {
  components: {
    EditProfileComponent,
    MainLayout,
  }
};
</script>