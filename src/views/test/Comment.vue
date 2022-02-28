<template>
  <div class="inner">
    <div class="board row">
      <div class="comment-wrap write">
        <comp-comment
          @handleSubmitAdd="addComment"
          @handleSubmitModify="modifyComment"
          :commentInfo="commentInfo" />
      </div>
      <div class="comment-wrap read">
        <comp-comment
          @handleSubmitAdd="addComment"
          @handleSubmitModify="modifyComment"
          :commentInfo="commentInfo" />
      </div>
    </div>
  </div>
</template>

<script>
import CompComment from "@/components/page/test/comment";
import CompNewComment from "@/components/page/test/compNewComment";
export default {
  components: { CompNewComment, CompComment },
  data() {
    return {
      commentInfo: [
        {
          mode: 0,
          name: '선희빈',
          content: '댓글 등록 시 화면과 같이 등록되어 보여집니다.<br>여러줄도 가능합니다.<br>이렇게~',
          dateTime: new Date(),
          file: [
            {
              name: '첨부한 파일명.png',
              size: 10000,
              href: '/assets/logo-bi.png'
            },
            {
              name: '첨부한 파일명.docx',
              size: 70000,
              href: '/assets/logo-bi.png'
            }
          ],
          reply: [
            {
              mode: 0,
              name: '선희번',
              content: '댓글에 답글 등록 시<br>이렇게 첨부파일도 보인답니다.',
              dateTime: new Date(),
              file: [
                {
                  name: '테스트용 파일.jpg',
                  size: 20000,
                  href: '/assets/logo-bi.png'
                },
              ],
            },
            {
              mode: 0,
              name: '선희번',
              content: '대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다. 대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의 3분의 1 이상이 아니면 대통령으로 당선될 수 없다.',
              dateTime: new Date(),
              file: [
                {
                  name: '첨부한 파일명.jpg',
                  size: 20000,
                  href: '/assets/logo-bi.png'
                },
              ],
            },
            {
              mode: 0,
              name: '선희반',
              content: '첨부파일이 없는 경우',
              dateTime: new Date(),
              file: []
            },
            {
              mode: 0,
              name: 'binch',
              content: '하하',
              dateTime: new Date(),
              file: [
                {
                  name: '첨부한 파일명입니당.png',
                  size: 16700,
                  href: '/assets/logo-bi.png'
                },
                {
                  name: '첨부한 파일명.svg',
                  size: 26800,
                  href: '/assets/logo-bi.png'
                },
              ],
            }
          ],
        }
      ],
    };
  },
  methods: {
    addComment(value, isFirst, idx) {
      if(isFirst) {
        this.commentInfo.push(value)
      } else {
        let count = this.commentInfo[idx].reply.length
        if(count === 1) {
          this.commentInfo[idx].reply[0] = Object.assign(this.commentInfo[idx].reply[0], value)
        } else {
          this.commentInfo[idx].reply[count-1] = Object.assign(this.commentInfo[idx].reply[count-1], value)
        }
      }
    },
    modifyComment(value, isFirst, idx) {
      if(isFirst) {
        this.commentInfo[idx].mode = 0
        this.commentInfo[idx].content = value.content
        this.commentInfo[idx].file = value.file
      }
    }
  }
}
</script>

<style lang="scss">
.board {
  width: 100%;
  height: 700px;
  letter-spacing: -0.5px;

  &.row {
    justify-content: center
  }

  .comment-wrap {
    padding: 20px 24px;
    background-color: #fff;
    width: 50%;
    height: 100%;
    border: 2px solid #e2e2e2;
    overflow-y: scroll;

    &.write {

    }

    &.read {
      margin-left: 5px;
    }
  }
}
</style>