#include "search.h"

int search_name(const char* nameToFind, const char strings[][20], int numStrings) {
    for (int i = 0; i < numStrings; i++) {
        if (strcmp(nameToFind, strings[i]) == 0) {
            return i; // Name found in the array
        }
    }
    return -1; // Name not found in the array
}
