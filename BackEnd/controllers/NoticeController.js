const noticeSchema=require('../models/Notice')

const createNotice= async(req, res)=>{
    try {
        const { content } = req.body;

    // Create a new notice
    const newNotice = new noticeSchema({ content });
   await newNotice.save();
        res.status(200).json({message: `Notice created successfully.`, newNotice});
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const getNotices= async(req, res)=>{
    try {
        const notices = await noticeSchema.find().sort({ createdAt: -1 }); // Sort by latest
        res.status(200).json(notices);
      } catch (err) {
        res.status(500).json({error: err.message });
      }
}

const deleteNotices=async(req, res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({error: 'No such notice!'})
    }

    const notice = await noticeSchema.findByIdAndDelete({_id: id})

    if(!notice) {
        throw Error('No such notice!')
    }

    res.status(200).json(notice);
}

module.exports = { createNotice, getNotices, deleteNotices };