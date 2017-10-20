#include <stdio.h>
#include <stdlib.h>
#include <math.h>

//double knightProbability(int,int,int,int);
//int recursiveOnTimes(int,int,int,int);

int* cellProbability(int N);

int main()
{
    //printf("Hello world!\n");

//    double p = knightProbability(8,30,6,4);
//    printf("%f\n", p);
//    printf("%.20f\n", p);
    int * pa  = cellProbability(4);

    return 0;
}

// http://www.geeksforgeeks.org/probability-knight-remain-chessboard/

bool knightIsOnBoard( int N, int r, int c ) {
    if(r >= 0 && r < N && c >= 0 && c < N) {
        return true;
    }
    return false;
}

int cellProbabilityAtKthStep(int N, int K, int r, int c) {

    int offset[8][2] = {{-1,-2}, {-2,-1},
                  {-1,2}, {-2, 1},
                  {1,-2}, {2,-1},
                  {1,2},{2,1}};

    int cp[N][N][K];

    int r = 0;
    int c = 0;

    // K = 0 probability is 1
    for(; r < N; r++){
        for(; c < N; c++){
            cp[r][c][0] = 1;
        }
    }


    int a[2];

    int k = 0;
    int on = 0;

    for(r = 0; r < N; r++){
        for(c = 0; c < N; c++){
            on = 0;
            for(k = 0; k < 8; k++){
                a[0] = r + offset[k][0];
                a[1] = c + offset[k][1];
                if(a[0] >= 0 && a[0] < N && a[1] >= 0 && a[1] < N) {
                    //printf("[%d,%d]\n",a[0],a[1]);
//                    if (k > 1) {
//                        printf("recursive...%d\n", k);
//                        on += recursiveOnTimes(N,k-1,a[0],a[1]);
//                        printf("recursive...%d\n", k);
//                    } else if ( k == 1 ) {
                        on++;
                    //}
                }
            }
            pa[r][c] = on;
            printf("[%d,%d] = %d\n", r, c, on);
        }
    }
    //printf("on %d times on k %d\n",on,k);
    return pa;
}

/*
     _____
    |*|_|_|
    |_|_|_|
    |_|_|_|

    1/8 * 2/8
    +
    1/8 * 2/8

    1/8 * 2/8
    1/4 * (1/4 + 1/4)
    */
//double knightProbability(int N, int K, int r, int c) {
//    return recursiveOnTimes(N,K,r,c) / pow(8.0,K);
//}


//int recursiveOnTimes(int N, int k, int r, int c) {
//    if (k == 0) {
//        return 1;
//    }
//    int j = 0;
//    int on = 0;
//    int a[2] = {r,c};
//    for(j = 0; j < 8; j++){
//        a[0] = r + offset[j][0];
//        a[1] = c + offset[j][1];
//        if(a[0] >= 0 && a[0] < N && a[1] >= 0 && a[1] < N) {
//            printf("[%d,%d]\n",a[0],a[1]);
//            if (k > 1) {
//                printf("recursive...%d\n", k);
//                on += recursiveOnTimes(N,k-1,a[0],a[1]);
//                printf("recursive...%d\n", k);
//            } else if ( k == 1 ) {
//                on++;
//            }
//        }
//    }
//    printf("on %d times on k %d\n",on,k);
//    return on;
//}
