import { defineComponent, KeepAlive, Transition, VNode } from 'vue'
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router'
import './App.scss'

export const App = defineComponent({
  setup() {
    return () => (
      <div class="page">
        <RouterView>
          {({ Component: comp }: { Component: VNode; route: RouteLocationNormalizedLoaded }) => (
            <KeepAlive>{comp}</KeepAlive>
          )}
        </RouterView>
      </div>
    )
  }
})
