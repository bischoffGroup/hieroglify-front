#!/bin/bash
gitC(){
  npm install
}

main(){
  cd externalLibs
  for i in $(ls -1);
    do cd $i;
    gitC;
    cd ..;
  done;
  cd ..;
  gitC;
}

main

