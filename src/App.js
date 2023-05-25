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
  const [filter, setFilter] = useState([]);



  // function checkAdult(items) {
  //   for (var i = 0; i < filter.length; i++) {
  //     if (items.color === filter[i]) {
  //       return items.color === filter[i];
  //     }
  //     if (items.brand === filter[i]) {
  //       return items.brand === filter[i];
  //     }
  //     if (items.ram === filter[i]) {
  //       return items.ram === filter[i];
  //     } if
  //       (items.memory === filter[i]) {
  //       return items.memory === filter[i];
  //     }
  //   }
  // }


  // const checkAdult = useCallback((phone) => {
  //   for (var i = 0; i < filter.length; i++) {
  //     console.log(phone, "ph")
  //     if (phone.color === filter[i]) {
  //       return phone.color === filter[i];
  //     }
  //     if (phone.ram === filter[i]) {
  //       return phone.ram === filter[i];
  //     }
  //     if (phone.brand === filter[i]) {
  //       return phone.brand === filter[i];
  //     }
  //     if
  //       (phone.memory === filter[i]) {
  //       return phone.memory === filter[i];
  //     }
  //   }
  // }, [filter])


  const checkAdult = useCallback((phone) => {
    for (var i = 0; i < filter.length; i++) {
      console.log(phone, "ph")
      if (phone.brand === filter[i]) {
        if (phone.ram === filter[i]) {
          return phone.ram === filter[i];
        }
        return phone.brand === filter[i];
      }
      // if (phone.ram === filter[i]) {
      //   return phone.ram === filter[i];
      // }
      if (phone.color === filter[i]) {
        return phone.color === filter[i];
      }
      if
        (phone.memory === filter[i]) {
        return phone.memory === filter[i];
      }
    }
  }, [filter])


  const selectedList = useCallback(() => {
    if (filter.length > 0) {
      const filteredItems = array.filter(checkAdult)
      setArray(filteredItems);
      console.log("hello be", array);
    } else {
      setArray(items);
    }
  }, [array, checkAdult, filter.length, items])

  useEffect(() => {
    selectedList()
  }, [filter]);


  // function selectedList() {



  function updateInput(e) {
    if (!filter.includes(e)) {
      setFilter([...filter, e]);
    } else {
      const index = filter.findIndex((filter) => filter === e);
      filter.splice(index, 1);
      setFilter([...filter]);
    }
  }

  function check(item) {
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
                  <div onClick={() => { updateInput(item) }}>{item}</div>
                  <input readOnly type='checkbox' checked={check(item)} onClick={() => { updateInput(item) }} ></input>
                </div>
              )
            })}
          </div>
          <div className='filterSection'>
            {ram.map((item, i) => {
              return (
                <div key={i} className='row' >
                  <div onClick={() => { updateInput(item) }}>{item}</div>
                  <input readOnly type='checkbox' checked={check(item)} onClick={() => { updateInput(item) }} ></input>
                </div>
              )
            })}
          </div>
          <div className='filterSection'>
            {memory.map((item, i) => {
              return (
                <div key={i} className='row' >
                  <div onClick={() => { updateInput(item) }}>{item}</div>
                  <input readOnly type='checkbox' checked={check(item)} onClick={() => { updateInput(item) }} ></input>
                </div>
              )
            })}
          </div>
          <div className='filterSection'>
            {color.map((item, i) => {
              return (
                <div key={i} className='row' >
                  <div onClick={() => { updateInput(item) }}>{item}</div>
                  <input readOnly type='checkbox' checked={check(item)} onClick={() => { updateInput(item) }}></input>
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
