<template>
  <div>
    <el-form :inline="true" class="search-form">
      <el-form-item label="搜索">
        <el-input v-model="searchKeyword" placeholder="请输入邮箱或姓名" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="handleAdd">添加</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="用户ID" prop="id" />
      <el-table-column label="名字" prop="name" width="180">
      </el-table-column>
      <el-table-column label="邮箱" prop="email" width="300" />
      <el-table-column label="地址" prop="address" />
      <el-table-column label="手机号" prop="phone" />
      <el-table-column label="操作" width="150">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogVisible" :title="dialogTitle">
      <el-form :model="form" label-width="100px">
        <el-form-item label="名字">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.phone" />
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
import { SalesOrdersControllerService, type SysUser, SysUserControllerService } from '../../../generated'

interface TableDataItem {
  id?: number;//为什么是？:  因为这个字段是可选的  也就是说这个字段可以为空
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
}

const tableData: Ref<TableDataItem[]> = ref([])
const dialogVisible = ref(false)
const dialogTitle = ref('')
const form = ref<TableDataItem>({})
const searchKeyword = ref('')

async function fetchData(): Promise<void> {
  try {
    const response: SysUser[] = await SysUserControllerService.findAllUsingGet4()
    const filteredData: TableDataItem[] = response.map((user: SysUser) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone
    }))
    tableData.value = filteredData
  } catch (error) {
    alert(error)
  }
}

async function handleAdd() {
  dialogTitle.value = '添加用户'
  form.value = {}
  dialogVisible.value = true
}

async function handleEdit(row: TableDataItem) {
  dialogTitle.value = '编辑用户'
  form.value = { ...row }
  dialogVisible.value = true
}

async function handleDelete(row: TableDataItem) {
  try {
    await SysUserControllerService.deleteUsingDelete4(row.id!)
    await fetchData()
  } catch (error) {
    alert(error)
  }
}

async function handleConfirm() {
  try {
    if (form.value.id) {
      await SysUserControllerService.updateUsingPut4(form.value)
    } else {
      await SysUserControllerService.addUsingPost4(form.value)
    }
    dialogVisible.value = false
    await fetchData()
  } catch (error) {
    alert(error)
  }
}

async function handleSearch() {
  try {
    const response: TableDataItem[] = await SysUserControllerService.findByNameAndEmailUsingGet(searchKeyword.value)
    tableData.value = response
  } catch (error) {
    alert(error)
  }
}

onMounted(() => {
  fetchData()
})
</script>
<style>
.search-form {
  margin-left: 20%;
}
</style>
