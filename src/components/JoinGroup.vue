<template>
    <div>
      <h1>Join a Group</h1>
      <form @submit.prevent="joinGroup">
        <div>
          <label for="groupName">Group Name:</label>
          <input type="text" id="groupName" v-model="groupName" required>
        </div>
        <div v-if="isPrivate">
          <label for="password">Group Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Join Group</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        groupName: '',
        password: '',
        isPrivate: false // Set to true if the group is private
      };
    },
    methods: {
      joinGroup() {
        // Logic to join group
        const groupData = {
          groupName: this.groupName,
          password: this.password
        };
        console.log('Joining group:', groupData);
        // You can send this data to your backend for processing
      }
    }
  };
  </script>
  
  <style scoped>
  /* Component-specific styles go here */
  </style>
  