// const nodemailer = require("nodemailer");
// require('dotenv').config(); // To load environment variables from .env file

// // Email credentials (you can load them from environment variables for security)
// let EMAIL_USER = `khedekar5aditya@gmail.com`;
// let EMAIL_PASS = `ytkpkpwnjjyxyksg`;
// // Email service setup
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: EMAIL_USER, // Use environment variable for email
//         pass: EMAIL_PASS, // Use environment variable for password
//     }
// });
// // Define recipients
// const recipients = {
//     primary: 'aditya3034@gmail.com',
//     others: ['']
// };

// // Function to send email with HTML template
// const centroidMailer = async ({ name, course, mobile, comment, checkbox }) => {
//     // HTML template for the email body
//     console.log({ name, course, mobile, comment, checkbox });

//     const message = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//         <meta charset="utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Centroid Enquiry</title>
//     </head>
//     <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; background-color: #f0f2f5;">
//         <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
//             <!-- Main Container -->
//             <div style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
//                 <!-- Header Banner - Changed to lighter colors -->
//                 <div style="background: linear-gradient(135deg, #60a5fa, #93c5fd); padding: 40px 30px; text-align: center;">
//                     <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
//                         Centroid - Online Website Enquiry
//                     </h1>
//                 </div>
    
//                 <!-- Content Section -->
//                 <div style="padding: 30px;">
//                     <!-- User Info Card -->
//                     <div style="background-color: #f8fafc; border-radius: 8px; padding: 25px; margin-bottom: 25px;">
//                         <!-- User Name -->
//                         <div style="margin-bottom: 20px;">
//                             <div style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">User Name</div>
//                             <div style="color: #1e293b; font-size: 16px; font-weight: 500; padding: 8px 12px; background-color: #ffffff; border-radius: 6px; border-left: 4px solid #60a5fa;">
//                                 ${name}
//                             </div>
//                         </div>
    
//                         <!-- Course -->
//                         <div style="margin-bottom: 20px;">
//                             <div style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Course</div>
//                             <div style="color: #1e293b; font-size: 16px; font-weight: 500; padding: 8px 12px; background-color: #ffffff; border-radius: 6px; border-left: 4px solid #60a5fa;">
//                                 ${course}
//                             </div>
//                         </div>
    
//                         <!-- Mobile -->
//                         <div style="margin-bottom: 20px;">
//                             <div style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Mobile No</div>
//                             <div style="color: #1e293b; font-size: 16px; font-weight: 500; padding: 8px 12px; background-color: #ffffff; border-radius: 6px; border-left: 4px solid #60a5fa;">
//                                 ${mobile}
//                             </div>
//                         </div>
    
//                         <!-- Comments -->
//                         <div style="margin-bottom: 20px;">
//                             <div style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Comments</div>
//                             <div style="color: #1e293b; font-size: 16px; font-weight: 500; padding: 12px; background-color: #ffffff; border-radius: 6px; border-left: 4px solid #60a5fa; white-space: pre-wrap;">
//                                 ${comment}
//                             </div>
//                         </div>
    
//                         <!-- Email Preference -->
//                         <div>
//                             <div style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Email Preference</div>
//                             <div style="color: #1e293b; font-size: 16px; font-weight: 500; padding: 8px 12px; background-color: #ffffff; border-radius: 6px; border-left: 4px solid ${checkbox ? '#34d399' : '#f87171' };">
//                                 ${checkbox == "Yes"? 'Subscribed to emails' : 'Unsubscribed from emails'}
//                             </div>
//                         </div>
//                     </div>
    
//                     <!-- Status Badge -->
//                     <div style="text-align: center; margin-bottom: 25px;">
//                         <span style="background-color: #e0f2fe; color: #0369a1; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500;">
//                             ✓ Enquiry Received
//                         </span>
//                     </div>
    
//                     <!-- Footer -->
//                     <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
//                         <p style="color: #64748b; font-size: 13px; margin: 0;">
//                             This is an automated email from Centroid.<br>
//                             © ${new Date().getFullYear()} Centroid. All rights reserved.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </body>
//     </html>
//     `;

//     // Email options
//     const mailOptions = {
//         from: '"Admin Centroid" <' + EMAIL_USER + '>', // Sender's email
//         to: recipients.primary + ', ' + recipients.others.join(', '), // Multiple recipients in TO field
//         // Alternatively, you can use CC or BCC:
//         cc: recipients.others, // Recipients in CC field // Recipient's email
//         subject: `Centroid - Online Website Enquiry`, // Subject of the email
//         html: message, // HTML body of the email
//     };

//     try {
//         const info = await transporter.sendMail(mailOptions);
//         console.log("Email sent: " + info.response);
//         return { success: true, response: info.response }; // Include the response in the return
//     } catch (error) {
//         console.log("Error sending email: ", error);
//         return { success: false, response: error.message }; // Include error message in the response
//     }
// };

// module.exports = { centroidMailer };



const nodemailer = require("nodemailer");
require('dotenv').config();

let EMAIL_USER = `khedekar5aditya@gmail.com`;
let EMAIL_PASS = `ytkpkpwnjjyxyksg`;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    }
});

const recipients = {
    primary: 'aditya3034@gmail.com',
    others: ['']
};

const sendEmail = async (subject, message) => {
    const mailOptions = {
        from: '"Admin Centroid" <' + EMAIL_USER + '>',
        to: recipients.primary + ', ' + recipients.others.join(', '),
        cc: recipients.others,
        subject,
        html: message,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
        return { success: true, response: info.response };
    } catch (error) {
        console.log("Error sending email: ", error);
        return { success: false, response: error.message };
    }
};

const generateEmailTemplate = (data) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Centroid Enquiry</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; background-color: #f0f2f5;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); overflow: hidden;">
                <div style="background: linear-gradient(135deg, #60a5fa, #93c5fd); padding: 40px 30px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        Centroid - Online Website Enquiry
                    </h1>
                </div>
                <div style="padding: 30px;">
                    ${Object.keys(data).map(key => `
                        <div style="margin-bottom: 20px;">
                            <div style="color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">${key.replace(/([A-Z])/g, ' $1').trim()}</div>
                            <div style="color: #1e293b; font-size: 16px; font-weight: 500; padding: 8px 12px; background-color: #ffffff; border-radius: 6px; border-left: 4px solid #60a5fa;">
                                ${data[key]}
                            </div>
                        </div>
                    `).join('')}
                    <div style="text-align: center; margin-bottom: 25px;">
                        <span style="background-color: #e0f2fe; color: #0369a1; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 500;">
                            ✓ Enquiry Received
                        </span>
                    </div>
                    <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                        <p style="color: #64748b; font-size: 13px; margin: 0;">
                            This is an automated email from Centroid.<br>
                            © ${new Date().getFullYear()} Centroid. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>`;
};

const centroidMailer = async ({ name, course, mobile, comment, checkbox }) => {
    const emailTemplate = generateEmailTemplate({ name, course, mobile, comment, checkbox });
    return sendEmail("Centroid - Online Website Enquiry", emailTemplate);
};

const processEnquiryEmail = async ({ name, email, phoneNumber, language, course, standard, school, query }) => {
    const emailTemplate = generateEmailTemplate({ name, email, phoneNumber, language, course, standard, school, query });
    return sendEmail("Centroid - Student Enquiry", emailTemplate);
};

module.exports = { centroidMailer, processEnquiryEmail };
