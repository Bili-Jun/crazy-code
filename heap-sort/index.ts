function buildHeap (arr) {
  if (arr.length < 2) {
    return arr
  }

  const len = arr.length - 1
  for (let i = (len / 2 - 1); i >= 0; i -= 1) {
    siftdown(arr, i, len)
  }
}

function siftdown (arr, startIndex, endIndex) {
  let left = 2 * startIndex + 1
  let right = 2 * startIndex + 2

  let temp = arr[startIndex]
  let index = startIndex

  if (left <= endIndex) {
    if (arr[left] > temp) {
      temp = arr[left]
      index = left
    }
  }

  if (right <= endIndex) {
    if (arr[right] > temp) {
      temp = arr[right]
      index = right
    }
  }

  if (index !== startIndex) {
    arr[index] = arr[startIndex]
    arr[startIndex] = temp
    siftdown(arr, index, endIndex)
  }
}

function heapSort (arr) {
  buildHeap(arr)
  for (let i = arr.length - 1; i>=0; i -= 1) {
    [arr[0], arr[i]] = [arr[i], arr[0]]
    siftdown(arr, 0, i - 1)
  }
}