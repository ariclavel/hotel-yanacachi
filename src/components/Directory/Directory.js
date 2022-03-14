import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import "./Directory.css";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections : [
        {
          title: 'Rooms',
          imageUrl: 'https://th.bing.com/th/id/OIP.f6n_ja7AVh0v2KSyPUGcjgHaFj?pid=ImgDet&w=840&h=630&rs=1',
          id: 1,
          linkUrl: 'book/rooms'
        },
        {
          title: 'Pool Area',
          imageUrl: 'https://th.bing.com/th/id/R.535259a675829fec10ae8fea95f05b31?rik=39fxQCOmbIjlaQ&riu=http%3a%2f%2fstatic.habitissimo.es%2fphotos%2fproject%2fbig%2fpiscina-rectangular-alargada_316239.jpg&ehk=0QFKvehPM0oIYxiqIrvbSwuFUHfCbB82qPU3y3Nx2e8%3d&risl=&pid=ImgRaw&r=0',
          id: 2,
          linkUrl: 'book/pool'
        },
        {
          title: 'Games Area',
          imageUrl: 'https://imagekit.androidphoria.com/wp-content/uploads/Pool-3D-8-Ball.jpg',
          id: 3,
          linkUrl: 'book/games'
        },
        {
          title: 'Tours',
          imageUrl: 'https://crillontours.travel/beta/wp-content/uploads/2018/07/Crillon-Tours-Full-day-excursion-to-Los-Yungas-%E2%80%93-Cotapata-National-Park-%E2%80%93-Coroico.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'book/tours'
        }]
    
    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map (({id,...otherSectionProps}) =>(
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>

    )
  }
}

export default Directory;