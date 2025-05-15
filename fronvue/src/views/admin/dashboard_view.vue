<template>
    <div>
        <AdminLayout>
            <dashboardComponent />
        </AdminLayout>
    </div>
</template>

<script>
import dashboardComponent from '@/components/admin/dashboard_component.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
export default {
    components: {
        dashboardComponent,
        AdminLayout,
    },
};
</script>