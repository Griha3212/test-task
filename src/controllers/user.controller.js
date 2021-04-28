/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import fetch from "node-fetch";

export const getUsersWithRankMoreEqual20 = async (req, res, next) => {
  try {
    const url = "/users?offset=0";

    let amountOfRequests;

    let receivedAllUsers;
    // find out the number of requests and save the data from the first one
    await fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        amountOfRequests = Math.ceil(data.total / 20);
        receivedAllUsers = [...data.users];
      });

    // it can be promise all, but i don't want to overload server
    // load and save other data
    for (let index = 1; index < amountOfRequests; index++) {
      await fetch(`/users?offset=${index}`)
        .then((resp) => resp.json())
        .then((data) => {
          receivedAllUsers = [...receivedAllUsers, ...data.users];
        });
    }

    // filter by rank
    const dataToSend = receivedAllUsers.filter((element) => element.rank >= 20);

    res.status(200).send(dataToSend);
  } catch (error) {
    next(error);
  }
};
