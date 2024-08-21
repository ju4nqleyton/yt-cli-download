#!/usr/bin/env node
const url = process.argv[2];
const newVideo = {
  id: Date.now(),
  url,
};
console.log('your url video', newVideo);
