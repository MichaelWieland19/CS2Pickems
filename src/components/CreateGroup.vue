<template>
    <div>
      <h1>Create Pickem Group</h1>
      <form @submit.prevent="createGroup">
        <div>
          <label for="groupName">Group Name:</label>
          <input type="text" id="groupName" v-model="groupName" required>
        </div>
        <div>
          <label for="event">CS2 Event:</label>
          <select id="event" v-model="event" required>
            <option value="Event 1">Event 1</option>
            <option value="Event 2">Event 2</option>
            <!-- Add more events here -->
          </select>
        </div>
        <div>
          <label for="yourName">Your Name:</label>
          <input type="text" id="yourName" v-model="yourName" required>
        </div>
        <div>
          <label for="privacy">Group Privacy:</label>
          <select id="privacy" v-model="privacy" required>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div v-if="privacy === 'private'">
          <label for="password">Group Password:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Create Group</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        groupName: '',
        event: '',
        yourName: '',
        privacy: 'public',
        password: ''
      };
    },
    methods: {
      createGroup() {
        // Logic to create group
        const groupData = {
          groupName: this.groupName,
          event: this.event,
          yourName: this.yourName,
          privacy: this.privacy,
          password: this.password
        };
        console.log('Group created:', groupData);
        // You can send this data to your backend for processing
      }
    }
  };
  </script>
  
  <style scoped>
  /* Component-specific styles go here */
  </style>