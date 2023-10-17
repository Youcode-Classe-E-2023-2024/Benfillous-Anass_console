#include "util.h"

void debug_arr_int(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

/* from K&R
 - produces a random number between 0 and 32767.*/
int rand()
{
    int rand_seed=10;

    rand_seed = rand_seed * 1103515245 +12345;
    return (unsigned int)(rand_seed / 65536) % 32768;
}
