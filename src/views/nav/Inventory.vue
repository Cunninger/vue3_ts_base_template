<template>
  <el-table :data="tableData">
    <el-table-column label="库存ID" prop="inventoryId" width="180">
    </el-table-column>
    <el-table-column label="货物ID" prop="productId" width="180" />
    <el-table-column label="数量" prop="quantity" />
  </el-table>
</template>

<script lang="ts" setup>
import {
  type Inventory, InventoryControllerService, type SysUser
} from '../../../generated'
import type { Ref } from 'vue'

interface TableDataItem {
  inventoryId?: number;//
  productId?: number;//
  quantity?: number;
}

const tableData: Ref<TableDataItem[]> = ref([])

async function fetchData(): Promise<void> {
  try {
    const response: SysUser[] = await InventoryControllerService.findAllUsingGet()
    tableData.value = response
  } catch (error) {
    alert(error)
  }
}

onMounted(() => {
  fetchData()
})
</script>
<style scoped>

.el-table {
  margin-top: 20px;
  width: 50%;
  margin-left: 15%;
}
</style>
