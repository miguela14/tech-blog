const User = require('./user');
const Blog = require('./blog');

module.exports = { User, Blog};

User.hasMany(Blog, {
    foreignaKey: 'user_id',
    onDelete: 'CASCADE',
});

Blog.belonsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Blog };