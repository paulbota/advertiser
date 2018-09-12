export default (process.env.NODE_ENV === 'production' ? require('./env.prod') : require('./env.local')).default;
