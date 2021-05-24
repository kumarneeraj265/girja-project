import React, { useState } from 'react';
import './index.css';

const ReactTable = ({UsersData}) => {
    const headers=["Account-number", "Name", "Address", "City", "State", "Postal-code"];
    
    return (
        UsersData && UsersData.users ?
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        {
                            /* eslint-disable */
                            headers.map(headerName => {
                                return(
                                <th>{headerName}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                {
                    /* eslint-disable */
                    UsersData.users.map(item => {
                        return(
                        <tr>  <td className="link-column">{item.accountNumber}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.city}</td>
                        <td>{item.state}</td>
                        <td>{item.postalCode}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
            </table>    
        : <div></div>
        );
}

export default ReactTable;