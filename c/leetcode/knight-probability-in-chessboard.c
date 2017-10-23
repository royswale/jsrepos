#include <stdio.h>
#include <stdlib.h>

#include <stdbool.h>
bool isOnBoard( int N, int r, int c );
double knightProbability(int N, int K, int r, int c);

int main()
{
    printf("Hello world!\n");
    printf("%.20f\n", knightProbability(20,300,6,4));
    return 0;
}

bool isOnBoard( int N, int r, int c ){
    return ( r >= 0 && r < N && c >= 0 && c < N);
}

double knightProbability(int N, int K, int r, int c) {

    int offset[8][2] = {{-1,-2}, {-2,-1},
                  {-1,2}, {-2, 1},
                  {1,-2}, {2,-1},
                  {1,2},{2,1}};

    double p[N][N][K+1];
    int row = 0;
    int column = 0;
    for( row = 0; row < N; ++row ){
        for( column = 0; column < N; ++column){
            p[row][column][0] = 1;
        }
    }
    int s = 0; // step
    int i = 0;
    int rf = 0; // row from
    int cf = 0; // column from
    double pp = 0.0;
    for( s = 1; s <= K; ++s ){
        for( row = 0; row < N; ++row ){
            for( column = 0; column < N; ++column ){
                pp = 0.0;
                for( i = 0; i < 8; ++i ){
                    rf = row + offset[i][0];
                    cf = column + offset[i][1];
                    if(isOnBoard(N,rf,cf)){
                        pp += p[rf][cf][s-1] / 8.0;
                    }
                }
                p[row][column][s] = pp;
            }
        }
    }
    return p[r][c][K];
}


// recursive
// brute-force

// #include <math.h>

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
//            //printf("[%d,%d]\n",a[0],a[1]);
//            if (k > 1) {
//                //printf("recursive...%d\n", k);
//                on += recursiveOnTimes(N,k-1,a[0],a[1]);
//                //printf("recursive...%d\n", k);
//            } else if ( k == 1 ) {
//                on++;
//            }
//        }
//    }
//    //printf("on %d times on k %d\n",on,k);
//    return on;
//}



// www.geeksforgeeks.org/probability-knight-remain-chessboard/
// https://leetcode.com/problems/knight-probability-in-chessboard/description/
