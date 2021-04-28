/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import fetch from "node-fetch";

export const getUsersWithRankMoreThan20 = async (req, res, next) => {
  try {
    const url = "/users?offset=0";

    let amountOfRequests;

    let receivedAllUsers;

    await fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        amountOfRequests = Math.ceil(data.total / 20);

        receivedAllUsers = [...data.users];
      });

    for (let index = 1; index < amountOfRequests; index++) {
      await fetch(`/users?offset=${index}`)
        .then((resp) => resp.json())
        .then((data) => {
          receivedAllUsers = [...receivedAllUsers, ...data.users];
        });
    }

    const dataToSend = receivedAllUsers.filter((element) => element.rank >= 20);

    res.status(200).send(dataToSend);
  } catch (error) {
    next(error);
  }
};

// export const getUsersWithRankMoreThan20 = async (req, res, next) => {
//   try {
//     // to do change api
//     const url = "https://randomuser.me/api/?results=1";

//     const amountOfRequests = 3;

//     let receivedAllUsers;

//     await fetch(url)
//       .then((resp) => resp.json())
//       .then((data) => {
//         receivedAllUsers = [...data.results];
//       });

//     for (let index = 1; index < amountOfRequests; index++) {
//       await fetch(`https://randomuser.me/api/?results=${index}`)
//         .then((resp) => resp.json())
//         .then((data) => {
//           console.log("index :>> ", index);
//           receivedAllUsers = [...receivedAllUsers, ...data.results];
//         });
//     }

//     // const dataToSend = receivedAllUsers.filter((element) => element.rank >= 20);

//     res.status(200).send(receivedAllUsers);
//   } catch (error) {
//     next(error);
//   }
// };
