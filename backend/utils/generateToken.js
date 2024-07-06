import jwt from "jsonwebtoken";

const generatTokenAndSetCookie =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d',
    });

    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000, //ms format
        httpOnly:true, //prevents xxs attacks thats is cross-site scripting attacks
        sameSite:"strict", // csrf attacks
        secure:process.env.NODE_ENV !== "development"
    });
};

/*
whenevr user logs in, server generate jwt and put it into cookie and send
that cookie to client, where it is stored in browser. This cookie is used
for various request authentication and also for session management like logout.
*/

export default generatTokenAndSetCookie;