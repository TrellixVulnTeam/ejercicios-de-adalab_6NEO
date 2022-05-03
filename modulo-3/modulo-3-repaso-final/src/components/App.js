import { useState, useEffect } from 'react';
import getApiData from '../services/contactsApi';
import UserList from './UserList';
import Filters from './Filters';

function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [filterCountry, setFilterCountry] = useState('');
  const [filterName, setFilterName] = useState('');
  //const [filterCity, setFilterCity] = useState('');

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi);
      setDataUsers(dataFromApi);
    });
  }, []);

  const handleFilterCountry = (value) => {
    setFilterCountry(value);
  };

  const handleFilterName = (value) => {
    setFilterName(value);
  };

  // const handleFilterCity = (value) => {
  //   setFilterCity(value);
  // };

  const userFilters = dataUsers
    .filter((user) => {
      return user.country === filterCountry;
    })
    .filter((user) =>
      user.fullName.toLowerCase().includes(filterName.toLocaleLowerCase())
    );
  // .filter((user) => {
  //   return user.city === filterCity;
  // });

  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <Filters
          handleFilterCountry={handleFilterCountry}
          handleFilterName={handleFilterName}
          //handleFilterCity={handleFilterCity}
        />
        <UserList users={userFilters} />
      </div>
    </>
  );
}

export default App;
