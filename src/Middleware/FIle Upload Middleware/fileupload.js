import multer from "multer";

const storage=multer.diskStorage({

     destination:(req,file,cb)=>{
        cb(null,"Public/PostsImages")
     },
     filename:(req,file,cb)=>{
        const timeStamp=Date.now();
        const originalFileName=file.originalname;
        const finalFileName=timeStamp + '-' + originalFileName;
        cb(null,finalFileName);
     }
});

export const fileUpload=multer({storage:storage});