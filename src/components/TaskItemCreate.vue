<template>
  <div class="input-group p-0 m-0">
    <input
      type="text"
      class="form-control"
      placeholder="Write your new task here..."
      v-model="taskText"
      @keyup.enter="localAddTask"
    />

    <button
      class="btn btn-success"
      type="button"
      :disabled="taskText.length === 0"
      @click="localAddTask"
    >
      Add Task
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      taskText: "",
    };
  },

  methods: {
    ...mapActions(["addTask"]),

    localAddTask() {
      if (this.taskText.length !== 0) {
        const newTask = {
          completed: false,
          id: Math.floor(Math.random() * 100000),
          title: this.taskText,
          userId: 1,
        };

        this.addTask(newTask);
        this.taskText = "";
      }
    },
  },
};
</script>

<style></style>
