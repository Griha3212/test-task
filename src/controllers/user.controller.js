export const getUsersWithRankMoreThan20 = async (req, res, next) => {
  try {
    const url = "https://randomuser.me/api/?results=10";

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        res.status(200).send(data);
      });
  } catch (error) {
    next(error);
  }
};
