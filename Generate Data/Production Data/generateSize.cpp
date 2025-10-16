#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>

void Generate()
{
    int zero = 0;
    int Cid = 100001;
    // change the size to 100000
    int size = 100000;
    std::cout << "Cid" << "," << "a" << "," << "b" << "," << "c" << "," << "d"
        << "," << "e" << "," << "f" << "," << "g" << std::endl;
   
    for (int i = 0; i < size; i++)
    {
       
        std::cout << Cid << "," << zero << "," << zero << "," << zero << "," << zero
        << "," << zero << "," << zero << "," << zero << std::endl;

        Cid++;
    }

    // int Cid = 100001;
    // int sizeMax = 20;
    // srand(time(NULL));
    //  for (int i = 0; i < 20; i++)
    // {
    //     int sizeRan1 = rand() % sizeMax + 1;
    //     int sizeRan2 = rand() % sizeMax + 1;
    //     int sizeRan3 = rand() % sizeMax + 1;
    //     int sizeRan4 = rand() % sizeMax + 1;
    //     int sizeRan5 = rand() % sizeMax + 1;
    //     int sizeRan6 = rand() % sizeMax + 1;
  
    //     int total = sizeRan1 +sizeRan2+sizeRan3+sizeRan4+sizeRan5+sizeRan6;

    //     std::cout << Cid << "," << sizeRan1 << "," << sizeRan2 << "," << sizeRan3 << "," << sizeRan4
    //     << "," << sizeRan5 << "," << sizeRan6 << "," << total << std::endl;

    //     Cid++;
    // }
}

int main()
{
    Generate();

    return 0;
}
