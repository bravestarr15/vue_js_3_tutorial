<template>

  <div v-if="thisJobData">
  <!-- i.e. only show the details once the data is returned and populates thisJobData -->

    <h1>{{ thisJobData.title }}</h1>
    <p>The job id is {{ job_id }}</p>
    <p>{{ thisJobData.details }}</p>
  
  </div>
  <div v-else>

    <p>Loading job details...</p>>

  </div>

</template>

<script>
export default {
  props: [ 'job_id' ],
  data() {
    return {
      thisJobData: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.job_id)
      .then(response => response.json())
      .then(data => this.thisJobData = data)
      .catch(err => console.log(err.message))
  }
}
</script>

<style>

</style>