const brevo = require('@getbrevo/brevo');

// Brevo API Client (lazy initialization)
let apiInstance = null;

// Initialize Brevo API (called after environment variables are loaded)
const initializeBrevoAPI = () => {
    if (apiInstance) return apiInstance; // Already initialized
    
    console.log('Email Service Configuration:');
    console.log('- API Key exists:', !!process.env.BREVO_API_KEY);
    console.log('- API Key length:', process.env.BREVO_API_KEY?.length);
    console.log('- From Address:', process.env.EMAIL_FROM_ADDRESS);
    console.log('- Frontend URL:', process.env.FRONTEND_URL);

    if (!process.env.BREVO_API_KEY) {
        console.error('✗ BREVO_API_KEY is not set!');
        throw new Error('BREVO_API_KEY environment variable is required');
    }

    apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
        brevo.TransactionalEmailsApiApiKeys.apiKey,
        process.env.BREVO_API_KEY
    );
    console.log('✓ Brevo API initialized successfully');
    
    return apiInstance;
}

// Send Password Reset Email using Brevo API
const sendPasswordResetEmail = async (email, resetToken, userName) => {
    try {
        const api = initializeBrevoAPI(); // Initialize API if not already done
        console.log(`📧 Attempting to send password reset email to: ${email}`);
        
        const resetUrl = `${process.env.FRONTEND_URL}/reset-password?email=${encodeURIComponent(email)}`;

        const sendSmtpEmail = new brevo.SendSmtpEmail();
        
        sendSmtpEmail.subject = 'Password Reset Request - Forever E-Commerce';
        sendSmtpEmail.to = [{ email: email, name: userName || 'User' }];
        sendSmtpEmail.sender = { 
            name: process.env.EMAIL_FROM_NAME || 'Forever E-Commerce', 
            email: process.env.EMAIL_FROM_ADDRESS || 'noreply@forever.com' 
        };
        
        sendSmtpEmail.htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #000; color: #fff; padding: 20px; text-align: center; }
                    .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; }
                    .token-box { background-color: #fff; border: 2px dashed #000; padding: 15px; margin: 20px 0; text-align: center; font-size: 18px; font-weight: bold; letter-spacing: 2px; word-break: break-all; }
                    .button { display: inline-block; background-color: #000; color: #fff; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Forever E-Commerce</h1>
                    </div>
                    <div class="content">
                        <h2>Password Reset Request</h2>
                        <p>Hello ${userName || 'User'},</p>
                        <p>We received a request to reset your password. Use the following reset token:</p>
                        
                        <div class="token-box">${resetToken}</div>
                        
                        <p>Or click the button below to reset your password:</p>
                        <center>
                            <a href="${resetUrl}" class="button">Reset Password</a>
                        </center>
                        
                        <p><strong>Important:</strong></p>
                        <ul>
                            <li>This token will expire in 1 hour</li>
                            <li>If you didn't request this reset, please ignore this email</li>
                        </ul>
                        
                        <p>Best regards,<br>Forever E-Commerce Team</p>
                    </div>
                    <div class="footer">
                        <p>© ${new Date().getFullYear()} Forever E-Commerce. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        const data = await api.sendTransacEmail(sendSmtpEmail);
        console.log('✓ Password reset email sent successfully!');
        console.log('  Message ID:', data.messageId);
        return { success: true, messageId: data.messageId };

    } catch (error) {
        console.error('✗ Brevo API error details:');
        console.error('  Error name:', error.name);
        console.error('  Error message:', error.message);
        console.error('  Error response:', error.response?.text || error.response?.body || 'No response');
        console.error('  Full error:', JSON.stringify(error, null, 2));
        throw error;
    }
};

// Send Welcome Email
const sendWelcomeEmail = async (email, userName) => {
    try {
        const api = initializeBrevoAPI(); // Initialize API if not already done
        
        const sendSmtpEmail = new brevo.SendSmtpEmail();
        
        sendSmtpEmail.subject = 'Welcome to Forever E-Commerce! 🎉';
        sendSmtpEmail.to = [{ email: email, name: userName }];
        sendSmtpEmail.sender = { 
            name: process.env.EMAIL_FROM_NAME, 
            email: process.env.EMAIL_FROM_ADDRESS 
        };
        
        sendSmtpEmail.htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #000; color: #fff; padding: 20px; text-align: center; }
                    .content { background-color: #f9f9f9; padding: 30px; border-radius: 5px; }
                    .button { display: inline-block; background-color: #000; color: #fff; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header"><h1>Welcome to Forever!</h1></div>
                    <div class="content">
                        <h2>Hello ${userName}! 👋</h2>
                        <p>Thank you for joining Forever E-Commerce!</p>
                        <center><a href="${process.env.FRONTEND_URL}" class="button">Start Shopping</a></center>
                    </div>
                </div>
            </body>
            </html>
        `;

        const data = await api.sendTransacEmail(sendSmtpEmail);
        console.log('✓ Welcome email sent:', data.messageId);
        return { success: true, messageId: data.messageId };

    } catch (error) {
        console.error('✗ Welcome email error:', error);
        return { success: false, error: error.message };
    }
};

module.exports = {
    sendPasswordResetEmail,
    sendWelcomeEmail
};
