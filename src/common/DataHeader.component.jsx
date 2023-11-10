function DataHeader({columns}) {
    return (
        <tr>
            {columns.map(x => <th>{x}</th>)}
        </tr>
    )
}

export default DataHeader;