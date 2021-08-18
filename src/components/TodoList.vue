<template>
  <div>
    <todo-item v-for="item in getTasksComputed" :key="item.id" :task="item">
    </todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: { TodoItem },
};
</script>

<style></style>
