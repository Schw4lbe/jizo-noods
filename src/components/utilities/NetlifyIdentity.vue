<template>
  <div class="netlify-container">
    <div data-netlify-identity-menu></div>
    <div data-netlify-identity-button>Login with Netlify Identity</div>
  </div>
</template>
<script>
export default {
  name: "NetlifyIdentity",

  mounted() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", (user) => {
        if (!user) {
          // If not logged in, show the login widget
          window.netlifyIdentity.open();
        }
      });

      // Listen for login events
      window.netlifyIdentity.on("login", () => {
        console.log("User logged in");
        window.location.reload(); // Reload the page to show the app content
      });

      // Listen for logout events
      window.netlifyIdentity.on("logout", () => {
        console.log("User logged out");
        window.location.reload(); // Reload the page to enforce login
      });

      // Initialize the Netlify Identity widget
      window.netlifyIdentity.init();
    }
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
