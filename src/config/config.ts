export const config = () => ({
    port: process.env.PORT || 3000,
    sendgridApiKey : process.env.SENDGRID_API_KEY, 
    sendgridApi: process.env.SENDGRID_API_KEY
  })