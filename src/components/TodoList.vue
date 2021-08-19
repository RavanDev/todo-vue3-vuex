<template>
  <div>
    <todo-item v-for="item in getTasksComputed" :key="item.id" :task="item">
    </todo-item>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { TodoItem },

  computed: {
    ...mapGetters(["getTasksComputed"]),
  },
};
</script>

<style></style>
