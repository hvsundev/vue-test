<template>
  <div class="inner">
    <p class="test-title">Excel Download & Upload</p>
    <div class="excel-wrap">
      <button @click="excelDownload">엑셀다운로드</button>
      <table>
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>이름</th>
            <th>스낵24</th>
            <th>생일24</th>
            <th>조식24</th>
            <th>퀵24</th>
            <th>오피스24</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="branch in data.branchUsage">
            <td>{{ branch.name }}</td>
            <td v-for="menu in defaultServiceMenus">
              {{ listPriceView(menu, branch.service) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExcelTest",
  data() {
    return {
      defaultServiceMenus: [
        { key: 'snack24', value: '스낵24', visible: 'N', param: '스낵24' },
        { key: 'birth24', value: '생일24', visible: 'N', param: '생일24' },
        { key: 'breakfast24', value: '조식24', visible: 'N', param: '조식24' },
        { key: 'quick24', value: '퀵24', visible: 'N', param: '퀵24' },
        { key: 'office24', value: '오피스24', visible: 'N', param: '오피스24' },
      ],
      data: {
        branchList: ['1', '2', '3', '4', '5'],
        branchUsage: [
          {
            name: 1,
            service: [
              {
                name: "생일24",
                price: 789000
              },
              {
                name: "조식24",
                price: 78000
              }
            ]
          },
          {
            name: 2,
            service: [
              {
                name: "오피스24",
                price: 18990
              },
              {
                name: "스낵24",
                price: 78000
              },
              {
                name: "생일24",
                price: 78000
              }
            ]
          },
          {
            name: 3,
            service: [
              {
                name: "퀵24",
                price: 5000
              },
              {
                name: "스낵24",
                price: 99000
              }
            ]
          },
        ]
      }
    }
  },
  methods: {
    listPriceView(menu, branch) {
      let data = branch.find((branch) => {
        return menu.value === branch.name
      })
      console.log(data);
      return data ? Number(data.price).toLocaleString() : '-'
    },
    excelDownload() {
      let th = document.getElementById()
    }
  }
};
</script>

<style lang="scss">
.excel-wrap {
  width: 700px;

  button {
    width: 136px;
    background-color: #e3e3e3;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-left: auto;
  }

  table {
    box-shadow: 0 2px 4px 2px rgb(182 192 211 / 20%);
    width: 100%;

    thead {
      background-color: #7b71b7;
      color: #fff;

      th:first-child {
        border-top-left-radius: 10px;
      }

      th:last-child {
        border-top-right-radius: 10px;
      }
    }

    tbody {
      box-sizing: border-box;
      background-color: #fff;
    }

    th, td {
      text-align: center;
      padding: 15px 10px;
    }
  }
}
</style>
