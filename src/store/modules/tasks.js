import axios from "axios";

export default {
  state: {
    tasksList: [],
    tasksPage: 1,
    tasksLimit: 10,
    isTasksLoading: false,
    showErrorAlert: false,
  },

  mutations: {
    toggleAlert(flag) {
      this.showErrorAlert = flag;
    },
    updateTaskItemValue(task, keyParameter, valueParameter) {
      return this.tasksList.map((item) =>
        item.id === task.id ? { ...item, [keyParameter]: valueParameter } : item
      );
    },
  },

  actions: {
    async addTask(task) {
      try {
        this.toggleAlert(false);

        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          task
        );

        // this.tasksList.push({ ...response.data, isDisabled: false });

        this.tasksList.push({ ...task, isDisabled: false });
      } catch (error) {
        console.error(error);
        this.toggleAlert(true);
      }
    },
    async getTasks() {
      try {
        this.isTasksLoading = true;
        this.toggleAlert(false);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?sort_by=id:desc",
          {
            params: {
              _page: this.tasksPage,
              _limit: this.tasksLimit,
            },
          }
        );

        this.tasksList = response.data;

        this.tasksList.forEach((item) => (item.isDisabled = false));
      } catch (error) {
        console.error(error);
        this.toggleAlert(true);
      } finally {
        this.isTasksLoading = false;
      }
    },

    async deleteTask(id) {
      try {
        this.toggleAlert(false);

        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );

        this.tasksList = this.tasksList.filter((item) => item.id !== id);
      } catch (error) {
        console.error(error);
        this.toggleAlert(true);
      }
    },

    async makeTaskCompleted(task) {
      try {
        this.toggleAlert(false);

        this.tasksList = this.updateTaskItemValue(task, "isDisabled", true);

        const response = await axios.patch(
          `https://jsonplaceholder.typicode.com/todos/${task.id}`,
          {
            data: {
              completed: !task.completed,
            },
          }
        );

        this.tasksList = this.updateTaskItemValue(
          task,
          "completed",
          !task.completed
        );
      } catch (error) {
        console.error(error);
        this.toggleAlert(true);
      } finally {
        this.tasksList = this.updateTaskItemValue(task, "isDisabled", false);
      }
    },
  },

  getters: {
    getTasksComputed() {
      return [...this.tasksList].reverse();
    },
  },
};
