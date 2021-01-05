exports.venueRole = () => {
  return (req, res, next) => {
    if (req.user.dj) return res.status(401).json({ error: 'access denied' });
    next();
    // console.log(req.user.dj)
  };
};

exports.djRole = () => {
  return (req, res, next) => {
    if (!req.user.dj) return res.status(401).json({ error: 'access denied' });
    next();
    // console.log(req.user.dj)
  };
};

// module.exports = venueRole, djRole;
