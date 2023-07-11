import { Search } from 'lucide-react'
import{Container} from './styles'

export function SearchBar () {
    return(
        <Container>
            <input type="text" placeholder='Busque por uma turma...' />
            <button>
                <Search color='white'/>
            </button>
        </Container>
    )
}