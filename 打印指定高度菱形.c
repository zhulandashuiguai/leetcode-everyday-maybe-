#include <stdio.h>

void printxin(int i)
{
    int j;
    for (j = 0; j < i; j++)
    {
        printf("*");
    }
    printf("\n");
}

void printspace(int i)
{
    int j;
    for (j = 0; j < i; j++)
    {
        printf(" ");
    }
}

int main()
{

    int lineNumber, height;
    puts("请输入菱形的高度,限定为奇数：");
    scanf("%d", &height);
    if (height % 2 == 0)
    {
        puts("不能输入偶数，请输入奇数。");
    }
    else
    {
        //上半部分三角形
        for (lineNumber = 1; lineNumber <= height / 2 + 1; lineNumber++) /* 上半部分高度 height/2 + 1*/
        {
            printspace((height / 2 + 1) - lineNumber); //空格数 上半部分高度-i
            printxin(2 * lineNumber - 1);
            //星星数目 ： 2*i+1
        }

        //下半部分三角形

        for (lineNumber = 1; lineNumber <= height / 2; lineNumber++)
        {
            printspace(lineNumber);            //下半部分空格数等于行数
            printxin(height - 2 * lineNumber); //下半部分星星数等于中间最多的那一行数目依次减2
        }
    }
    return 0;
}