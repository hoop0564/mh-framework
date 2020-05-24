#!/bin/bash

dataDir=/Users/godev/Works/nodejs/master/softwares/etcd/data

nohup ./etcd --name s1 --data-dir ${dataDir} --listen-client-urls http://0.0.0.0:2479 --advertise-client-urls http://0.0.0.0:2479 --listen-peer-urls http://0.0.0.0:2480 --initial-advertise-peer-urls http://0.0.0.0:2480 --initial-cluster s1=http://0.0.0.0:2480 &

