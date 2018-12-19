#!/bin/bash

. /etc/profile

WORK_DIR="/opt/jcohy"
SERVICE_DIR="$WORK_DIR/jcohy_front"

if [ ! -d $WORK_DIR ]; then
     mkdir -p $WORK_DIR
fi

if [ ! -d $SERVICE_DIR ]; then
     rm -rf $SERVICE_DIR
fi

mkdir -p $SERVICE_DIR
mv dist/* $SERVICE_DIR

