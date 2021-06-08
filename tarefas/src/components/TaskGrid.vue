<template>
    <div class="tasks">
        <div v-for="task in tasks" :key="task.name">{{ task.name }}></div>    
    </div>
</template>

<script>
export default {
    props: {
        tasks: { type: Array, required: true}
    }
}
</script>


<style>

</style>