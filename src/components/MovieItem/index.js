import {Component} from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

class MovieItem extends Component {
  render() {
    const {eachUser, eachData} = this.props

    return (
      <div>
        <div>
          <img src={eachUser.thumbnailUrl} alt="thumbnail" />
          <img src={eachData.thumbnailUrl} alt="thumbnail" />
        </div>
      </div>
    )
  }
}
export default MovieItem
