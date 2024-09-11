// const cloudinary = require("cloudinary").v2

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// async function handleUpload (file) {
//     const res= await cloudinary.uploader.upload(file, {
//         resource_type: "auto"
//     })
//     return res;
// };

// const upload = {
//     uploadImage: async(req, res) => {
//         try{
//             const b64 = Buffer.from(req.file.buffer).toString("base64");
//             let dataURI ="data:" + req.file.mimetype + ";base64," + b64
//             const cldRes = await handleUpload(dataURI)
//             res.json(cldRes)
//         }catch(error){
//             console.log("error")
//             res.send({message: error.message})
//         }
//     }
// }


// module.exports = upload;

const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

async function handleUpload (file) {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({
            resource_type: "auto"
        }, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        }).end(file.buffer);
    });
}

const upload = {
    uploadImage: async(req, res) => {
        try {
            if (!req.file || !req.file.buffer) {
                return res.status(400).json({ message: 'No file uploaded' });
            }

            const cldRes = await handleUpload(req.file);
            res.json(cldRes);
        } catch(error) {
            console.error("Error uploading image:", error.message);
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = upload;
