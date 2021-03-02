import styles from '@emotion/styled';

const Menu = styles.div`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        background-color: #0276FD;
        position: fixed;
        height: 100%;
        width: 100%;
        margin-left: -2rem;
        padding-left: 1rem;
        padding-top: 37rem;
        align-items: center;
        display: none;
    }
`;

export default Menu;