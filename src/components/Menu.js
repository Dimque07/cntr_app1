// src/components/Menu.js
import React, { useState } from 'react';
import '../styles/menu.css';

const menuItems = {
  hookah: [
    {
      id: 1,
      name: 'Классический яблочный',
      price: '1500 ₽',
      description: 'Традиционный вкус с нотками спелого яблока',
      image: '/images/hookah-apple.jpg'
    },
    {
      id: 2,
      name: 'Мятный холодок',
      price: '1700 ₽',
      description: 'Освежающий мятный вкус с холодком',
      image: '/images/hookah-mint.jpg'
    },
    {
      id: 3,
      name: 'Ягодный микс',
      price: '1800 ₽',
      description: 'Смесь лесных ягод с легкой кислинкой',
      image: '/images/hookah-berry.jpg'
    }
  ],
  tea: [
    {
      id: 4,
      name: 'Молочный улун',
      price: '600 ₽',
      description: 'Ароматный чай с нежными молочными нотками',
      image: '/images/tea-oolong.jpg'
    },
    {
      id: 5,
      name: 'Мятный чай',
      price: '500 ₽',
      description: 'Освежающий чай с натуральной мятой',
      image: '/images/tea-mint.jpg'
    }
  ],
  drinks: [
    {
      id: 6,
      name: 'Мохито',
      price: '800 ₽',
      description: 'Освежающий напиток с лаймом и мятой',
      image: '/images/drink-mojito.jpg'
    },
    {
      id: 7,
      name: 'Лимонад',
      price: '700 ₽',
      description: 'Домашний лимонад с натуральными фруктами',
      image: '/images/drink-lemonade.jpg'
    }
  ]
};

const Menu = ({ onBack }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <div className="menu-screen">
      <button className="back-button" onClick={onBack}>
        ← Назад
      </button>
      
      <h2>Наше Меню</h2>
      
      <div className="menu-categories">
        {/* Кальян */}
        <div className="menu-category">
          <h3 
            className="category-header"
            onClick={() => toggleCategory('hookah')}
          >
            Кальян {expandedCategory === 'hookah' ? '▼' : '►'}
          </h3>
          {expandedCategory === 'hookah' && (
            <div className="items-grid">
              {menuItems.hookah.map(item => (
                <div key={item.id} className="menu-card">
                  <div className="card-image" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="card-content">
                    <h4>{item.name}</h4>
                    <p className="card-description">{item.description}</p>
                    <p className="card-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Чайная карта */}
        <div className="menu-category">
          <h3 
            className="category-header"
            onClick={() => toggleCategory('tea')}
          >
            Чайная карта {expandedCategory === 'tea' ? '▼' : '►'}
          </h3>
          {expandedCategory === 'tea' && (
            <div className="items-grid">
              {menuItems.tea.map(item => (
                <div key={item.id} className="menu-card">
                  <div className="card-image" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="card-content">
                    <h4>{item.name}</h4>
                    <p className="card-description">{item.description}</p>
                    <p className="card-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Охлаждающие напитки */}
        <div className="menu-category">
          <h3 
            className="category-header"
            onClick={() => toggleCategory('drinks')}
          >
            Охлаждающие напитки {expandedCategory === 'drinks' ? '▼' : '►'}
          </h3>
          {expandedCategory === 'drinks' && (
            <div className="items-grid">
              {menuItems.drinks.map(item => (
                <div key={item.id} className="menu-card">
                  <div className="card-image" style={{ backgroundImage: `url(${item.image})` }} />
                  <div className="card-content">
                    <h4>{item.name}</h4>
                    <p className="card-description">{item.description}</p>
                    <p className="card-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;