<template>
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>{{ errorMessage }}</strong>

    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      @click="closeAlert"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      flag: false,
    };
  },

  methods: {
    closeAlert() {
      this.$emit("closeAlert", this.flag);
    },
  },
};
</script>

<style></style>
