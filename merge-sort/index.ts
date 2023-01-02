// 归并排序
function merge (leftArr: number[], rightArr: number[]) {
  const result: number[] = []
  while(leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr?.shift?.() as number)
    } else {
      result.push(rightArr?.shift?.() as number)
    }
  }
  return result
}

function mergeSort (arr: number[]) {
  if (!arr.length) {
    return []
  }

  const middle = (arr.length - 1) / 2
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}