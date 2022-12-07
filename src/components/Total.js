
const Total = (props) => {
    return (
      <>
        <p>Total of {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} exercises</p>
      </>
    )
}

export default Total
