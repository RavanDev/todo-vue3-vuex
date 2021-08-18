<template>
  <div class="container">
    <div class="row row-cols-auto my-3 justify-content-center">
      <p :class="headerClass">ToDo Tasks Application</p>
    </div>

    <div class="row my-2">
      <div class="col-sm-6 p-0 m-0">
        <p class="fs-5 rounded-3 bg-success bg-opacity-75 p-2 m-0">
          <strong>Used Tools:</strong> Vue.js 3, Vuex 4, Bootstrap 5, Axios.js
        </p>
      </div>
    </div>

    <div class="row my-2">
      <div class="col-sm-6 p-0 m-0">
        <p class="fs-5 rounded-3 bg-success bg-opacity-75 p-2 m-0">
          <strong>Made By:</strong> Anvar Khamidov
        </p>
      </div>
    </div>

    <div class="row mt-4 mb-4">
      <div class="col-sm-10 p-0 m-0">
        <task-item-create></task-item-create>
      </div>
    </div>

    <div class="row my-2">
      <div class="col-sm-10 p-0 m-0">
        <error-alert
          v-if="showErrorAlert"
          :error-message="errorMessage"
        ></error-alert>
      </div>
    </div>

    <todo-list v-if="!isTasksLoading"></todo-list>

    <spinner-large v-else></spinner-large>
  </div>

  <div class="row mt-5">
    <footer></footer>
  </div>
</template>

<script>
import TaskItemCreate from "./components/TaskItemCreate.vue";
import ErrorAlert from "./components/ErrorAlert.vue";
import TodoList from "./components/TodoList.vue";
import SpinnerLarge from "./components/SpinnerLarge.vue";

export default {
  components: { TodoList, SpinnerLarge, ErrorAlert, TaskItemCreate },

  data() {
    return {
      errorMessage: "Something went wrong! There is a network error!",
      headerClass:
        "fs-1 rounded-3 bg-success fw-bold text-uppercase bg-opacity-75 p-2 m-0",
    };
  },

  mounted() {
    this.getTasks();
  },
};
</script>

<style></style>
