import { computed, ref } from 'vue'

const DEFAULT_DURATION = 4000

export function useSnackbar() {
  const queue = ref([])
  const current = ref(null)
  const visible = ref(false)
  let timerId = null

  const isShowing = computed(() => visible.value && !!current.value)

  const clearTimer = () => {
    if (timerId) {
      clearTimeout(timerId)
      timerId = null
    }
  }

  const normalizeOptions = (options = {}) => {
    const {
      id,
      type = 'info',
      message = '',
      actionLabel = '',
      onAction = null,
      dismissible = true,
      duration = DEFAULT_DURATION
    } = options

    return {
      id: id || `${type}-${message}-${actionLabel || 'none'}`,
      type,
      message,
      actionLabel,
      onAction,
      dismissible,
      duration: typeof duration === 'number' ? duration : DEFAULT_DURATION
    }
  }

  const showNext = () => {
    clearTimer()

    if (!queue.value.length) {
      current.value = null
      visible.value = false
      return
    }

    current.value = queue.value.shift()
    visible.value = true

    if (current.value.duration > 0) {
      timerId = setTimeout(() => {
        closeCurrent()
      }, current.value.duration)
    }
  }

  const enqueue = (options) => {
    const item = normalizeOptions(options)

    const isDuplicateCurrent =
      current.value &&
      current.value.type === item.type &&
      current.value.message === item.message &&
      current.value.actionLabel === item.actionLabel

    const isDuplicateQueued = queue.value.some(
      (queued) =>
        queued.type === item.type &&
        queued.message === item.message &&
        queued.actionLabel === item.actionLabel
    )

    if (isDuplicateCurrent || isDuplicateQueued) {
      return item.id
    }

    queue.value.push(item)

    if (!visible.value) {
      showNext()
    }

    return item.id
  }

  const closeCurrent = () => {
    clearTimer()
    visible.value = false
    current.value = null
    showNext()
  }

  const hide = () => {
    clearTimer()
    queue.value = []
    visible.value = false
    current.value = null
  }

  const handleAction = () => {
    if (!current.value) return

    const callback = current.value.onAction
    if (typeof callback === 'function') {
      callback(current.value)
    }

    closeCurrent()
  }

  return {
    visible,
    current,
    queue,
    isShowing,
    enqueue,
    closeCurrent,
    hide,
    clearTimer,
    handleAction
  }
}
