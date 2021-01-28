import React from 'react' 
import axios from "axios"
import Movie from "./Movie"
import "./App.css"
// function component랑은 조금 다른 개념
class App extends React.Component{

  // 변하는 데이터들이 저장될 객체 => state
  state = {
    // 반드시 사용한 state 들을 미리 선언할 필요는 없다!
    isLoading: true,
    moives: [],
  };

  getMovies = async() =>{
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
    this.setState({movies, isLoading: false});
  }
  componentDidMount(){
    this.getMovies();
  }
  // 화면에 출력하는 함수
  render(){
    const {isLoading, movies} = this.state;
    return (
      <div className="container">
        
        {isLoading ? (
          <div className = "loader"></div> ) : ( 
          <div className = "movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id = {movie.id}
                year = {movie.id}
                title = {movie.title}
                summary = {movie.summary}
                poster = {movie.medium_cover_image} 
                genres = {movie.genres}
              />
            ))}
          </div>         
          )}
      </div>

    )
  }
}
export default App;
