    let arr = [4, 6, 2, 7, 9, 10, 1, 5, 8, 3];
    console.log('排序前：', arr);
    for (let i = 1; i < arr.length; i++) //外层循环N-1次 (趟次)。
    {
        for (let j = 0; j < arr.length - 1; j++) //内层循环N-1-i次，因为每次内循环都会把最大值排到最后。
        {
            if (arr[j] > arr[j + 1]) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
    console.log('排序后', arr);