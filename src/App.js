import CardList from './components/cardList/cardList.components';
import SearchBox from './components/searchBox/searchBox.components';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);
  console.log('render');
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    console.log('effect is firing');

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="title-robo">Robo RodoRobo</h1>
      <SearchBox
        className="monster-search-box"
        search={onSearchChange}
        placeholder={'Search Here'}
        type="search"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//       onSearchChange: '',
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((resp) => resp.json())
//       .then((users) => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }
//
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };
//
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//
//     return (
//       <div className="App">
//         <h1 className="title-robo">Robo RodoRobo</h1>
//         <SearchBox
//           className="monster-search-box"
//           search={onSearchChange}
//           placeholder={'Search Here'}
//           type="search"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
