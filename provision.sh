#!/bin/bash

sudo apt-get install npm -y &&
sudo npm i n -g &&
sudo n latest &&
sudo npm i npm brunch -g &&
cd /home/ubuntu/web_server &&
npm i
