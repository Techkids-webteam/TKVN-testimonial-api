'use strict';
import mongoose from 'mongoose';

var MADSchema = mongoose.Schema({
    name: String,
    short_description : String,
    content: String
  },
  {
    collection : 'MAD'
  }
);

export default mongoose.model('Mad', MADSchema);
