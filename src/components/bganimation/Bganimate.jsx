import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles";
import { useGlobalContext } from "../context/Globalcontext";

function Bganimate() {

  const {theme } =useGlobalContext();
  const bgColor = theme === true ? "393a3a" :"#fff"
  const canvasColor = theme === true ? "#fff" :"#000"

  const particlesInit = async (main) => {
    await loadFull(main);
  };
 
  const particlesLoaded = () => {
  };
  return (
    <div className="">
   
     <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
              options={{
            background: {
              color: bgColor,
            },
            fpsLimit: 40,
            interactivity: {
              detectsOn: 'canvas',
              events: {
                resize: true
              },
            },
            particles: {
              color: {
                value: canvasColor
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 1000,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 1,
                  speed: 7,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'star',
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 2
              }
            }
          }}
      />  
  </div>
  );
}
 
export default Bganimate;
 