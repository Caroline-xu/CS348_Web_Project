#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>

void Generate()
{
    char c;
    int r;
    int nameMax = 8;
    int pwMax = 10;
    int Uid = 200001;
    srand(time(NULL));
    for (int i = 0; i < 5; i++)
    {   
        int lastName = rand() % nameMax + 1;
        int firstName = rand() % nameMax + 1;
        int password = rand() % pwMax + 1;

        std::cout << Uid << ",";
        for (int j = 0; j < lastName; j++)
        {
            r = rand() % 26;
            c = 'a' + r;
            if (j == 0) {
                c = c - 32;
               std::cout << c; 
            } else {
               std::cout << c;
            }
            
        }
        std::cout << ",";
        for (int j = 0; j < firstName; j++)
        {
            r = rand() % 26;
            c = 'a' + r;
            if (j == 0) {
                c = c - 32;
               std::cout << c; 
            } else {
               std::cout << c;
            }
            
        }
        std::cout << ",";


        int Y = 2023 - 18;
        int Yran = rand() % 85 + 1920; // in the range 1920-2005
        int month = 12;
        int mRan = rand() % 12 + 1;
        int day = 28;
        int dRan = rand() % 28 + 1;
        std::cout << Yran << mRan << dRan << ",";

         for (int j = 0; j < password; j++)
        {
            int singleNum = rand() % 9;
            std::cout << singleNum; 
            
        }
        std::cout << ",";


         for (int j = 0; j < 9; j++)
        {
            int singleNum = rand() % 9;
            std::cout << singleNum; 
            
        }
        std::cout << ",";

         for (int j = 0; j < 5; j++)
        {
            int singleNum = rand() % 9;
            std::cout << singleNum; 
            
        }
        std::cout << "@uwaterloo.ca";
        std::cout << std::endl;
        Uid++;
    }
}

int main()
{
    Generate();

    return 0;
}
