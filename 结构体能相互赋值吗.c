#include <stdio.h>
int main()
{
    typedef struct
    {
        int num;
        char name;
    } stu;
    
    stu s1, s2;
    s1.num = 1;
    s1.name = 'a';
    s2.num = 2;
    s2.name = 'b';
    printf("赋值前 s1.num=%d,s2.name=%c\n", s1.num, s1.name);
    
    s1=s2;
    printf("赋值后 s1.num=%d,s2.name=%c\n", s1.num, s1.name);
    return 0;
}
