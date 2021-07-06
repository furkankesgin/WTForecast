import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --primary-color:#007bff;
    --secondary-color:#6c757d;
    --background-dark-color:#10121A;
    --background-dark-grey:#191d2b;
    --border-color:#00ffcd;
    --background-light-color:#f1f1f1;
    --background-light-color-2:rgba(3,127,255,.3);
    --white-color:#fff;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --sidebar-dark-color:#191d2b;
    --scrollbar-bg-color: #6b6b6b;
    --scrollbar-track-color: #383838; 
}
    *{
        margin:0; 
        padding:0;
        box-sizing:border-box;
        list-style:none;
        text-decoration:none;
        font-family: 'Nunito', sans-serif;
        font-size:1.2rem;

    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #3c3c3c;
        color: #ffff;
    }

    .card{
    border: 2px solid var(--border-color);
    padding: 30px;
    border-radius: 15px;
    margin-top: 1rem;
    &:nth-of-type(3){
        text-align: center;
        padding: 15px;
        
    }
   
    }
    .container {
	max-width: 50%;
    margin: 30px auto;
    padding: 30px;
}

.forecastImage{
    
    border: 1px solid green;
    border-radius: 50%;
    margin:0.3rem;
    background-color: #007bff;
}

.flip-card {
    display: inline-flexbox;
  /* position: relative; */
  width: 6rem; height: 9rem;
  /* width: 6rem; height: auto; */
  perspective: 30rem;
  margin: .6rem;
}
.front, .back {
  text-align: center;
  margin-top: -.3rem;
  position: absolute;
  width: 110%; height: 110%;
  transition: transform 1s;
  backface-visibility:hidden;
  background-color: #585858;
  border-radius: .5rem;
  padding: .5rem 0;

}
.back { 
  transform: rotateY(180deg); 

  h6{
      font-size: x-small;
      color: #58bbff;
  }
  h3{
      margin-bottom: .3rem;

  }

  .bg-backcard{
    &:nth-last-child(1){
      background-color: #191d2b;
      border-radius: 5px;
    }
  }
}
.flip-card:hover .front{ transform: rotateY(180deg); }
.flip-card:hover .back { transform: rotateY(360deg); }


`;
export default GlobalStyle;
