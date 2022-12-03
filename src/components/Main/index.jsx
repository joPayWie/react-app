export const Main = () => {
    const user = {
        name: "Jochi",
        age: 32
    }
    const styles = {
        color: "blue"
    }
    return ( <h1 style={styles}> {user.name} tiene {user.age} anios 
    </h1> );
}