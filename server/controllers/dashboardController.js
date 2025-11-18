

export const getDashboard = (req,res)=>{
    res.status(200).json({message:"Dashboard data fetched successfully!",
        userId:req.userId
    })
}