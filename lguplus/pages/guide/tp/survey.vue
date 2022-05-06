<template>
  <section role="contentinfo" class="uksection uk_index" aria-label="Survey Type">
    <h1>{{ title }}</h1>
    <div class="c-survey-wrap">
      <h3 class="h3">통화품질 개선 요청 내용</h3>
      <div class="c-survey">
        <ul class="survey-list">
          <li class="survey-item">
            <p class="survey-q">
              <em class="number">01</em>
              <strong class="text">해결하고 싶은 문제를 선택하세요.</strong>
            </p>
            <div class="survey-a">
              <div class="c-inpfield">
                <span class="c-radio">
                  <input id="rad-1-1" type="radio" name="rad-1-1" checked />
                  <label for="rad-1-1" class="text-radio">
                    <i class="icon"></i>
                    <b>휴대폰 화면에 안테나가 없어요.</b>
                  </label>
                </span>
                <span class="c-radio">
                  <input id="rad-1-2" type="radio" name="rad-1-1" />
                  <label for="rad-1-2" class="text-radio">
                    <i class="icon"></i>
                    <b>통화하다가 전화가 끊겨요.</b>
                  </label>
                </span>
                <span class="c-radio">
                  <input id="rad-1-3" type="radio" name="rad-1-1" />
                  <label for="rad-1-3" class="text-radio">
                    <i class="icon"></i>
                    <b>통화할 때 상대의 말이 안들려요.(잡음, 혼선, 묵음, 울림 등)</b>
                  </label>
                </span>
              </div>
            </div>
          </li>
          <li class="survey-item">
            <p class="survey-q">
              <em class="number">02</em>
              <strong class="text">해결하고 싶은 문제에 대해 자세히 설명해 주세요.</strong>
            </p>
            <div class="survey-a">
              <div class="c-textfield">
                <label class="c-label is-blind" for="cfrmText-1-1">내용</label>
                <div class="c-textareaform">
                  <textarea id="cfrmText-1-1" name="" cols="80" rows="5" class="c-textarea" placeholder="텍스트 입력" title="내용 입력"></textarea>
                  <!-- <p class="text-msg">오류/성공 문구 출력</p> -->
                </div>
              </div>
            </div>
          </li>
          <li class="survey-item">
            <p class="survey-q">
              <em class="number">03</em>
              <strong class="text">문제가 발생한 지역 구분을 선택하세요.</strong>
            </p>
            <div class="survey-a">
              <div class="c-inpfield">
                <span class="c-radio">
                  <input id="rad-2-1" type="radio" name="rad-2-1" checked />
                  <label for="rad-2-1" class="text-radio">
                    <i class="icon"></i>
                    <b>특정지역</b>
                  </label>
                </span>
                <span class="c-radio">
                  <input id="rad-2-2" type="radio" name="rad-2-1" />
                  <label for="rad-2-2" class="text-radio">
                    <i class="icon"></i>
                    <b>모든지역</b>
                  </label>
                </span>
                <span class="c-radio">
                  <input id="rad-2-3" type="radio" name="rad-2-1" />
                  <label for="rad-2-3" class="text-radio">
                    <i class="icon"></i>
                    <b>잘모름</b>
                  </label>
                </span>
              </div>
            </div>
          </li>
          <li class="survey-item">
            <p class="survey-q">
              <em class="number">04</em>
              <strong class="text">문제가 발생한 위치를 선택하세요.</strong>
            </p>
            <div class="survey-a">
              <div class="c-inpfield">
                <span class="c-radio">
                  <input id="rad-3-1" type="radio" name="rad-3-1" checked />
                  <label for="rad-3-1" class="text-radio">
                    <i class="icon"></i>
                    <b>특정지역</b>
                  </label>
                </span>
                <span class="c-radio">
                  <input id="rad-3-2" type="radio" name="rad-3-1" />
                  <label for="rad-3-2" class="text-radio">
                    <i class="icon"></i>
                    <b>모든지역</b>
                  </label>
                </span>
                <span class="c-radio">
                  <input id="rad-3-3" type="radio" name="rad-3-1" />
                  <label for="rad-3-3" class="text-radio">
                    <i class="icon"></i>
                    <b>잘모름</b>
                  </label>
                </span>
              </div>
            </div>
          </li>
          <li class="survey-item">
            <p class="survey-q">
              <em class="number">05</em>
              <strong class="text">문제가 발생한 위치에 대해 자세히 설명해 주세요.</strong>
            </p>
            <div class="survey-a">
              <div class="c-textfield">
                <label class="c-label is-blind" for="cfrmText-2-1">내용</label>
                <div class="c-textareaform">
                  <textarea id="cfrmText-2-1" name="" cols="80" rows="5" class="c-textarea" placeholder="텍스트 입력" title="내용 입력"></textarea>
                  <!-- <p class="text-msg">오류/성공 문구 출력</p> -->
                </div>
              </div>
            </div>
          </li>
          <li class="survey-item">
            <p class="survey-q">
              <em class="number">06</em>
              <strong class="text">장애증상이 심하게 나타나는 위치를 골라주세요.</strong>
            </p>
            <div class="survey-a">
              <div class="c-inpfield">
                <span class="c-radio">
                  <input id="rad-4-1" type="radio" name="rad-4-1" checked />
                  <label for="rad-4-1" class="text-radio">
                    <i class="icon"></i>
                    <b>건물 내 지상</b>
                  </label>
                </span>
                <span class="c-radio">
                  <input id="rad-4-2" type="radio" name="rad-4-1" />
                  <label for="rad-4-2" class="text-radio">
                    <i class="icon"></i>
                    <b>건물 내 지하</b>
                  </label>
                </span>
                <span class="c-radio">
                  <input id="rad-4-3" type="radio" name="rad-4-1" />
                  <label for="rad-4-3" class="text-radio">
                    <i class="icon"></i>
                    <b>건물 외부</b>
                  </label>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="code-editor">
      <textarea style="height: 300px">
<div class="c-survey-wrap">
  <h3 class="h3">통화품질 개선 요청 내용</h3>
  <div class="c-survey">
    <ul class="survey-list">
      <li class="survey-item">
        <p class="survey-q">
          <em class="number">01</em>
          <strong class="text">해결하고 싶은 문제를 선택하세요.</strong>
        </p>
        <div class="survey-a">
          <div class="c-inpfield">
            <span class="c-radio">
              <input type="radio" name="rad-1-1" checked />
              <i class="icon"></i>
              <span class="text-radio">휴대폰 화면에 안테나가 없어요.</span>
            </span>
            <span class="c-radio">
              <input type="radio" name="rad-1-1" />
              <i class="icon"></i>
              <span class="text-radio">통화하다가 전화가 끊겨요.</span>
            </span>
            <span class="c-radio">
              <input type="radio" name="rad-1-1" />
              <i class="icon"></i>
              <span class="text-radio">통화할 때 상대의 말이 안들려요.(잡음, 혼선, 묵음, 울림 등)</span>
            </span>
          </div>
        </div>
      </li>
      <li class="survey-item">
        <p class="survey-q">
          <em class="number">02</em>
          <strong class="text">해결하고 싶은 문제에 대해 자세히 설명해 주세요.</strong>
        </p>
        <div class="survey-a">
          <div class="c-textfield">
            <label class="c-label is-blind" for="cfrmText-1-1">내용</label>
            <div class="c-textareaform">
              &lt;textarea id="cfrmText-1-1" name="" cols="80" rows="5" class="c-textarea" placeholder="텍스트 입력" title="내용 입력"&gt;&lt;/textarea&gt;
              <!-- <p class="text-msg">오류/성공 문구 출력</p> -->
            </div>
          </div>
        </div>
      </li>
      ... 이하 생략
    </ul>
  </div>
</div>
      </textarea>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SurveyType',
  layout: 'guide',
  data() {
    return {
      title: 'Survey Type',
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
