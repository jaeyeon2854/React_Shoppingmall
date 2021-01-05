const config = {
    env: process.env.NODEENV || 'development',
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || 'My_Secret_Key',
    mongoDbUri: process.env.MONGEDB_URI || 'mongodb://localhost/shopping-mall'
}

export default config