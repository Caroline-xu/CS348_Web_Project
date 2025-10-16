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
    int Uid = 200001;
    srand(time(NULL));
    int nameMax = 15;
    int size = 100000;
    int firstNamesize = firstName.size() - 1;
    int lastNamesize = lastName.size() - 1;
    std::cout <<  "uid" << "," << "ran" << "," << "firstname" << "," << "lastname" << "," << "num" << std::endl;
    for (int i = 0; i < size; i++)
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
        int firstNameNum = rand() % firstNamesize + 1;
        std::cout << firstName[firstNameNum] << "," ;
        int lastNameNum = rand() % lastNamesize + 1;
        std::cout << lastName[lastNameNum];
 
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
