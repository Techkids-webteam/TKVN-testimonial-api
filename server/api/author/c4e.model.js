'use strict';
import mongoose from 'mongoose';

var c4eSchema = mongoose.Schema({
    name: String,
    short_description : String,
    content: String
  },
  {
    collection : 'c4e'
  }
);

export default mongoose.model('c4e', c4eSchema);
