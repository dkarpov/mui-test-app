import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { purple } from '@mui/material/colors'
import { Chip, Container, Fab, Icon, Stack } from '@mui/material'
import Big from 'big.js'
import { Box } from '@mui/system'
import TableFilters from './TableFilters'

const secondsInsDay = 86400

const dataFields = [
  {
    header: 'Czas',
    dataField: 'createdAt',
    formatter(row) {
      console.log('@@@ file Table.js line 30', row)
      return new Date(row[this.dataField]).toLocaleString().slice(0, -3).replace(/\//g, '.')
    },
  },
  {
    header: 'Uzytkownik',
    dataField: 'userName',
    render(val) {
      return (
        <Chip
          label={val}
          size="small"
          icon={
            <Icon>
              <Fab
                sx={{
                  bgcolor: purple[500],
                  width: 10,
                  height: 10,
                  minWidth: 10,
                  minHeight: 10,
                  top: -6,
                }}
              />
            </Icon>
          }
        />
      )
    },
  },
  {
    header: 'Kwota',
    dataField: 'fundsAvailable',
    formatter(row) {
      return `${new Big(row[this.dataField]).toPrecision(row?.precision || 2)} ${
        row?.currencyName || row?.balanceName
      }`
    },
  },
  { header: 'Typ operacji', dataField: 'balanceType' },
  { header: 'Klient/Serwis', dataField: 'balanceType' },
]

export default function TableWrapper({ rows }) {
  const [tableRows, setTableRows] = useState(rows)

  const dataFilterChange = React.useCallback(filterValue => {
    if (!filterValue) return setTableRows(rows)

    setTableRows(
      rows.filter(
        item => new Date(item.createdAt) / 1000 >= Date.now() / 1000 + filterValue * secondsInsDay
      )
    )
  }, [])

  const typeFilterChange = React.useCallback(filterValue => {
    if (!filterValue) return setTableRows(rows)

    setTableRows(rows.filter(item => item.balanceType === filterValue))
  }, [])

  return (
    <>
      <TableFilters onDataChange={dataFilterChange} onTypeChange={typeFilterChange} />
      <Container component={Paper}>
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'flex' },
            minWidth: 650,
            justifyContent: 'space-around',
            mt: 1,
            pt: 2,
          }}
          size="small"
        >
          {dataFields.map(({ header }) => (
            <span>{header}</span>
          ))}
        </Box>
        <Stack
          sx={{
            'div:nth-last-child(-n + 1)': {
              border: 'none',
            },
          }}
        >
          {tableRows.map(row => (
            <Box
              key={row.name}
              sx={{
                minWidth: 650,
                width: '100%',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                gap: { xs: '0', sm: '0', md: '30px' },
                pb: 2,
                borderBottom: '1px solid',
              }}
            >
              {dataFields.map(item => (
                <Box
                  align="left"
                  sx={{
                    display: 'flex',
                    mt: 2,
                    minWidth: 180,
                    maxWidth: { xs: 300, sm: 300, md: 220, lg: 300 },
                    alignItems: 'center',
                    wordBreak: 'break-word',
                    textAlign: 'left',
                  }}
                >
                  <Box
                    sx={{
                      display: { xs: 'visible', sm: 'visible', md: 'none', lg: 'none' },
                      minWidth: 200,
                    }}
                  >
                    {item.header}
                  </Box>
                  {item?.render
                    ? item.render(row[item.dataField])
                    : item?.formatter
                    ? item.formatter(row)
                    : row[item.dataField]}
                </Box>
              ))}
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  )
}
