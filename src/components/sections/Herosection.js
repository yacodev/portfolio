import Typed from "react-typed";
import { Link } from "react-scroll";
import iconUser from "../../images/avatar_carlos_opt.png"
import styled from "@emotion/styled";

const ContainerAvatar = styled.div`
  
  img{
    height:150px;
    width:150px;
  }
`

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <ContainerAvatar>
            <img src={iconUser} alt="Bolby" className="mb-4" />
          </ContainerAvatar>

          <h1 className="mb-2 mt-0">Carlos Yaco</h1>
          <p>
            {" "}
            <Typed
              strings={[
                "Desarrollador Back-end",
                "Desarrollador Back-end",
                "Desarrollador Front-end",
                "Ingeniero Electrónico",
              ]}
              typeSpeed={100}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="https://github.com/yacodev" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/carlos-yaco-tincusi/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://twitter.com/yacodev" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://t.me/carlosyaco" target="_blank">
                <i className="fab fa-telegram"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contáctame
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>

        <div className="parallax" data-relative-input="true">
          <svg
            width="27"
            height="29"
            className="layer p1"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
            <path
              d="M1 11C1 13.2091 2.79086 15 5 15H14C16.7614 15 19 12.7614 19 10C19 7.23858 16.7614 5 14 5C13.9666 5 13.9334 5.00033 13.9002 5.00098C13.4373 2.71825 11.4193 1 9 1C6.23858 1 4 3.23858 4 6C4 6.37684 4.04169 6.74395 4.12071 7.09695C2.33457 7.4976 1 9.09295 1 11Z"
              fill="none"
              stroke="#FFD15C"
              strokeWidth="2"
            />
          </svg>

          <svg
            width="26"
            height="26"
            className="layer p2"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(20)}
          >
            <path
              d="M7.75 15L7 18L6 19H14L13 18L12.25 15M1 11H19M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z" 
              stroke="#FF4C60"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="30"
            height="25"
            className="layer p3"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(25)}
          >
            <path
              d="M4.55674 16C2.524 15.4495 1.50762 14.1823 1.50762 12.1982V10.5712C1.50762 9.42121 1.00508 8.84614 0 8.84614V7.15379C0.982498 7.15379 1.48503 6.61147 1.50762 5.52681V3.79355C1.50762 2.78521 1.76171 1.97036 2.2699 1.349C2.77809 0.72764 3.54037 0.27798 4.55674 0L5.03105 1.3163C4.60192 1.46891 4.27724 1.73599 4.05703 2.11752C3.83681 2.49361 3.72106 3.01686 3.70976 3.68726V5.40418C3.70976 6.636 3.2044 7.4999 2.19367 7.99589C3.2044 8.49731 3.70976 9.36669 3.70976 10.604V12.3373C3.738 13.6127 4.17842 14.392 5.03105 14.6755L4.55674 16ZM14.969 14.6755C15.8272 14.3811 16.2676 13.5908 16.2902 12.3045V10.5712C16.2902 9.33944 16.8069 8.48373 17.8402 8.00407C16.8069 7.52442 16.2902 6.65507 16.2902 5.396V3.68726C16.2676 2.4173 15.8272 1.62698 14.969 1.3163L15.4433 0C16.454 0.272529 17.2134 0.719463 17.7216 1.34082C18.2298 1.95673 18.4867 2.76613 18.4923 3.76902V5.52681C18.515 6.61147 19.0174 7.15379 20 7.15379V8.84614C18.9949 8.84614 18.4923 9.41572 18.4923 10.5549V12.3291C18.4472 14.2368 17.4308 15.4604 15.4433 16L14.969 14.6755Z"
              fill="#44D7B6"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="20"
            height="23"
            className="layer p4"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
          >
            <path  
              d="M7 17V11C7 9.89543 6.10457 9 5 9H3C1.89543 9 1 9.89543 1 11V17C1 18.1046 1.89543 19 3 19H5C6.10457 19 7 18.1046 7 17ZM7 17V7C7 5.89543 7.89543 5 9 5H11C12.1046 5 13 5.89543 13 7V17M7 17C7 18.1046 7.89543 19 9 19H11C12.1046 19 13 18.1046 13 17M13 17V3C13 1.89543 13.8954 1 15 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19H15C13.8954 19 13 18.1046 13 17Z"
              stroke="#FFD15C"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="20"
            height="25"
            className="layer p5"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(8)}
          >
            <path
              d="M1 5V15C1 17.2091 4.58172 19 9 19C13.4183 19 17 17.2091 17 15V5M1 5C1 7.20914 4.58172 9 9 9C13.4183 9 17 7.20914 17 5M1 5C1 2.79086 4.58172 1 9 1C13.4183 1 17 2.79086 17 5M17 10C17 12.2091 13.4183 14 9 14C4.58172 14 1 12.2091 1 10"
              fill="none"
              stroke="#6C6CE5"
              fillRule="evenodd"
              strokeWidth="2"
            />
          </svg>

          <svg
            width="25"
            height="20"
            className="layer p6"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
          >
            <g fill="#FF4C60" fillRule="evenodd">
              <path  
                d="M7.75 15L7 18L6 19H14L13 18L12.25 15M1 11H19M3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15Z" 
                stroke="#FF4C60"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </g>
          </svg>

          <svg
            width="26"
            height="26"
            className="layer p7"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(22)}
          >
            <path  
              d="M7 17V11C7 9.89543 6.10457 9 5 9H3C1.89543 9 1 9.89543 1 11V17C1 18.1046 1.89543 19 3 19H5C6.10457 19 7 18.1046 7 17ZM7 17V7C7 5.89543 7.89543 5 9 5H11C12.1046 5 13 5.89543 13 7V17M7 17C7 18.1046 7.89543 19 9 19H11C12.1046 19 13 18.1046 13 17M13 17V3C13 1.89543 13.8954 1 15 1H17C18.1046 1 19 1.89543 19 3V17C19 18.1046 18.1046 19 17 19H15C13.8954 19 13 18.1046 13 17Z"
              stroke="#FFD15C"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="19"
            height="21"
            className="layer p8"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
            <path
              d="M1 5V15C1 17.2091 4.58172 19 9 19C13.4183 19 17 17.2091 17 15V5M1 5C1 7.20914 4.58172 9 9 9C13.4183 9 17 7.20914 17 5M1 5C1 2.79086 4.58172 1 9 1C13.4183 1 17 2.79086 17 5M17 10C17 12.2091 13.4183 14 9 14C4.58172 14 1 12.2091 1 10"
              fill="none"
              stroke="#6C6CE5"
              fillRule="evenodd"
              strokeWidth="2"
            />
          </svg>

          <svg
            width="30"
            height="25"
            className="layer p9"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
          >
            <path
              d="M1 5V15C1 17.2091 4.58172 19 9 19C13.4183 19 17 17.2091 17 15V5M1 5C1 7.20914 4.58172 9 9 9C13.4183 9 17 7.20914 17 5M1 5C1 2.79086 4.58172 1 9 1C13.4183 1 17 2.79086 17 5M17 10C17 12.2091 13.4183 14 9 14C4.58172 14 1 12.2091 1 10"
              fill="none"
              stroke="#6C6CE5"
              fillRule="evenodd"
              strokeWidth="2"
            />
          </svg>

          <svg
            width="47"
            height="29"
            className="layer p10"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(23)}
          >
            <g fill="#44D7B6" fillRule="evenodd">
              <path d="M4.55674 16C2.524 15.4495 1.50762 14.1823 1.50762 12.1982V10.5712C1.50762 9.42121 1.00508 8.84614 0 8.84614V7.15379C0.982498 7.15379 1.48503 6.61147 1.50762 5.52681V3.79355C1.50762 2.78521 1.76171 1.97036 2.2699 1.349C2.77809 0.72764 3.54037 0.27798 4.55674 0L5.03105 1.3163C4.60192 1.46891 4.27724 1.73599 4.05703 2.11752C3.83681 2.49361 3.72106 3.01686 3.70976 3.68726V5.40418C3.70976 6.636 3.2044 7.4999 2.19367 7.99589C3.2044 8.49731 3.70976 9.36669 3.70976 10.604V12.3373C3.738 13.6127 4.17842 14.392 5.03105 14.6755L4.55674 16ZM14.969 14.6755C15.8272 14.3811 16.2676 13.5908 16.2902 12.3045V10.5712C16.2902 9.33944 16.8069 8.48373 17.8402 8.00407C16.8069 7.52442 16.2902 6.65507 16.2902 5.396V3.68726C16.2676 2.4173 15.8272 1.62698 14.969 1.3163L15.4433 0C16.454 0.272529 17.2134 0.719463 17.7216 1.34082C18.2298 1.95673 18.4867 2.76613 18.4923 3.76902V5.52681C18.515 6.61147 19.0174 7.15379 20 7.15379V8.84614C18.9949 8.84614 18.4923 9.41572 18.4923 10.5549V12.3291C18.4472 14.2368 17.4308 15.4604 15.4433 16L14.969 14.6755Z" />
            </g>
          </svg>

          <svg
            width="33"
            height="20"
            className="layer p11"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
          >
            <path
              d="M1 11C1 13.2091 2.79086 15 5 15H14C16.7614 15 19 12.7614 19 10C19 7.23858 16.7614 5 14 5C13.9666 5 13.9334 5.00033 13.9002 5.00098C13.4373 2.71825 11.4193 1 9 1C6.23858 1 4 3.23858 4 6C4 6.37684 4.04169 6.74395 4.12071 7.09695C2.33457 7.4976 1 9.09295 1 11Z"
              fill="none"
              stroke="#FFD15C"
              strokeWidth="2" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
