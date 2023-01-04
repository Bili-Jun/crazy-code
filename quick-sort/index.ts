 // 原地快排

 // 数据交换
export function swap (arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr?.[j], arr?.[i]]
}

export function partition (arr: number[], left: number, right: number): number {
  let pivot = arr?.[left]
  let i = left
  let j = right

  while (i < j) {
    while(i < j && arr[i] <= arr[pivot]) {
      i++
    }
    swap(arr, arr[i], arr[j])
    while (i < j && arr[j] >= arr[pivot]) {
      j--
    }
    swap(arr, arr[i], arr[j])
  }
  return i
}

export function quickSortBase (arr: number[], left: number, right: number) {
  if (!arr.length) {
    return
  }
  const pivot = partition(arr, left, right)
  quickSortBase(arr, left, pivot - 1)
  quickSortBase(arr, pivot + 1, right)
}

export function quickSort (arr) {
  quickSortBase(arr, 0, arr.length - 1)
}
