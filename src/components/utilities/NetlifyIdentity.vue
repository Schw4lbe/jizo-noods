<template>
  <div class="netlify-container">
    <!-- Custom buttons for login and logout -->
    <button v-if="!user" @click="openLogin">Login with Netlify Identity</button>
    <button v-if="user" @click="logout">Logout</button>
  </div>
</template>
<script>
import netlifyIdentity from "netlify-identity-widget"; // Import the widget

export default {
  name: "NetlifyIdentity",
  data() {
    return {
      user: null, // Track the user's login status
    };
  },
  mounted() {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Set up event listeners
    netlifyIdentity.on("init", (user) => {
      this.user = user; // Set user state
      if (!user) {
        this.openLogin(); // Open login widget if not logged in
      }
    });

    netlifyIdentity.on("login", (user) => {
      this.user = user; // Update user state
      console.log("User logged in");
      window.location.reload(); // Reload the page to show the app content
    });

    netlifyIdentity.on("logout", () => {
      this.user = null; // Clear user state
      console.log("User logged out");
      window.location.reload(); // Reload the page to enforce login
    });
  },
  methods: {
    openLogin() {
      netlifyIdentity.open(); // Manually open the login widget
    },
    logout() {
      netlifyIdentity.logout(); // Manually trigger logout
    },
  },
};
</script>
<style scoped>
.netlify-container {
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 999;
  background: tomato;
}
</style>
