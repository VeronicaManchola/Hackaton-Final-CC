window.sort = {
    older: (arr) => {
        const sortedData = arr;
        arr.sort(function (a, b) {
            if (a.Year < b.Year) {
                return -1;
            }
            if (a.Year > b.Year) {
                return 1;
            } else {
                return 0;
            }
        })
        return sortedData;
    }
}