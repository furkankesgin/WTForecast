import { createGlobalStyle } from "styled-components";

const PhoneSizes = createGlobalStyle`
    
    .card{
        @media (max-width: 320px) {
            border: 2px solid var(--border-color);
            padding: 30px;
            border-radius: 15px;
            margin-top: 1rem;
            &:nth-of-type(3){
                text-align: center;
                padding: 15px;
                
            }
        }
        @media (max-width: 570px) {
            border: 2px solid var(--border-color);
            padding: 30px;
            border-radius: 15px;
            margin-top: 1rem;
            &:nth-of-type(3){
                text-align: center;
                padding: 15px;
            }
        }
    }

    .container {
        @media (max-width: 320px) {
            max-width: 100%;
            margin: 30px auto;
            padding: 30px;
        }
        @media (max-width: 570px) {
            max-width: 100%;
            margin: 30px auto;
            padding: 30px;
        }

	
}

.forecastImage{
    @media (max-width: 320px) {
        border-radius: 50%;
            margin:0rem;
            margin-left: 1.2rem;
            margin-top: .5rem;
            margin-bottom: .5rem;
            background-color: #bababa;
            width: 50%;
            height: 35%;
            img{
                width: 100%;
                height: 100%;
            }
    }
    @media (max-width: 570px) {
        border-radius: 50%;
            margin:0rem;
            margin-left: 1.2rem;
            margin-top: .5rem;
            margin-bottom: .5rem;
            background-color: #bababa;
            width: 50%;
            height: 35%;
            img{
                width: 100%;
                height: 100%;
            }
    }
   
}

.flip-card {
    @media (max-width: 320px) {

        display: inline-flexbox;
        /* position: relative; */
        width: 5rem; height: 8rem;
        /* width: 6rem; height: auto; */
        perspective: 30rem;
        margin: .2rem;
        margin-bottom: 0rem;
    }
    @media (max-width: 570px) {

        display: inline-flexbox;
        /* position: relative; */
        width: 4.5rem; height: 8rem;
        /* width: 6rem; height: auto; */
        perspective: 30rem;
        margin: .1rem;
        margin-bottom: 0rem;
    }
}
.front, .back {
    @media (max-width: 320px) {
        text-align: center;
        margin-top: -.0rem;
        margin-left: -.0rem;
        position: absolute;
        width: 100%; height: 100%;
        transition: transform 1s;
        backface-visibility:hidden;
        background-color: #585858;
        border-radius: .5rem;
        padding: .5rem 0;

        p{
            font-size: .9rem;
            margin-top: .1rem;
        }
        h6{
            font-size: .6rem;
            color: #58bbff;
        }
       
    }
    @media (max-width: 570px) {
        text-align: center;
        margin-top: -.0rem;
        margin-left: -.0rem;
        position: absolute;
        width: 100%; height: 100%;
        transition: transform 1s;
        backface-visibility:hidden;
        background-color: #585858;
        border-radius: .5rem;
        padding: .5rem 0;

        p{
            font-size: .9rem;
            margin-top: .1rem;
        }
        h6{
            font-size: .6rem;
            color: #58bbff;
        }
       
    }
}

.back {
    @media (max-width: 320px) {
 
        transform: rotateY(180deg); 
        .bg-backcard{
            &:nth-last-child(1){
            background-color: #191d2b;
            border-radius: 5px;
            /* margin-top: .2rem; */
            margin-top:.3rem;
            padding: 0;
            }
        }
    }
    @media (max-width: 570px) {
 
        transform: rotateY(180deg); 
        .bg-backcard{
            &:nth-last-child(1){
            background-color: #191d2b;
            border-radius: 5px;
            /* margin-top: .2rem; */
            margin-top:.3rem;
            padding: 0;
            }
        }
    }
}
.flip-card:hover .front{ transform: rotateY(180deg); }
.flip-card:hover .back { transform: rotateY(360deg); }


`;

export default PhoneSizes;
