#!/usr/bin/env bash
nohup `export NODE_ENV=develop && node www.js >/dev/null 2>&1` &