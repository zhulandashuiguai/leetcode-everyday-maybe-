//选择排序
#define N 10
#include <stdio.h>
int main()
{
    int i, j, t;
    int a[N] = {4, 6, 2, 7, 9, 0, 1, 5, 8, 3};
    puts("排序前:");
    for (i = 0; i < N; i++)
        printf("%3d", a[i]);
    puts("\n");
    for (i = 0; i < N - 1; i++) //外层循环N-1次 (趟次)。
    {
        for (j = i + 1; j < N; j++)
        {
            if (a[i] > a[j])
            {
                t = a[i];
                a[i] = a[j];
                a[j] = t;
            }
        }
    }
    puts("排序后：");
    for (i = 0; i < N; i++)
    {
        printf("%3d", a[i]);
    }
    return 0;
}