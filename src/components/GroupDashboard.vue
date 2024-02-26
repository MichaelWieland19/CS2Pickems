<template>
    <div>
      <h1>Group Dashboard</h1>
      <p>Welcome to the Group Dashboard for Group "{{ groupName }}"</p>
      <!-- Display group details and match predictions here -->
    </div>
  </template>
  
  <script>
  export default {
    props: ['groupName'],
  };
  </script>
  
  <style scoped>
  /* Component-specific styles go here */
  </style>
  