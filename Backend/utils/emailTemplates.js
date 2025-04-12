export const verificationEmail = (name, verificationCode) => {
    return `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9ff; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 40px; text-align: center;">
          
          <h1 style="color: #6a0dad; margin-bottom: 20px;">Welcome to Level-Up, ${name}!</h1>
          
          <p style="font-size: 16px; color: #555;">
            We're excited to have you onboard. To complete your sign-up, please verify your email by entering the OTP below:
          </p>
  
          <div style="font-size: 28px; font-weight: bold; margin: 30px 0; color: #6a0dad; letter-spacing: 4px;">
            ${verificationCode}
          </div>
  
          <p style="font-size: 14px; color: #888;">This code will expire in 10 minutes.</p>
  
          <a href="#" style="display: inline-block; margin-top: 30px; padding: 12px 30px; background-color: #6a0dad; color: white; text-decoration: none; border-radius: 8px; font-weight: bold;">
            Verify Now
          </a>
  
          <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;" />
  
          <p style="font-size: 12px; color: #999;">
            If you did not sign up for Level-Up, please ignore this email or contact our support team.
          </p>
  
        </div>
      </div>
    `;
  };
  

  export const welcomeTemplate = (name, email) => {
    return `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9ff; padding: 30px;">
        <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 40px; text-align: center;">
          
          <h1 style="color: #6a0dad; margin-bottom: 20px;">Welcome to Level-Up, ${name}!</h1>
          
          <h2 style="font-size: 16px; color: #555;">
           Your Email is Successfully Verified :) Thank you for registering with this email:- ${email} 
          </h2>
  
          <p style="font-size: 14px; color: #888;">Shop on our website</p>
    
          <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;" />
  
          <p style="font-size: 12px; color: #999;">
            Best wishes: Team Level-Up
          </p>
  
        </div>
      </div>
    `;
  };
  