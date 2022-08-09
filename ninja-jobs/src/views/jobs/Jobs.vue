<template>

  <div>

    <h1>Jobs</h1>  

    <div v-for="eachJob in jobs" v-bind:key="eachJob.id" class="job">
      <router-link v-bind:to="{ name: 'jobDetails', params: { job_id: eachJob.id }}">
        <h2>{{ eachJob.title }}</h2>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'Ninja UX Designer', id: 1, details: 'lorem' },
        { title: 'Ninja Web Developer', id: 2, details: 'lorem' },
        { title: 'Ninja Vue Developer', id: 3, details: 'lorem' },
      ]
    }
  }

}
</script>

<style>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>