import styled from "styled-components"

const colors = {
    red: "#be0100",
    retLight: "#c8574c",
    redLight: "#c8574c",
    blackDark: "#000000",
    blackMedium: "#212121",
    blackLight: "#444444",
    white: "#ffffff",
    greyDark: "#767676",
    greyMedium: "#e0e0e0",
    lightGrey: "#f8f8f8",
}
export const Root = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
`
export const Container = styled.div`
    width: 860px;
    height: 400px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.lightGrey};
    padding: 0 100px;
`
export const Boxes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const Box = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`

export const Digit = styled.div`
    font-family: var(--font-meta-headline-black);
    font-size: calc(2rem + ((1vw - 3.2px) * 2.5));
    @media (max-width: 320px) {
        font-size: 32px;
    }
    @media (min-width: 1600px) {
        font-size: 64px;
    }
    text-transform: uppercase;
    line-height: 1.1em;
    color: black;
`

export const Label = styled.div`
    font-family: var(--font-meta-headline-black);
    font-size: calc(0.875rem + ((1vw - 3.2px) * 0.3125));
    @media (max-width: 320px) {
        font-size: 14px;
    }
    @media (min-width: 1600px) {
        font-size: 18px;
    }
    text-transform: uppercase;
    line-height: 1.1em;
    color: ${colors.red};
    -webkit-text-stroke: 0.2px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
`

export const InputDate = styled.input`
    display: block;
    margin-top: 10px;
    height: 30px;
    font-size: 20px;
    text-align: center;
`
