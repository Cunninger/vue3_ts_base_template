<template>
  <div>
    <div>
      <el-date-picker
        v-model="dateRange"
        end-placeholder="结束日期"
        range-separator="至"
        start-placeholder="开始日期"
        type="daterange"
        value-format="YYYY-MM-DD"
      />
      <el-button type="primary" @click="searchOrders">搜索</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="订单ID" prop="orderId" width="180">
      </el-table-column>

      <el-table-column label="货物ID" prop="productId" />
      <el-table-column label="数量" prop="quantity" />
      <el-table-column label="总收入" prop="totalRevenue" />
      <el-table-column label="订单日期" prop="orderDate" width="180">
        <template #default="scope">
          {{ formatDate(scope.row.orderDate) }}
        </template>
      </el-table-column>

      <el-table-column label="操作" width="150">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="dialogTitle">
      <el-form :model="form" label-width="100px">
        <el-form-item label="货物ID">
          <el-input v-model="form.productId" />
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.quantity" />
        </el-form-item>
        <el-form-item label="总收入">
          <el-input v-model="form.totalRevenue" />
        </el-form-item>
        <el-form-item label="订单日期">
          <el-input :value="formatDate(form.orderDate)" disabled />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirm">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { SalesOrdersControllerService, type SysUser } from '../../../generated'
import type { Ref } from 'vue'

interface TableDataItem {
  orderDate?: string;//   订单日期
  orderId?: number;//   订单ID
  productId?: number;//  货物ID
  quantity?: number;//  数量
  totalRevenue?: number;//  总收入
}

const tableData: Ref<TableDataItem[]> = ref([])
const dialogVisible = ref(false)
const dialogTitle = ref('')
const form = ref<TableDataItem>({})

async function fetchData(): Promise<void> {
  try {
    const response: TableDataItem[] = await SalesOrdersControllerService.findAllUsingGet3()
    tableData.value = response
  } catch (error) {
    alert(error)
  }
}

async function handleAdd() {
  dialogTitle.value = '添加订单'
  form.value = {}
  dialogVisible.value = true
}

async function handleEdit(row: TableDataItem) {
  dialogTitle.value = '编辑订单'
  form.value = { ...row }
  dialogVisible.value = true
}

async function handleDelete(row: TableDataItem) {
  try {
    await SalesOrdersControllerService.deleteUsingDelete3(row.orderId!)
    await fetchData()
  } catch (error) {
    alert(error)
  }
}

async function handleConfirm() {
  try {
    if (form.value.orderId) {
      await SalesOrdersControllerService.updateUsingPut3(form.value)
    } else {
      await SalesOrdersControllerService.addUsingPost3(form.value)
    }
    dialogVisible.value = false
    await fetchData()
  } catch (error) {
    alert(error)
  }
}

function formatDate(date: string): string {
  const parsedDate = new Date(date)
  const year = parsedDate.getFullYear()
  const month = String(parsedDate.getMonth() + 1).padStart(2, '0')
  const day = String(parsedDate.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

onMounted(() => {
  fetchData()
})
</script>
