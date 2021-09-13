import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    flex-direction: column;
    background-color: #2B3031;
    height: 100vh;
    max-width: 350px;
    width: 40%;
    color: white;

    position: sticky;
    top: 0px;

    .Titulo {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 3rem 0%;
        
        cursor: pointer;
    }

    .Titulo img {
        width: 22px;
        height: 20px;
    }

    .Titulo-texto {
        font-size: 1.75em;
    }

    .Titulo-texto > span {
        color: #10EAEA;
        margin-right: -7px;
        margin-left: 5px;
    }

    .Background {
        background-color: #262626 ;
        padding: 9.5% 0%;
    }

    .Gerenciamento {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        
        padding: 6.3% 0%;
    }

    .Gerenciamento > img {
        height: 6px;
        width: 12px;
        cursor: pointer;
    }

    .Gerenciamento-titulo {
        font-size: 1.13em;
    }

    .Alunos {
        display: flex;
        background-color: #FFFFFF;
        color: #1A1A1A;
    }

    .Alunos-barra {
        background-color: #10EAEA;
        width: 4px;
        align-items: initial;
        height: 100%;
    }

    .Alunos-texto {
        display: flex;
        align-items: center;
        margin-left: 3.25rem;

        padding: 6.3% 0%;
    }
`

export { Container }