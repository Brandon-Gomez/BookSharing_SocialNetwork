<template>
    <div>
        <MainLayout>
            <CategoriesComponent />
        </MainLayout>
    </div>
</template>

<script>

import MainLayout from '@/layouts/MainLayout.vue';
import CategoriesComponent from '@/components/categories_component.vue';

export default {
    components: {
        MainLayout,
        CategoriesComponent,
    },
};
</script>