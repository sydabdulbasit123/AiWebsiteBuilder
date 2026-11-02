export const GetCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        user: null,
        message: "User not authenticated",
      });
    }
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ message: `Error fetching current user: ${error}` });
  }
};
