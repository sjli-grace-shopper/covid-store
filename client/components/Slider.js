import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import ItemsCarousel from 'react-items-carousel'

const Slider = props => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const {products} = props
  const ids = [2, 3, 4, 8, 9, 21, 36, 37]
  const filteredProducts = products.filter(el => ids.includes(el.id))

  return (
    <div style={{padding: 0, maxWidth: '100%', margin: '0'}}>
      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition="center"
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={4}
        slidesToScroll={3}
        outsideChevron={false}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={value => setActiveItemIndex(value)}
        rightChevron={'>'}
        leftChevron={'<'}
      >
        {filteredProducts.map(product => (
          <div key={product.id} className="slider-item">
            <div className="slider-item-row-1">
              <Link to={`/products/${product.id}`}>
                <img className="product-img" src={product.imageUrl} />
              </Link>
            </div>
            <div className="slider-item-row-2">
              <Link to={`/products/${product.id}`}>
                <h5>{product.name}</h5>
              </Link>
            </div>
          </div>
        ))}
      </ItemsCarousel>
    </div>
  )
}

export default Slider
