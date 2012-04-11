
exports.index = function(req, res){
  var BufferStream = require('bufferstream')
  var s = new BufferStream(/*{encoding:'utf8', size:'flexible'}*/)
  s.pipe(res);
  req.pipe(s);
};
