import React, {useState} from 'react'
import ItemsCarousel from 'react-items-carousel'

const Slider = () => {
  return (
    <div style={{padding: 0, maxWidth: '100%', margin: '0'}}>
      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition="center"
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={3}
        slidesToScroll={3}
        outsideChevron={false}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={this.state.activeItemIndex}
        requestToChangeActive={value => this.setState({activeItemIndex: value})}
        rightChevron={'>'}
        leftChevron={'<'}
      >
        {Array.from(new Array(10)).map((_, i) => (
          <div
            key={i}
            style={{
              height: 200,
              background: 'url(https://placeimg.com/380/200/nature)'
            }}
          />
        ))}
      </ItemsCarousel>
    </div>
  )
}

export default Slider
