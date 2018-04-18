area = [
  {
    num: '01',
    name: '北海道',
    plus: '地方',
    target: ['01']
  },
  {
    num: '02',
    name: '東北',
    plus: '地方',
    target: ['02', '03', '04', '05', '06', '07']
  },
  {
    num: '03',
    name: '関東',
    plus: '地方',
    target: ['08', '09', '10', '11', '12', '13', '14']
  },
  {
    num: '04',
    name: '中部',
    plus: '地方',
    target: ['15', '16', '17', '18', '19', '20', '21', '22', '23']
  },
  {
    num: '05',
    name: '近畿',
    plus: '地方',
    target: ['24', '25', '26', '27', '28', '29', '30']
  },
  {
    num: '06',
    name: '中国',
    plus: '地方',
    target: ['31', '32', '33', '34', '35']
  },
  {
    num: '07',
    name: '四国',
    plus: '地方',
    target: ['36', '37', '38', '39']
  },
  {
    num: '08',
    name: '九州',
    plus: '地方',
    target: ['40', '41', '42', '43', '44', '45', '46', '47']
  }
]

prefs = [
  {
    'num': '01',
    'name': '北海道',
    'plus': ''
  },
  {
    'num': '02',
    'name': '青森',
    'plus': '県'
  },
  {
    'num': '03',
    'name': '岩手',
    'plus': '県'
  },
  {
    'num': '04',
    'name': '宮城',
    'plus': '県'
  },
  {
    'num': '05',
    'name': '秋田',
    'plus': '県'
  },
  {
    'num': '06',
    'name': '山形',
    'plus': '県'
  },
  {
    'num': '07',
    'name': '福島',
    'plus': '県'
  },
  {
    'num': '08',
    'name': '茨城',
    'plus': '県'
  },
  {
    'num': '09',
    'name': '栃木',
    'plus': '県'
  },
  {
    'num': '10',
    'name': '群馬',
    'plus': '県'
  },
  {
    'num': '11',
    'name': '埼玉',
    'plus': '県'
  },
  {
    'num': '12',
    'name': '千葉',
    'plus': '県'
  },
  {
    'num': '13',
    'name': '東京',
    'plus': '都'
  },
  {
    'num': '14',
    'name': '神奈川',
    'plus': '県'
  },
  {
    'num': '15',
    'name': '新潟',
    'plus': '県'
  },
  {
    'num': '16',
    'name': '富山',
    'plus': '県'
  },
  {
    'num': '17',
    'name': '石川',
    'plus': '県'
  },
  {
    'num': '18',
    'name': '福井',
    'plus': '県'
  },
  {
    'num': '19',
    'name': '山梨',
    'plus': '県'
  },
  {
    'num': '20',
    'name': '長野',
    'plus': '県'
  },
  {
    'num': '21',
    'name': '岐阜',
    'plus': '県'
  },
  {
    'num': '22',
    'name': '静岡',
    'plus': '県'
  },
  {
    'num': '23',
    'name': '愛知',
    'plus': '県'
  },
  {
    'num': '24',
    'name': '三重',
    'plus': '県'
  },
  {
    'num': '25',
    'name': '滋賀',
    'plus': '県'
  },
  {
    'num': '26',
    'name': '京都',
    'plus': '府'
  },
  {
    'num': '27',
    'name': '大阪',
    'plus': '府'
  },
  {
    'num': '28',
    'name': '兵庫',
    'plus': '県'
  },
  {
    'num': '29',
    'name': '奈良',
    'plus': '県'
  },
  {
    'num': '30',
    'name': '和歌山',
    'plus': '県'
  },
  {
    'num': '31',
    'name': '鳥取',
    'plus': '県'
  },
  {
    'num': '32',
    'name': '島根',
    'plus': '県'
  },
  {
    'num': '33',
    'name': '岡山',
    'plus': '県'
  },
  {
    'num': '34',
    'name': '広島',
    'plus': '県'
  },
  {
    'num': '35',
    'name': '山口',
    'plus': '県'
  },
  {
    'num': '36',
    'name': '徳島',
    'plus': '県'
  },
  {
    'num': '37',
    'name': '香川',
    'plus': '県'
  },
  {
    'num': '38',
    'name': '愛媛',
    'plus': '県'
  },
  {
    'num': '39',
    'name': '高知',
    'plus': '県'
  },
  {
    'num': '40',
    'name': '福岡',
    'plus': '県'
  },
  {
    'num': '41',
    'name': '佐賀',
    'plus': '県'
  },
  {
    'num': '42',
    'name': '長崎',
    'plus': '県'
  },
  {
    'num': '43',
    'name': '熊本',
    'plus': '県'
  },
  {
    'num': '44',
    'name': '大分',
    'plus': '県'
  },
  {
    'num': '45',
    'name': '宮崎',
    'plus': '県'
  },
  {
    'num': '46',
    'name': '鹿児島',
    'plus': '県'
  },
  {
    'num': '47',
    'name': '沖縄',
    'plus': '県'
  }
]

fil = prefs.filter(e => area[0].target.includes(e.num))

fil.forEach(e => {
  console.log(e.name)
})

console.log('---------')

fil = prefs.filter(e => area[1].target.includes(e.num))

fil.forEach(e => {
  console.log(e.name)
})


console.log('---------')

fil = prefs.filter(e => area[2].target.includes(e.num))

fil.forEach(e => {
  console.log(e.name)
})

console.log('---------')

fil = prefs.filter(e => area[3].target.includes(e.num))

fil.forEach(e => {
  console.log(e.name)
})

console.log('---------')

fil = prefs.filter(e => area[4].target.includes(e.num))

fil.forEach(e => {
  console.log(e.name)
})

console.log('---------')

fil = prefs.filter(e => area[5].target.includes(e.num))

fil.forEach(e => {
  console.log(e.name)
})

console.log('---------')

fil = prefs.filter(e => area[6].target.includes(e.num))

fil.forEach(e => {
  console.log(e.name)
})

console.log('---------')

fil = prefs.filter(e => area[7].target.includes(e.num))

fil.forEach(e => {
  console.log(e.name)
})
