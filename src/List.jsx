const List = () => {

    const listItem = [
        {name: 'John Doe', age: 25, city: 'NYC'},
        {name: 'Gam Lag', age: 90, city: 'Bristol'},
        {name: 'Celse Fany', age: 45, city: 'Hongkong'}
    ];

    const personInListItem = listItem.map((person) => (
        <li key={person}>{ ' Name: ' + person.name}{ ' Age:  ' + person.age}{' City:  '  + person.city}</li>
    ))

    return (

        <ul>{personInListItem}</ul>
    )
}

export default List;
