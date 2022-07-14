import { useState,useEffect } from "react";
import Content from "components/Content";
import Sidebar from "components/Sidebar";
import BrandsData from './brands.json'
import MainContext from "components/MainContext";
import Copied from "components/Copied";


function App() {

  
  const brandsArray = [];
  
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })
  
  const [copied, setCopied] = useState(false);
  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    if(copied){
      const timeout =  setTimeout(() => {
            setCopied(false)
        }
        , 1500)
        return () => clearTimeout(timeout)
    }
}, [copied])

  useEffect(() => {
    setBrands(brandsArray.filter(brand=> brand.title.toLowerCase().includes(search.toLowerCase())))
  }, [search])




  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
        {copied && <Copied color={copied} />}

      </MainContext.Provider>
    </>
  );
}

export default App;
