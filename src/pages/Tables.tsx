import {ButtonSmall, Pagination, Table, Card} from 'ui/base'

const namesData = [
  {id: 1, name: 'Jorge'},
  {id: 2, name: 'Nina'},
  {id: 3, name: 'Mark'},
]

export const Tables = () => (
  <Card>
    <Table
      data={namesData}
      columns={[
        {
          maxWidth: 120,
          label: 'Id (width: 120)',
          render: ({id}) => id,
        },
        {
          label: 'Имя',
          render: ({name}) => name,
        },
        {
          right: true,
          label: 'Действия',
          render: ({id}) => <ButtonSmall onClick={() => console.log('delete', id)}>Удалить</ButtonSmall>,
        },
      ]}
    />
    <Pagination
      currentPage={1}
      link="/tables"
      pagin={{hasNext: true, total: 11, limit: 10}}
    />
  </Card>
)
