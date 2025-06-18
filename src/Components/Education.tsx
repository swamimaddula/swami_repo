import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import bolt from '../bolt_bg.png';
import { TypeAnimation } from 'react-type-animation';
import { All_Variables } from '../Variables';

function Education() {
  const nav = useNavigate();
  const location = useLocation();
  const state = location.state;

  return (
    <div className="Education_div relative w-full min-h-screen bg-cover bg-center">
      <div className="icon" onClick={() => nav(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
        </svg>
      </div>

      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2">
        <h1 className="text-xl md:text-3xl font-semibold text-black text-center">
          <TypeAnimation
            sequence={[`Hello ${state.username}, Let's see my Education......`]}
            wrapper="span"
            cursor={false}
            repeat={1}
          />
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-green-200 bg-opacity-40 rounded-lg shadow-lg 
                      p-6 md:p-10 w-11/12 md:w-1/2 flex flex-col items-center">
        <div className="flex flex-col gap-4 text-sm md:text-xl font-medium text-black w-full">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{All_Variables.Degree}</span>
            <span>{All_Variables.Degree_value}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{All_Variables.College}</span>
            <span>{All_Variables.College_value}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">{All_Variables.Specialization}</span>
            <span>{All_Variables.Specializatio_value}</span>
          </div>
        </div>

        <div className="pt-6">
          <img src={bolt} alt="Bolt" className="w-12 h-12 md:w-16 md:h-16" />
        </div>
      </div>
    </div>
  );
}

export default Education;
