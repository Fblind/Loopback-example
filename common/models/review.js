module.exports = function(Review) {
  Review.beforeRemote('create', function(context, user, next) {
    console.log('beforeRemote');
    var req = context.req;
    req.body.date = Date.now();
    req.body.publisherId = req.accessToken.userId;
    next();
  });
};
