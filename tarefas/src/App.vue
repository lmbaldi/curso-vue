<template>
  <div id="app">
    <h1>Tarefas</h1>
    <TaksProgress :progress="progress" />
    <NewTask @taskAdded="addTask" />
    <TaskGrid
      :tasks="tasks"
      @taskDeleted="deleteTask"
      @taskStateChanged="toggleTaskState"
    />
  </div>
</template>

<script>
import TaksProgress from "./components/TaskProgress.vue";
import NewTask from "./components/NewTask.vue";
import TaskGrid from "./components/TaskGrid.vue";

export default {
  components: { TaksProgress, NewTask, TaskGrid },
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    progress() {
      const total = this.tasks.length;
      const done = this.tasks.filter((t) => !t.pending).length;
      return Math.round((done / total) * 100) || 0;
    },
  },
  watch: {
    tasks: {
      deep: true,
      handler() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      },
    },
  },

  methods: {
    addTask(task) {
      //verifica se  nome jah esta na lista
      const sameName = (t) => t.name === task.name;
      //faz um filtro  de todas as tasks pra ver se tem um mesmo nome
      const reallyNew = this.tasks.filter(sameName).length == 0;
      // testar pra ver se realmente um novo nome
      if (reallyNew) {
        this.tasks.push({
          name: task.name,
          pending: task.pending || true, //vai retornar true por padrao
        });
      }
    },
    deleteTask(i) {
      if (i >= 0) this.tasks.splice(i, 1);
    },
    toggleTaskState(i) {
      this.tasks[i].pending = !this.tasks[i].pending;
    },
  },
  created() {
    const json = localStorage.getItem("tasks");
    const array = JSON.parse(json);
    this.tasks = Array.isArray(array) ? array : [];
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
