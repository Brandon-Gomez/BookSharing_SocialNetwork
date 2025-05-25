<template>
  <div>
    <MainLayout>
      <ProfileLayout>
        <EditProfileComponent />
      </ProfileLayout>
    </MainLayout>
  </div>
</template>

<script>
import EditProfileComponent from '../components/editprofile_component.vue'; // Importar el componente
import MainLayout from '@/layouts/MainLayout.vue'; // Importar el layout principal
import ProfileLayout from '@/layouts/ProfileLayout.vue'; // Importar el layout de perfil

export default {
  components: {
    EditProfileComponent,
    ProfileLayout,
    MainLayout,
  }
};
</script>