<template>
    <div>
        <AdminLayout>
            <CategoriesListComponent />
        </AdminLayout>
    </div>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue';
import CategoriesListComponent from '@/components/admin/categories-list_component.vue';
export default {
    components: {
        AdminLayout,
        CategoriesListComponent,
    },
};
</script>