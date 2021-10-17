# build website
cd website
rollup -c

# build server
cd ../server
rm -r build
tsc