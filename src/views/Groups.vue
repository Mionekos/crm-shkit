<template>
  <v-container>

    <v-row no-gutters>
      <v-col>
          <h1 class="my-4 mx-4">Понедельник</h1>
      </v-col>
      <v-col md="auto">

      </v-col>
      <v-col lg="1">
        <v-dialog
            v-model="dialog"
            width="650"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-4 my-4" fab dark small color="indigo" v-bind="attrs" v-on="on">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="headline blue lighten-2">
              Добавить группу
            </v-card-title>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  class="mx-4"
                  v-model="nameGroup"

                  :rules="nameGroupRules"
                  label="Название группы/курса"
                  required
              ></v-text-field>

              <v-text-field
                  class="mx-4"
                  v-model="age"
                  :rules="ageRules"
                  label="Возраст"
                  required
              ></v-text-field>



                  <v-menu
                      ref="menu"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="time"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          class="mx-4"
                          v-model="time"
                          label="Время"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-time-picker
                        v-if="menu2"
                        v-model="time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                    ></v-time-picker>
                  </v-menu>

                  <v-select
                      class="mx-4"
                      :items="['Препод1', 'Препод2', 'Препод3', 'Препод4']"
                      label="Преподаватель"
                  ></v-select>

            </v-form>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
              >
                I accept
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>


<!--    <v-divider  ></v-divider>-->
    <v-list-item three-line>
      <v-list-item-content>
        <v-card max-width="344" >
          <v-list-item four-line>
            <v-list-item-content>
              <v-card-title>Создание сайтов</v-card-title>
              <v-card-subtitle>12-14 лет</v-card-subtitle>
              <v-card-text>Создаем сайт на html&css.</v-card-text>
            </v-list-item-content>

          </v-list-item>
          <v-card-actions class="mx-4">
            <v-btn text>Посмотреть</v-btn>
            <v-btn text>Записать</v-btn>
          </v-card-actions>
        </v-card>

        <v-card max-width="344" class="mx-4">
          <v-list-item four-line>
            <v-list-item-content>
              <v-card-title>Создание сайтов</v-card-title>
              <v-card-subtitle>12-14 лет</v-card-subtitle>
              <v-card-text>Создаем сайт на html&css.</v-card-text>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions class="mx-4">
            <v-btn text>Посмотреть</v-btn>
            <v-btn text>Записать</v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item-content>
    </v-list-item>



  </v-container>
</template>

<script>
export default {
name: "Groups",
  data () {

    return {
      time: null,
      menu2: false,
      modal2: false,
    }
  },

}
</script>

<style scoped>

</style>