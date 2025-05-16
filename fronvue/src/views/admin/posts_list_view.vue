<template>
    <div>
        <AdminLayout>
            <PostsListComponent />
        </AdminLayout>
    </div>
</template>

<script>
import PostsListComponent from '@/components/admin/posts-list_component.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
export default {
    components: {
        PostsListComponent,
        AdminLayout,
    },
};
</script>