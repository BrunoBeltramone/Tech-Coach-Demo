import React, { useContext, useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material'
import { DataContext } from '../../context/DataContext'

const CryptoTable = () => {

  const { cryptocurrencies, setCryptocurrencies } = useContext(DataContext)

  return (
    <div>
        <h3>Cryptocurrencies</h3>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Icon</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Symbol</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Volume</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cryptocurrencies?.map(c => (
                        <TableRow key={c.name} >
                            <TableCell>{c.icon}</TableCell>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>{c.symbol}</TableCell>
                            <TableCell>{c.price}</TableCell>
                            <TableCell>{c.volume}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default CryptoTable
