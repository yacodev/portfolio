import { Link } from 'react-scroll';
import Pagetitle from '../elements/Pagetitle';
import Service from '../elements/Service';

const servicesData = [
  {
    id: 1,
    icon: 'images/service-2.svg',
    title: 'Desarollo Software',
    content:
      'Desarrollo de soluciones técnicas y amigables que encajan con las necesidades de tu negocio online.',
    color: '#6C6CE5',
    contentColor: 'light',
  },
  {
    id: 2,
    icon: 'images/price-3.svg',
    title: 'Desarrollo de MVP',
    content:
      'No esperes meses para validar tu idea de negocio. Podemos construir un MVP en semanas y lanzarlo.',
    color: '#F9D74C',
    contentColor: 'dark',
  },
  {
    id: 3,
    icon: 'images/price-1.svg',
    title: 'Consultoria',
    content:
      'Puedo ayudarte con tu modelo de negocios, diseño de producto, y resolver las dudas que tengas.',
    color: '#F97B8B',
    contentColor: 'light',
  },
];

function Services() {
  return (
    <section id='services'>
      <div className='container'>
        <Pagetitle title='Servicios' />

        <p className='mb-5'>
          Me encanta el emprendimiento y el desarrollo de software, si crees que
          puedo colaborar contigo o tu equipo no dudes en contactarme 👋{' '}
          <Link
            className='colorpink pointer'
            to='section-contact'
            spy={true}
            smooth={true}
            duration={500}
          >
            Click aqui
          </Link>{' '}
        </p>
        <div className='row fix-spacing'>
          {servicesData.map((service) => (
            <div className='col-md-4' key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className='mt-5 text-center'></div>
      </div>
    </section>
  );
}

export default Services;
