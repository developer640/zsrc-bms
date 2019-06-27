export const col_badness = [
  {
    type: 'index',
    width: 60,
    align: 'center'
  },
  {
    title: '信用卡逾期账户数',
    key: 'credCardOverdueNum',
    tooltip: true
  },
  {
    title: '是否超过90天逾期（信用卡）',
    key: 'dyaOverdue1Text',
    tooltip: true
  },
  {
    title: '贷款逾期账户数',
    key: 'loanOverdueNum',
    tooltip: true
  },
  {
    title: '是否超90天以上逾期（贷款）',
    key: 'dyaOverdue2Text',
    tooltip: true
  },
  {
    title: '操作',
    slot: 'action',
    width: 150,
    align: 'center'
  }
]
