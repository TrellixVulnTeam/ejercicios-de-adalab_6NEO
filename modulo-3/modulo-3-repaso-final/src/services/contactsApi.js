//https://randomuser.me/api/?results=50

const getApiData = () => {
  return fetch('https://randomuser.me/api/?results=50')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.results.map((user) => {
        return {
          id: user.login.uuid,
          age: user.dob.age,
          city: user.location.city,
          country: user.location.country,
          image: user.picture,
          fullName: `${user.name.first} ${user.name.last}`,
          email: user.email,
        };
      });
      return dataClean;
    });
};
export default getApiData;
