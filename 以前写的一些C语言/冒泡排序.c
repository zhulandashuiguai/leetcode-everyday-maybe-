//ð������ ����
#define N 10
#include <stdio.h>
int main()
{
    int i, j, t;
    int a[N] = {4, 6, 2, 7, 9, 10, 1, 5, 8, 3};
    puts("����ǰ");
    for (i = 0; i < N; i++)
        printf("%3d", a[i]);
    puts("\n");
    for (i = 1; i < N; i++) //���ѭ��N-1�� (�˴�)��
    {
        for (j = 0; j < N - i; j++) //�ڲ�ѭ��N-1-i�Σ���Ϊÿ����ѭ����������ֵ�ŵ����
        {
            if (a[j] > a[j + 1])
            {
                t = a[j];
                a[j] = a[j + 1];
                a[j + 1] = t;
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
