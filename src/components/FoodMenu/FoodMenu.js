import React, { useEffect, useState } from 'react';
import FoodMenuOne from './FoodMenuOne';
import MenuCard from './MenuCard';
import { MenuItems } from '../../data/data';
import { client, urlFor } from '../../lib/client';

const FoodMenu = () => {
  const [isMainData, setMainData] = useState();
  const [first, setfirst] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const menuLi = document.querySelectorAll('#menu li');

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    menuLi.forEach((n) => n.addEventListener('click', setMenuActive));

    // menu Card active class changer
    const menuCard = document
      .querySelector('.rowContainer')
      .querySelectorAll('.rowMenuCard');

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove('active'));
      this.classList.add('active');
    }

    menuCard.forEach((n) =>
      n.addEventListener('click', setMenuCardActive)
    );
  }, [isMainData]);

  const setData = (itemId) => {
    console.log(isMainData);
    if (itemId !== 'all') {
      setfirst(
        isMainData.filter((element) => element.category === itemId)
      );
    } else {
      setfirst(isMainData);
    }
  };
  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{
            name,
            bezeichnung,
            category,
            image{
              asset->{
                url
              }
            },
            
            price,
          }`
      )
      .then((data) => {
        console.log('----', data);
        setMainData(data);
        setfirst(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="cloud" id="menu_menu">
      <div className="container grid">
        <div className="menu-scroll">
          <div className="rowContainer">
            {MenuItems &&
              MenuItems.map((data) => (
                <div
                  key={data.id}
                  onClick={() => setData(data.itemId)}
                >
                  <MenuCard
                    imgSrc={data.imgSrc}
                    name={data.name}
                    isActive={data.id === '1' ? true : false}
                  />
                </div>
              ))}
          </div>
        </div>

        <div className="overlay"></div>
        <h1 className="stats-heading text-center my-1 md">
          UNSER MENU
        </h1>
        <div className="border-title"></div>
        <section className="menu" id="menu">
          <div className="box-container">
            {isMainData &&
              first.map((product) => (
                <FoodMenuOne
                  key={product.name}
                  name={product.name}
                  bezeichnung={product.bezeichnung}
                  price={product.price}
                  image={urlFor(product.image).url()}
                />
              ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default FoodMenu;
