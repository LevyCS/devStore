import styled from 'styled-components'

const Container = styled.div`
    background-color: #F5F5F5;
    color: #615858;

    .novo-produto {
        margin: 2rem 2rem 3rem 3rem;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }

    .titulo {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 2rem;
    }

    .titulo-barra {
        margin-right: 1rem;
        height: 26px;
        width: 5px;
        border-radius: 25px;
        background-color: #119FDC;
    }

    .titulo-texto {
        color: #3C3939;
        margin: 0px;
    }

    .displayrow {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }

    .form {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-left: 1rem;
    }

    .agp-input {
        display: flex;
        flex-direction: column;
    }

    .agp-input:first-child {
        margin-right: 2rem;
    }

    .agp-input div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
    
    .displaycolumn {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .displaycolumn div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .label1 {
        display: flex;
        flex-direction: row;
        margin-right: 1rem;
        margin-bottom: 1rem;
        margin-left: -20px;
    }


    .label {
        display: flex;
        flex-direction: row;
        margin-right: 1rem;
        margin-bottom: 1rem;

    }

    .btn-cadastrar {
        color: white;
        border: 1px solid transparent;
        outline: none;
        background-color: #119FDC;
        height: 36px;
        padding: 0px 1.5rem;
        border-radius: 25px;
        margin-left: 2rem;
        align-items: center;

        cursor: pointer;
    }

    .width {
      width: 545px;
    }

    .flexend {
        display: flex;
        justify-content: flex-end;
    }

    input {
        height: 36px;
        outline: none;
        border: 1px solid #A8A8A8;
        border-radius: 5px;
        width: 206px;

        margin-bottom: 1rem;
    }

    textarea {
        width: 100%;
        resize: none;
        height: 154px;
        outline: none;
        border: 1px solid #A8A8A8;
        border-radius: 5px;
    }

    .cadastrados {
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

        margin: 57px 52px 46px 42px;
        padding: 33px 40px;
    }


    .tabela {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-bottom: 29px;
    }

    table {
        border-collapse: collapse;
        width: 100%;
    }

    thead {
        height: 70px;
        background-color: #6CC3DF;
        color: #FFFFFF;
        font-size: 1rem;
    }

    th {
        font-weight: normal;
        text-align: left;
    }

    th, td {
        padding: 1em;
    }

    td {
        height: 62px;
    }

    td button {
        background-color: transparent;
        border: none;
    }

    .img > button {
        visibility: hidden;
    }

    tr:hover {
        .img > button {
            visibility: visible;
        }
    }

    .img:nth-last-child(2) {
        width: 1rem;
    }

    .img:last-child {
        display: flex;
        justify-content: flex-start;
    }

    .img img{
        cursor: pointer
    }

    .linha-alternada {
        background-color: #F5F5F5;
    }

    .table-img img {
        width: 38px;
        height: 38px;
    }
`

export {Container}