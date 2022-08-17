import React from 'react'

export const Table = ({data}) => {
    return (
        <table class="table text-center">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        {data.map((item)=>(
            <tbody>
                <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                </tr>
            </tbody>
        ))}
        </table>
    )
}