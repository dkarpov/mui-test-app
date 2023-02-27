import * as React from 'react'
import MenuItem from '@mui/material/MenuItem'

import { Box, TextField } from '@mui/material'

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
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
      }}
    >
      <TextField
        size="small"
        sx={{ mr: 5, minWidth: 220, maxWidth: 400 }}
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
        sx={{ minWidth: 220, maxWidth: 400 }}
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
    </Box>
  )
}
