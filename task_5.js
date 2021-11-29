const getCompileTime = () => {
    console.log("Автор: Наживотов Олександр")
    console.log("Дата та час компiляцii", new Date())
}

let counter = [[]]
function radixSort(array, maxDigitSymbols) {
    let mod = 10
    let dev = 1
    for (let i = 0; i < maxDigitSymbols; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < array.length; j++) {
            let bucket = parseInt((array[j] % mod) / dev)
            if (counter[bucket] == null) {
                counter[bucket] = []
            }
            counter[bucket].push(array[j])
        }
        let pos = 0
        for (let j = 0; j < counter.length; j++) {
            let value = null
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    array[pos++] = value
                }
            }
        }
    }
    return array
}

const arr = [0, 5, 2, 6, 15, 7, 3, 1, 10]
console.log(radixSort(arr))
getCompileTime()
