<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="订单ID" prop="orderId" width="180" />

    <el-table-column label="货物ID" prop="productId" />
    <el-table-column label="数量" prop="quantity" />
    <el-table-column label="总价" prop="totalCost" />
    <el-table-column label="订单日期" prop="orderDate" width="180">
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import {
  ProductsControllerService, PurchaseOrdersControllerService, type SysUser
} from '../../../generated'
import type { Ref } from 'vue'

interface TableDataItem {
  orderDate?: string;
  orderId?: number;
  productId?: number;
  quantity?: number;
  totalCost?: number;
}

const tableData: Ref<TableDataItem[]> = ref([])

async function fetchData(): Promise<void> {
  try {
    const response: SysUser[] = await PurchaseOrdersControllerService.findAllUsingGet2()
    tableData.value = response
  } catch (error) {
    alert(error)
  }
}

onMounted(() => {
  fetchData()
})
</script>
