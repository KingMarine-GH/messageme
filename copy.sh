rm -r build || true
mkdir build
cp -r server/build build/server
cp package.json build/server
cp -r website/public build/public