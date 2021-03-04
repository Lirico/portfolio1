import styles from '@emotion/styled';

const Sidebar = styles.div`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        background-color: #00A901;
        position: fixed;
        height: 100vh;
        width: 100%;
        margin-left: -1.5rem;
        padding-top: 60rem;
        align-items: center;
    }
`;

export default Sidebar;