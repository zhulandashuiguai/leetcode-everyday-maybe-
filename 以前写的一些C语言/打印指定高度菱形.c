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
    puts("���������εĸ߶�,�޶�Ϊ������");
    scanf("%d", &height);
    if (height % 2 == 0)
    {
        puts("��������ż����������������");
    }
    else
    {
        //�ϰ벿��������
        for (lineNumber = 1; lineNumber <= height / 2 + 1; lineNumber++) /* �ϰ벿�ָ߶� height/2 + 1*/
        {
            printspace((height / 2 + 1) - lineNumber); //�ո��� �ϰ벿�ָ߶�-i
            printxin(2 * lineNumber - 1);
            //������Ŀ �� 2*i+1
        }

        //�°벿��������

        for (lineNumber = 1; lineNumber <= height / 2; lineNumber++)
        {
            printspace(lineNumber);            //�°벿�ֿո�����������
            printxin(height - 2 * lineNumber); //�°벿�������������м�������һ����Ŀ���μ�2
        }
    }
    return 0;
}