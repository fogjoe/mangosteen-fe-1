import { onMounted } from 'vue'
import { useMeStore } from '../stores/useMeStore'

export const useAfterMe = (fn: () => void) => {
  const meStore = useMeStore()
  // mounted 里面不允许出现警告和错误
  // onMounted(async () => {
  //   // 方法一
  //   // try {
  //   //   await meStore.mePromise
  //   // } catch (error) {
  //   //   return
  //   // }
  //   // fn()
  //   // 方法二
  //   // const result = await meStore.mePromise!.catch((error) => {
  //   //   return new Error(error)
  //   // })
  //   // if (result instanceof Error) {
  //   //   return
  //   // }
  //   // fn()
  // })
  onMounted(() => {
    meStore.mePromise!.then(fn, () => undefined)
  })
}
