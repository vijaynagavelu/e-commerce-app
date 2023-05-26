import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {

  const brand = ["Apple iphone", "Samsung", "Redmi", "Poco"];
  const ram = ["6GB", "4GB", "12GB"];
  const memory = ["64GB", "128GB", "256GB"];
  const color = ["White", "Black", "Gold", "Yellow", "Blue"];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const items = [
    {
      name: "Apple iphone 13 pro",
      category: "phone",
      color: "Blue",
      brand: "Apple iphone",
      ram: "6GB",
      memory: "128GB",
      imgLink: "https://m.media-amazon.com/images/I/61BGE6iu4AL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: "Apple iphone 13 pro",
      category: "phone",
      color: "White",
      brand: "Apple iphone",
      ram: "6GB",
      memory: "256GB",
      imgLink: "https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: "Apple iphone 13 pro",
      category: "phone",
      color: "Gold",
      brand: "Apple iphone",
      ram: "4GB",
      memory: "128GB",
      imgLink: "https://m.media-amazon.com/images/I/61WAINtWPPL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: "Samsung 11pro",
      category: "phone",
      color: "Black",
      brand: "Samsung",
      ram: "4GB",
      memory: "64GB",
      imgLink: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: "Samsung 11pro",
      category: "phone",
      color: "White",
      brand: "Samsung",
      ram: "6GB",
      memory: "128GB",
      imgLink: "https://m.media-amazon.com/images/I/817WWpaFo1L._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: "Redmi max max",
      category: "phone",
      color: "Gold",
      brand: "Redmi",
      ram: "12GB",
      memory: "64GB",
      imgLink: "https://m.media-amazon.com/images/I/71yTJCdHdaL._AC_SS450_.jpg",
    },
    {
      name: "Redmi 11 max",
      category: "phone",
      color: "Black",
      brand: "Redmi",
      ram: "6GB",
      memory: "128GB",
      imgLink: "https://m.media-amazon.com/images/I/71293gyogZL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      name: "Poco",
      category: "phone",
      color: "White",
      brand: "Poco",
      ram: "4GB",
      memory: "256GB",
      imgLink: "https://m.media-amazon.com/images/I/413eFqPKBcL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Poco",
      category: "phone",
      color: "Yellow",
      brand: "Poco",
      ram: "6GB",
      memory: "128GB",
      imgLink: "https://m.media-amazon.com/images/I/51RtjBcZqWL._SX425_.jpg",
    },
    {
      name: "Poco",
      category: "phone",
      color: "White",
      brand: "Poco",
      ram: "6GB",
      memory: "128GB",
      imgLink: "https://m.media-amazon.com/images/I/413eFqPKBcL._SX300_SY300_QL70_FMwebp_.jpg",
    },


  ]

  const [array, setArray] = useState(items);
  const [brandFilter, setBrandFilter] = useState([]);
  const [ramFilter, setRamFilter] = useState([]);
  const [memoryFilter, setMemoryFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);




  // function checkAdult(phone, a) {
  //   if (a.length) {
  //     for (var i = 0; i < a.length; i++) {
  //       if (phone.brand === a[i]) {
  //         return phone.brand === a[i];
  //       }
  //     }
  //   } else return ((phone) => phone.brand.includes(a))
  // }

  const checkAdult = useCallback((phone) => {
    console.log(brandFilter);
    if (brandFilter.length) {
      for (var i = 0; i < brandFilter.length; i++) {
        if (phone.brand === brandFilter[i]) {
          return phone.brand === brandFilter[i];
        }
      }
    } else return ((phone) => phone.brand.includes(brandFilter))
  }, [brandFilter]);


  const checkAdult1 = useCallback((phone) => {
    if (ramFilter.length) {
      for (var i = 0; i < ramFilter.length; i++) {
        if (phone.ram === ramFilter[i]) {
          return phone.ram === ramFilter[i];
        }
      }
    } else return ((phone) => phone.ram.includes(ramFilter))
  }, [ramFilter])



  const selectedList = useCallback(() => {
    let filteredItems = items.filter(checkAdult);
    //console.log(abc);

    filteredItems = filteredItems.filter(checkAdult1);
    console.log(filteredItems);


    setArray(filteredItems);
    console.log("hello be", array);

  }, [array, brandFilter, checkAdult, checkAdult1, items])



  useEffect(() => {
    selectedList()
  }, [brandFilter, ramFilter]);


  // function selectedList() {

  function updateInput(e, filter, setFilter) {
    if (!filter.includes(e)) {
      setFilter([...filter, e]);
    } else {
      const index = filter.findIndex((filter) => filter === e);
      filter.splice(index, 1);
      setFilter([...filter]);
    }
  }

  function check(item, filter) {
    return filter.includes(item);
  }

  return (
    <main>
      <nav className='navBar'>
        <div >✌️ vazon.in</div>
        <div>
          <input placeholder='Search vazon.in'></input>
          <span >🔍</span>
        </div>
        <div>Hello Mark</div>
        <div>Cart 1 </div>

      </nav>

      <div className='container'>
        <div className='filters'>
          <div className='filterSection'>
            {brand.map((item, i) => {
              return (
                <div key={i} className='row' >
                  <div onClick={() => { updateInput(item, brandFilter, setBrandFilter) }}>{item}</div>
                  <input readOnly type='checkbox' checked={check(item, brandFilter)} onClick={() => { updateInput(item, brandFilter, setBrandFilter) }} ></input>
                </div>
              )
            })}
          </div>
          <div className='filterSection'>
            {ram.map((item, i) => {
              return (
                <div key={i} className='row' >
                  <div onClick={() => { updateInput(item, ramFilter, setRamFilter) }}>{item}</div>
                  <input readOnly type='checkbox' checked={check(item, ramFilter)} onClick={() => { updateInput(item, ramFilter, setRamFilter) }} ></input>
                </div>
              )
            })}
          </div>
          <div className='filterSection'>
            {memory.map((item, i) => {
              return (
                <div key={i} className='row' >
                  <div onClick={() => { updateInput(item, memoryFilter, setMemoryFilter) }}>{item}</div>
                  <input readOnly type='checkbox' checked={check(item, memoryFilter)} onClick={() => { updateInput(item, memoryFilter, setMemoryFilter) }} ></input>
                </div>
              )
            })}
          </div>
          <div className='filterSection'>
            {color.map((item, i) => {
              return (
                <div key={i} className='row' >
                  <div onClick={() => { updateInput(item, colorFilter, setColorFilter) }}>{item}</div>
                  <input readOnly type='checkbox' checked={check(item, colorFilter)} onClick={() => { updateInput(item, colorFilter, setColorFilter) }}></input>
                </div>
              )
            })}
          </div>
        </div>



        <div className='products'>
          {array.map((item, i) => {
            return (
              <div key={i} className='section'>
                <div>{item.name}</div>
                <div>{item.ram}</div>
                <img alt='sorry' src={item.imgLink}></img>
              </div>
            )
          })}
        </div>

      </div>

    </main>
  );
}

export default App;
