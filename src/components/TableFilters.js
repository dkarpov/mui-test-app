import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'

import { TextField } from '@mui/material'

const dateFilterOptions = [
  { text: '7 dni', value: 7 },
  { text: '30 dni', value: 30 },
  { text: '90 dni', value: 90 },
]

const typeFilterOptions = [
  { text: 'admin', value: 'ADMIN' },
  { text: 'user', value: 'USER' },
  { text: 'system', value: 'SYSTEM' },
]

export default function TableFilters({ onDataChange, onTypeChange }) {
  return (
    <>
      <TextField
        size="small"
        sx={{ mr: 5, minWidth: 120 }}
        select
        label="Date"
        defaultValue=""
        onChange={evt => onDataChange(evt.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {dateFilterOptions.map(({ text, value }) => (
          <MenuItem key={value} value={value}>
            {text}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        size="small"
        sx={{ minWidth: 120, width: 150 }}
        select
        label="Type"
        defaultValue=""
        onChange={evt => onTypeChange(evt.target.value)}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {typeFilterOptions.map(({ text, value }) => (
          <MenuItem key={value} value={value}>
            {text}
          </MenuItem>
        ))}
      </TextField>
    </>
  )
}
