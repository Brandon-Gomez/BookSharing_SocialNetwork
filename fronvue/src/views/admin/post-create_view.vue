<template>
    <div>
        <AdminLayout>
            <PostCreateComponent />
        </AdminLayout>
    </div>
</template>

<script>
import PostCreateComponent from '@/components/admin/post-create_component.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
export default {
    components: {
        PostCreateComponent,
        AdminLayout,
    },
};
</script>