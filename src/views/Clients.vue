<template>
  <v-container>
    <h1 class="my-4 mx-4">Клиенты</h1>
    <v-card max-width="344" class="mx-4">

      <v-list-item four-line>
        <v-list-item-content>
          <v-card-title>Иван Петров</v-card-title>
          <v-card-subtitle>10 лет</v-card-subtitle>
          <v-card-subtitle>Анна Петрова +7(900)-000-00-00</v-card-subtitle>
          <v-card-text>Описание</v-card-text>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="mx-4">
        <v-btn text>Посмотреть</v-btn>

      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
name: "Clients"
}
</script>

<style scoped>

</style>