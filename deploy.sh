#!/bin/bash

source /etc/profile

WORK_DIR="/opt/jcohy"
SERVICE_DIR="$WORK_DIR/jcohy_front"

npm install

npm run build

ssh root@47.107.92.75 "rm -rf $WORK_DIR/jcohy_front.zip"
scp  -r jcohy_front.zip root@47.107.92.75:$WORK_DIR/

ssh root@47.107.92.75

ssh root@47.107.92.75 "unzip -o $WORK_DIR/jcohy_front.zip -d $SERVICE_DIR"

