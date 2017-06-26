var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema(
                      {
                         text:String, 
                         created_on:{
                           type:Date,
                           default:Date.now()
                         }
                      }
                    );

mongoose.model('Comment',commentSchema);
