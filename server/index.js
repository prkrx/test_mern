import express from 'express';
import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://root:root@cluster0.cxovvis.mongodb.net/?retryWrites=true&w=majority');
  console.log("connected")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}