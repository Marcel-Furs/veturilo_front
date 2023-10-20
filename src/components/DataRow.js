function DataRow({data}) {
    return (<tr>
        <td>{data.id}</td>
        <td>{data.date}</td>
        <td>{data.temperature}</td>
        <td>{data.humidity}</td>
        <td>{data.userid}</td>
    </tr>)
}

export default DataRow;