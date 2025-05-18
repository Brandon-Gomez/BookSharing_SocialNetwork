<template>
    <div>
        <AdminLayout>
            <PostEditComponent />
        </AdminLayout>
    </div>
</template>

<script>
import PostEditComponent from '@/components/admin/post-edit_component.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
export default {
    components: {
        PostEditComponent,
        AdminLayout,
    },
};
</script>