import Pagetitle from '../elements/Pagetitle';
import pdf from '../../resume/CV_carlos_yaco.pdf';

function About() {
  return (
    <section id='about'>
      <div className='container'>
        <Pagetitle title='Quien Soy' />
        <div className='row'>
          <div className='col-md-12 triangle-left-md triangle-top-sm'>
            <div className='rounded bg-white shadow-dark padding-30'>
              <div className='row'>
                <div className='col-md-12'>
                  <p>
                    Hola, me llamo Carlos Yaco, me gustan diferentes areas de la
                    Ingenieria, entre ellas me dedico
                    <strong>
                      {' '}
                      al desarrollo de software 👨🏻‍💻 (tanto frontend como backend)
                      tengo más de 3 años de experiencia.
                    </strong>{' '}
                    Creo que la tecnología es una de las principales
                    herramientas para resolver problemas, mejorar la calidad de
                    vida y hacer más eficientes los procesos.
                  </p>
                  <p>
                    Me encanta el emprendimiento, la innovación, el desarrollo
                    de productos, los side projects. Años atrás
                    <strong>
                      {' '}
                      funde juntos a uno de mis amigos una startup (Evertech),
                    </strong>{' '}
                    lo arruinamos 😢, pero aun si fue una de las mejores
                    experiencias de mi vida😁. Con mi último side project
                    <strong>
                      "Construtec" tuve la oportunidad de ganar el Startup Perú
                      9G
                    </strong>{' '}
                  </p>

                  <p>
                    {' '}
                    <strong> Tengo seis años de experiencia </strong> trabajando
                    tanto en startups de Silicon Valley como en emprendimientos
                    nacionales, me desenvolví en diferentes roles :
                    <strong>
                      {' '}
                      Product owner, scrum master, product manager y estos
                      últimos años como software developer
                    </strong>{' '}
                    tanto en la parte de Frontend (javascript, react.js y
                    typescript), como backend (node.js con express.js).{' '}
                  </p>

                  <p>
                    {' '}
                    Me gusta tambien el sector de la Construcción
                    <strong> soy Ingeniero Civil, </strong> trabaje por varios
                    años desempeñandome como residente y supervisor de
                    proyectos, tuve la oportunidad de ganar una beca para
                    estudiar una{' '}
                    <strong>
                      {' '}
                      maestria en gestion y planificación en Ingenieria{' '}
                    </strong>{' '}
                    en la Univerisdad Politecnica de Valencia España, fue una de
                    las merjores experiencias de mi vida.😃
                  </p>

                  <p>
                    Disfruto leyendo libros 📚 sobre startups, emprendimiento,
                    biografias y ciencia ficción. Me gusta trabajar en ideas
                    innovadores, principlamente en startups😁 , colaborar con el
                    equipo poniendo mi granito de arrena y{' '}
                    <strong> tener una gran aventura.</strong>
                  </p>
                  {/* <div className='mt-3'>
                    <a href={pdf} className='btn btn-default'>
                      Descargar C.V.
                    </a>
                  </div> */}
                  <div
                    className='spacer d-md-none d-lg-none'
                    data-height='30'
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='spacer' data-height='70'></div>
      </div>
    </section>
  );
}

export default About;
