
exports.index = function(req, res){
  var nb_chunk = 0;
  
  req.setEncoding('utf-8');
  req.on('data', function(chunk) {
    nb_chunk++;
    res.write('chunk received l='+chunk.length+'\n');
    
    if (nb_chunk < 5) {
        // 1 chunk per second
        req.pause();
        setTimeout(function(){
            req.resume();
        }, 1000);
    } else {
        res.end(); // on stoppe le streaming au bout de 5 chunk
    }
  });
  req.on('end', function() {
    res.end();
  });
};
