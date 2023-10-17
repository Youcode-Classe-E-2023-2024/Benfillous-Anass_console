#include "main.h"

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90, 87, 100, 29, 192873};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Original array: \n");
    debug_arr_int(arr, n);

    bubble_sort(arr, n);

    printf("\nSorted array: \n");
    debug_arr_int(arr, n);

    char strings[][20] = {
        "Hello,",
        "This",
        "is",
        "an",
        "array",
        "of",
        "strings."
    };

    const char* nameToFind = "strings.";
    int l = sizeof(strings) / sizeof(strings[0]);

    int index = search_name(nameToFind, strings, l);

    if (index != -1) {
        printf("\n%s was found in the array at position %d.\n", strings[index], index);
    } else {
        printf("\n%s was not found in the array.\n", nameToFind);
    }

    return 0;
}
