import Work from '../elements/Work';
import Pagetitle from '../elements/Pagetitle';

const allWorks = [
  {
    id: 1,
    title: 'Construtec',
    image: 'images/works/branch_construtec.png',
    filesource: '../../works/construtec.md',
    description:
      'Ganadores del Startup Perú 9G,  Desarrollamos una plataforma para valorizaciones de obra y gestión de almacenes.',
    category: 'Side project',
  },
  {
    id: 2,
    title: 'Construinnova',
    image: 'images/works/branch_construinnova.png',
    filesource: '../../works/construinnova.md',
    description:
      'Constuinnova fue una side-project , donde  desarrollamos el CPIP, un software de escritorio para la elaboración de informes mensuales en obras públicas, opero por 3 años. ',

    category: 'Side project',
  },
  {
    id: 3,
    title: 'Evertech',
    image: 'images/works/branch_evertech.png',
    filesource: '../../works/evertech.md',
    description:
      'Evertech fue una startup dedica a la emisión de públicidad en buses de transporte público, operó por 2 años antes de su cierre. ',
    category: 'Startup',
  },
];

function Works() {
  return (
    <section id='blog'>
      <div className='container'>
        <Pagetitle title='Proyectos personales:' />
        <div className='row blog-wrapper'>
          {allWorks.map((workItem) => (
            <div
              className='col-md-4'
              key={workItem.id}
              style={{ marginTop: '15px' }}
            >
              <Work workData={workItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
