<template>
    <div>
        <MainLayout>
            <CategoryComponent />
        </MainLayout>
    </div>
</template>

<script>

import MainLayout from '@/layouts/MainLayout.vue';
import CategoryComponent from '@/components/category_component.vue';

export default {
    components: {
        MainLayout,
        CategoryComponent,
    },
};
</script>