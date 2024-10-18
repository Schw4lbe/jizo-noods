<template>
  <div v-if="!user" class="netlify-login-ui">
    <img src="../../../public/img/logo.png" alt="logo" class="login-logo" />
    <h3 class="login-header">Jizo Noods Website Preview</h3>
    <button @click="openLogin" class="netlify-login-btn">Login</button>
  </div>
  <button v-if="user" @click="logout" class="netlify-logout-btn">Logout</button>
</template>

<script>
import netlifyIdentity from "netlify-identity-widget";

export default {
  name: "NetlifyIdentity",
  emits: ["user-status-changed"],

  data() {
    return {
      user: null,
    };
  },
  mounted() {
    netlifyIdentity.init();

    // this.updateUserFromLocalStorage();

    netlifyIdentity.on("init", (user) => {
      this.user = user;
      this.emitUserStatus();
      if (!user) {
        this.openLogin();
      }
    });

    netlifyIdentity.on("login", (user) => {
      this.user = user;
      this.emitUserStatus();
      // window.location.reload();
    });

    netlifyIdentity.on("logout", () => {
      this.user = null;
      this.emitUserStatus();
      // window.location.reload();
    });
  },
  methods: {
    openLogin() {
      netlifyIdentity.open();
    },
    logout() {
      netlifyIdentity.logout();
    },
    updateUserFromIdentity() {
      this.user = netlifyIdentity.currentUser();
      this.emitUserStatus();
    },
    emitUserStatus() {
      this.$emit("user-status-changed", !!this.user);
    },
  },
};
</script>
