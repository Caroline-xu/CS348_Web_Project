#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>

void Generate()
{

    int Uid = 200001;
    srand(time(NULL));
    int nameMax = 15;
    for (int i = 0; i < 5; i++)
    {   
        std::cout << Uid << ",";
         for (int j = 0; j < 12; j++)
        {
            int singleNum = rand() % 9;
            std::cout << singleNum; 
            
        }
        int month = 12;
        int mRan = rand() % 12 + 1;
        int day = 28;
        int dRan = rand() % 28 + 1;
        std::cout << mRan << dRan << ",";
        int Name = rand() % nameMax + 1;
        
 
        for (int j = 0; j < Name; j++)
        {
            int ranName = rand() % 26;
            char c = 'a' + ranName - 32;
            std::cout << c;    
        }
        std::cout << ",";
          for (int j = 0; j < 3; j++)
        {
            int singleNum = rand() % 9;
            std::cout << singleNum; 
            
        }

        std::cout << std::endl;
        Uid++;
    }
}

int main()
{
    Generate();

    return 0;
}
