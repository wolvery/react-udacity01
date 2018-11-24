import User from './User.js';
import Movie from './Movie.js';

class Profiles extends Components {
  render () {
	return (
      <ul>
      { this.props.profiles.map( profile => (
      	<li key={profile.id}>
      	<User data={this.props.users[profile.userID]}><p>\'s favorite movie is </p>
		<Movie data={this.props.movies[profile.favoriteMovieID]}>
		</li>
      	))
      }
      </ul>
    )
  }
}




export default Profiles;