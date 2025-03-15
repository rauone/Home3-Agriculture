import React, { useState } from 'react';
import { Range } from 'react-range';

const Shop = () => {
  const [values, setValues] = useState([20, 100]);

  // Пример данных для товаров
  const products = [
    { id: 1, name: 'Apples', price: '$50.00', image: '/shopphoto/A.svg' },
    { id: 2, name: 'Bananas', price: '$20.00', image: '/shopphoto/B.svg' },
    { id: 3, name: 'Carrot', price: '$50.00', image: '/shopphoto/C.svg' },
    { id: 4, name: 'Garlic', price: '$20.00', image: '/shopphoto/G.svg' },
    { id: 5, name: 'Grapes', price: '$100.00', image: '/shopphoto/GG.svg' },
    { id: 6, name: 'Lettuce', price: '$30.00', image: '/shopphoto/L.svg' },
    { id: 7, name: 'Onions', price: '$20.00', image: '/shopphoto/O.svg' },
    { id: 8, name: 'Potatos', price: '$30.00', image: '/shopphoto/P.svg' },
    { id: 9, name: 'Red Grapes', price: '$100.00', image: '/shopphoto/RG.svg' },
  ];

  return (
    <div>
      <div className="relative h-72 bg-cover bg-center flex flex-col items-center justify-center w-full bg-[url('/images/bg-photo.png')]">
        <h1 className="text-white font-Manrope3">HOME / SHOP</h1>
        <p className="text-5xl text-white font-Manrope2 mt-2">Shop</p>
      </div>
      <div className="p-4 bg-white shadow-lg rounded-lg">
        
        {/* Заголовок поиска */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-80 p-2 border bg-amber-400 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Основной контейнер с фильтром и товарами */}
        <div className="grid grid-cols-4 gap-4">
          {/* Фильтр по цене и категориям (слева) */}
          <div className="col-span-1">
            <div className="mb-6 w-80">
              <h3 className="text-lg font-semibold mb-2">Price</h3>
              <Range
                step={1}
                min={0}
                max={200}
                values={values}
                onChange={(newValues) => setValues(newValues)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 bg-yellow-500 rounded-full"
                    style={{
                      ...props.style,
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    className="h-4 w-4 bg-green-500 rounded-full shadow-lg focus:outline-none"
                    style={{
                      ...props.style,
                    }}
                  />
                )}
              />
              <div className="flex justify-between mt-2">
                <span>${values[0]}</span>
                <span>${values[1]}</span>
              </div>
              <button className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-yellow-400">
                Apply
              </button>
            </div>

            {/* Фильтр по категориям */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Categories</h3>
              <ul className="space-y-1">
                <li className="flex justify-between items-center">
                  <span>Agriculture</span>
                  <span>&gt;</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Farming</span>
                  <span>&gt;</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Fresh Vegetables</span>
                  <span>&gt;</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Harvest</span>
                  <span>&gt;</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Organic Food</span>
                  <span>&gt;</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Сетка товаров (справа) */}
          <div className="col-span-3">
            {/* Заголовок с количеством результатов и сортировкой */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Showing 1-9 of 10 results</p>
              <select className="p-2 border rounded-lg">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Сетка товаров 3x3 */}
            <div className="grid grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg mb-2" />
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;