<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs';

const notifications = [
  { title: "Message from A",
    icon: "mdi-email",
    color: "red-darken-1",
  },
  { title: "Message from B",
    icon: "mdi-email",
    color: "red-darken-2",
  },
  { title: "Message from C",
    icon: "mdi-email",
    color: "blue-darken-3",
  },
  { title: "Message from D",
    icon: "mdi-email",
    color: "yellow-darken-4",
  },
  { title: "Message from E",
    icon: "mdi-email",
    color: "red-darken-5",
  }
]

const darkTheme=ref(false)
const theme = useTheme()

// Devine changeTheme()
function changeTheme() {
  darkTheme.value = !darkTheme.value
  if (darkTheme.value) {
    theme.name.value = "dark"
  } else {
    theme.name.value = "light"
  }
}
</script>

<template>
  <v-app class="rounded rounded-md">
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <RouterLink to="/">
          <span class="font-weight-bold">
            Vuetify
          </span>
        </RouterLink>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Theme toggle button icon -->
      <v-btn icon @click="changeTheme" 
      >
        <v-icon :icon="darkTheme ? 'mdi-weather-sunny': 'mdi-weather-night'"></v-icon>
      </v-btn>

      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            class="mr-4"
            icon
            v-bind="props">
            <v-badge :content="5" color="red-darken-2">
              <v-icon icon="mdi-bell" color="blue-darken-4"></v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in notifications"
            :key="index"
            :value="index"
          >
            <v-list-item-title>
              <v-icon
                :color="item.color"
                :icon="item.icon">
              </v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        to="/login"
        size="small"
        variant="outlined"
        text="Login">
      </v-btn>
    </v-toolbar>
    <v-main>
      <v-fade-transition>
        <RouterView />
      </v-fade-transition>
    </v-main>
  </v-app>
</template>