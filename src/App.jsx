import './App.css'
import { CardTrilha } from './components/CardTrilha'

function App() {

  const trailImage = 'https://th.bing.com/th/id/OIP.IcTZZ1-5Gwa76smIvmrYIgHaE8?rs=1&pid=ImgDetMain'

  return (
      <CardTrilha 
        imgURL={trailImage}
        trailName='Trilha da Costa da Lagoa'
        city='Florianópolis'
        state='SC'
        author='Daniel Rogerio'
        duration={120}
        distance={4}
        difficult='Iniciante'
      />
  )
}

export default App