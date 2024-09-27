<template>
  <div class="netlify-container">
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
      user: null,
    };
  },
  mounted() {
    // Initialize Netlify Identity
    netlifyIdentity.init();

    // Set initial user state from localStorage if available
    this.updateUserFromLocalStorage();

    // Set up event listeners
    netlifyIdentity.on("init", (user) => {
      this.user = user; // Set user state
      this.emitUserStatus(); // Emit user status to the parent
      if (!user) {
        this.openLogin(); // Open login widget if not logged in
      }
    });

    netlifyIdentity.on("login", (user) => {
      this.user = user; // Update user state
      this.emitUserStatus(); // Emit user status to the parent
      console.log("User logged in");
    });

    netlifyIdentity.on("logout", () => {
      this.user = null; // Clear user state
      console.log("User logged out");
    });
  },
  methods: {
    openLogin() {
      netlifyIdentity.open(); // Manually open the login widget
    },
    logout() {
      netlifyIdentity.logout(); // Manually trigger logout
    },
    updateUserFromLocalStorage() {
      const storedUser = localStorage.getItem("gotrue.user");
      this.user = storedUser ? JSON.parse(storedUser) : null;
      this.emitUserStatus(); // Emit user status to the parent
    },
    emitUserStatus() {
      this.$emit("user-status-changed", !!this.user); // Emit boolean to the parent
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
