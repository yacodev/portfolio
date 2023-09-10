import Pagetitle from '../elements/Pagetitle';
import Timeline from '../elements/Timeline';

const educationData = [
  {
    id: 1,
    title: 'Codeable - bootcamp',
    years: '2021',
    content:
      'Full-stack web development ( Javascript - React - Ruby and  rails).',
  },
  {
    id: 2,
    title: 'Universidad Politécnica de Valencia - España',
    years: '2017 - 2018',
    content: 'Master en Planificación y gestión en Ingenieria',
  },
  {
    id: 3,
    title: 'Universidad Andina del Cusco',
    years: '2008 - 2012',
    content: 'Ingeniero Civil',
  },
  {
    id: 4,
    title: 'Universidad Nacional de San Antonio Abad del Cusco',
    years: '2003 - 2008',
    content: 'Ingeniero Electrónico',
  },
];

function Educations() {
  return (
    <section id='educations'>
      <div className='container'>
        <Pagetitle title='Educación' />
        <div className='row'>
          <div className='col-md-12'>
            <div className='timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden'>
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className='line'></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Educations;
