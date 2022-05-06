<template>
  <section role="contentinfo" class="uksection" aria-label="Accordion">
    <h1 class="h1">{{ title }}</h1>
    <p class="h4">Accordion - <small>뎁스의 이동 없이 한 페이지 내에서 리스트 세부 정보를 펼쳐 제공한다.</small></p>
    <br />
    <div class="code-editor">
      <textarea style="height: 300px">
접근성 관련 변경 이력(21.03.22) <i class="when-open">내용 펼치기</i> <i class="when-closed">내용 접기</i> 요소 변경
변경 전 : 
<i>내용 펼치기</i> 
<i>내용 접기</i>

변경 후 : 
<i class="when-open">내용 펼치기</i> 
<i class="when-closed">내용 접기</i>
      </textarea>
    </div>
    <br />
    <br />
    <p class="h5">[사용예시1]</p>
    <br />
    <div class="accordion c-accordion c-accordion-type1" role="tablist">
      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-1 block variant="info" class="c-accordion-q">
            <strong>[U+인터넷 장애]</strong>
            <span>갑자기 인터넷 연결이 되지 않습니다.갑자기 인터넷 연결이 되지 않습니다.</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>
              인터넷 회선이나 설치 장비들의 문제 일 가능성이 큽니다.<br /><br />
              ① 모뎀 / 와이파이 / PC 장비에 인터넷 UTP선이 제대로 꽂혀 있는지 확인<br />
              ② UTP선이 제대로 꽂혀 있는 경우, 모뎀 > 와이파이 > PC 순서로 전원선 및 UTP선을 순서대로 뽑았다가 다시 연결<br />
              * 만약 모뎀 장비가 없는 고객님은 와이파이> PC 순서로 진행
            </b-card-text>
            <!-- 관리자에서 내용을 호출하는 형식에 따라 breadcrumb는 사용 안될수 있음 -->
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-2 block variant="info" class="c-accordion-q">
            <strong>[변경]</strong>
            <span>U+인터넷/전화/IPTV 부가서비스를 변경 또는 해지하려면 어떻게 해야 하나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-3 block variant="info" class="c-accordion-q">
            <strong>[일시정지]</strong>
            <span>사용하던 U+ 휴대폰(모바일)을 일지정지 하려고 합니다. 어떻게 해야 하나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-4 block variant="info" class="c-accordion-q">
            <strong>[해지]</strong>
            <span>휴대폰 해지 시 가입비를 돌려 받을 수 있나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-4" accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-5 block variant="info" class="c-accordion-q">
            <strong>[변경]</strong>
            <span>핸드폰을 분실했는데 일시정지를 어떻게 하나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-5" accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-6 block variant="info" class="c-accordion-q">
            <strong>[요금납부]</strong>
            <span>요금이 미납된 경우에는 어떻게 납부해야 하나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-6" accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-7 block variant="info" class="c-accordion-q">
            <strong>[TV장애]</strong>
            <span>셋톱박스의 전원은 켜져있는데, TV 화면이 나오지 않습니다.</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-7" accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-8 block variant="info" class="c-accordion-q">
            <strong>[할인]</strong>
            <span>할인옵션은 무엇이 있나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-8" accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-9 block variant="info" class="c-accordion-q">
            <strong>[U+zone]</strong>
            <span>데이터 무제한 서비스가 있는데, U+zone 이용할 필요가 있나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-9" accordion="accordion1" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <div class="code-editor">
      <textarea style="height: 450px">
====================================================================================
Accordion 기본 사용 Bootstrap Vue UI 사용
class accordion c-accordion 을 기본사용
accordion 종류별로 c-accordion-type1, c-accordion-type2 class 부여
<b-button> 요소 안에 문자 타입이면 strong요소 사용 
<b-button> 요소 안에 숫자 타입이면 em요소 사용 
<!-- <b-button>요소 안에 접근성 관련 요소 추가 - 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
<i>내용 펼치기</i>
<i>내용 접기</i>
====================================================================================
<div class="accordion c-accordion c-accordion-type1" role="tablist">
  <b-card no-body class="c-accordion-group">
    <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
      <b-button v-b-toggle.accordion-1 block variant="info" class="c-accordion-q">
        <strong>[U+인터넷 장애]</strong>
        <span>갑자기 인터넷 연결이 되지 않습니다.갑자기 인터넷 연결이 되지 않습니다.</span>
        <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
        <i class="when-open">내용 펼치기</i>
        <i class="when-closed">내용 접기</i>
      </b-button>
    </b-card-header>
    <b-collapse id="accordion-1" visible accordion role="tabpanel">
      <b-card-body>
        <b-card-text>
          인터넷 회선이나 설치 장비들의 문제 일 가능성이 큽니다.<br /><br />
          ① 모뎀 / 와이파이 / PC 장비에 인터넷 UTP선이 제대로 꽂혀 있는지 확인<br />
          ② UTP선이 제대로 꽂혀 있는 경우, 모뎀 > 와이파이 > PC 순서로 전원선 및 UTP선을 순서대로 뽑았다가 다시 연결<br />
          * 만약 모뎀 장비가 없는 고객님은 와이파이> PC 순서로 진행
        </b-card-text>
        <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
      </b-card-body>
    </b-collapse>
  </b-card>
</div>
<div class="accordion c-accordion c-accordion-type2" role="tablist">
  <b-card no-body class="c-accordion-group">
    <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
      <b-button v-b-toggle.accordion-2 block variant="info" class="c-accordion-q">
        <em>01</em>
        <span>전화를 걸면 ‘지금 사용하시는 전화는 발신(거는 전화)이 금지되어 있습니다’ 라는 ARS 안내 메시지가 들리며 전화가 걸리지 않습니다.</span>
        <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
        <i class="when-open">내용 펼치기</i>
        <i class="when-closed">내용 접기</i>
      </b-button>
    </b-card-header>
    <b-collapse id="accordion-2" visible accordion role="tabpanel">
      <b-card-body>
        <b-card-text>
          혹시 "발신금지" 무료부가서비스를 등록하신적은 없으신가요?
          "발신금지" 서비스의 등록이 된 경우라면 발신이 차단되니 고객센터로 연락 바랍니다.
        </b-card-text>
        <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
      </b-card-body>
    </b-collapse>
  </b-card>
</div>
      </textarea>
    </div>
    <br />
    <p class="h5">[사용예시2]</p>
    <br />
    <div class="accordion c-accordion c-accordion-type2" role="tablist">
      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-2-1 block variant="info" class="c-accordion-q">
            <em>01</em>
            <span>갑자기 인터넷 연결이 되지 않습니다.갑자기 인터넷 연결이 되지 않습니다.</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2-1" accordion="accordion2" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text2 }}</b-card-text>
            <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-2-2 block variant="info" class="c-accordion-q">
            <em>02</em>
            <span>전화를 걸면 휴대폰 액정화면에 ‘발신(거는 전화)이 제한되어 있습니다’라는 문구가 표시되며 전화가 걸리지 않습니다.</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2-2" accordion="accordion2" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text2 }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-2-3 block variant="info" class="c-accordion-q">
            <em>03</em>
            <span>아래의 경우 고객님의 휴대폰에 이상이 있을 수 있습니다. 해당 제조사 A/S센터에 문의해 주십시오.</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2-3" accordion="accordion2" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text2 }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-2-4 block variant="info" class="c-accordion-q">
            <em>04</em>
            <span>내 휴대폰 번호로 전화를 걸면 ‘지금 사용하신 전화는 고객의 요청으로 착신(오는 전화)가 금지되어 있습니다’ 라는 ARS 안내 메시지가 나옵니다.</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-2-4" accordion="accordion2" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text2 }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <br />
    <p class="h5">[사용예시3] - table이 들어간 유형 추가</p>
    <br />
    <div class="accordion c-accordion c-accordion-type1" role="tablist">
      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-3-1 block variant="info" class="c-accordion-q">
            <span>갑자기 인터넷 연결이 되지 않습니다.갑자기 인터넷 연결이 되지 않습니다.</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3-1" visible accordion="accordion3" role="tabpanel">
          <b-card-body>
            <div class="row c-table">
              <b-table-simple>
                <caption>
                  저장된 내 위치: 구분, 유형, 내용, 진행사항에 대한 표
                </caption>
                <colgroup>
                  <col style="width: 90px" />
                  <col style="width: 112px" />
                  <col style="width: 216px" />
                  <col style="width: auto" />
                  <col style="width: 120px" />
                  <col style="width: 166px" />
                </colgroup>
                <b-thead>
                  <b-tr>
                    <b-th class="c-hcell-digit">번호</b-th>
                    <b-th class="c-hcell-part">구분</b-th>
                    <b-th class="c-hcell-type">유형</b-th>
                    <b-th class="c-hcell-subject">내용</b-th>
                    <b-th class="c-hcell-progress">진행사항</b-th>
                    <b-th class="c-hcell-date">작성일</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody>
                  <b-tr>
                    <b-td class="c-cell-digit">132</b-td>
                    <b-td class="c-cell-part">모바일</b-td>
                    <b-td class="c-cell-type">요금조회 및 납부관리</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-progress">처리중</b-td>
                    <b-td class="c-cell-date">2020.11.30</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">131</b-td>
                    <b-td class="c-cell-part">결합서비스</b-td>
                    <b-td class="c-cell-type">한방에yo</b-td>
                    <b-td class="c-cell-subject"><a href="#">사용중인 결합서비스가 얼마나 할인되는건지 알고 싶어요.</a></b-td>
                    <b-td class="c-cell-progress">처리완료</b-td>
                    <b-td class="c-cell-date">2020.11.20</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">130</b-td>
                    <b-td class="c-cell-part">모바일</b-td>
                    <b-td class="c-cell-type">요금조회 및 납부관리</b-td>
                    <b-td class="c-cell-subject"><a href="#">지난달에 사용한 휴대폰 요금을 알고싶어요.</a></b-td>
                    <b-td class="c-cell-progress">처리완료</b-td>
                    <b-td class="c-cell-date">2020.11.11</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">129</b-td>
                    <b-td class="c-cell-part">결합서비스</b-td>
                    <b-td class="c-cell-type">한방에yo</b-td>
                    <b-td class="c-cell-subject"><a href="#">사용중인 결합서비스가 얼마나 할인되는건지 알고 싶어요.</a></b-td>
                    <b-td class="c-cell-progress">처리완료</b-td>
                    <b-td class="c-cell-date">2020.11.01</b-td>
                  </b-tr>
                  <b-tr>
                    <b-td class="c-cell-digit">128</b-td>
                    <b-td class="c-cell-part">IOT서비스</b-td>
                    <b-td class="c-cell-type">IOT 장애 점검</b-td>
                    <b-td class="c-cell-subject"><a href="#">리모콘이 작동을 안해요</a></b-td>
                    <b-td class="c-cell-progress">처리완료</b-td>
                    <b-td class="c-cell-date">2020.09.22</b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-3-2 block variant="info" class="c-accordion-q">
            <strong>[변경]</strong>
            <span>U+인터넷/전화/IPTV 부가서비스를 변경 또는 해지하려면 어떻게 해야 하나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3-2" accordion="accordion3" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-3-3 block variant="info" class="c-accordion-q">
            <strong>[일시정지]</strong>
            <span>사용하던 U+ 휴대폰(모바일)을 일지정지 하려고 합니다. 어떻게 해야 하나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3-3" accordion="accordion3" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="c-accordion-group">
        <b-card-header header-tag="header" class="c-accordion-hader" role="tab">
          <b-button v-b-toggle.accordion-3-4 block variant="info" class="c-accordion-q">
            <strong>[해지]</strong>
            <span>휴대폰 해지 시 가입비를 돌려 받을 수 있나요?</span>
            <!-- 접근성 관련 요소 추가 클릭시 내용이 펼쳐지면 i요소 문구에 내용 펼치기, 다시 클릭시 내용이 접히면 i요소 문구에 내용 접기 -->
            <i class="when-open">내용 펼치기</i>
            <i class="when-closed">내용 접기</i>
          </b-button>
        </b-card-header>
        <b-collapse id="accordion-3-4" accordion="accordion3" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Accordion',
  layout: 'guide',
  data() {
    return {
      title: 'Accordiao System',
      text: `
        인터넷 회선이나 설치 장비들의 문제 일 가능성이 큽니다.
        ① 모뎀 / 와이파이 / PC 장비에 인터넷 UTP선이 제대로 꽂혀 있는지 확인
        ② UTP선이 제대로 꽂혀 있는 경우, 모뎀 > 와이파이 > PC 순서로 전원선 및 UTP선을 순서대로 뽑았다가 다시 연결
        * 만약 모뎀 장비가 없는 고객님은 와이파이> PC 순서로 진행
      `,
      text2: `
        혹시 "발신금지" 무료부가서비스를 등록하신적은 없으신가요?
        "발신금지" 서비스의 등록이 된 경우라면 발신이 차단되니 고객센터로 연락 바랍니다.
      `,
      breadcrumb: [
        {
          text: '개인',
          href: '#',
        },
        {
          text: '인터넷',
          href: '#',
        },
        {
          text: '장애/고장',
          active: true,
        },
      ],
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
