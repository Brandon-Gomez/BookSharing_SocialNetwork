<template>
    <div>
        <nav class="d-flex justify-content-between pt-2" aria-label="Page navigation">
            <ul class="pagination mb-0">
                <li class="page-item">
                    <button :disabled="modelValue === 1" @click="$emit('update:modelValue', modelValue - 1)"
                        class="page-link">
                        <i class="ci-arrow-left me-2"></i>Ant
                    </button>
                </li>
                <li class="page-item" v-if="totalPages > 1 && modelValue > 3">
                    <button class="page-link" @click="$emit('update:modelValue', 1)">1</button>
                </li>
                <li class="page-item disabled" v-if="modelValue > 4">
                    <span class="page-link">...</span>
                </li>
                <li v-for="n in paginationNumbers" :key="n" :class="['page-item', { active: modelValue === n }]">
                    <button class="page-link" @click="$emit('update:modelValue', n)">{{ n }}</button>
                </li>
                <li class="page-item disabled" v-if="modelValue < totalPages - 3">
                    <span class="page-link">...</span>
                </li>
                <li class="page-item" v-if="totalPages > 1 && modelValue < totalPages - 2">
                    <button class="page-link" @click="$emit('update:modelValue', totalPages)">{{ totalPages }}</button>
                </li>
                <li class="page-item">
                    <button :disabled="modelValue === totalPages" @click="$emit('update:modelValue', modelValue + 1)"
                        class="page-link">
                        Sig<i class="ci-arrow-right ms-2"></i>
                    </button>
                </li>
            </ul>
        </nav>
    </div>

</template>

<script>
export default {
    props: {
        modelValue: { type: Number, required: true }, // v-model
        totalPages: { type: Number, required: true },
    },
    computed: {
        paginationNumbers() {
            const range = [];
            let start = Math.max(1, this.modelValue - 2);
            let end = Math.min(this.totalPages, this.modelValue + 2);

            if (this.modelValue <= 3) {
                end = Math.min(5, this.totalPages);
            }
            if (this.modelValue >= this.totalPages - 2) {
                start = Math.max(1, this.totalPages - 4);
            }
            for (let i = start; i <= end; i++) {
                range.push(i);
            }
            return range;
        }
    }
};
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    width: 100%;
}

nav[aria-label="Page navigation"] {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
</style>