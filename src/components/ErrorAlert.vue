<template>
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>{{ errorMessage }}</strong>

    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      @click="toggleAlert(false)"
    ></button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },

  methods: {
    ...mapMutations(["toggleAlert"]),
  },
};
</script>

<style></style>
