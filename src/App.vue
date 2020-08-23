<template>
  <v-app>

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-list dense>

        <v-list-item link to="/timetable">
          <v-list-item-action>
            <v-icon>mdi-timetable</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Расписание</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/groups">
          <v-list-item-action>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Группы
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/clients">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Клиенты</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        color="#5271ff"
        dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Расписание</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer
        color="#5271ff"
        app
    >
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false
  })

}
</script>