<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb" :class="themeClass" style="background-color: unset;">
            <li v-for="(item, idx) in items" :key="idx" class="breadcrumb-item"
                :class="{ active: idx === items.length - 1 }" aria-current="page">
                <router-link v-if="item.to && idx !== items.length - 1" :to="item.to">{{ item.label }}</router-link>
                <span v-else>{{ item.label }}</span>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
            // [{ label: 'Home', to: '/' }, { label: 'Categoría', to: '/category/1' }, { label: 'Actual' }]
        },
        theme: {
            type: String,
            default: "", // Ej: "breadcrumb-light"
        },
    },
    computed: {
        themeClass() {
            return this.theme;
        },
    },
};
</script>