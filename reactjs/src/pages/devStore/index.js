import Cabecalho from '../../components/cabecalho/index'
import Menu from '../../components/menu-lateral'
import Conteudo from './conteudo'

import { Container, Container2 } from './styled'

export default function devStore() {
    return (
        <Container>
            <Menu></Menu>
            <Container2>
                <Cabecalho></Cabecalho>
                <Conteudo></Conteudo>
            </Container2>
        </Container>
    )
}