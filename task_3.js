const getCompileTime = () => {
    console.log("Автор: Наживотов Олександр")
    console.log("Дата та час компiляцii", new Date())
}

const swap = (items, firstIndex, secondIndex) => {
    const temp = items[firstIndex]
    items[firstIndex] = items[secondIndex]
    items[secondIndex] = temp
}

const partition = (items, left, right) => {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right
    while (i <= j) {
        while (items[i] < pivot) {
            i++
        }
        while (items[j] > pivot) {
            j--
        }
        if (i <= j) {
            swap(items, i, j)
            i++
            j--
        }
    }
    return i
}

const quickSort = (items, left, right) => {
    let index
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left
        right = typeof right != "number" ? items.length - 1 : right
        index = partition(items, left, right)
        if (left < index - 1) {
            quickSort(items, left, index - 1)
        }
        if (index < right) {
            quickSort(items, index, right)
        }
    }
    return items
}

const arr = [0, 5, 2, 6, 15, 7, 3, 1, 10]
console.log(quickSort(arr))
getCompileTime()
