export const Button = (props) => {
    let numA = 10
    let numB = 20
    return <button style={{ backgroundColor: props.bgColor}}> {props.text} {props.num} {numA + numB}</button> // en llaves se puede ejecutar solo una sentencia
  }  

  // el style por ejemplo se pasa como objeto