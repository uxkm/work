<template>
  <section role="contentinfo" class="uksection" aria-label="Popup">
    <h1 class="h1">{{ title }}</h1>
    <div>
      <b-button @click="$refs['my-modal'].show()">레이어팝업</b-button>
      <!-- Popup-->
      <b-modal ref="my-modal" dialog-class="m-bv-modal c-layer-popup-800">
        <!-- 헤더 -->
        <template #modal-header="{ close }">
          <h1 class="h3">안내</h1>
          <button class="c-btn-close" type="button" @click="close()">레이어 닫기</button>
        </template>
        <!-- // 헤더 -->
        <!-- 바디 -->
        <template #default="{}">
          <div class="c-body-content">
            <section class="c-section">
              <h2 class="h5">저장된 내 위치</h2>
              <div class="c-caution-1-1">
                <p class="c-txt">
                  저장된 내 위치가 없습니다.<br />
                  주소(위치)를 조회한 뒤 저장하세요
                </p>
              </div>
              <ul class="c-bullet-type-cirlce">
                <li>저장된 내 위치 중 대표 주소를 기준으로 가까운 매장을 검색합니다.</li>
                <li>대표 주소를 설정하려면 주소를 누르세요.</li>
                <li>내 위치는 5개까지 저장할 수 있습니다.</li>
              </ul>
            </section>
            <section class="c-section">
              <h2 class="h5">저장된 내 위치</h2>
              <div class="c-caution-1-1">
                <p class="c-txt">
                  저장된 내 위치가 없습니다.<br />
                  주소(위치)를 조회한 뒤 저장하세요
                </p>
              </div>
              <ul class="c-bullet-type-cirlce">
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, laborum eius quibusdam possimus quo explicabo repudiandae accusantium pariatur, sapiente porro et vitae, sit
                  quisquam provident eos numquam. Quos, numquam laudantium.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum accusantium, odit provident dolor quas. Eum asperiores voluptatem impedit totam ab laudantium labore in earum?
                  Molestias eum similique dignissimos accusantium.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni quod odit autem sequi quasi quia laborum quis, aliquam voluptas fuga harum recusandae magnam tempora, adipisci
                  voluptatibus ipsam. Expedita, quibusdam?
                </li>
              </ul>
            </section>
          </div>
        </template>
        <!-- // 바디 -->
        <!-- 푸터 -->
        <template #modal-footer="{ ok, cancel }">
          <div class="c-btn-group">
            <button class="c-btn-cancel c-sm" @click="ok()">취소하기</button>
            <button class="c-btn-ok c-sm" @click="cancel()">확인하기</button>
          </div>
        </template>
        <!-- // 푸터 -->
      </b-modal>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div>
  <b-button @click="$refs['my-modal'].show()">레이어팝업</b-button>
  <!-- Popup-->
  <b-modal ref="my-modal" dialog-class="m-bv-modal c-layer-popup-800">
    <!-- 헤더 -->
    <template #modal-header="{ close }">
      <h1 class="h3">안내</h1>
      <button class="c-btn-close" type="button" @click="close()">레이어 닫기</button>
    </template>
    <!-- // 헤더 -->
    <!-- 바디 -->
    <template #default="{}">
      <div class="c-body-content">
        <section class="c-section">
          <h2 class="h5">저장된 내 위치</h2>
          <div class="c-caution-1-1">
            <p class="c-txt">
              저장된 내 위치가 없습니다.<br />
              주소(위치)를 조회한 뒤 저장하세요
            </p>
          </div>
          <ul class="c-bullet-type-cirlce">
            <li>저장된 내 위치 중 대표 주소를 기준으로 가까운 매장을 검색합니다.</li>
            <li>대표 주소를 설정하려면 주소를 누르세요.</li>
            <li>내 위치는 5개까지 저장할 수 있습니다.</li>
          </ul>
        </section>
        <section class="c-section">
          <h2 class="h5">저장된 내 위치</h2>
          <div class="c-caution-1-1">
            <p class="c-txt">
              저장된 내 위치가 없습니다.<br />
              주소(위치)를 조회한 뒤 저장하세요
            </p>
          </div>
          <ul class="c-bullet-type-cirlce">
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, laborum eius quibusdam possimus quo explicabo repudiandae accusantium pariatur, sapiente porro et vitae, sit
              quisquam provident eos numquam. Quos, numquam laudantium.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum accusantium, odit provident dolor quas. Eum asperiores voluptatem impedit totam ab laudantium labore in earum?
              Molestias eum similique dignissimos accusantium.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit magni quod odit autem sequi quasi quia laborum quis, aliquam voluptas fuga harum recusandae magnam tempora, adipisci
              voluptatibus ipsam. Expedita, quibusdam?
            </li>
          </ul>
        </section>
      </div>
    </template>
    <!-- // 바디 -->
    <!-- 푸터 -->
    <template #modal-footer="{ ok, cancel }">
      <div class="c-btn-group">
        <button class="c-btn-cancel c-sm" @click="ok()">취소하기</button>
        <button class="c-btn-ok c-sm" @click="cancel()">확인하기</button>
      </div>
    </template>
    <!-- // 푸터 -->
  </b-modal>
</div>
      </textarea>
    </div>
    <br />
    <div>
      <b-button @click="$refs['my-modal2'].show()">모달1</b-button>
      <!-- Alert -->
      <b-modal ref="my-modal2" dialog-class="m-bv-modal c-layer-alert">
        <template #modal-header="{ close }">
          <h1 class="h3">안내</h1>
          <button class="c-btn-close" type="button" @click="close()">레이어 닫기</button>
        </template>
        <template #default="{}">
          <div class="c-body-content">
            <p class="h2">고객님의 1:1 문의 접수가 완료되었습니다.</p>
            <p>
              기타 궁금한 사항은 <a href="#"><strong class="underline">자주하는 질문</strong></a
              >이나 <a href="#"><strong class="underline">1:1 문의</strong> </a>를 통해 확인해주세요. <br />
              조회, 변경, 일시정지, 부가서비스 등록 및 해지 등 <br />
              실시간 업무처리가 필요하신 경우에는 <a href="#"><strong class="underline">마이페이지</strong></a
              >를 이용해주세요.
            </p>
          </div>
        </template>
        <template #modal-footer="{ ok, cancel }">
          <div class="c-btn-group">
            <button class="c-btn-cancel c-sm" @click="ok()">취소하기</button>
            <button class="c-btn-ok c-sm" @click="cancel()">확인하기</button>
          </div>
        </template>
      </b-modal>
    </div>
    <div class="code-editor">
      <textarea style="height: 200px">
<div>
  <b-button @click="$refs['my-modal2'].show()">모달1</b-button>
  <!-- Alert -->
  <b-modal ref="my-modal2" dialog-class="m-bv-modal c-layer-alert">
    <template #modal-header="{ close }">
      <h1 class="h3">안내</h1>
      <button class="c-btn-close" type="button" @click="close()">레이어 닫기</button>
    </template>
    <template #default="{}">
      <div class="c-body-content">
        <p class="h2">고객님의 1:1 문의 접수가 완료되었습니다.</p>
        <p>
          기타 궁금한 사항은 <a href="#"><strong class="underline">자주하는 질문</strong></a
          >이나 <a href="#"><strong class="underline">1:1 문의</strong> </a>를 통해 확인해주세요. <br />
          조회, 변경, 일시정지, 부가서비스 등록 및 해지 등 <br />
          실시간 업무처리가 필요하신 경우에는 <a href="#"><strong class="underline">마이페이지</strong></a
          >를 이용해주세요.
        </p>
      </div>
    </template>
    <template #modal-footer="{ ok, cancel }">
      <div class="c-btn-group">
        <button class="c-btn-cancel c-sm" @click="ok()">취소하기</button>
        <button class="c-btn-ok c-sm" @click="cancel()">확인하기</button>
      </div>
    </template>
  </b-modal>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PopupType',
  layout: 'guide',
  data() {
    return {
      title: 'Popup System',
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
