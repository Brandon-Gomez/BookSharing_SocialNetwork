<template>
    <div v-if="visible" :class="['alert', alertClass, 'alert-dismissible', 'fade', 'show']" role="alert">
        {{ message }}
        <button type="button" class="close" @click="close">
            <span>&times;</span>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        message: String,
        type: {
            type: String,
            default: 'success' // success, danger, warning, info
        },
        visible: Boolean
    },
    computed: {
        alertClass() {
            return `alert-${this.type}`;
        }
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
};
</script>