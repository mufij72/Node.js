const multer =require('multer');

const storage =multer.diskStorage({
  diskStorage: function(req ,file ,cd){
    cd(null ,'public/image')
  },

  filename :function( req ,res,cd){
    let filename =Data.now()+"-"+file.origanalname;
    cd(null,filename)
  }
});
const upload = multer({storage:storage})

module.exports = upload;