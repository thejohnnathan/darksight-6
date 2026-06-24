import { ref } from 'vue'

export function useSnackbar(initialVisible = true) {
  const visible = ref(initialVisible)
  let timerId = null

  const clearTimer = () => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  const show = (duration = 0) => {
    visible.value = true
    clearTimer()

    if (duration > 0) {
      timerId = setTimeout(() => {
        visible.value = false
        timerId = null
      }, duration)
    }
  }

  const hide = () => {
    clearTimer()
    visible.value = false
  }

  const toggle = () => {
    visible.value = !visible.value
  }

  return {
    visible,
    show,
    hide,
    toggle,
    clearTimer
  }
}
