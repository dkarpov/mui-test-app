import Table from 'components/Table'
import { users, balances, currencies } from '../transport/loader'

const agreagateTableData = () => {
  let currenciesMap = {}
  let userMap = {}

  currencies?.data?.collection?.forEach(({ currencyId, ...rest }) => {
    currenciesMap[currencyId] = rest
  })
  users?.data?.collection?.forEach(({ userId, ...rest }) => {
    userMap[userId] = rest
  })

  return balances?.data?.collection.map(item => {
    const { userId, balanceId, currencyId } = item
    return { ...item, ...currenciesMap[currencyId], ...userMap[userId] }
  })
}

export default () => {
  const tableData = agreagateTableData()

  return (
    <>
      <Table rows={tableData} />
      <h1>History Page</h1>
    </>
  )
}
