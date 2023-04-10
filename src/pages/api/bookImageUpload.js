// require('dotenv').config()
// import nextConnect from 'next-connect';
// import multer from 'multer';
// import formidable from 'formidable';
// import path from "path"
// import fs from "fs/promises"

// // const imageStorage = multer.diskStorage({
// //     destination: 'images/',
// //     filename: (req, file, cb) => {
// //         console.log(file)
// //         cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
// //     }
// // })

// // const upload = multer({ storage: imageStorage,
// //     limits: {
// //       fileSize: 1000000 // 1000000 Bytes = 1 MB
// //     },
// //     fileFilter(req, file, cb) {
// //       if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
// //          // upload only png and jpg format
// //          return cb(new Error('Please upload a Image With the Proper Extension'))
// //        }
// //      cb(undefined, true)
// //   }
// //  });

// const apiRoute = nextConnect({
//   onError(error, req, res) {
//     res.status(501).json({ error: error.message });
//   },
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// // apiRoute.use(upload.single('Image'))
// const readFile = (req, saveLocally) => {
//     const options = {}
//     if (saveLocally) {
//         options.uploadDir = path.join(process.cwd(), "./images")
//         options.filename = (name, ext, path, form) => {
//             return Date.now() + "_" + path.originalFileName;
//         }
//     }


//     const form = formidable(options)
//     return new Promise((resolve, rej) => {
//         form.parse(req, (err, fields, files) => {
//             if (err) {
//                 rej(err)
//             }
//             resolve({fields, files})
//         })
//     })
// }  


// apiRoute.post((req, res) => {
//     const form  = formidable({

//     })
//     form.parse(req, (err, fields, files) => {

//     })
// });

// export default apiRoute;


import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: './images',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('theFiles'));

apiRoute.post((req, res) => {
  res.status(200).json({ data: 'success' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};  