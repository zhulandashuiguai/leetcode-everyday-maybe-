//ѡ������
#define N 10
#include <stdio.h>
int main()
{
    int i, j, t;
    int a[N] = {4, 6, 2, 7, 9, 0, 1, 5, 8, 3};
    puts("����ǰ:");
    for (i = 0; i < N; i++)
        printf("%3d", a[i]);
    puts("\n");
    for (i = 0; i < N - 1; i++) //���ѭ��N-1�� (�˴�)��
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
    puts("�����");
    for (i = 0; i < N; i++)
    {
        printf("%3d", a[i]);
    }
    return 0;
}