<template>
  <div class="row my-2">
    <div class="input-group p-0 m-0">
      <div class="col-1 input-group-text">
        <input
          class="form-check"
          type="checkbox"
          :checked="task.completed"
          :disabled="task.isDisabled"
          @change="makeTaskDone"
        />
      </div>

      <label :class="{ labelClass, checkedClass }">
        {{ task.title }}
        <spinner-small v-if="task.isDisabled"></spinner-small>
      </label>

      <button
        class="col-2 btn btn-danger"
        :disabled="task.isDisabled"
        @click="deleteTask"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import SpinnerSmall from "./SpinnerSmall.vue";

export default {
  components: { SpinnerSmall },

  data() {
    return {
      labelClass:
        "col-9 bg-primary p-3 bg-opacity-75 fw-bold fs-5 text-uppercase text-start",
    };
  },

  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deleteTask() {
      this.$emit("deleteTask", this.task.id);
    },

    makeTaskDone() {
      this.$emit("makeTaskDone", this.task);
    },
  },

  computed: {
    checkedClass() {
      return this.task.completed
        ? "bg-warning text-decoration-line-through"
        : "";
    },
  },
};
</script>

<style></style>
