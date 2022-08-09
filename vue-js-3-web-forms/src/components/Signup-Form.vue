<template>

  <div> 

    <form @submit.prevent="handleSubmit">  
    <!-- event modifier 'prevent' stops default action of clear form and page refresh -->
      <label>Email:</label>
      <input type="email" required v-model="email"> 

      <label>Password:</label>
      <input type="password" required v-model="pwd"> 

      <label>Role:</label>
      <select v-model="jobRole">
        <option value="dvlp">Web Developer</option>
        <option value="dsgn">Web Designer</option>
      </select>

      <label>Skills:</label>
      <input type="text" v-model="tempSkill" @keyup.alt="addSkill"> 
      <!-- keyup means 'whenever a key is pressed' -->
      <!-- .alt means that when holding down the alt the other key is not recorded in the text,
          hence now ALT + , saves the skill WITHOUT a comma being saved -->
      <div v-for="thisSkill in skills" v-bind:key="thisSkill" class="pill"> 
      <!-- loop through skills requires key/unique field -->
        <span @click="deleteSkill(thisSkill)">{{ thisSkill }}</span>
      </div>

      <div class="terms">
        <input type="checkbox" v-model="chkTerms" required>
        <label>Accept terms and conditions</label>
      </div>

  <!--
      <div>
        <input type="checkbox" value="Mario" v-model="names">
        <label>Mario</label>
      </div>
      <div>
        <input type="checkbox" value="Yoshi" v-model="names">
        <label>Yoshi</label>
      </div>
      <div>
        <input type="checkbox" value="Luigi" v-model="names">
        <label>Luigi</label>
      </div>
  -->

      <div class="submit">
        <button>Create an Account</button>
      </div>

    </form>

    <p> Email: {{ email }} </p>
    <p> Password: {{ pwd }} </p>
    <p> Role: {{ jobRole }} </p>
    <p> Terms accepted: {{ chkTerms }} </p>
  <!--  <p> Names: {{ names }} </p>  -->

  </div>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      pwd: '',
      jobRole: '',  /* populate to set default */
      chkTerms: false,
/*      names: []  */
      tempSkill: '',
      skills: []
    }
  },
  methods: {
    addSkill(e) {
/*      console.log(e)  */
      if (e.key === ',' && this.tempSkill) {  /* and tempSkill is not empty */
        /* check for existence of latest skill (tempSkill) in array 
           note: ! negates the check */
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(thatSkill) {
/*      console.log(thatSkill)  */
/*      console.log(this.skills.indexOf(thatSkill))  */
      this.skills.splice(this.skills.indexOf(thatSkill), 1)
/* alternate approach */
/*
      this.skills = this.skills.filter((item) => {
        return thatSkill !== item
      })
*/
    },
    handleSubmit() {
      console.log('form submitted')
      /* normally, here, you'd validate the entered info and submit to database */
    }
  }
}
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
</style>