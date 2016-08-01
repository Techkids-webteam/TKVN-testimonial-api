'use strict';
import mongoose from 'mongoose';

var WebSchema = mongoose.Schema({
    name: String,
    short_description : String,
    content: String
  },
  {
    collection : 'web'
  }
);

export default mongoose.model('Web', WebSchema);
