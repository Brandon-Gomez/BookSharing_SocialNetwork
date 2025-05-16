<template>
    <div>
        <AdminLayout>
            <UserEditComponent />
        </AdminLayout>
    </div>
</template>

<script>
import UserEditComponent from '@/components/admin/user-edit_component.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
export default {
    components: {
        UserEditComponent,
        AdminLayout,
    },
};
</script>