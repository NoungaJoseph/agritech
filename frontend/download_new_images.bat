@echo off
echo Downloading product images...

:: Clean up old corrupted files first
del /Q "public\images\*_main.jpg" 2>nul
del /Q "public\images\*_sub*.jpg" 2>nul
del /Q "public\images\*_variant*.jpg" 2>nul
del /Q "public\images\silure*.jpg" 2>nul
del /Q "public\images\poulet*.jpg" 2>nul

:: Download using loremflickr (reliable placeholder service)
:: Garri
curl -L -o "public/images/garri_main.jpg" "https://loremflickr.com/640/480/garri,african,food"
curl -L -o "public/images/garri_sub1.jpg" "https://loremflickr.com/640/480/garri,cassava,african"
curl -L -o "public/images/garri_sub2.jpg" "https://loremflickr.com/640/480/tapioca,fermented"
curl -L -o "public/images/garri_sub3.jpg" "https://loremflickr.com/640/480/cassava,meal"
curl -L -o "public/images/garri_sub4.jpg" "https://loremflickr.com/640/480/african,grain"

:: Ndole
curl -L -o "public/images/ndole_main.jpg" "https://loremflickr.com/640/480/bitterleaf,african,vegetable"
curl -L -o "public/images/ndole_sub1.jpg" "https://loremflickr.com/640/480/ndole,greens"
curl -L -o "public/images/ndole_sub2.jpg" "https://loremflickr.com/640/480/african,leaf,vegetable"
curl -L -o "public/images/ndole_sub3.jpg" "https://loremflickr.com/640/480/bitter,greens"
curl -L -o "public/images/ndole_sub4.jpg" "https://loremflickr.com/640/480/leafy,vegetables"

:: Eru
curl -L -o "public/images/eru_main.jpg" "https://loremflickr.com/640/480/eru,african,vegetable"
curl -L -o "public/images/eru_sub1.jpg" "https://loremflickr.com/640/480/okok,leaves"
curl -L -o "public/images/eru_sub2.jpg" "https://loremflickr.com/640/480/wild,spinach"
curl -L -o "public/images/eru_sub3.jpg" "https://loremflickr.com/640/480/african,greens"
curl -L -o "public/images/eru_sub4.jpg" "https://loremflickr.com/640/480/vegetable,african"

:: Njanga
curl -L -o "public/images/njanga_main.jpg" "https://loremflickr.com/640/480/crayfish,dried,african"
curl -L -o "public/images/njanga_sub1.jpg" "https://loremflickr.com/640/480/shrimp,dried"
curl -L -o "public/images/njanga_sub2.jpg" "https://loremflickr.com/640/480/crayfish,african"
curl -L -o "public/images/njanga_sub3.jpg" "https://loremflickr.com/640/480/seafood,dried"
curl -L -o "public/images/njanga_sub4.jpg" "https://loremflickr.com/640/480/prawns,dried"

:: Stockfish
curl -L -o "public/images/stockfish_main.jpg" "https://loremflickr.com/640/480/stockfish,dried,fish"
curl -L -o "public/images/stockfish_sub1.jpg" "https://loremflickr.com/640/480/cod,dried"
curl -L -o "public/images/stockfish_sub2.jpg" "https://loremflickr.com/640/480/dried,fish,african"
curl -L -o "public/images/stockfish_sub3.jpg" "https://loremflickr.com/640/480/okporoko,fish"
curl -L -o "public/images/stockfish_sub4.jpg" "https://loremflickr.com/640/480/fish,preserved"

:: Bush Meat
curl -L -o "public/images/bush_meat_main.jpg" "https://loremflickr.com/640/480/bushmeat,african,smoked"
curl -L -o "public/images/bush_meat_sub1.jpg" "https://loremflickr.com/640/480/game,smoked,meat"
curl -L -o "public/images/bush_meat_sub2.jpg" "https://loremflickr.com/640/480/wild,meat,african"
curl -L -o "public/images/bush_meat_sub3.jpg" "https://loremflickr.com/640/480/smoked,meat"
curl -L -o "public/images/bush_meat_sub4.jpg" "https://loremflickr.com/640/480/african,meat,dried"

:: Fish variants
curl -L -o "public/images/smoked_fish_main.jpg" "https://loremflickr.com/640/480/smoked,fish,african"
curl -L -o "public/images/smoked_fish_variant1.jpg" "https://loremflickr.com/640/480/tilapia,smoked"
curl -L -o "public/images/smoked_fish_variant2.jpg" "https://loremflickr.com/640/480/mackerel,smoked"
curl -L -o "public/images/smoked_fish_variant3.jpg" "https://loremflickr.com/640/480/catfish,smoked"
curl -L -o "public/images/smoked_fish_variant4.jpg" "https://loremflickr.com/640/480/barracuda,smoked"
curl -L -o "public/images/smoked_fish_variant5.jpg" "https://loremflickr.com/640/480/herring,smoked"

:: Silure
curl -L -o "public/images/silure_sec_main.jpg" "https://loremflickr.com/640/480/catfish,dried,african"

:: Poulet
curl -L -o "public/images/poulet_fume_main.jpg" "https://loremflickr.com/640/480/chicken,smoked,african"
curl -L -o "public/images/poulet_fume_sub1.jpg" "https://loremflickr.com/640/480/poultry,smoked"
curl -L -o "public/images/poulet_fume_sub2.jpg" "https://loremflickr.com/640/480/chicken,grilled"
curl -L -o "public/images/poulet_fume_sub3.jpg" "https://loremflickr.com/640/480/smoked,poultry"

echo Done!
pause
