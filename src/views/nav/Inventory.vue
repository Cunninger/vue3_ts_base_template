<template>
  <div>
    <el-form :inline="true" class="search-form">
      <el-form-item label="搜索">
        <el-input v-model="searchKeyword" placeholder="请输入货物ID" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>
    <div style="margin-top: 20px">
      <el-table :data="tableData">
        <el-table-column label="库存ID" prop="inventoryId" width="100">
        </el-table-column>
        <el-table-column label="货物ID" prop="productId" width="180" />
        <el-table-column label="数量" prop="quantity" />
        <el-table-column label="操作" width="180">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>


    <el-dialog v-model="dialogVisible" :title="dialogTitle">
      <el-form :model="form" label-width="100px">
        <el-form-item label="库存ID">
          <el-input :value="form.inventoryId" disabled />
        </el-form-item>
        <el-form-item label="货物ID">
          <el-input :value="form.productId" disabled />
        </el-form-item>
        <el-form-item label="数量">
          <el-input v-model="form.quantity" />
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
import {
  type Inventory, InventoryControllerService, SysUserControllerService
} from '../../../generated'
import type { Ref } from 'vue'

interface TableDataItem {
  inventoryId?: number;//
  productId?: number;//
  quantity?: number;
}

const tableData: Ref<TableDataItem[]> = ref([])
const dialogVisible = ref(false)
const dialogTitle = ref('')
const form = ref<TableDataItem>({})
const searchKeyword = ref('')

async function fetchData(): Promise<void> {
  try {
    const response: Inventory[] = await InventoryControllerService.findAllUsingGet()
    tableData.value = response
  } catch (error) {
    alert(error)
  }
}


async function handleEdit(row: TableDataItem) {
  dialogTitle.value = '编辑用户'
  form.value = { ...row }
  dialogVisible.value = true
}

async function handleDelete(row: TableDataItem) {
  try {
    await InventoryControllerService.deleteUsingDelete(row.inventoryId!)
    await fetchData()
  } catch (error) {
    alert(error)
  }
}

async function handleConfirm() {
  try {
    if (form.value.inventoryId) {
      await InventoryControllerService.updateUsingPut(form.value)
    } else {
      await InventoryControllerService.addUsingPost(form.value)
    }
    dialogVisible.value = false
    await fetchData()
  } catch (error) {
    alert(error)
  }
}

async function handleSearch() {
  try {
    const response: Inventory[] = await InventoryControllerService.selectByInventoryIdAndProductIdUsingGet(searchKeyword.value)
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
.el-table{
  width: 50%;
  margin-left: 10%;
}

</style>
