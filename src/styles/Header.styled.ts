import {Link} from 'react-router-dom';
import {styled} from 'styled-components';

export const Container = styled.div`
    height: 70px;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #e1e2e3;
`;

export const Logo = styled(Link)`
    color: #36f;
    font-size: 30px;
    font-weight: 800;
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
`;

export const Menu = styled.div`
    a {
        padding: 10px;
        text-decoration: none;
        color: gray;
        font-style: 18px;
        font-weight: 600;
    }
    a.active {
        color: #36f;
    }
`;
