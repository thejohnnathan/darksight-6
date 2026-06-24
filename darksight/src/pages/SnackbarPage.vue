<template>
  <section class="snackbar-page">
    <div class="header-subtitle">UI Component Library</div>
    <h2 class="header-title">Snackbar</h2>

    <div class="snackbar-showcase">
      <article
        v-for="item in snackbarItems"
        :key="item.id"
        class="snackbar-example-row"
      >
        <div class="snackbar-example-heading">
          <span class="snackbar-index">{{ item.id }}</span>
          <h4 class="snackbar-variant-title">{{ item.title }}</h4>
        </div>

        <div class="snackbar-example-grid">
          <DsSnackbar
            :type="item.type"
            :message="item.message"
            action-label="Action(4s)"
            :visible="actionBars[item.type].visible.value"
            @action="handleAction(item.type)"
          />

          <DsSnackbar
            :type="item.type"
            :message="item.message"
            dismissible
            :visible="dismissBars[item.type].visible.value"
            @close="handleClose(item.type)"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import DsSnackbar from '../components/DsSnackbar.vue'
import { useSnackbar } from '../composables/useSnackbar'

const snackbarItems = [
  {
    id: 1,
    type: 'info',
    title: 'Information',
    message: 'This is an info message!'
  },
  {
    id: 2,
    type: 'success',
    title: 'Success',
    message: 'This is a success message!'
  },
  {
    id: 3,
    type: 'error',
    title: 'Error',
    message: 'This is an error message!'
  },
  {
    id: 4,
    type: 'warning',
    title: 'Warning',
    message: 'This is a warning message!'
  }
]

const actionBars = {
  info: useSnackbar(true),
  success: useSnackbar(true),
  error: useSnackbar(true),
  warning: useSnackbar(true)
}

const dismissBars = {
  info: useSnackbar(true),
  success: useSnackbar(true),
  error: useSnackbar(true),
  warning: useSnackbar(true)
}

const handleAction = (type) => {
  actionBars[type].show(4000)
}

const handleClose = (type) => {
  dismissBars[type].hide()
}
</script>
