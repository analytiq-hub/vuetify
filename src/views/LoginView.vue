<template>

<v-container fluid>
    <v-overlay :model-value="isLoading"
    class="d-flex align-center justify-center"
    >
        <v-progress-circular v-if="isLoading" color="white" indeterminate></v-progress-circular>
    </v-overlay>
<v-row justify="center">
<v-col cols="4">
<v-card class="pa-4">
    <v-card-title class="text-h5 text-center">
        Login Here
    </v-card-title>
    <v-card-item>
        <v-sheet>
            <v-form @submit.prevent="submit">
            <v-text-field
                prepend-inner-icon="mdi-email"
                v-model="form.email"
                label="Email"
                :rules="[rules.required, rules.email]"
            ></v-text-field>
            <v-text-field
                prepend-inner-icon="mdi-key"
                v-model="form.password"
                label="Password"
                type="password"
                :rules="[rules.required]"
            ></v-text-field>
            <v-checkbox
                v-model="form.remember"
                color="red-darken-1"
                label="Remember Me"
                hide-details
            ></v-checkbox>
            <v-btn class="mt-2"
                type="submit"
                color="red-darken-1"
                variant="elevated"
                block>
                <span class="text-h6">Submit</span>
                <!-- Create v-progress-circular activated on isLoading -->
            </v-btn>
            </v-form>
        </v-sheet>
    </v-card-item>
    <v-card-action>
        <div class="mx-4">
        <v-btn block to="/register">
            Register
        </v-btn>
        </div>
    </v-card-action>
</v-card>
</v-col>
</v-row>
</v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref(
    {
        email: '',
        password: '',
        remember: false
    }
)

const isLoading = ref(false)

function submit() {
    if (form.value.email === "" || form.value.password === "") {
        return;
    }

    isLoading.value = true

    // Sleep a bit


    setTimeout(() => {
        isLoading.value = false
        alert(JSON.stringify(form.value))
    }, 3000)

    console.log(form.value)
}

const rules = {
  required: (value: any) => !!value || "Required.",
  email: (value: any) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || "Invalid e-mail.";
  },
};
</script>