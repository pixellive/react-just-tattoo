import { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import TattooItem from './components/TattooItem';
import TattooPost from './components/TattooPost';
import AppSearch from './components/AppSearch';
import tattoos from './data/tattoos';

function App() {
    const [selectedTatoo, setSelectedTatoo] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onTattooOpenClick(theTattoo) {
        setSelectedTatoo(theTattoo);
    }

    function onTattooCloseClick() {
        setSelectedTatoo(null);
    }

    // const filleredTattoos = tattoos.filter((tattoo)=> {
    //     return tattoo.title.includes(searchText);
    // });

    // const tattooElements = tattoos.map((tattoo, index) => {
    //     return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
    // });

    const tattooElements = tattoos.filter((tattoo)=> {
        return tattoo.title.includes(searchText);
    }).map((tattoo, index) => {
        return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick} />;
    });

    let tattooPost = null;
    if (!!selectedTatoo){
        tattooPost = <TattooPost tattoo={selectedTatoo} onBgClick={onTattooCloseClick}/>
    }

  return (
    <div className="app">
        <AppHeader />
        <section className='app-section'>
            <div className='app-container'>
            <AppSearch value={searchText} onValueChange={setSearchText} />
            <div  className="app-gird">
                {tattooElements}
            </div>
            </div>
        </section>
        {tattooPost}
        {/* <button onClick={onTattooOpenClick}>สักหน่อย</button> */}
        {/* <button onClick={() => {setSelectedTatoo(tattoos[2])}}>สักหน่อย</button> */}
        {/* <button onClick={() => {onTattooOpenClick(tattoos[3])}}>สักหน่อย</button> */}
    </div>
  );
}

export default App;
