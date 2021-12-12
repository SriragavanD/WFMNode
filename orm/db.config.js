module.exports = {
    HOST: "istsrvmysql01.softuradomain.com",
    USER: "sriragavan",
    PASSWORD: "sriragavan",
    DB: "wfm",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };