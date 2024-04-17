export const {
  APP_PORT = 3000,
  NODE_ENV = "development",

  DB_USERNAME = "admin",
  DB_PASSWORD = "admin",
  DB_HOST = "localhost",
  DB_PORT = 27017,
  DB_NAME = "chat_db",

  SESS_NAME = "sid",
  SESS_SECRET = "ssh!secret!",
  SESS_LIFETIME = 1000 * 60 * 60 * 2,

  REDIS_HOST = "192.168.10.128",
  REDIS_PORT = 6379,
  REDIS_PASSWORD = "secret",
} = process.env;

export const IN_PROD = NODE_ENV === "production";
