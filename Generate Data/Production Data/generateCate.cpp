#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>

void Generate()
{
    std::vector<std::string> gender{"Male", "Female", "Unisex"};
    std::vector<std::string> typeName{
        "Belts & Suspenders",
        "Eyewear",
        "Face Masks",
        "Gloves",
        "Hats",
        "Jewelry",
        "Keychains",
        "Pocket Squares & Tie Bars",
        "Scarves",
        "Socks",
        "Tech",
        "Ties",
        "Umbrellas",
        "Wallets & Card Holders",
        "Watches",
        "Backpacks",
        "Briefcases",
        "Duffle Bags",
        "Messenger Bags",
        "Pouches & Document Holders",
        "Tote Bags",
        "Travel Bags",
        "Jackets & Coats",
        "Jeans",
        "Pants",
        "Shirts",
        "Shorts",
        "Suits & Blazers",
        "Sweaters",
        "Swimwear",
        "Tops",
        "Underwear & Loungewear",
        "Boat Shoes & Moccasins",
        "Boots",
        "Espadrilles",
        "Lace Ups & Oxfords",
        "Monkstraps",
        "Sandals",
        "Slippers & Loafers"};
    int Cid = 100001;

    int genderNum = gender.size() - 1;
    int nameNum = typeName.size() - 1;
    // std::cout << Cid << "," << brandName[0] << "," << InStock << "," << PriceMax << "," << salesVol << "," << Image << std::endl;

    // int nameRan = rand() % nameNum;
    // int priceRan = rand() % PriceMax + 1;
    // std::cout << priceRan  << std::endl;
    srand(time(NULL));
    // change the size to 100000
    int size = 100000;
    std::cout << "cid" << "," << "gender" << "," << "typename" << std::endl;
    for (int i = 0; i < size; i++)
    {
        int genderRan = rand() % genderNum;
        int nameRan = rand() % nameNum;
    

        std::cout << Cid << "," << gender[genderRan] << "," << typeName[nameRan] << std::endl;

        Cid++;
    }
}

int main()
{
    Generate();

    return 0;
}
