<template>
  <section role="contentinfo" class="uksection" aria-label="Pagination">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Pagination - <small>Table 하단에 위치하는 paging 정보</small></p>
    <br />
    <div class="c-table">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        first-text="처음 페이지로 이동"
        prev-text="이전 페이지로 이동"
        next-text="다음 페이지로 이동"
        last-text="마지막 페이지로 이동"
        label-first-page="처음 페이지로 이동"
        label-prev-page="이전 페이지로 이동"
        label-next-page="다음 페이지로 이동"
        label-last-page="마지막 페이지로 이동"
        label-page="현재 페이지"
        align="center"
      ></b-pagination>
    </div>
    <div class="code-editor">
      <textarea style="height: 450px">
====================================================================================
Pagination 기본 사용 Bootstrap Vue UI 사용
UI 부분에서 기본적으로 table과 같이 사용이 되기 때문에
b-pagination 부분을 class='c-table'로 감싸준다.
다음페이지/이전페이지 이동 키보드 동작은 좌/우 버튼으로 이동
====================================================================================
<b-pagination
  v-model="currentPage"
  :total-rows="rows"
  first-text="처음 페이지로 이동"
  prev-text="이전 페이지로 이동"
  next-text="다음 페이지로 이동"
  last-text="마지막 페이지로 이동"
  label-first-page="처음 페이지로 이동"
  label-prev-page="이전 페이지로 이동"
  label-next-page="다음 페이지로 이동"
  label-last-page="마지막 페이지로 이동"
  label-page="현재 페이지"
  align="center"
></b-pagination>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Pagination',
  layout: 'guide',
  data() {
    return {
      title: 'Pagination',
      rows: 100,
      currentPage: 3,
    };
  },
  head() {
    return {
      title: this.title,
    };
  },
};
</script>

<style lang="scss" scoped></style>
