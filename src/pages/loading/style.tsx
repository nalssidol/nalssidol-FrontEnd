import styled from "styled-components";

export const LoadingWrapper = styled.div`
    min-width: 320px;
    max-width: 430px;

    img {
        width: 100%;
    }
`;

export const SelectLoadingWrapper = styled(LoadingWrapper)`
    position: relative;
`
export const LoadingDol = styled.div`
    position: absolute;
    bottom: 100px;
`