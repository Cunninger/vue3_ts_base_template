<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="货物ID" prop="productId" width="180" >
    </el-table-column>
    <el-table-column label="货物名" prop="productName" width="180" />
    <el-table-column label="类别" prop="category" />
    <el-table-column label="供应商" prop="manufacturer" />
    <el-table-column label="单价" prop="unitPrice" />
  </el-table>
</template>

<script lang="ts" setup>
import {
  ProductsControllerService,
  type Products,
} from '../../../generated'

interface TableDataItem {
  category?: string;
  manufacturer?: string;
  productId?: number;
  productName?: string;
  unitPrice?: number;
}

const tableData: Ref<TableDataItem[]> = ref([]);

async function fetchData(): Promise<void> {
  try {
    const response: SysUser[] = await ProductsControllerService.findAllUsingGet1();
    tableData.value = response;
  } catch (error) {
    alert(error);
  }
}

onMounted(() => {
  fetchData();
});
</script>
