import React, { useState, useEffect, useRef } from "react"
import { Root, Container, Boxes, Box, Label, Digit, InputDate } from "./styles"

const generateCountDown = ({ endDate, state, setState, setIsExpired }) => {
    // Find the distance between now and the count down date
    const delay = new Date(endDate).getTime() - new Date().getTime()

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(delay / (1000 * 60 * 60 * 24))
    const hours = Math.floor((delay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((delay % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((delay % (1000 * 60)) / 1000)

    // Store in state to render
    setState({ ...state, days, hours, minutes, seconds })

    // Store in the state if expired to render switch and render expired message
    if (delay < 0) setIsExpired(true)
}

function CountDown() {
    const [endDate, setEndDate] = useState("09/24/2023")
    const [state, setState] = useState({})
    const [isExpired, setIsExpired] = useState(null)
    const interval = useRef()
    useEffect(() => {
        setIsExpired(false)
        // Display count down on load
        generateCountDown({ state, setState, setIsExpired, endDate })

        // Update the count down every 1 second
        interval.current = setInterval(
            () =>
                generateCountDown({
                    state,
                    setState,
                    setIsExpired,
                    endDate,
                }),
            1000
        )
        // Clear Interval on unmount
        return () => clearInterval(interval.current)
    }, [endDate])

    // Clear Interval on count down expired
    useEffect(() => {
        if (isExpired) clearInterval(interval.current)
    }, [isExpired])

    const onDateChange = (e) => setEndDate(e.currentTarget.value)

    const dataSelected = new Date(endDate).toLocaleDateString()

    // Cross browser fix
    const datePickerFormat = dataSelected.split("/").reverse().join("-")
    return (
        <Root>
            <h1>Date Selected : {dataSelected}</h1>
            <h2>Remaining Times</h2>
            {!isExpired ? (
                <Container>
                    <Boxes>
                        <Box>
                            <Digit>{state.days}</Digit>
                            <Label>Days</Label>
                        </Box>
                        <Box>
                            <Digit>{state.hours}</Digit>
                            <Label>Hours</Label>
                        </Box>
                        <Box>
                            <Digit>{state.minutes}</Digit>
                            <Label>Minutes</Label>
                        </Box>
                        <Box>
                            <Digit>{state.seconds}</Digit>
                            <Label>Seconds</Label>
                        </Box>
                    </Boxes>
                </Container>
            ) : (
                <h1>Count Down Has Expired</h1>
            )}
            <InputDate type="date" value={datePickerFormat} onChange={onDateChange} />
        </Root>
    )
}

export default CountDown
