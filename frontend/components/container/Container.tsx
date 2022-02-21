import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 60%;
    justify-content: center;
    background-color: #dddddd;

    @media only screen and (max-width: 1600px) {
        width: 70%;
    }

    @media only screen and (max-width: 1200px) {
        width: 80%;
    }

    @media only screen and (max-width: 992px) {
        width: 90%;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        width: 95%;
    }
`;

Container.displayName = 'MainContainer';

export default Container;
