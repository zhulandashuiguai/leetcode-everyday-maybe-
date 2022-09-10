#include <stdio.h>

int main()
{
    //¾Å¾Å³Ë·¨±í
    int i, j;
    for (i = 1; i <= 9; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("%d*%d=%d\t", j, i, j * i);
            // cout << j << "*" << i << "=" << j * i << "\t";
        }
        printf("\n");
    }
    return 0;
}
