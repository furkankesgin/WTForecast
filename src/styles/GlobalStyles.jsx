import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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

        --card-color1: #086972;
        --card-color2: #17B978;
        --card-color3: #A7FF83;
        /* --cardColor4: #086972; */

        --text-primary: #3c3c3c;
        --text-secondary: #e2e2e2;

        --button-color1: #3c3c3c;
        --button-color2: #17B978;



    }

    *{
        margin:0; 
        padding:0;
        box-sizing:border-box;
        list-style:none;
        text-decoration:none;
        font-size:1.2rem;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #071A52 !important;
        color: #ffff;
        color: var(--text-primary) !important;
    }




    .card{
        border-radius: 15px !important;
    }

    .card-color1{
        background-color: var(--card-color1);
    }

    .card-color2{
        background-color: var(--card-color2);
    }


    .text-primary{
        color: var(--text-primary);
    }

    .text-secondary{
        color: var(--text-secondary) !important;
    }





    .carda{
    border: 2px solid var(--border-color);
    padding: 30px;
    border-radius: 15px;
    margin-top: 1rem;
    &:nth-of-type(3){
        text-align: center;
        padding: 15px;
    }
}

    /* .container {
	max-width: 50%;
    margin: 30px auto;
    padding: 30px;
} */

.flip-card {
  display: inline-flexbox;
  width: 6rem; height: 9rem;
  perspective: 30rem;
  margin: .6rem;
  
}
.front, .back {
  text-align: center;
  position: absolute;
  width: 100%; height: 100%;
  transition: transform 1s;
  backface-visibility:hidden;
  background-color: #585858;
  border-radius: .5rem;
  padding: .3rem 0;
  
  .forecastImage{
        margin: auto;
        border-radius: 50%;
        background-color: #bababa;
        width: 70%;
        height: 50%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    p{
        font-size: .8rem;
        margin-bottom: .5rem;
        &:nth-child(1){
            margin-bottom: -.1rem;
        }
        &:nth-child(2){
            margin-bottom: .5rem;
        }
        &:nth-last-child(1){
            margin-top: .7rem;
        }
    }
}

.back { 
  transform: rotateY(180deg); 
  

    h6{
        font-size: small;
        color: #58bbff;
    }
    h3{
        margin-bottom: .3rem;

    }

  .bg-backcard{
      p{
          font-size: .88rem;
          margin-top: auto;
      }
    &:nth-last-child(1){
      background-color: #191d2b;
      border-radius: 5px;
      
    }
  }
}
.flip-card:hover .front{ transform: rotateY(180deg); }
.flip-card:hover .back { transform: rotateY(360deg); }


`;

export default GlobalStyles;
