#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>

void Generate()
{
    std::vector<std::string> firstName{
            "Elianna",
            "Sloane",
            "Kenley",
            "Iyana",
            "Carleigh",
            "Diya",
            "Riya",
            "John",
            "William",
            "James",
            "Charles",
            "George",
            "Frank",
            "Joseph",
            "Thomas",
            "Henry",
            "Robert",
            "Edward",
            "Harry",
            "Walter",
            "Arthur",
            "Albert",
            "David",
            "Louis",
            "Joe",
            "Charlie",
            "Clarence",
            "Richard",
            "Andrew",
            "Daniel",
            "Ernest",
            "Jesse",
            "Oscar",
            "Peter",
            "Benjamin",
            "Willie",
            "Sam",
            "Roy",
            "Herbert",
            "Jacob",
            "Tom",
            "Elmer",
            "Carl",
            "Lee",
            "Howard",
            "Martin",
            "Michael",
            "Bert",
            "Jim",
            "Francis"};

    std::vector<std::string> lastName{
            "Smith",
            "Johnson",
            "Williams",
            "Brown",
            "Jones",
            "Garcia",
            "Miller",
            "Davis",
            "Rodriguez",
            "Martinez",
            "Hernandez",
            "Lopez",
            "Gonzalez",
            "Wilson",
            "Anderson",
            "Thomas",
            "Taylor",
            "Moore",
            "Jackson",
            "Martin",
            "Lee",
            "Perez",
            "Thompson",
            "White",
            "Harris",
            "Sanchez",
            "Clark",
            "Ramirez",
            "Lewis",
            "Robinson",
            "Walker",
            "Young",
            "Allen",
            "King",
            "Wright",
            "Scott",
            "Torres",
            "Nguyen",
            "Hill",
            "Flores",
            "Green",
            "Adams",
            "Nelson",
            "Baker",
            "Hall",
            "Rivera",
            "Campbell",
            "Mitchell",
            "Carter",
            "Roberts" };
    char c;
    int r;
    int nameMax = 8;
    int pwMax = 10;
    int Uid = 200001;
    int size = 1000000;
    int firstNamesize = firstName.size() - 1;
    int lastNamesize = lastName.size() - 1;
    std::cout << "Uid" << "," << "firstname" << "," << "lastname" << "," << "password" << "," << "n1" << "," << "n2" << "," << "email" << std::endl;
    srand(time(NULL));
    for (int i = 0; i < size; i++)
    {   
        int firstNameNum = rand() % firstNamesize + 1;
        int lastNameNum = rand() % lastNamesize + 1;
        int password = rand() % pwMax + 1;

        std::cout << Uid << ",";
        std::cout << firstName[firstNameNum];
        std::cout << ",";
        std::cout << lastName[lastNameNum];
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
