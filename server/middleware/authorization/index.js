const roleCheck = () => {
  const isVenue = () => {
    return (req, res, next) => {
      if (!req.user.dj) return res.status(401).json({ error: 'access denied' });
      next();
    };
  };

  const isDj = () => {
    return (req, res, next) => {
      if (req.user.dj) return res.status(401).json({ error: 'access denied' });
      next();
    };
  };
};

module.exports = roleCheck;
