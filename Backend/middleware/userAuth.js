import jwt from 'jsonwebtoken'

export const authMiddleware = (req,res, next) =>{
    try {
        const token = req.cookies?.accessToken || req?.headers?.authorization?.split(" ")[1]

        if(!token){
            return res.status(401).json({message:"Access Denied No token Provided"})
        }

        const decode = jwt.verify(token,process.env.SECRET_ACCESS_KEY)

        if(!decode){
            return res.status(401).json({message:"Unauthorized Access"})
        }

        req.userId = decode._id

        next()

    } catch (error) {
        console.error('Authentication error:', error);

        let message = "Authentication failed";
        if (error.name === 'TokenExpiredError') {
          message = "Session expired. Please login again";
        } else if (error.name === 'JsonWebTokenError') {
          message = "Invalid token";
        }
    
        return res.status(401).json({
          message,
          error: true,
          success: false,
          shouldLogout: error.name === 'TokenExpiredError' // Frontend can auto-logout
        })
    }
}


