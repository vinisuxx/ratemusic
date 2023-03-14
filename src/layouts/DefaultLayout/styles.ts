import styled from 'styled-components';

export const LayoutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    & > * {
        padding: 1.5rem;
    }
`;