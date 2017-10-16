#include <stdio.h>
#include <stdlib.h>
#include <math.h>


int offset[8][2] = {{-1,-2}, {-2,-1},
                  {-1,2}, {-2, 1},
                  {1,-2}, {2,-1},
                  {1,2},{2,1}};



double knightProbability(int,int,int,int);
int recursiveOnTimes(int,int,int,int,int);

int main()
{
    printf("Hello world!\n");
    printf("%f\n",knightProbability(3,2,0,0));
    return 0;
}


double knightProbability(int N, int K, int r, int c) {

    /*
     _____
    |*|_|_|
    |_|_|_|
    |_|_|_|

    1/8 * 2/8
    +
    1/8 * 2/8

    */

    int onTimes = recursiveOnTimes(N,K,r,c,0);
    double probability = onTimes / pow(8.0,N);
    return probability;
}


int recursiveOnTimes(int N, int k, int r, int c, int onTimes) {
    int j = 0;
    int on = 0;
    int a[2] = {r,c};

    for(j = 0; j < 8; j++){
        a[0] = r + offset[j][0];
        a[1] = c + offset[j][1];
        if(a[0] >= 0 && a[0] < N && a[1] >= 0 && a[1] < N) {
            printf("[%d,%d]\n",a[0],a[1]);
            on++;
            if (k > 1) {
                printf("recursive...%d\n", k);
                recursiveOnTimes(N,k-1,a[0],a[1],onTimes);
                printf("recursive...%d\n", k);
            }
        }
    }
    //proSum += pow(1/8.0,N-1) * (on / 8.0);
    //printf("on %.20f times",on/8.0);
    printf("on %d times\n",on);
    ons += on;
    return on;

}
