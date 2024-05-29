export const config = () => ({
    port: process.env.PORT || 3000,
    sendgridUser : process.env.SENDGRID_USER, 
    sendgridApi: process.env.SENDGRID_API_KEY,
    sendgridHost: process.env.SENDGRID_HOST
  })