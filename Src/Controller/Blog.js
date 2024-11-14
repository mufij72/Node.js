// const { log } = require('console');
const modelblog = require('../Model/Blog')
const fs = require('fs');
const path = require('path');

const cteatblod = async (req, res) => {
   try {
      let { titel, content } = req.body
      const findblog = await modelblog.findOne({ titel })
      if (findblog) {
         res.state(409).josn({ msg: "Blog alredy exist" })
      } else {
         let Blog = await modelblog.create({ titel, content, image: req.file.filename, User: req.session.User.id })
      }
   } catch (error) {
      res.send()
   }
}
const getblog = async (req, res) => {
   try {
      let alldata = await modelblog.find();
      res.send(alldata)
   } catch (error) {
      res.send(error.message)
   }
}
const readoneblog = async (req, res) => {
   try {
      let id = req.params.id;
      let data = await modelblog.findById(id);
      res.send(data)
   } catch (error) {
      res.send(error.message)
   }
}


//   updatet bloge

const updatetblog = async (req, res) => {
   try {
      let id = req.params.id;
      let { titel, content } = req.body;

      let blog = await modelblog.findOne({ _id: id })

      if (!blog) {
         return res.status(400).send("blog not found")
      }
      let filename = blog.image;


      if (req.file) {
         filename = req.file.filename;
         const oldfilename = blog.image;
         const image_path = path.join(__dirname, `../public/image/${oldfilename}`)
         fs.unlinkSync(image_path)

      }
      let updatet = await modelblog.findByIdAndUpdate(id, { titel, content, image: filename }, { new: true })
      res.status(200).send(updatet)
   } catch (error) {
      res.status(500).send(error.message);
   }
}

// delet blog

const deletblog =async (req ,res)=>{
   try {
      let id =req.params.id;
      let blog = await modelblog.findOne({_id:id})
      if (!blog) {
         return res.status(400).send("blog not found")
      }


      const img =blog.image;
      const image_path = path.join(__dirname,`.././public/image/${img}`)
      fs.unlinkSync(image_path);
      let deletblog =await modelblog.findByIdAndDelete(id);
      console.log(deletblog)
      res.send("blog delet")
   } catch (error) {
      
   }
}
module.exports = { cteatblod, getblog, readoneblog,updatetblog,deletblog }