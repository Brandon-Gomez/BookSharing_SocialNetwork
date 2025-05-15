<template>
    <div>
        <AdminLayout>
            <UsersListComponent />
        </AdminLayout>
    </div>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue';
import UsersListComponent from '@/components/admin/users-list_component.vue';
export default {
    components: {
        AdminLayout,
        UsersListComponent,
    },
};
</script>