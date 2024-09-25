<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <i class="fa-sharp fa-solid fa-bars navbar-toggler-button"></i>
      </button>
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li v-for="(item, index) in navItems" :key="index">
              <a class="nav-item" :href="item.url">{{ item.lable }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="scrolling-wrapper">
      <div class="marquee">
        <p>{{ content.navbarMain.scrollingText }}</p>
        <p>{{ content.navbarMain.scrollingText }}</p>
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
.scrolling-wrapper {
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
