<template lang="html">
  <div id="sidebar" class="column is-2 sidebar is-hidden-mobile">
    <aside>
      <p class="navbar is-hidden-mobile">
      </p>
      <nav class="menu">
        <ul class="menu-list">
          <li v-for="(menu, index) in mainMenu" @click.prevent="navigateMenuItem(menu.name)" v-bind:key="index">
            <a v-if="menu.hasAccess" :title="menu.name">
              <b-icon :icon="menu.icon"></b-icon>
              <span class="wordwrap" style="margin-left:7px">{{menu.name}}</span>
              <b-icon :icon="menu.isSubMenuActive ? 'angle-up' : 'angle-down'" class="is-pulled-right"></b-icon>
            </a>
            <ul v-if="menu.isSubMenuActive && menu.subMenus.length > 0">
              <li v-for="(subMenuItem, index) in menu.subMenus" @click.prevent="navigateMenuItem(menu.name, subMenuItem)" v-bind:key="index">
                <router-link :to="subMenuItem.to" :title="subMenuItem.name" v-if="subMenuItem.hasAccess">
                  <span class="wordwrap">{{subMenuItem.name}}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  </div>
</template>

<script>
// import STORAGE from '@/storage';

export default {
  name: 'sidebar',
  data: () => {
    return {
      mainMenu: [
        {
          name: 'Menu',
          icon: 'file-invoice',
          to: '',
          hasAccess: true,
          isSubMenuActive: false,
          isActive: false,
          subMenus: [
            {
              name: 'Dashboard',
              to: { name: 'dashboard' },
              isActive: true,
              hasAccess: true
            }
          ]
        }
      ],
      hasAccess: false
    };
  },
  methods: {
    navigateMenuItem: function (toggledMenu, toggledSubMenu) {
      this.mainMenu.forEach(menu => {
        if (menu.name === toggledMenu) {
          menu.isActive = true;
          if (menu.subMenus.length > 0) {
            menu.isSubMenuActive = !menu.isSubMenuActive;
          }
        } else {
          menu.isActive = false;
          menu.isSubMenuActive = false;
        }
        if (menu.subMenus.length > 0) {
          menu.subMenus.forEach(subMenu => {
            if (subMenu.name === toggledSubMenu) {
              subMenu.isActive = true;
              menu.isSubMenuActive = true;
            } else {
              subMenu.isActive = false;
            }
          });
        }
      });
    }
  }
};
</script>

<style media="screen">
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}

.sidebar {
  width: 14rem;
}
</style>
