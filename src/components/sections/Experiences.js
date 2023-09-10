import Pagetitle from '../elements/Pagetitle';
import Timeline from '../elements/Timeline';

const experienceData = [
  {
    id: 1,
    title: 'Desarrollador Front-end',
    years: 'Enero 2021 – Actualidad',
    content: 'Startup DEUNA: Libera el poder de tu  e-commerce',
    description: [
      'Desarrollo del admin web para que puedas administrar tu tienda virtual.',
      'Implementación de testing con Jest y  testing E2E con Cypress',
      'Implementación de eventos.',
      'Documentación de todos los productos de DEUNA.',
      'Tecnologías implementadas: React , Redux, Typescript, Jest y Cypress',
    ],
  },
  {
    id: 2,
    title: 'Fundador - Desarrollador Front-end',
    years: 'Julio 2020 – Diciembre 2022',
    content: 'Construtec: Software para la construcción.',
    description: [
      'Funde Construtec,  ganadores del Startup Perú 9G.',
      'Desarrolle la plataforma de Construtec para la gestión de almacenes y valorizaciones de obra.',
      'Desarrolle la landing page de  Construtec (constructecperu.com).',
      'Diseñe el modelo de negocio para satisfacer una necesidad del mercado, estuve también encargado de la comercialización y lanzamiento del producto.',
      'Tecnologias implementadas: HTML, CSS, React , Typescript y Cypress.',
    ],
  },
  {
    id: 3,
    title: 'Desarrollador Front-end',
    years: 'Agosto 2020 – Diciembre 2020',
    content: 'Dirección Regional de Vivienda Construcción y Saneamiento',
    description: [
      'Desarrollo de una aplicación web para brindar capacitación al personal de las municipalidades de toda la región Cusco (http://lacasadelatm.com).',
      'Dirigir al equipo de Desarrolladores utilizando la metodología SCRUM.',
      'Diseño del Producto.',
      'Tecnologias implementadas Sass, React y Typescript.',
    ],
  },

  {
    id: 4,
    title: 'Desarrollador full Stack',
    years: 'Octubre 2019 – Diciembre 2019',
    content: 'Smart Cities Peru: Software factory',
    description: [
      'Desarrollamos una plataforma web para realizar el seguimiento a la ejecución de Proyectos de Inversión Pública para el Gobierno Regional del Cusco.',
      'Tecnologías empleadas : React con Redux y para el backend Node.js con express.js.',
      'Diseño del Producto.',
    ],
  },
  {
    id: 5,
    title: 'Product Manager - Product Owner ',
    years: 'Enero 2016 – Agosto 2017',
    content: 'Construinnova Perú',
    description: [
      'Desarrollamos un software de escritorio para el control de proyectos de inversión  pública (CPIP).',
      'Diseño del Producto e implementación de modelos de negocio.',
      'Desarrolle la website del CPIP',
      'Lideré a un equipo de tres ingenieros durante el proceso de desarrollo del software CPIP usando Java.',
    ],
  },
  {
    id: 6,
    title: 'Cofundador - CEO',
    years: 'Enero 2013 – Diciembre 2014',
    content: 'Evertech.',
    description: [
      'Cofunde la startup Evertech',
      'Desarrollamos un producto en  hardaware basado en la rasberry pi para hacer publicidad en vehiculos de transporte público.',
      'Desarrolle la landing page de  Evertech, las campañas de publicidad y  encargado de las ventas.',
      'Diseñe el modelo de negocio.',
    ],
  },
];

function Experiences() {
  return (
    <section id='experience'>
      <div className='container'>
        <Pagetitle title='Experiencia como Desarrollador:' />
        <div className='row'>
          <div className='col-md-12'>
            <div className='spacer d-md-none d-lg-none' data-height='30'></div>
            <div className='timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden'>
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className='line'></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
