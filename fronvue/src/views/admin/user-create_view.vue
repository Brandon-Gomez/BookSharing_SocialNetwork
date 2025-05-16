<template>
    <div>
        <AdminLayout>
            <UserCreateComponent />
        </AdminLayout>
    </div>
</template>

<script>
import UserCreateComponent from '@/components/admin/user-create_component.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
export default {
    components: {
        UserCreateComponent,
        AdminLayout,
    },
};
</script>