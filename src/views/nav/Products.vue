<template>
  <div>

    <el-form :inline="true" class="search-form">
      <el-form-item label="搜索">
        <el-input v-model="searchKeyword" placeholder="请输入货物名、类别、供应商" style="width: 300px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="handleAdd">添加</el-button>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="货物ID" prop="productId" width="180">
      </el-table-column>
      <el-table-column label="货物名" prop="productName" width="180" />
      <el-table-column label="类别" prop="category" />
      <el-table-column label="供应商" prop="manufacturer" />
      <el-table-column label="单价" prop="unitPrice" />
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="dialogTitle">
      <el-form :model="form" label-width="100px">
        <el-form-item label="货物名">
          <el-input v-model="form.productName" />
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="form.category" />
        </el-form-item>
        <el-form-item label="供应商">
          <el-input v-model="form.manufacturer" />
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model="form.unitPrice" />
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
  ProductsControllerService,
  type Products, type SysUser, SysUserControllerService
} from '../../../generated'
import type { Ref } from 'vue'

interface TableDataItem {
  category?: string;
  manufacturer?: string;
  productId?: number;
  productName?: string;
  unitPrice?: number;
}

const tableData: Ref<TableDataItem[]> = ref([])
const searchKeyword = ref('')
const dialogVisible = ref(false)
const dialogTitle = ref('')
const form = ref<TableDataItem>({})
async function fetchData(): Promise<void> {
  try {
    const response: Products[] = await ProductsControllerService.findAllUsingGet1()
    tableData.value = response
  } catch (error) {
    alert(error)
  }
}

async function handleAdd() {
  dialogTitle.value = '添加货物'
  form.value = {}
  dialogVisible.value = true
}

async function handleEdit(row: TableDataItem) {
  dialogTitle.value = '编辑货物'
  form.value = { ...row }
  dialogVisible.value = true
}

async function handleDelete(row: TableDataItem) {
  try {
    await ProductsControllerService.deleteUsingDelete1(row.productId!)
    await fetchData()
  } catch (error) {
    alert(error)
  }
}

async function handleConfirm() {
  try {
    if (form.value.productId) {
      await ProductsControllerService.updateUsingPut1(form.value)
    } else {
      await ProductsControllerService.addUsingPost1(form.value)
    }
    dialogVisible.value = false
    await fetchData()
  } catch (error) {
    alert(error)
  }
}

async function handleSearch() {
  try {
    const response: TableDataItem[] = await ProductsControllerService.selectByConditionUsingGet(searchKeyword.value)
    tableData.value = response
  } catch (error) {
    alert(error)
  }
}

onMounted(() => {
  fetchData()
})
</script>
