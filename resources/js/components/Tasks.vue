<template>
    <div>
        <div class="flex">
            <SideBar />
            <v-main>
                <v-theme-provider root :dark="isDark">
                    <v-container>
                        <v-row justify="center" class="ma-5">
                            <v-col xs="12" sm="8">
                                <v-card>
                                    <v-toolbar color="blue darken-4" dark>
                                        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
                                        <v-toolbar-title class="headline"
                                            >Todo list</v-toolbar-title
                                        >

                                        <v-spacer></v-spacer>

                                        <v-btn icon>
                                            <v-icon>mdi-magnify</v-icon>
                                        </v-btn>
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on }">
                                                <v-btn
                                                    icon
                                                    @click="isDark = !isDark"
                                                    v-on="on"
                                                >
                                                    <v-icon v-model="isDark">{{
                                                        !isDark
                                                            ? "mdi-weather-night"
                                                            : "mdi-weather-cloudy"
                                                    }}</v-icon>
                                                </v-btn>
                                            </template>
                                            <span>
                                                {{
                                                    isDark
                                                        ? "light mode"
                                                        : "dark mode"
                                                }}
                                            </span>
                                        </v-tooltip>
                                    </v-toolbar>

                                    <v-list two-line subheader>
                                        <v-subheader class="headline"
                                            >{{ day }}, {{ date }}{{ ord }}
                                            {{ year }}</v-subheader
                                        >
                                        <p class="mx-12 text-right">
                                            <b>{{ todos.length }}</b> Tasks
                                        </p>

                                        <!-- <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title>
                          <v-text-field
                            v-model="newTodo"
                            id="newTodo"
                            name="newTodo"
                            label="Type your task"
                            @keyup.enter="addTodo"
                          />
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item> -->
                                    </v-list>

                                    <v-list subheader two-line flat>
                                        <v-subheader
                                            class="subheading"
                                            v-if="todos.length == 0"
                                            >You have 0 Tasks, add
                                            some</v-subheader
                                        >
                                        <v-subheader class="subheading" v-else
                                            >Your Tasks</v-subheader
                                        >

                                        <v-list-item-group>
                                            <v-list-item
                                                v-for="(todo, i) in todoList"
                                                :key="i"
                                            >
                                                <template
                                                    ref="task_line"
                                                    #default="{ active }"
                                                >
                                                    <v-list-item-action>
                                                        <v-checkbox
                                                            :active="todo.done"
                                                            @click="
                                                                updateStatus(
                                                                    todo.id,
                                                                    'done'
                                                                )
                                                            "
                                                        ></v-checkbox>
                                                    </v-list-item-action>

                                                    <v-list-item-content>
                                                        <v-list-item-title
                                                            :class="{
                                                                done: todo.done
                                                                    ? true
                                                                    : active,
                                                            }"
                                                            >{{
                                                                todo.title
                                                                    | capitalize
                                                            }}</v-list-item-title
                                                        >
                                                        <v-list-item-subtitle
                                                            >Added on: {{ date
                                                            }}{{ ord }}
                                                            {{ day }}
                                                            {{
                                                                year
                                                            }}</v-list-item-subtitle
                                                        >
                                                    </v-list-item-content>
                                                    <!-- <v-btn
                                                        fab
                                                        ripple
                                                        small
                                                        color="red"
                                                        v-if="active"
                                                        @click="removeTodo(i)"
                                                    >
                                                        <v-icon
                                                            class="white--text"
                                                            >mdi-close</v-icon
                                                        >
                                                    </v-btn> -->
                                                </template>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-card>
                                <!-- <p class="subheading">
                  Version 2.0, updated to vuetify latest version
                </p> -->
                            </v-col>
                        </v-row>
                    </v-container>
                </v-theme-provider>
            </v-main>
        </div>
    </div>
</template>
<script>
// import AddTasksModal from "../components/AddTaskModal.vue";
import { mapFields } from "vuex-map-fields";
import SideBar from "../components/SideBar.vue";
export default {
    name: "Tasks",
    components: {
        SideBar,
    },

    created() {
        let tokenConnexion = localStorage.getItem("tokenConnexion");
        //recup des tâches
        axios
            .get("http://127.0.0.1:8004/api/v1/tasks", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-type": "application/json",
                    Authorization: "Bearer " + tokenConnexion,
                },
            })
            .then((response) => {
                var todoList = response.data.data;
                console.log("task", response.data.data);
                this.$store.dispatch("updateTodoList", todoList);
            });
    },

    mounted() {
        this.getAllTask();
    },
    data() {
        return {
            isDark: true,
            show: true,
            newTodo: "",
            todos: [
                // {
                //     title: "oklm",
                //     done: false,
                // },
            ],
            day: this.todoDay(),
            date: new Date().getDate(),
            ord: this.nth(new Date().getDate()),
            year: new Date().getFullYear(),
        };
    },

    methods: {
        getAllTask() {
            let tokenConnexion = localStorage.getItem("tokenConnexion");
            //recup des tâches
            axios
                .get("http://127.0.0.1:8004/api/v1/tasks", {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Content-type": "application/json",
                        Authorization: "Bearer " + tokenConnexion,
                    },
                })
                .then((response) => {
                    this.todoList = response.data.data;
                    console.log("task", response.data.data);
                    // this.$store.dispatch("updateTodoList", todoList);
                    console.log("mounted", this.todoList);
                    this.todoList.forEach((elt) => {
                        this.todos.push({
                            id: elt.id,
                            title: elt.title,
                            done: elt.status == "done",
                            status: elt.status,
                        });
                    });
                });
        },
        updateStatus(id, status) {
            let tokenReq = localStorage.getItem("tokenConnexion");

            axios.put(
                "http://127.0.0.1:8004/api/v1/task/status",
                { id: id, status: status },
                {
                    headers: { Authorization: "Bearer " + tokenReq },
                }
            );
        },
        addTodo() {
            const value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }

            this.todos.push({
                title: this.newTodo,
                done: false,
            });
            this.newTodo = "";
        },

        removeTodo(index) {
            this.todos.splice(index, 1);
        },

        todoDay() {
            const d = new Date();
            const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            return days[d.getDay()];
        },

        nth(d) {
            if (d > 3 && d < 21) return "th";
            switch (d % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
    },

    computed: {
        ...mapFields(["todoList"]),
    },

    filters: {
        capitalize: function (value) {
            if (!value) return "";
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
    },
};
</script>
<style scoped>
.done {
    text-decoration: line-through;
}
</style>
