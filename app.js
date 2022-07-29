const App = {
  data() {
    return {
      newTodo: "",
      arrTodo: [
        {
          name: "點按可以修改我",
          done: false,
        },
      ],
      filterBtn: "all",
    };
  },
  computed: {
    filter() {
      switch (this.filterBtn) {
        case "all": {
          return this.arrTodo;
        }
        case "todo": {
          return this.arrTodo.filter((item) => {
            return !item.done;
          });
        }
        case "complete": {
          return this.arrTodo.filter((item) => {
            return item.done;
          });
        }
      }
    },
    getsum() {
      let sum = 0;
      this.arrTodo.forEach((element) => {
        if (element.done == false) {
          sum++;
        }
      });
      return sum;
    },
  },
  methods: {
    add() {
      if (!this.newTodo) {
        alert("請輸入東西");
        return;
      } else {
        this.arrTodo.push({
          name: this.newTodo,
          id: this.addID,
          done: false,
        });
        this.newTodo = "";
      }
    },
    complete(done) {
      this.done = !done;
    },
    edit() {
      alert("修改完成");
    },
    removeData(name) {
      console.log(name);
      this.arrTodo.forEach((item, key) => {
        if (item.name == name) {
          this.arrTodo.splice(key, 1);
        }
      });
    },
    removeAll() {
      this.arrTodo = [];
    },
  },
};
Vue.createApp(App).mount("#app");
