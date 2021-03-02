import styles from '@emotion/styled';

const Sidebar = styles.div`
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        background-color: #0276FD;
        position: fixed;
        height: 100%;
        width: 100%;
        margin-left: -1.5rem;
        padding-top: 45rem;
        padding-left: 0.5rem;
        align-items: center;
    }
`;

export default Sidebar;