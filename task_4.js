const getCompileTime = () => {
    console.log("Автор: Наживотов Олександр")
    console.log("Дата та час компiляцii", new Date())
}

const simpleCountingSort = (arr) => {
    let n = arr.length,
        Count = [],
        B = []
    for (let i = 0; i < n; i++) Count[i] = 0
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) Count[j]++
            else Count[i]++
        }
    }
    for (let i = 0; i < n; i++) B[Count[i]] = arr[i]
    return B
}

const arr = [0, 5, 2, 6, 15, 7, 3, 1, 10]
console.log(simpleCountingSort(arr))
getCompileTime()
