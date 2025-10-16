#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>


void Generate() {

    std::vector<std::string> brandName{
            "Nike",
            "Louis Vuitton",
            "GUCCI",
            "Chanel",
            "Adidas",
            "Herm√®s",
            "ZARA",
            "H&M",
            "Cartier",
            "UNIQLO",
            "Dior",
            "Rolex",
            "Tiffany & Co.",
            "COACH",
            "Chow Tai Fook",
            "Burberry",
            "Anta",
            "Ray-Ban",
            "Puma",
            "The North Face",
            "Lululemon",
            "Ralph Lauren",
            "Victoria's Secret",
            "Omega",
            "Levi's",
            "Moncler",
            "Yves Saint Laurent",
            "Fila",
            "Prada",
            "Under Armour",
            "Old Navy",
            "Armani",
            "Bulgari",
            "Skechers",
            "Tommy Hilfiger",
            "Michael Kors",
            "TAG Heuer",
            "Givenchy",
            "Calvin Klein",
            "Primark / Penney's",
            "Next",
            "Lao Feng Xiang",
            "Pandora",
            "Li Ning",
            "Celine",
            "Bottega Veneta",
            "Boss",
            "Bosideng",
            "Van Cleef & Arpels",
            "Loewe"};

    int Cid = 100001;
    std::vector<int> sellerId{300001,300002,300003,300004,300005};
    std::string InStock = "FALSE";
    int PriceMax = 5000;
    int salesVol = 0;
    std::string Image = "NULL";
    int sellerNum = sellerId.size() - 1;
    int nameNum = brandName.size() - 1;
   // std::cout << Cid << "," << brandName[0] << "," << InStock << "," << PriceMax << "," << salesVol << "," << Image << std::endl;


   // int nameRan = rand() % nameNum;
    //int priceRan = rand() % PriceMax + 1;
    //std::cout << priceRan  << std::endl;
    srand (time(NULL));
    // change the size to 100000
    int size = 100000;
    std::cout << "cid" << "," << "sellerid" << "," << "brandname" << "," << "InStock" << "," << "priceRan" << "," << "salesVol" << "," << "Image" << std::endl;
    for (int i = 0; i < size; i++) {
        
        int nameRan = rand() % nameNum;
        int priceRan = rand() % PriceMax + 1;
        int sellerRan = rand() % sellerNum ;
    
        std::cout << Cid << "," << sellerId[sellerRan] << "," << brandName[nameRan] << "," << InStock << "," << priceRan << "," << salesVol << "," << Image << std::endl;
      
        Cid++;

    }
}


int main() {
    Generate();

    return 0;
}
