const config = {
    env: process.env.NODEENV || 'development',
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || 'My_Secret_Key',
    mongoDbUri: process.env.MONGEDB_URI || 'mongodb://localhost/shopping-mall',
    kakaoAdminKey: 'b2dda7685c5b2990684d813e362cff07',
    cookieMaxAge: 60 * 60 * 24 * 7 * 1000
}
  
export default config