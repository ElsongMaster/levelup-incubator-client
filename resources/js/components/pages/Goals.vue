<template>
  <div>
    <div class="flex">
      <SideBar />
      <!-- ? Content -->
      <v-container>
        <v-row>
          <v-col>
            <h1 class="text-h4">Goals</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <template>
              <v-expansion-panels>
                <v-expansion-panel v-for="(item) in goals" :key="'goalId-' + item.id">
                  <v-expansion-panel-header>
                    <p>{{ item.name }}</p>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <!-- Description -->
                    <p>{{ item.description.substring(0, 60) + '...' }}</p>
                    <v-container>
                      <v-row>
                        <v-col>
                          <!-- list tasks -->
                          <v-list subheader two-line flat>
                            <v-subheader>Tasks</v-subheader>

                            <v-list-item-group v-model="settings" multiple>
                              <v-list-item
                                v-for="task in item.tasks"
                                :key="'goalId-' + item.id + '-taskId-' + task.id"
                              >
                                <template v-slot:default>
                                  <v-list-item-action>
                                    <v-checkbox
                                      :input-value="task.status == 'done' ? true : false"
                                      :disabled="task.status == 'done'"
                                      color="primary"
                                      @click="validateTask(task)"
                                    ></v-checkbox>
                                  </v-list-item-action>

                                  <v-list-item-content>
                                    <v-list-item-title>{{ task.name }}</v-list-item-title>
                                  </v-list-item-content>
                                </template>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import SideBar from "../SideBar.vue";
import axios from 'axios'
export default {
  name: "Goals",
  data: () => ({
    goals: null,
    settings: [],
  }),
  components: {
    SideBar,
  },
  methods: {
    getStartupGoals () {
      axios.get('/api/v1/goals', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('tokenConnexion')
        }
      }).then(res => {
        console.log(res);
        this.goals = res.data.data.goals
      })
    },
    validateTask (task) {
      axios.get('/api/v1/goals/tasks/' + task.id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('tokenConnexion')
        }
      }).then(res => {
        console.log(res);
        res.status == 200
        task.status == 'done'
      })
    }
  },
  mounted () {
    this.getStartupGoals()
  }
};
</script>
<style></style>
