<script setup>
import { ref } from "vue";

const props = defineProps({
  username: { type: String, required: true },
});

const user = ref();

fetch(`https://api.github.com/users/${props.username}`).then(async (res) => {
  const data = await res.json();
  user.value = data;
});
</script>

<template>
  <div v-if="user" class="m-5 shadow-xl card card-side bg-base-100 shadow-xl">
    <figure>
      <img :src="user.avatar_url" alt="users profile photo" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ user.name }}</h2>
      <p>
        <strong>{{ user.location }}</strong>
      </p>
      <p>{{ user.public_repos }} Public Repositories</p>
      <div class="card-actions justify-end">
        <a :href="user.html_url" class="btn btn-primary">View Profile</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
