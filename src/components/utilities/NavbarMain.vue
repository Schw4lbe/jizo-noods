<template>
  <nav class="navbar navbar-expand-md bg-body-tertiary">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li v-for="(item, index) in navItems" :key="index">
            <a class="nav-item" :href="item.url">{{ item.lable }}</a>
          </li>
        </ul>
      </div>

      <div class="wrapper">
        <div class="marquee">
          <p>{{ content.navbarMain.scrollingText }}</p>
          <p>{{ content.navbarMain.scrollingText }}</p>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import contentData from "../../../public/content.json";

interface NavItem {
  lable: string;
  url: string;
}

export default defineComponent({
  name: "NavbarMain",
  setup() {
    const store = useStore();
    const selectedLanguage = computed(() => store.getters.selectedLanguage);
    const content = computed(() => {
      return (
        (contentData as Record<string, any>)[selectedLanguage.value] ||
        contentData["en"]
      );
    });

    const navItems = computed(
      () => content.value.navbarMain.items as NavItem[]
    );

    return { content, navItems };
  },
});
</script>

<style scoped>
.wrapper {
  max-width: 100%;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 20s linear infinite;
}

.marquee p {
  display: inline-block;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
