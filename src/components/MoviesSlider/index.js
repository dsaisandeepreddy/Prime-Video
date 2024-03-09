import {Component} from 'react'

import Slider from 'react-slick'

import MovieItem from '../MovieItem'

class MoviesSlider extends Component {
  render() {
    const {moviesList} = this.props
    const FilteredData = moviesList.filter(each => each.categoryId === 'ACTION')

    const FilteredComedy = moviesList.filter(
      eachData => eachData.categoryId === 'COMEDY',
    )

    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }

    return (
      <div>
        <h1>Action Movies</h1>

        <Slider {...settings}>
          {FilteredData.map(eachUser => (
            <MovieItem eachUser={eachUser} key={eachUser.id} />
          ))}
          <h1>Comedy Movies</h1>
          {FilteredComedy.map(eachData => (
            <MovieItem eachData={eachData} key={eachData.id} />
          ))}
        </Slider>
      </div>
    )
  }
}

export default MoviesSlider
